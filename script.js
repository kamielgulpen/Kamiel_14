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
.setHTML('<h3> Het nestje op de boeroestraat </h3><p>Heerlijk kneuten en niet het bed uit willen omdat we nog midden in de knuffeltrein zitten is iets wat hier niet zelden voorkomt. Maar wat wil je dan ook met zo een mooi leuk en lief meisje als vriendinnetje?!<p> <img src="Nestje_amsterdam.jpeg" alt="" width="100%">  <p>Tijdens het drinken van de klapthee was Kamiel vooral een beetje hangerig geworden en had Yadira veel energie. Een avond wandeling vond de een ook wat leuker dan de ander, kort gezegd zaten we niet helemaal op een level tot we een klein pret sjekkie hadden gerookt en we beiden op een niveau van 0 uitkwamen. <p> <img src="Klapthee.jpeg" alt="" width="100%">')

// Flevopark
var popup2 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Eerste valentijns dag <3 </h3>  <p>De eerste valentijnsdag hadden we als on-officieel stel gevierd wetende dat we ene week/maand later verkering zouden krijgen. Mijn halve telefoon staat vol van fotos van deze dag.<p> <img src="flevopark.jpeg" alt="" width="100%">')

// Koolemansbeynenstraat
var popup3 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Slapen bij mijn ouders(eerste keer als stelletje) </h3> <p>Al hoewel het zeker niet de eerste keer was dat je bij mijn ouders sliep was het wel de eerste keer als officieel stelletje! Mijn ouders zijn ook heel erg blij met zo een leuk meisje in de familie (en ik nog veel blijer!!!).<p> <img src="Koolemansbeynendtraat.jpeg" alt="" width="100%">')

// NDSM
var popup4 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Amsterdam Noord ontdekt </h3><p>Samen op het NDSM werf was dolle pret met een mooi uitzicht bij plek en het bekijken van juppen. Fun fact een van de relaties van Addy is uitgegaan op deze dag! Verder hebben we hier heerlijke bitterballen gegeten<p> <img src="pondje.jpeg" alt="" width="100%">')

// Abcoude
var popup5 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Verjaardag oma </h3><p>Wat ben ik blij dat we tegenwoordig samen naar familie feestjes kunnen :):). Waar ik voorheen vast zat aan ome Gerard of oom Mark kan ik nu wegvluchten met mijn wederhelft naar de dijk. Waar we even kussjes aan elkaar kunnen geven en knuffelen.<p> <img src="Abcoude.jpeg" alt="" width="100%">')

//Fam-weekend-Yadira
var popup6 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> de Jong weekend </h3> <p>Ookal was dit misschien die jou fijnste periode (en fijnste foto) het betekende toch de eerste officiele meet the fam moment en daarmee een zegel op een serieuze relatie. Met als diepte punt dat jij me minstens een uur alleen liet voor het eten en ik niet wist wat ik moest doen:(<p><img src="fw.jpeg" alt="" width="100%">')

//Vader-kind weekend
var popup7 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Vader kind weekend </h3><p>Dit was het eerste serieuzeren weekend dat jij met mij mee ging al bleek het eiuteindelijk minder serieus dan verwacht. Met Leens terreur en de open podium act van de vaders als absoluut diepte punt<p> <img src="vader-kind.jpeg" alt="" width="100%">')

//DTRH
var popup8 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> In het konijnen rol </h3> <p>In het konijnen holletje!! We zijn eigenlijk vooral in ons eigen holletje gebleven tijdens dit festival waar er flink op los gezweet werd in de tent. We hebben natiurlijk ook wel wat van het festival gezien, zo hebben we heerlijk gedanst bij de Mauskovic dance band.<p><img src="dtrh.jpeg" alt="" width="100%">')

//bij ol
var popup9 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Bbq bij Olivier </h3> <p>Ik wordt steeds verliefd als ik naar deze foto kijk. Ik vond het heerlijk om die dag lekker met jou te pronken voor mijn vrienden, en volgensmij is dat aardig gelukt aangezien ze nu nogsteeds altijd naar jou vragen.<p><img src="zf-ol.jpeg" alt="" width="100%">')

//Kruisweg 4 
var popup10 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Laat thuiskomen op de Kruisweg </h3> <p>Na mijn eerste ontmoeting met Yadiras alterego heb ik haar veilig thuis kunnen brengen op kruisweg 4. Vervolgens hebben we nog een hele leuke tijd gehad die ochten ;)<p> <img src="zf-rob,tine.jpeg" alt="" width="100%">')

//Lent
var popup11 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Havana aan de waal </h3><p>Na een brakke dag waren zijn we toch nog even op pad gegaan naar Lent om daar alle muntjes van onze ouder op te maken en in de reuze strand stoel te chillen.<p> <img src="zf-lent.jpeg" alt="" width="100%">')

// Lobok utrecht
var popup12 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Yadira en haar kaak </h3><p>Lombok!! De plek waar jij hoogst waarschijnlijk weer gaat terug keren. Ik hoop stiekem dat er dan weer een verstands kies wordt getrokken om je nog een keer op deze manier te kunnen zien.<p> <img src="smeagol_yadira.jpeg" alt="" width="100%">')

// Nest
var popup13 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Samen chillen op t nest </h3><p>Hier hebben we toch ons debuut gemaakt in de after moevie van het nest, de omstandigheden waren niet geweldig maar volgend jaar als het goed is wel en dan maken we er een nog leuker feestje van <3<3<3<p> <img src="Nest.jpeg" alt="" width="100%">')

// Gent1
var popup14 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Lachen in het appartement in Gent </h3><p>Dit is hoe jij er standaard uitziet als ik je weer aan het kietelen bent. Heerlijk gezicht toch? mIsschien snap je nu iets beter waarom ik je zo vaak kietel<p> <img src="Gent_2.jpeg" alt="" width="100%">')

// Gent2
var popup15 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Cultuur snuiven in Gent </h3><p>Gent was het eerste niet Nederlandse tripje die we samen hadden gemaakt en ik zal hem nooit vergeten (deels door mijn litteken) maar ook door de mooie tijd die ik met je had daar.<p> <img src="Gent.jpeg" alt="" width="100%">')

// een jaar
var popup16 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Een jaartje samen!!! Jammie </h3><p>LEKKEER. Bij de scheepskameel ons eerste jaartje gevierd en wat was dat lekker! Heerlijk gegeten en heerlijke wijn gedronken en later op de avond ook nog heerlijk ... Ik hoop heel erg dat de horeca op 4 Maart weer open gaat zodat we ond 2 jarige jubileum ook zo kunnen vieren. <p> <img src="Jaartje_samen.jpeg" alt="" width="100%">')

// Quara
var popup17 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Quarataine tijd </h3> <p>De langste periode die we samen zijn geweest <3. Hoewel er zeer weinig te doen was hebben we ons toch aardig kunnen vermaken tussen het studeren door.<p> <img src="Nestje_utrecht.jpeg" alt="" width="100%">')

// Thionville
var popup18 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Thionville :0 </h3> <p>Thionville, de plek waar Yadira haar tas was vergeten, de plek waar de saxofonist langer een solo aan het spelen was dan met het bandje mee speelde, de plek waar we in een zeer ongemakkelijk air bnb huis zaten. Oftewel een top plek! <p> <img src="Thionville.jpeg" alt="" width="100%">')

// Xonrupt logemer
var popup19 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Chillen aan het Longemer </h3><p>Aan het Longemer zitten met zijn tweetjes met overdag het vermaak van Joes en savonds lekker kroelen omdat het zo tergent koud kon worden en de eerste keer samen op een echte camping!! <p> <img src="Xanrupt-longemer.jpeg" alt="" width="100%">')

// Ziekenhuis
var popup20 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Yadira for the rescue </h3> <p> Zonder jou weet ik niet zeker of ik hier nog wel gezeten had. Je deed alles goed op dit moment, ik vond het eerlijk gezegd toch een vrij angstige situatie maar door jou voelde het een stuk veiliger. <p> <img src="Ziekenhuis.jpeg" alt="" width="100%">')

// Belfort
var popup21 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Hoogte puntje van Belfort </h3> <p> Na heel wat dieptepunten te hebben gekend in Belfort was het kijken naar dit mooie meisje toch wel een absoluut hoogtepunt. Ik heb enorm van jou genoten in Belfort en vond het eigenlijk helemaal niet zo erg dat we op een zuure camping zaten. Ik was vooral blij dat we samen waren. <p> <img src="Belfort-uiteten.jpeg" alt="" width="100%">')


// Bij bibi
var popup22 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Chillen bij Bibi </h3> <p>Laatste stop van de vakantie bij Bibi. Hier hebben we even lekker bijgetankt zodat jij in een keer naar Nijmegen kon rijden!!! Ik ben nogsteeds onder de indruk van hoe jij dat toen hebt gedaan en zeker het einde. Wat een top wijf ben je<3.<p><img src="Bij_bibi.jpeg" alt="" width="100%">')

// Weert
var popup23 = new mapboxgl.Popup({ offset: 50 }) // add popups
.setHTML('<h3> Weird in Weert </h3> <p>Je zou zo vergeten dat we ook in Weert zijn geweest. Ik moet er nog om lachen als ik er aan denk met de feest tent, het auto ongeluk, de mooie beloofde natuur die niet te vinden was en natuurlijk eht 65+ menu.<p><img src="Weert.jpeg" alt="" width="100%">')

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

    
    //Weert
    var marker = new mapboxgl.Marker()
      .setLngLat([5.710260, 51.252022])
      .setPopup(popup23)
      .addTo(map);
      
      




var directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")

map.on('load', function () {
        map.resize();
    });
}
