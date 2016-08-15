/**
 * Created by Yearwood on 15.8.16.
 */
function initMap() {
    var mapOptions = {
        zoom: 8,
        center: new google.maps.Lat.Lng(-34.397, 150.644)
    };


    var map = new google.maps.Map(document.getElementById('map-canvas'),mapOptions);

}

function  loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&' + 'callback=initialize';
    document.body.appendChild(script);
}

window.onload = loadScript();
