//Creates Prediction Paths 

function getPaths(url, callback){ 
	var client = new XMLHttpRequest(); 
	client.open('GET', url); 
	client.onload = function(){
		callback(client.responseText); 
		}; 
	client.send(); 
	} 

var igcFormat = new ol.format.IGC(); 


var Predictionstyle = new ol.style.Style({ 
		stroke: new ol.style.Stroke({ 
			color: 'rgba(50, 204, 5O, 0.7)', 
			width: 3
			})
		}); 

var PredictionvectorSource = new ol.source.Vector(); 

var Predictionurl = ['http://192.168.1.1/cgi-bin/TrackerV1Codes/prediction.py?callsign=WB9SKY-11']; 


var Predictionfetchdata = function(){ 
	getPaths(Predictionurl, function(data){ 
		var Predictionfeatures = igcFormat.readFeatures(data, {featureProjection: 'EPSG:3857'}); 
		PredictionvectorSource.clear(); 
		PredictionvectorSource.addFeatures(Predictionfeatures);
		Prediction.changed(); 
		});

	updateTimer = setTimeout(function(){  
		Predictionfetchdata(); 
		}, 1000)}; 

Predictionfetchdata(); 


var Predictions = new ol.layer.Vector({ 
		source: PredictionvectorSource, 
		style: Predictionstyle
		}); 
