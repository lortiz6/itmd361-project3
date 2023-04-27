function initMap(){
  var getMap = document.getElementById('map');
  var myLocation = new google.maps.LatLng(41.835216962174, -87.62593888223897);
  var setMap = {
    center: myLocation,
    zoom: 18,
    mapTypeId: "hybrid"
  }
  var project3map = new google.maps.Map(getMap, setMap);
  
  // Create a Polyline
  var lineCoordinates = [
    {lat: 41.83521262082427, lng: -87.62550989609518},
    {lat: 41.83501278900002, lng: -87.62530732444198},
    {lat: 41.83517617579181, lng: -87.6250872905019},
    {lat: 41.835389633811685, lng: -87.62530140869357},
    {lat: 41.835216962174, lng: -87.62593888223897}
  ];
  var lineSymbol = {
    path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    strokeColor: 'fuchsia',
    scale: 2
  };
  var project3line = new google.maps.Polyline({
    path: lineCoordinates,
    icons: [{
      icon: lineSymbol,
      offset: '100%'
    }],
    map: project3map
  });

  // Animate the Polyline
  var count = 0;
  window.setInterval(function() {
    count = (count + 1) % 200;
    var icons = project3line.get('icons');
    icons[0].offset = (count / 2) + '%';
    project3line.set('icons', icons);
  }, 50);

  var marker = new google.maps.Marker({
    position: myLocation,
    map: project3map,
    animation: google.maps.Animation.BOUNCE,
    icon: 'media/mymelody.png',
    optimized: false
  });
  google.maps.event.addListener(marker, 'click', function(){alert("YOU HAVE ARRIVED!");});
}

google.maps.event.addDomListener(window, 'load', initMap);
