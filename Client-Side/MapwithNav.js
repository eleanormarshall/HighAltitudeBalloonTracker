
//MapLayer

 $("#Graphs").hide();

var map;
 $(document).ready(function() {
   Map_init();
   $("#btn-full-screen").click(function() {
	

     if ($("#btn-full-screen").hasClass("btn-full-screen")) {
       $("#panel").removeClass("simple-panel");
       $("#panel").addClass("full-panel");
       $("#map").removeClass("simple-map");
       $("#map").addClass("full-map");	

	
       $("#btn-full-screen").removeClass("btn-full-screen");
       $("#btn-full-screen").addClass("btn-partial-screen");

       $("#btn-full-screen").attr('title', 'Back To Normal');

       $("#heading").hide();
       $("#Graphs").hide();
	
     } else {
       $("#panel").removeClass("full-panel");
       $("#panel").addClass("simple-panel");
       $("#map").removeClass("full-map");
       $("#map").addClass("simple-map");

       $("#btn-full-screen").removeClass("btn-partial-screen");
       $("#btn-full-screen").addClass("btn-full-screen");
       $("#btn-full-screen").attr('title', 'Full Screen');

       $("#heading").show();
       $("#Graphs").show();

     }
     map.updateSize();
   });

 });



function Map_init(){ 

	var MapLayer= new ol.layer.Tile({ 
		source: new ol.source.XYZ({ 
		url:'http://192.168.1.1/Tracker/maps/{z}/{x}/{y}.png'
		})
		}); 

	var PerryvilleLonLat  = [-89.86, 37.86];  

	var KankakeeLonLat= [-87.86, 41.12]; 

	var KankakeeWebMercator= ol.proj.fromLonLat(KankakeeLonLat);

	var PerryvilleWebMercator = ol.proj.fromLonLat(PerryvilleLonLat);

	var view = new ol.View({ 
		center:KankakeeWebMercator, 
		zoom:12
		}); 

	map = new ol.Map({ 
		target:'map', 
		layers: [MapLayer, GPS, WB9SKY, KC9LHW, KC9LIG, Predictions],
		view: view
		}); 

   	map.addControl(mousePosition);

}

 