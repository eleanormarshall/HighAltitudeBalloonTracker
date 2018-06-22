//Creates boxes and menus


//Creates toggle functions for the Vector Layers 

	function KC9LIGtoggleLayer(KC9LIG) {
   		if (KC9LIG.getVisible() == true) {
        	KC9LIG.setVisible(false);
    		} else {
        	KC9LIG.setVisible(true);
   		 }
	}; 

	function WB9SKYtoggleLayer(WB9SKY){
		if (WB9SKY.getVisible() == true) {
        	WB9SKY.setVisible(false);
    		} else {
        	WB9SKY.setVisible(true);
   		 }
	}; 

	function KC9LHWtoggleLayer(KC9LHW){
		if (KC9LHW.getVisible() == true) {
        	KC9LHW.setVisible(false);
    		} else {
        	KC9LHW.setVisible(true);
   		 }
	}; 


	//function PredictionstoggleLayer(Predictions){
	//	if (Predictions.getVisible() == true) {
        //	Predictions.setVisible(false);
    	//	} else {
        //	Predictions.setVisible(true);
   	//	 }
	//}; 



//Coordinate Overlay
	var mousePosition = new ol.control.MousePosition({
	        coordinateFormat: ol.coordinate.createStringXY(2),
	        projection: 'EPSG:4326',
	        target: document.getElementById('myposition'),
	        undefinedHTML: '&nbsp;'
	      });
	

//Creates current postion boxs

	var PythonData = function(){
		document.getElementById("CurrentData").innerHTML='<object type = "text/html" data="http://192.168.1.1/cgi-bin/TrackerV1Codes/CurrentData2.py"></object>';
		
		updateTimer= setTimeout(function(){
			PythonData(); 
		}, 30000)}; 
		
	PythonData(); 
