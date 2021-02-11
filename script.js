mapboxgl.accessToken = 'pk.eyJ1Ijoia2FtaWVsZ3VscGVuIiwiYSI6ImNra3lmeDU0YzAzbXgzMW1sd3Ewb2pkMHYifQ.pEy0eaFN5ycEetuiTEVc9A';
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true
  })
  
  function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude])
  }
  

function errorLocation(){
    setupMap([4.895168, 52.370216])

}

// create the popup

// Boeroestraat
var popup1 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Het nestje op de boeroestraat </h3> <img src="Nestje_amsterdam.jpeg" alt="" width="100%"> <img src="Klapthee.jpeg" alt="" width="100%">')

// Flevopark
var popup2 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Eerste valentijns dag <3 </h3> <img src="flevopark.jpeg" alt="" width="100%">')

// Koolemansbeynenstraat
var popup3 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Slapen bij mijn ouders(eerste keer als stelletje) </h3> <img src="Koolemansbeynendtraat.jpeg" alt="" width="100%">')

// NDSM
var popup4 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Amsterdam Noord ontdekt </h3> <img src="pondje.jpeg" alt="" width="100%">')

// Abcoude
var popup5 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Verjaardag oma </h3> <img src="Abcoude.jpeg" alt="" width="100%">')

//Fam-weekend-Yadira
var popup6 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> de Jong weekend </h3> <img src="fw.jpeg" alt="" width="100%">')

//Vader-kind weekend
var popup7 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Vader kind weekend </h3> <img src="vader-kind.jpeg" alt="" width="100%">')

//DTRH
var popup8 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> In het konijnen rol </h3> <img src="dtrh.jpeg" alt="" width="100%">')

//bij ol
var popup9 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Bbq bij Olivier </h3> <img src="zf-ol.jpeg" alt="" width="100%">')

//Kruisweg 4 
var popup10 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Laat thuiskomen op de Kruisweg </h3> <img src="zf-rob,tine.jpeg" alt="" width="100%">')

//Lent
var popup11 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Havana aan de waal </h3> <img src="zf-lent.jpeg" alt="" width="100%">')

// Lobok utrecht
var popup12 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Yadira en haar kaak </h3> <img src="smeagol_yadira.jpeg" alt="" width="100%">')

// Nest
var popup13 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Samen chillen op t nest </h3> <img src="Nest.jpeg" alt="" width="100%">')

// Gent1
var popup14 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Lachen in het appartement in Gent </h3> <img src="Gent_2.jpeg" alt="" width="100%">')

// Gent2
var popup15 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Cultuur snuiven in Gent </h3> <img src="Gent.jpeg" alt="" width="100%">')

// een jaar
var popup16 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Een jaartje samen!!! Jammie </h3> <img src="Jaartje_samen.jpeg" alt="" width="100%">')

// Quara
var popup17 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Quarataine tijd </h3> <img src="Nestje_utrecht.jpeg" alt="" width="100%">')

// Thionville
var popup18 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Thionville :0 </h3> <img src="Thionville.jpeg" alt="" width="100%">')

// Xonrupt logemer
var popup19 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Chillen aan het Longemer </h3> <img src="Xanrupt-longemer.jpeg" alt="" width="100%">')

// Ziekenhuis
var popup20 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Yadira for the rescue </h3> <img src="Ziekenhuis.jpeg" alt="" width="100%">')

// Belfort
var popup21 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Hoogte puntje van Belfort </h3> <img src="Belfort-uiteten.jpeg" alt="" width="100%">')


// Bij bibi
var popup22 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Chillen bij Bibi </h3> <img src="Bij_bibi.jpeg" alt="" width="100%">')


const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

function setupMap(center){
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom:15
    });

    // Boeroestraat
    var marker = new mapboxgl.Marker()
      .setLngLat([4.9429542, 52.3645808])
      .setPopup(popup1)
      .addTo(map);

    // flevopark
    var marker = new mapboxgl.Marker()
      .setLngLat([4.9486235, 52.361704])
      .setPopup(popup2)
      .addTo(map);

    // Koolemansbeynenstraat
    var marker = new mapboxgl.Marker()
      .setLngLat([5.876330852508545, 51.83726119995117])
      .setPopup(popup3)
      .addTo(map);

    //NDSM
    var marker = new mapboxgl.Marker()
      .setLngLat([4.8929539, 52.4003736])
      .setPopup(popup4)
      .addTo(map);

    //Abcoude
    var marker = new mapboxgl.Marker()
      .setLngLat([4.9300125, 52.2794263])
      .setPopup(popup5)
      .addTo(map);

    //Fam-weekend-Yadira
    var marker = new mapboxgl.Marker()
      .setLngLat([5.4621623, 52.0236091])
      .setPopup(popup6)
      .addTo(map);
    
    //vaderweekend
    var marker = new mapboxgl.Marker()
      .setLngLat([5.819903, 50.5258607])
      .setPopup(popup7)
      .addTo(map);

    //DTRH
    var marker = new mapboxgl.Marker()
      .setLngLat([5.687399864196777, 51.84543991088867])
      .setPopup(popup8)
      .addTo(map);
    
    // bij ol
    var marker = new mapboxgl.Marker()
      .setLngLat([5.8815692, 51.8356698])
      .setPopup(popup9)
      .addTo(map);
    
    // Kruisweg 4
    var marker = new mapboxgl.Marker()
      .setLngLat([5.8953428, 51.8345938])
      .setPopup(popup10)
      .addTo(map);

    // Lent
    var marker = new mapboxgl.Marker()
      .setLngLat([5.855607658449826, 51.85641659497292])
      .setPopup(popup11)
      .addTo(map);

    // Lombok Utrecht
    var marker = new mapboxgl.Marker()
      .setLngLat([5.0930826, 52.0939337])
      .setPopup(popup12)
      .addTo(map);

    // Het Nest
    var marker = new mapboxgl.Marker()
      .setLngLat([5.835671424865723, 51.82551193237305])
      .setPopup(popup13)
      .addTo(map);
    
    // Gent1_lachen
    var marker = new mapboxgl.Marker()
      .setLngLat([3.7490317821502686, 51.053916931152344])
      .setPopup(popup14)
      .addTo(map);

    // Gent2_graffiti
    var marker = new mapboxgl.Marker()
      .setLngLat([3.7250121, 51.0538286])
      .setPopup(popup15)
      .addTo(map);

    // jaar samen
    var marker = new mapboxgl.Marker()
      .setLngLat([4.9142739, 52.375501])
      .setPopup(popup16)
      .addTo(map);

    // quara
    var marker = new mapboxgl.Marker()
      .setLngLat([5.139616, 52.108811])
      .setPopup(popup17)
      .addTo(map);
    
    // Thionville
    var marker = new mapboxgl.Marker()
      .setLngLat([6.1675872, 49.3579272])
      .setPopup(popup18)
      .addTo(map);

    //Xonrupt longemer
    var marker = new mapboxgl.Marker()
      .setLngLat([6.9266841, 48.0812783])
      .setPopup(popup19)
      .addTo(map);

    //Ziekenhuis
    var marker = new mapboxgl.Marker()
       .setLngLat([6.7614497, 47.5747367])
       .setPopup(popup20)
       .addTo(map);
  
    //Belfort
    var marker = new mapboxgl.Marker()
      .setLngLat([6.8628942, 47.6379599])
      .setPopup(popup21)
      .addTo(map);

    //Bij Bibi
    var marker = new mapboxgl.Marker()
      .setLngLat([3.9764928, 47.6357191])
      .setPopup(popup22)
      .addTo(map);
      




var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")

map.on('load', function () {
        map.resize();
    });
}
