function initMap() {
    var losAngeles = {
        lat: 34.0546551, 
        lng: -118.3960287
    };
    var china = {
        lat: 34.0546551, 
        lng: -118.2260287
    };
    var bev = {
        lat: 34.0546551, 
        lng: -118.3860287
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 11,
        mapTypeId: 'roadmap'
    });
    var marker = new google.maps.Marker({
        position: losAngeles,
        map: map,
        title: 'Welcome Los Angeles'
    })
    var marker1 = new google.maps.Marker({
        position: china,
        map: map,
        title: 'Welcome Los Angeles'
    })
    var marker2 = new google.maps.Marker({
        position: bev,
        map: map,
        title: 'Welcome Bev'
    })
}