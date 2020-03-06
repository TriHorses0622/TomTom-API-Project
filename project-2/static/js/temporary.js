// Create an initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([40.845114, -73.910313], 14);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// Define function to decide polygon color based on data
function color(speed) {
    if (speed < 20) {
        return "red"
    } else if (speed < 40) {
        return "orange"
    } else if (speed < 60 ) {
        return "yellow"
    } else {return "green"}
}

// Store API query variables
var baseURL = "https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key=";
var key = "cWhH2kYLPJdGA3CAhSnTSaa3UG5Vn40N";
var location1Arr = [40.853404,-73.961730];
var location1Str = "40.853404,-73.961730";

// Assemble API query URL
var url1 = baseURL + key + "&point=" + location1Str;

// Grab the data with d3 and draw
d3.json(url1, function(response) {
    var coordinates1Dict = response.flowSegmentData.coordinates.coordinate;
    var coordinates1List = [];
    for (var i = 0; i < coordinates1Dict.length; i++) {
        coordinates1List.push([coordinates1Dict[i].latitude,coordinates1Dict[i].longitude]);
    }
    for (var i = 0; i < coordinates1List.length; i++) {
        var subArray = coordinates1List[i];
        for( var j = 0; j < subArray.length; j++){
          subArray[j] += 0.00125;
        }
    }
    L.polygon(coordinates1List,  {
        color : color(response.flowSegmentData.currentSpeed),
        fillColor : color(response.flowSegmentData.currentSpeed),
        fillOpacity: 1
      }).addTo(myMap);
    L.marker(location1Arr)
      .bindPopup("<h4>Current Speed : " + response.flowSegmentData.currentSpeed + " mph </h4> <hr> <h4>Free Flow Speed : " + response.flowSegmentData.freeFlowSpeed + " mph </h4> <hr> <h4> Current Travel Time : " + response.flowSegmentData.currentTravelTime + " s </h4> <hr> <h4> Free Flow Travel Time : " + response.flowSegmentData.freeFlowTravelTime + " s <h4>")
      .addTo(myMap);   
})


 // Location 2
 var location2Arr = [40.848910,-73.938512];
 var location2Str = "40.848910,-73.938512";

 var url2 = baseURL + key + "&point=" + location2Str;

 d3.json(url2, function(response) {
    var coordinates2Dict = response.flowSegmentData.coordinates.coordinate;
    var coordinates2List = [];
    for (var i = 0; i < coordinates2Dict.length; i++) {
        coordinates2List.push([coordinates2Dict[i].latitude,coordinates2Dict[i].longitude]);
    }
    for (var i = 0; i < coordinates2List.length; i++) {
        var subArray = coordinates2List[i];
        subArray[0] -= 0.00125
    }
    L.polygon(coordinates2List,  {
        color : color(response.flowSegmentData.currentSpeed),
        fillColor : color(response.flowSegmentData.currentSpeed),
        fillOpacity: 1
      }).addTo(myMap);
    L.marker(location2Arr)
      .bindPopup("<h4>Current Speed : " + response.flowSegmentData.currentSpeed + " mph </h4> <hr> <h4>Free Flow Speed : " + response.flowSegmentData.freeFlowSpeed + " mph </h4> <hr> <h4> Current Travel Time : " + response.flowSegmentData.currentTravelTime + " s </h4> <hr> <h4> Free Flow Travel Time : " + response.flowSegmentData.freeFlowTravelTime + " s <h4>")
      .addTo(myMap);   
})


// Location 3
var location3Arr = [40.846041,-73.930990];
var location3Str = "40.846041,-73.930990";

var url3 = baseURL + key + "&point=" + location3Str;

d3.json(url3, function(response) {
    var coordinates3Dict = response.flowSegmentData.coordinates.coordinate;
    var coordinates3List = [];
    for (var i = 0; i < coordinates3Dict.length; i++) {
        coordinates3List.push([coordinates3Dict[i].latitude,coordinates3Dict[i].longitude]);
    }
    for (var i = 0; i < coordinates3List.length; i++) {
        var subArray = coordinates3List[i];
        subArray[0] -= 0.0002
        subArray[1] -= 0.0020
    }
    L.polygon(coordinates3List,  {
        color : color(response.flowSegmentData.currentSpeed),
        fillColor : color(response.flowSegmentData.currentSpeed),
        fillOpacity: 1
      }).addTo(myMap);
    L.marker(location3Arr)
      .bindPopup("<h4>Current Speed : " + response.flowSegmentData.currentSpeed + " mph </h4> <hr> <h4>Free Flow Speed : " + response.flowSegmentData.freeFlowSpeed + " mph </h4> <hr> <h4> Current Travel Time : " + response.flowSegmentData.currentTravelTime + " s </h4> <hr> <h4> Free Flow Travel Time : " + response.flowSegmentData.freeFlowTravelTime + " s <h4>")
      .addTo(myMap);   
})


// Location 4
var location4Arr = [40.844855,-73.921855];
var location4Str = "40.844855,-73.921855";

var url4 = baseURL + key + "&point=" + location4Str;

d3.json(url4, function(response) {
    var coordinates4Dict = response.flowSegmentData.coordinates.coordinate;
    var coordinates4List = [];
    for (var i = 0; i < coordinates4Dict.length; i++) {
        coordinates4List.push([coordinates4Dict[i].latitude,coordinates4Dict[i].longitude]);
    }
    for (var i = 0; i < coordinates4List.length; i++) {
        var subArray = coordinates4List[i];
        subArray[0] -= 0.0015
    }
    L.polygon(coordinates4List,  {
        color : color(response.flowSegmentData.currentSpeed),
        fillColor : color(response.flowSegmentData.currentSpeed),
        fillOpacity: 1
      }).addTo(myMap);
    L.marker(location4Arr)
      .bindPopup("<h4>Current Speed : " + response.flowSegmentData.currentSpeed + " mph </h4> <hr> <h4>Free Flow Speed : " + response.flowSegmentData.freeFlowSpeed + " mph </h4> <hr> <h4> Current Travel Time : " + response.flowSegmentData.currentTravelTime + " s </h4> <hr> <h4> Free Flow Travel Time : " + response.flowSegmentData.freeFlowTravelTime + " s <h4>")
      .addTo(myMap);   
})


// Location 5
var location5Arr = [40.845471,-73.928601];
var location5Str = "40.845471,-73.928601";

var url5 = baseURL + key + "&point=" + location5Str;

d3.json(url5, function(response) {
    var coordinates5Dict = response.flowSegmentData.coordinates.coordinate;
    var coordinates5List = [];
    for (var i = 0; i < coordinates5Dict.length; i++) {
        coordinates5List.push([coordinates5Dict[i].latitude,coordinates5Dict[i].longitude]);
    }
    for (var i = 0; i < coordinates5List.length; i++) {
        var subArray = coordinates5List[i];
        subArray[0] += 0.00135
        subArray[1] += 0.0001
    }
    L.polygon(coordinates5List,  {
        color : color(response.flowSegmentData.currentSpeed),
        fillColor : color(response.flowSegmentData.currentSpeed),
        fillOpacity: 1
      }).addTo(myMap);
    L.marker(location5Arr)
      .bindPopup("<h4>Current Speed : " + response.flowSegmentData.currentSpeed + " mph </h4> <hr> <h4>Free Flow Speed : " + response.flowSegmentData.freeFlowSpeed + " mph </h4> <hr> <h4> Current Travel Time : " + response.flowSegmentData.currentTravelTime + " s </h4> <hr> <h4> Free Flow Travel Time : " + response.flowSegmentData.freeFlowTravelTime + " s <h4>")
      .addTo(myMap);   
})


// Location 6
var location6Arr = [40.845189,-73.916432];
var location6Str = "40.845189,-73.916432";

var url6 = baseURL + key + "&point=" + location6Str;

d3.json(url6, function(response) {
    var coordinates6Dict = response.flowSegmentData.coordinates.coordinate;
    var coordinates6List = [];
    for (var i = 0; i < coordinates6Dict.length; i++) {
        coordinates6List.push([coordinates6Dict[i].latitude,coordinates6Dict[i].longitude]);
    }
    for (var i = 0; i < coordinates6List.length; i++) {
        var subArray = coordinates6List[i];
        subArray[0] -= 0.0014
        //subArray[1] -= 0.01
    }
    L.polygon(coordinates6List,  {
        color : color(response.flowSegmentData.currentSpeed),
        fillColor : color(response.flowSegmentData.currentSpeed),
        fillOpacity: 1
      }).addTo(myMap);
    L.marker(location6Arr)
      .bindPopup("<h4>Current Speed : " + response.flowSegmentData.currentSpeed + " mph </h4> <hr> <h4>Free Flow Speed : " + response.flowSegmentData.freeFlowSpeed + " mph </h4> <hr> <h4> Current Travel Time : " + response.flowSegmentData.currentTravelTime + " s </h4> <hr> <h4> Free Flow Travel Time : " + response.flowSegmentData.freeFlowTravelTime + " s <h4>")
      .addTo(myMap);   
})


// Location 7
var location7Arr = [40.845154,-73.910191];
var location7Str = "40.845154,-73.910191";

var url7 = baseURL + key + "&point=" + location7Str;

d3.json(url7, function(response) {
    var coordinates7Dict = response.flowSegmentData.coordinates.coordinate;
    var coordinates7List = [];
    for (var i = 0; i < coordinates7Dict.length; i++) {
        coordinates7List.push([coordinates7Dict[i].latitude,coordinates7Dict[i].longitude]);
    }
    for (var i = 0; i < coordinates7List.length; i++) {
        var subArray = coordinates7List[i];
        subArray[0] -= 0.0014
        //subArray[1] -= 0.01
    }
    L.polygon(coordinates7List,  {
        color : color(response.flowSegmentData.currentSpeed),
        fillColor : color(response.flowSegmentData.currentSpeed),
        fillOpacity: 1
      }).addTo(myMap);
    L.marker(location7Arr)
      .bindPopup("<h4>Current Speed : " + response.flowSegmentData.currentSpeed + " mph </h4> <hr> <h4>Free Flow Speed : " + response.flowSegmentData.freeFlowSpeed + " mph </h4> <hr> <h4> Current Travel Time : " + response.flowSegmentData.currentTravelTime + " s </h4> <hr> <h4> Free Flow Travel Time : " + response.flowSegmentData.freeFlowTravelTime + " s <h4>")
      .addTo(myMap);   
})


// Location 8
var location8Arr = [40.844443,-73.901052];
var location8Str = "40.844443,-73.901052";

var url8 = baseURL + key + "&point=" + location8Str;

d3.json(url8, function(response) {
    var coordinates8Dict = response.flowSegmentData.coordinates.coordinate;
    var coordinates8List = [];
    for (var i = 0; i < coordinates8Dict.length; i++) {
        coordinates8List.push([coordinates8Dict[i].latitude,coordinates8Dict[i].longitude]);
    }
    for (var i = 0; i < coordinates8List.length; i++) {
        var subArray = coordinates8List[i];
        subArray[0] -= 0.0014
        //subArray[1] -= 0.01
    }
    L.polygon(coordinates8List,  {
        color : color(response.flowSegmentData.currentSpeed),
        fillColor : color(response.flowSegmentData.currentSpeed),
        fillOpacity: 1
      }).addTo(myMap);
    L.marker(location8Arr)
      .bindPopup("<h4>Current Speed : " + response.flowSegmentData.currentSpeed + " mph </h4> <hr> <h4>Free Flow Speed : " + response.flowSegmentData.freeFlowSpeed + " mph </h4> <hr> <h4> Current Travel Time : " + response.flowSegmentData.currentTravelTime + " s </h4> <hr> <h4> Free Flow Travel Time : " + response.flowSegmentData.freeFlowTravelTime + " s <h4>")
      .addTo(myMap);   
})


// Location 9
var location9Arr = [40.843341,-73.892228];
var location9Str = "40.843341,-73.892228";

var url9 = baseURL + key + "&point=" + location9Str;

d3.json(url9, function(response) {
    var coordinates9Dict = response.flowSegmentData.coordinates.coordinate;
    var coordinates9List = [];
    for (var i = 0; i < coordinates9Dict.length; i++) {
        coordinates9List.push([coordinates9Dict[i].latitude,coordinates9Dict[i].longitude]);
    }
    for (var i = 0; i < coordinates9List.length; i++) {
        var subArray = coordinates9List[i];
        subArray[0] += 0.0014
        //subArray[1] -= 0.01
    }
    L.polygon(coordinates9List,  {
        color : color(response.flowSegmentData.currentSpeed),
        fillColor : color(response.flowSegmentData.currentSpeed),
        fillOpacity: 1
      }).addTo(myMap);
    L.marker(location9Arr)
      .bindPopup("<h4>Current Speed : " + response.flowSegmentData.currentSpeed + " mph </h4> <hr> <h4>Free Flow Speed : " + response.flowSegmentData.freeFlowSpeed + " mph </h4> <hr> <h4> Current Travel Time : " + response.flowSegmentData.currentTravelTime + " s </h4> <hr> <h4> Free Flow Travel Time : " + response.flowSegmentData.freeFlowTravelTime + " s <h4>")
      .addTo(myMap);   
})


// Location 10
var location10Arr = [40.837506,-73.880632];
var location10Str = "40.837506,-73.880632";

var url10 = baseURL + key + "&point=" + location10Str;

d3.json(url10, function(response) {
    var coordinates10Dict = response.flowSegmentData.coordinates.coordinate;
    var coordinates10List = [];
    for (var i = 0; i < coordinates10Dict.length; i++) {
        coordinates10List.push([coordinates10Dict[i].latitude,coordinates10Dict[i].longitude]);
    }
    for (var i = 0; i < coordinates10List.length; i++) {
        var subArray = coordinates10List[i];
        subArray[0] -= 0.0014
        //subArray[1] -= 0.01
    }
    L.polygon(coordinates10List,  {
        color : color(response.flowSegmentData.currentSpeed),
        fillColor : color(response.flowSegmentData.currentSpeed),
        fillOpacity: 1
      }).addTo(myMap);
    L.marker(location10Arr)
      .bindPopup("<h4>Current Speed : " + response.flowSegmentData.currentSpeed + " mph </h4> <hr> <h4>Free Flow Speed : " + response.flowSegmentData.freeFlowSpeed + " mph </h4> <hr> <h4> Current Travel Time : " + response.flowSegmentData.currentTravelTime + " s </h4> <hr> <h4> Free Flow Travel Time : " + response.flowSegmentData.freeFlowTravelTime + " s <h4>")
      .addTo(myMap);   
})


// Location 11
var location11Arr = [40.836436,-73.873732];
var location11Str = "40.836436,-73.873732";

var url11 = baseURL + key + "&point=" + location11Str;

d3.json(url11, function(response) {
    var coordinates11Dict = response.flowSegmentData.coordinates.coordinate;
    var coordinates11List = [];
    for (var i = 0; i < coordinates11Dict.length; i++) {
        coordinates11List.push([coordinates11Dict[i].latitude,coordinates11Dict[i].longitude]);
    }
    for (var i = 0; i < coordinates11List.length; i++) {
        var subArray = coordinates11List[i];
        subArray[0] -= 0.0014
        //subArray[1] -= 0.01
    }
    L.polygon(coordinates11List,  {
        color : color(response.flowSegmentData.currentSpeed),
        fillColor : color(response.flowSegmentData.currentSpeed),
        fillOpacity: 1
      }).addTo(myMap);
    L.marker(location11Arr)
      .bindPopup("<h4>Current Speed : " + response.flowSegmentData.currentSpeed + " mph </h4> <hr> <h4>Free Flow Speed : " + response.flowSegmentData.freeFlowSpeed + " mph </h4> <hr> <h4> Current Travel Time : " + response.flowSegmentData.currentTravelTime + " s </h4> <hr> <h4> Free Flow Travel Time : " + response.flowSegmentData.freeFlowTravelTime + " s <h4>")
      .addTo(myMap);   
})


// Location 12
var location12Arr = [40.845251,-73.913250];
var location12Str = "40.845251,-73.913250";

var url12 = baseURL + key + "&point=" + location12Str;

d3.json(url12, function(response) {
    var coordinates12Dict = response.flowSegmentData.coordinates.coordinate;
    var coordinates12List = [];
    for (var i = 0; i < coordinates12Dict.length; i++) {
        coordinates12List.push([coordinates12Dict[i].latitude,coordinates12Dict[i].longitude]);
    }
    for (var i = 0; i < coordinates12List.length; i++) {
        var subArray = coordinates12List[i];
        subArray[0] -= 0.0014
        //subArray[1] -= 0.01
    }
    L.polygon(coordinates12List,  {
        color : color(response.flowSegmentData.currentSpeed),
        fillColor : color(response.flowSegmentData.currentSpeed),
        fillOpacity: 1
      }).addTo(myMap);
    L.marker(location12Arr)
      .bindPopup("<h4>Current Speed : " + response.flowSegmentData.currentSpeed + " mph </h4> <hr> <h4>Free Flow Speed : " + response.flowSegmentData.freeFlowSpeed + " mph </h4> <hr> <h4> Current Travel Time : " + response.flowSegmentData.currentTravelTime + " s </h4> <hr> <h4> Free Flow Travel Time : " + response.flowSegmentData.freeFlowTravelTime + " s <h4>")
      .addTo(myMap);   
})


// Location 13
var location13Arr = [40.838324,-73.882437];
var location13Str = "40.838324,-73.882437";

var url13 = baseURL + key + "&point=" + location13Str;

d3.json(url13, function(response) {
    var coordinates13Dict = response.flowSegmentData.coordinates.coordinate;
    var coordinates13List = [];
    for (var i = 0; i < coordinates13Dict.length; i++) {
        coordinates13List.push([coordinates13Dict[i].latitude,coordinates13Dict[i].longitude]);
    }
    for (var i = 0; i < coordinates13List.length; i++) {
        var subArray = coordinates13List[i];
        subArray[0] += 0.0014
        //subArray[1] -= 0.01
    }
    L.polygon(coordinates13List,  {
        color : color(response.flowSegmentData.currentSpeed),
        fillColor : color(response.flowSegmentData.currentSpeed),
        fillOpacity: 1
      }).addTo(myMap);
    L.marker(location13Arr)
      .bindPopup("<h4>Current Speed : " + response.flowSegmentData.currentSpeed + " mph </h4> <hr> <h4>Free Flow Speed : " + response.flowSegmentData.freeFlowSpeed + " mph </h4> <hr> <h4> Current Travel Time : " + response.flowSegmentData.currentTravelTime + " s </h4> <hr> <h4> Free Flow Travel Time : " + response.flowSegmentData.freeFlowTravelTime + " s <h4>")
      .addTo(myMap);   
})
