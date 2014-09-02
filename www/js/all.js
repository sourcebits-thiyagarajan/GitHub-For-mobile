
/**===========================================
		App = testapp2
=============================================*/

/*global angular*/

var app = angular.module('testApp2', ['ngRoute']);

app.config(function () {
	'use strict';

	console.log('app config::');

	
});

/**=======================================
	App = run
========================================*/

app.run(function () {
	'use strict';
	console.log('app run::');
	//$location.path('templates/');
});


/**=======================================
			App = constant
==========================================*/

app.constant('appConfig', {

	//console.log('app config::');

});

/*======= end of constants ===============*/

/**========================================
				Main.js
==========================================*/

/*global $*/

$(function () {
	'use strict';

});

/*================================================================
=>                  Directive = googleMap
==================================================================*/
/*global app, google, window, $, inherit, Tooltip, _ */

app.directive('connectMap', ['$rootScope','$location', function ( $rootScope, $location) {

    'use strict';
    
    //var currencyCodeFilter = $filter('currencyCode');

    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            var centerOfWorld = { lat: 26, lang: 10 };

            var markerImage = 'images/marker.png';
            var markerImageHilight = 'images/marker-hvr.png';

            // Inherits from OverlayView from the Google Maps API (Tooltip is in js/plugins/ folder)
            inherit(Tooltip, google.maps.OverlayView);

            var mapCanvas = element[0];
            var mapOptions = {
                disableDefaultUI: true,
                center: new google.maps.LatLng(centerOfWorld.lat, centerOfWorld.lang), // bangalore 12.9667, 77.5667; world 26, 10
                zoom: 2, // max 22
                maxZoom: 20,
                minZoom: 2,
                zoomControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, or TERRAIN.
            };

            var map = new google.maps.Map(mapCanvas, mapOptions);
            
            var styles = [
                {
                    featureType: 'water',
                    elementType: 'all',
                    stylers: [
                        { color: '#1A5CAF' },
                        { hue: '#1A5CAF' },
                        { saturation: 0 },
                        { lightness: 0 },
                        { visibility: 'on' }
                    ]
                }, {
                    featureType: 'landscape',
                    elementType: 'all',
                    stylers: [
                        { hue: '#69b3ef' },
                        { color: '#69b3ef' },
                        { saturation: 0 },
                        { lightness: 0 },
                        { visibility: 'on' }
                    ]
                },
                {
                    featureType: 'road',
                    elementType: 'labels',
                    stylers: [
                        { visibility: 'off' }
                    ]
                },
                {
                    featureType: 'road',
                    elementType: 'geometry',
                    stylers: [
                        { hue: '#69b3ef' },
                        { color: '#69b3ef' },
                        { gamma: 0 },
                        { saturation: 0 },
                        { lightness: 0 }
                    ]
                },
                {
                    featureType: 'administrative',
                    elementType: 'labels',
                    stylers: [
                        { visibility: 'off' }
                    ]
                },
                {
                    featureType: 'administrative.country',
                    elementType: 'geometry.stroke',
                    stylers: [
                        { 'visibility': 'on' },
                        { 'color': '#a3d5ff' },
                        { 'weight': 1 }
                    ]
                },
                {
                    featureType: 'poi',
                    elementType: 'all',
                    stylers: [
                        { visibility: 'off' }
                    ]
                },
                {
                    featureType: 'water',
                    elementType: 'labels',
                    stylers: [
                        { visibility: 'off' }
                    ]
                }
            ];
           
            //map.set('styles', styles);


            // ----------- dynamic stuff from here -------------

            // reference to markers with the hotel id
            var markers = {},
                liveReady = false;
                //dateFormatter = $filter('dateDDMMMYYYY');



            

            var plotHotel = function () {
                
                // if (liveReady) { blinkMarker(markers[hotel.code], hotel); }
                // else {
                    var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(13.0839, 80.2700), //13.0839 80.2700-chennai //12.9667, 77.5667- Bang (lat,long)
                        map: map,
                        icon: markerImage,
                        title: "Chennai", // we won't be using API tool tip because the app is mostly touch-based - no tool tips and hovers
                        zIndex: 99999
                    });

                    //markers[hotel.code] = marker;

                    

                    google.maps.event.addListener(marker, 'click', function () {
                         console.debug('clicked on ====  ');
                        // $rootScope.safeApply(function () {
                        //     $location.path('/suite/dashboard/' + hotel.code);
                        // });
                    });

                    
                //}
            };


            plotHotel();


            // var getLocationObject = function (results, reverseFlag) {


            //     // Fetch all types
            //     var allTypes = _.pluck(results, 'types');

            //     var countryObj = {},
            //         localityObj = {},
            //         areaObj = {},
            //         routeObj = {},
            //         postalObj = {},
            //         politicalObj = {};

            //     // Loop over all the types
            //     allTypes.forEach(function (item, index) {
                    
            //         var postal = _.find(item, function (type) { return type === 'postal_code'; });
            //         if (postal) {
            //             postalObj['name'] = postal;
            //             postalObj['index'] = index + 1;
            //         }

            //         var route = _.find(item, function (type) { return type === 'route'; });
            //         if (route) {
            //             routeObj['name'] = route;
            //             routeObj['index'] = index + 1;
            //         }

            //         var country = _.find(item, function (type) { return type === 'country'; });
            //         if (country) {
            //             countryObj['name'] = country;
            //             countryObj['index'] = index + 1;
            //         }

            //         var political = _.find(item, function (type) { return type === 'political'; });
            //         if (political) {
            //             politicalObj['name'] = country;
            //             politicalObj['index'] = index + 1;
            //         }

            //         var locality = _.find(item, function (type) { return type === 'locality'; });
            //         if (locality) {
            //             localityObj['name'] = locality;
            //             localityObj['index'] = index + 1;
            //         }

            //         var area = _.find(item, function (type) { return type === 'administrative_area_level_2'; });
            //         if (area) {
            //             areaObj['name'] = area;
            //             areaObj['index'] = index + 1;
            //         }
            //     });
                
            //     var index = countryObj.index || politicalObj.index || localityObj.index || areaObj.index || routeObj.index || postalObj.index;
                      
            //     if (reverseFlag) {
            //         index = postalObj.index || routeObj.index || areaObj.index || localityObj.index || politicalObj.index || countryObj.index;
            //     }
            //     // Return the best match
            //     return index ? results[index - 1] : results[0];
            // };


            // var getZoomLevel = function (key) {
                        
            //     var zoomLevel = 0;

            //     switch (key) {

            //         case 'country':
            //             zoomLevel = 6;
            //             break;

            //         case 'locality':
            //             zoomLevel = 6;
            //             break;

            //         case 'administrative_area_level_2':
            //             zoomLevel = 2;
            //             break;

            //         case 'route':
            //             zoomLevel = 3;
            //             break;

            //         case 'postal_code':
            //             zoomLevel = 4;
            //             break;

            //         case 'subpremise':
            //             zoomLevel = 7;
            //             break;

            //         case 'point_of_interest':
            //             zoomLevel = 6;
            //             break;

            //         case 'natural_feature':
            //             zoomLevel = 4;
            //             break;

            //         default:
            //             zoomLevel = 5;
            //     }

            //     return zoomLevel;
            // };

            // you can zoom in using either a name or the coordinates
            // var zoomIn = function () {

            //     // console.log('ZOOM - IN', arguments[0], arguments[1]);
                
            //     // center using a name
            //     if (arguments.length == 1) {
            //         var region_name = arguments[0];
            //         var geocoder = new google.maps.Geocoder();
                    
            //         var level = levelAdapterAPI.byId($state.params.id);
            //         var parentLevel = level.reference.parent.name.replace('Worldwide', '').replace('Global', '');

            //         // if (parentLevel === 'Worldwide') { parentLevel = ''; }

            //         if (!!parentLevel) { region_name = region_name + ', ' + parentLevel; }

            //         // console.log('region_name full === ', region_name);

            //         geocoder.geocode({'address' : region_name }, function (results, status) {
                        
            //             if (status === google.maps.GeocoderStatus.OK) {

            //                 // console.log('decoded response == ', results);

            //                 var locationObj = getLocationObject(results);
            //                 // console.debug('locationObj === ', locationObj);

            //                 if (!locationObj) { return false; }

            //                 var type = locationObj.types[0];
            //                 // console.log('TYPE ==== ', type);

            //                 if (type === 'country' || type === 'political') {

            //                     map.fitBounds(locationObj.geometry.viewport);
            //                     map.setZoom(map.getZoom() + 1);
            //                     return false;
            //                 }

            //                 map.setCenter(locationObj.geometry.location);
            //                 map.setZoom(getZoomLevel(type));
            //             }
            //         });

            //     }
            //     // center using coordinates
            //     else if (arguments.length == 2) {
            //         var lat = arguments[0];
            //         var lang = arguments[1];
            //         map.setCenter(new google.maps.LatLng(lat, lang));
            //     }
            // };

            // var avgZoomIn = function (hotels) {
                
            //     // avg zoom has to be called only for connect/map, if there is a id in url we can direclty zoom into particular area
            //     if ($state.params.id) {

            //         var levelIdURI = decodeURI($state.params.id);
            //         if (!_.isJSON(levelIdURI)) { return false; }

            //         var allIds = JSON.parse(levelIdURI);
            //         // If there is a single ID in url return false
            //         if (!Array.isArray(allIds)) { return false; }
            //         // else - execute the avgZoomIn
            //     }
            //     // console.log('avg zoom in ');

            //     var avg_lat = 0,
            //         avg_lng = 0,
            //         totalHotels = 0;
                

            //     if (typeof hotels === 'object') {
            //         Object.keys(hotels).forEach(function (i) {
            //             avg_lat += parseFloat(hotels[i].latitude);
            //             avg_lng += parseFloat(hotels[i].longitude);

            //             totalHotels++;
            //         });
            //     } else {

            //         totalHotels = hotels.length;
            //         for (var i = 0; i < totalHotels; i++) {

            //             avg_lat += parseFloat(hotels[i].latitude);
            //             avg_lng += parseFloat(hotels[i].longitude);
            //         }
            //     }

            //     avg_lat = Math.floor(avg_lat / totalHotels);
            //     avg_lng = Math.floor(avg_lng / totalHotels);

            //     var geocoder = new google.maps.Geocoder();
            //     geocoder.geocode({'latLng' : new google.maps.LatLng(avg_lat, avg_lng)}, function (results, status) {
            //         if (status === google.maps.GeocoderStatus.OK) {

            //             //console.log('results === ', results);
                      
            //             var locationObj = getLocationObject(results, 'average');
            //             if (!locationObj) { return false; }

            //             // console.log('ZOOM - IN --- AVERAGE', locationObj);

            //             var type = locationObj.types[0];

            //             var invalidEntries = ['route', 'street_address', 'intersection', 'colloquial_area', 'subpremise', 'airport', 'park', 'point_of_interest', 'neighborhood'];
            //             if (!_.contains(invalidEntries, type)) {
            //                 map.setCenter(locationObj.geometry.location);
            //                 map.setZoom(getZoomLevel(type));
            //             }
                        
            //         }
            //     });
            // };

            // hilight hotels which received an update
            // dataSource.subscribe('liveUpdateData', function (hotels_array) {

            //     if (!liveReady) { liveReady = true; }

            //     var len = hotels_array.length, hotels = [];
            //     while (len--) {
            //         var hotel_code = _.isObject(hotels_array[len]) && hotels_array[len].hotel_code ? hotels_array[len].hotel_code : hotels_array[len];

            //         var hotel_detail = userHotelAPI.byId(hotel_code);

            //         if (_.isObject(hotels_array[len])) {
            //             hotel_detail.liveUpdateContent = hotels_array[len];
            //             var channelDetail = null;
            //             if (hotel_detail.liveUpdateContent.dcode) {
            //                 hotel_detail.liveUpdateContent.channelDetail = channelAdapterAPI.byId(hotel_detail.liveUpdateContent.dcode);
            //             }
            //         }

            //         hotels.push(hotel_detail);
            //     }

            //     var totalHotels = hotels.length;
            //     hotels.forEach(function (hotel) {
            //         plotHotel(hotel);
            //     });
            // });

            // dataSource.subscribe('levelsData', function (err, data, notification) {

            //     // Don't call zoomIn() incase of Transient
            //     if ($state.params.id) {

            //         try {
            //             var allIds = JSON.parse(decodeURI($state.params.id));
            //             if (Array.isArray(allIds)) { return false; }
            //         }
            //         catch (e) {}
            //     }

            //     // a level id was created by the state change, zoom in, once the data becomes available
            //     if (data && selected_level_id) {
            //         var region = levelAdapterAPI.byId(selected_level_id);
            //         zoomIn(region.name);
            //     }
            // });

            // used for plotting the initial hotels - hotelListData is triggered only once, unless request is made again
            // var plotted_hotels = false;
            // dataSource.subscribe('hotelListData', function (err, data) {
            //     if (data) {
            //         var hotels = data.hotel_list;
            //         // console.debug('hotels list 2 == ', hotels);

            //         avgZoomIn(hotels);

            //         hotels.forEach(function (hotel) {
            //             plotHotel(hotel);
            //         });

            //         plotted_hotels = true;
            //     }

            // });

            

            /*=================================================================
            =            On Window resize, make the map responsive            =
            =================================================================*/

            var repositionMap = function () {

                var center = map.getCenter();
                google.maps.event.trigger(map, 'resize');
                map.setCenter(center);
            };
            
        }
    };
}]);


/*-----  End of Directive = googleMap  ------*/

// The custom tooltip class

// Constructor function
function Tooltip(opts, marker) {

  // Initialization
  this.setValues(opts);
  this.map_ = opts.map;
  this.marker_ = marker;
  var div = this.div_ = document.createElement("div");
  // Class name of div element to style it via CSS
  div.className = "tooltip";
  this.markerDragging = false;
}


 Tooltip.prototype = {

  // Define draw method to keep OverlayView happy
  draw: function() {},

  visible_changed: function() {
  var vis = this.get("visible");
  this.div_.style.visibility  = vis ? "visible" : "hidden";
 },

 getPos: function(e) {	
  var projection = this.getProjection();
  // Position of mouse cursor
  var pixel = projection.fromLatLngToDivPixel(e.latLng);
  var div = this.div_;

  // Adjust the tooltip's position
  var gap = 15;
  var posX = pixel.x + gap;
  var posY = pixel.y + gap;

  var menuwidth = div.offsetWidth;
  // Right boundary of the map
  var boundsNE = this.map_.getBounds().getNorthEast();
  boundsNE.pixel = projection.fromLatLngToDivPixel(boundsNE);

  if (menuwidth + posX > boundsNE.pixel.x) {
    posX -= menuwidth + gap;
  }
  div.style.left = posX + "px";
  div.style.top = posY + "px";

  if (!this.markerDragging) {
   this.set("visible", true);
  }
 },
 
 getPos2: function(latLng) {	// This is added to avoid using listener (Listener is not working when Map is quickly loaded with icons)
  var projection = this.getProjection();
  // Position of mouse cursor
  var pixel = projection.fromLatLngToDivPixel(latLng);
  var div = this.div_;

  // Adjust the tooltip's position
  var gap = 5;
  var posX = pixel.x + gap;
  var posY = pixel.y + gap;

  var menuwidth = div.offsetWidth;
  // Right boundary of the map
  var boundsNE = this.map_.getBounds().getNorthEast();
  boundsNE.pixel = projection.fromLatLngToDivPixel(boundsNE);

  if (menuwidth + posX > boundsNE.pixel.x) {
    posX -= menuwidth + gap;
  }
  div.style.left = posX + "px";
  div.style.top = posY + "px";

  if (!this.markerDragging) {
   this.set("visible", true);
  }
 }, 

 addTip: function() {
  var me = this;
  var g = google.maps.event;
  var div = me.div_;
  div.innerHTML = me.get("text").toString();
  // Tooltip is initially hidden
  me.set("visible", false);
  // Append the tooltip's div to the floatPane
  me.getPanes().floatPane.appendChild(this.div_);

  // In IE this listener gets randomly lost after it's been cleared once.
  // So keep it out of the listeners array.
   g.addListener(me.marker_, "dragend", function() {
     me.markerDragging = false; });
     
  // Register listeners
  me.listeners = [
//   g.addListener(me.marker_, "dragend", function() {
//    me.markerDragging = false; }),	
   g.addListener(me.marker_, "position_changed", function() {
    me.markerDragging = true;
    me.set("visible", false); }),
   g.addListener(me.map_, "mousemove", function(e) {
     me.getPos(e); })
  ];
 },

 removeTip: function() {
  // Clear the listeners to stop events when not needed.
  if (this.listeners) {
   for (var i = 0, listener; listener = this.listeners[i]; i++) {
     google.maps.event.removeListener(listener);
   }
   delete this.listeners;
  }
  // Remove the tooltip from the map pane.
  var parent = this.div_.parentNode;
  if (parent) parent.removeChild(this.div_);
 }
};


 function inherit(addTo, getFrom) {

  var from = getFrom.prototype;  // prototype object to get methods from
  var to = addTo.prototype;      // prototype object to add methods to
  for (var prop in from) {
   if (typeof to[prop] == "undefined") to[prop] = from[prop];
  }
 }


