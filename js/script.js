function initMap(){
  var getMap = document.getElementById('map');
  var myLocation = new google.maps.LatLng(41.83521262082427, -87.62550989609518);
  var setMap = {
    center: myLocation,
    zoom: 18
  }
  var project3map = new google.maps.Map(getMap, setMap);
  var marker = new google.maps.Marker({
    position: myLocation,
    map: project3map,
    animation: google.maps.Animation.BOUNCE,
    icon: 'media/mymelody.png'
  })
  google.maps.event.addListener(marker, 'click', function(){alert("YOU HAVE ARRIVED!");});
}
google.maps.event.addDomListener(window, 'load', initMap);
