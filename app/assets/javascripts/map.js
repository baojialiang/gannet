function getPorts(){
	var ports = [];
	ports[0] = {name: "连云港", longitude: 34.733, latitude: 119.45};
	ports[1] = {name: "宁波港", longitude: 29.9411, latitude: 121.8513};
	return ports;
}
	
	
function initialize() {
	var china = new google.maps.LatLng(36,102);
	map = new google.maps.Map(document.getElementById('map-canvas'), {
	  center: china,
	  zoom: 4,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	});

	layer = new google.maps.FusionTablesLayer({
	  query: {
		select: 'geometry',
		from: '1N2LBk4JHwWpOY4d9fobIn27lfnZ5MDy-NoqqRpk'
	  },
	  styles: [{
		polygonOptions: {
		  fillColor: "#00FF00",
		  fillOpacity: 0.3,
		  
		}
	  }, {
		where: "ISO_2DIGIT = 'CN'",
		polygonOptions: {
		  fillColor: "#000000",
		  fillOpacity: 0.0001,
		  strokeColor: "#FFFFFF"
		}
	  }]
	});
	layer.setMap(map);
	
	ports = getPorts();
	
	for(var i = 0; i < ports.length; i++){
		 var marker = new google.maps.Marker({
			position:  new google.maps.LatLng(ports[i].longitude,ports[i].latitude),
			map: map,
			title: ports[i].name
		  });
	}
}

google.maps.event.addDomListener(window, 'load', initialize);