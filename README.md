# HighAltitudeBalloonTracker
For an internship in the Far Horizon's Lab at the Adler Planetarium, I designed a High Altitude Ballooning tracker.  The Building an Improved High Altitude Balloon Tracker project’s objective was to design a more efficient and reliable tracking software. This was successfully met using Automatic Packet Radio System Transmitters, a Raspberry Pi 3, a GPS, and a radio to extract the balloon’s positional data. The project demonstrates the use of the computer programming language, Python, for the server-side scripting component of the project and it’s direct communication with the client-side scripts developed by HTML, JavaScript, CSS, and OpenLayers.

Server-Side: The server side code is in the python language. These files are utilized to pull information received from the APRS transmitters and then process the signals. They then rewrite the information so that it is ready to be read from the client-side software. 

Client-Side: The client side code is composed by five languages; javascript, css, html, openlayers, and highcharts. These files receive the data from the server-side, process the data, then create a visual of the data through an html page. 

