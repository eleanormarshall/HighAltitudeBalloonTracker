//Creates Alt Graph and Calls GPS Data 

function makeDataRequest(){ 
	DatahttpRequest = new XMLHttpRequest(); 
	DatahttpRequest.onreadystatechange = Datacallback; 
	DatahttpRequest.open('GET', 'http://192.168.1.1/cgi-bin/TrackerV1Codes/GPSAltData.py');
	DatahttpRequest.send(); 
}

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

setInterval('makeDataRequest()', 5000); 
	
var KC9LHWalt = null; 
var WB9SKYalt = null; 
var KC9LIGalt = null; 

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

var GPSicon =[]; 

var GPSfeature = new ol.Feature({
	geometry: new ol.geom.Point(ol.proj.transform([-86.76, 35.77], 'EPSG:4326', 'EPSG:3857')) 
}); 


var GPSstyle = new ol.style.Style({
        image: new ol.style.Circle({
          radius: 5,
          fill: new ol.style.Fill({color: [255, 204, 102, 1]}),
          stroke: new ol.style.Stroke({color: 'red',
		width: 1})
        })
      });

GPSfeature.setStyle(GPSstyle); 

GPSicon.push(GPSfeature); 


var GPS = new ol.layer.Vector({
	source: new ol.source.Vector({ 
	features: GPSicon
	})
}); 
