//Creates Path Layers ~ Clean Code 

//Universal functions & Variables used for all three paths

function getPaths(url, callback){ 
	var client = new XMLHttpRequest(); 
	client.open('GET', url); 
	client.onload = function(){
		callback(client.responseText); 
		}; 
	client.send(); 
	} 

var igcFormat = new ol.format.IGC(); 

//WB9SKY Layer 

var WB9SKYstyle = new ol.style.Style({ 
		stroke: new ol.style.Stroke({ 
			color: 'rgba(255, 17, 97, 0.7)', 
			width: 3
			})
		}); 


var WB9SKYvectorSource = new ol.source.Vector(); 

var WB9SKYurl = ['http://192.168.1.1/cgi-bin/TrackerV1Codes/paths.py?callsign=WB9SKY-11']; 

var WB9SKYfetchdata = function(){ 
	getPaths(WB9SKYurl, function(data){ 
		var WB9SKYfeatures = igcFormat.readFeatures(data, {featureProjection: 'EPSG:3857'}); 
		WB9SKYvectorSource.clear(); 
		WB9SKYvectorSource.addFeatures(WB9SKYfeatures);
		WB9SKYvectorSource.changed(); 
		});

	updateTimer = setTimeout(function(){  
		WB9SKYfetchdata(); 
		}, 1000)}; 

WB9SKYfetchdata(); 


var WB9SKY = new ol.layer.Vector({ 
		source: WB9SKYvectorSource, 
		style: WB9SKYstyle
		}); 

//KC9LHW Layer

var KC9LHWstyle = new ol.style.Style({ 
		stroke: new ol.style.Stroke({ 
			color: 'rgba(0, 204, 255, 0.7)', 
			width: 3
			})
		}); 

var KC9LHWvectorSource = new ol.source.Vector(); 

var KC9LHWurl = ['http://192.168.1.1/cgi-bin/TrackerV1Codes/paths.py?callsign=KC9LHW-11']; 
 

var KC9LHWfetchdata = function(){ 
	getPaths(KC9LHWurl, function(data){ 
		var KC9LHWfeatures = igcFormat.readFeatures(data, {featureProjection: 'EPSG:3857'}); 
		KC9LHWvectorSource.clear(); 
		KC9LHWvectorSource.addFeatures(KC9LHWfeatures);
		KC9LHWvectorSource.changed(); 
		});

	updateTimer = setTimeout(function(){  
		KC9LHWfetchdata(); 
		}, 1000)}; 

KC9LHWfetchdata(); 


var KC9LHW = new ol.layer.Vector({ 
		source: KC9LHWvectorSource, 
		style: KC9LHWstyle
		}); 

//KC9LIG Layer 

var KC9LIGstyle = new ol.style.Style({ 
		stroke: new ol.style.Stroke({ 
			color: 'rgba(50, 204, 5O, 0.7)', 
			width: 3
			})
		}); 

var KC9LIGvectorSource = new ol.source.Vector(); 

var KC9LIGurl = ['http://192.168.1.1/cgi-bin/TrackerV1Codes/paths.py?callsign=KC9LIG-11']; 


var KC9LIGfetchdata = function(){ 
	getPaths(KC9LIGurl, function(data){ 
		var KC9LIGfeatures = igcFormat.readFeatures(data, {featureProjection: 'EPSG:3857'}); 
		KC9LIGvectorSource.clear(); 
		KC9LIGvectorSource.addFeatures(KC9LIGfeatures);
		KC9LIG.changed(); 
		});

	updateTimer = setTimeout(function(){  
		KC9LIGfetchdata(); 
		}, 1000)}; 

KC9LIGfetchdata(); 


var KC9LIG = new ol.layer.Vector({ 
		source: KC9LIGvectorSource, 
		style: KC9LIGstyle
		}); 

			