
var infoWindow = new google.maps.InfoWindow({
});

function setLayer(){
    layer = new google.maps.FusionTablesLayer({
        query: {
            select: 'geometry',
            from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk'
        },
        styles: [{
            polygonOptions: {
                fillColor: "#00FFFF",
                fillOpacity: 0.3
            }
        }, {
            where: "ISO_2DIGIT = 'CN'",
            polygonOptions: {
                fillColor: "#000000",
                fillOpacity: 0.0001,
                strokeColor: "#FFFFFF"
            }
        }],
        clickable: false
    });
    layer.setMap(map);
}

function getPorts(){
	var ports = [];
	ports[0] = {name: "连云港", longitude: 34.733, latitude: 119.45, description: "好地方，连云港哎！"};
	ports[1] = {name: "宁波港", longitude: 29.9411, latitude: 121.8513, description: "好地方，宁波港哎！"};
    ports[2] = {name: "上海港", longitude: 31.2385556, latitude: 121.484583, description: "好地方，上海港哎！"};
    ports[3] = {name: "大连港", longitude: 38.9167, latitude: 121.65, description: "好地方，大连港哎！"};
	return ports;
}
function attachMessageWindow(marker){
    google.maps.event.addListener(marker, 'click', function() {
        infoWindow.close();
        infoWindow.setContent(marker.description);
        infoWindow.open(map,marker);
    });
}

function markerPorts(){
    ports = getPorts();
    for(var i = 0; i < ports.length; i++){
        var marker = new google.maps.Marker({
            position:  new google.maps.LatLng(ports[i].longitude,ports[i].latitude),
            map: map,
            title: ports[i].name,
            description: ports[i].description
        });
        attachMessageWindow(marker);
    }
}
	
function initialize() {
	var china = new google.maps.LatLng(36,102);
	map = new google.maps.Map(document.getElementById('map-canvas'), {
	  center: china,
	  zoom: 3,
      minZoom: 3,
      maxZoom: 4,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	});
    setLayer();
    markerPorts();
}

google.maps.event.addDomListener(window, 'load', initialize);