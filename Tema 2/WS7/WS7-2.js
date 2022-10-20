let platform = new H.service.Platform({
    'apikey': '28YR4tDJNjrq5FOOcbkFPgoP_cfv8BrzfEongpqbAOE'
});

let maptypes = platform.createDefaultLayers();

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(muestraPosicion);
} else {
    console.log("La localización no está disponible");
}

function muestraPosicion(position) {
    let long = position.coords.longitude;
    let lat = position.coords.latitude;

    let map = new H.Map(
        document.getElementById('mapContainer'),
        maptypes.vector.normal.map,
        {
            zoom: 10,
        });

    let svgMarkup = '<svg width="24" height="24" ' +
        'xmlns="http://www.w3.org/2000/svg">' +
        '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
        'height="22" /><text x="12" y="18" font-size="12pt" ' +
        'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
        'fill="white">H</text></svg>';

    let icon = new H.map.Icon(svgMarkup),
        coords = { lat: lat, lng: long },
        marker = new H.map.Marker(coords, { icon: icon });

    map.addObject(marker);
    map.setCenter(coords);

    let routingParameters = {
        'routingMode': 'fast',
        'transportMode': 'car',
        'origin': `${lat},${long}`,
        'destination': '37.187849050,-3.620089350',
        'return': 'polyline'
    };

    let onResult = function (result) {
        if (result.routes.length) {
            result.routes[0].sections.forEach((section) => {
                let linestring = H.geo.LineString.fromFlexiblePolyline(section.polyline);

                let routeLine = new H.map.Polyline(linestring, {
                    style: { strokeColor: 'blue', lineWidth: 3 }
                });

                let startMarker = new H.map.Marker(section.departure.place.location);

                let endMarker = new H.map.Marker(section.arrival.place.location);

                map.addObjects([routeLine, startMarker, endMarker]);

                map.getViewModel().setLookAtData({ bounds: routeLine.getBoundingBox() });
            });
        }
    };

    let router = platform.getRoutingService(null, 8);

    router.calculateRoute(routingParameters, onResult,
        function (error) {
            alert(error.message);
        });

    let service = platform.getSearchService();
    let ui = H.ui.UI.createDefault(map, maptypes);

    service.reverseGeocode({
        at: `${lat},${long}`
    }, (result) => {
        result.items.forEach((item) => {
            ui.addBubble(new H.ui.InfoBubble(item.position, {
                content: item.address.label
            }));
        });
    }, alert);
}

