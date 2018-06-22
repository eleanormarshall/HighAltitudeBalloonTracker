//Creates Alt Graph and Calls GPS of Raspberry Pi to add to the map  

//Calls the path data from the python Script in the cgi-bin 
function makeDataRequest(){ 
	DatahttpRequest = new XMLHttpRequest(); 
	DatahttpRequest.onreadystatechange = Datacallback; 
	DatahttpRequest.open('GET', 'http://192.168.1.1/cgi-bin/TrackerV1Codes/GPSAltData.py');
	DatahttpRequest.send(); 
}

//checks if the python output has changed since the last call. Specifcally defines the three series of the chart and sets the starting coordinates 
function Datacallback(){ 
	if (DatahttpRequest.readyState ===XMLHttpRequest.DONE){ 
		if (DatahttpRequest.status === 200) { 
			eval(DatahttpRequest.responseText);
			chart1.series[0].setData(KC9LHWalt); 
			chart1.series[1].setData(WB9SKYalt); 
			chart1.series[2].setData(KC9LIGalt); 
			GPSfeature.setGeometry(coordinates); 
		
		} else{
			''
		} 
	} 
}

//calls the makeDataRequest function on an interval of every 5 seconds. Note this time period could be reduced 
setInterval('makeDataRequest()', 5000); 

//initates the three altitude variables 	
var KC9LHWalt = null; 
var WB9SKYalt = null; 
var KC9LIGalt = null; 

//defines the chart. For more information go to the Highcharts API. Link is in the readme
var chart1 = Highcharts.chart('Altitude', {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Altitude vs Time'
    },
	
    xAxis: { 
	title:{
		text: 'Decimal Hours (UTC)'
}
}, 


    yAxis: {
        title: {
            text: 'Altitude (ft)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: true
        }
    },
    series: [{
        name: 'KC9LHW',
        data: [null]
	}, 
	{name:'WB9SKY', 
	data:[null]
	}, 
	{name:'KC9LIG', 
	data:[null]
	}] 
}); 

 

var coordinates = null; 

//intitates the GPSicon to empty  
var GPSicon =[]; 

//creates the GPSfeature as a new openlayers features and gives it an intial starting postion  
var GPSfeature = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.transform([-86.76, 35.77], 'EPSG:4326', 'EPSG:3857')) 
}); 


//defines the style of the GPS icon 
var GPSstyle = new ol.style.Style({
        image: new ol.style.Circle({
          radius: 5,
          fill: new ol.style.Fill({color: [255, 204, 102, 1]}),
          stroke: new ol.style.Stroke({color: 'red',
		width: 1})
        })
      });

//Sets the style to the GPSfeature 
GPSfeature.setStyle(GPSstyle); 

//pushes the GPSfeature to the GPSicon 
GPSicon.push(GPSfeature); 

//adds the GPS to the map 
var GPS = new ol.layer.Vector({
	source: new ol.source.Vector({ 
	features: GPSicon
	})
}); 
