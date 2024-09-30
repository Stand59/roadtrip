import {Card, Image, Button, Container, Row, Col, Input} from 'reactstrap';
import {useNavigate, Link } from 'react-router-dom';
import RoadtripOptions from './roadtripOptions';

function Roadtrip ({setTrip, trip, setDestination}) {

    const navigate = useNavigate();

    const santaquin = [
        {
            id: 0,
            name: "Rowley's Red Barn",
            image: require("../assets/rowleyNo.jpg"),
            website: "https://rowleysredbarn.com/",
            address: "901 S. 300 W. Santaquin, UT 84655",
            phone: "(801) 754-5511",
            blog: "",
            rating: "",
            featured: false,
            description: "Rowley's Red Barn is a must-visit destination in Santaquin, Utah. The iconic red barn sits on a picturesque farm surrounded by breathtaking views of the Wasatch Mountains. As you enter the property, you'll be greeted by the aroma of fresh-baked pies and other delectable treats. The barn is home to a country store where you can find a wide selection of homemade jams, honey, pickles, and more. They also have a charming gift shop with unique handmade items, perfect for souvenirs. The highlight of Rowley's Red Barn is undoubtedly their famous apple cider donuts, made fresh daily and served warm. The barn is open year-round, and during the fall, visitors can enjoy apple picking and a pumpkin patch. With its warm and welcoming atmosphere, Rowley's Red Barn is a delightful place to stop and spend some time in Santaquin.",
            city: "Santaquin",
            photoOK: "yes"
        }
    ]

    const beaver = [
        {
            id: 0,
            name: "Cove Fort",
            image: require("../assets/coveFort.jpg"),
            website: "https://www.churchofjesuschrist.org/learn/historic-sites/utah/cove-fort?lang=eng",
            address: "Cove Fort, HC-74 Box 6500 Beaver, Utah 84713",
            phone: "435-438-5547",
            blog: "",
            rating: "",
            featured: false,
            description: "Cove Fort is a fascinating historical site located in Utah, USA. This unique fort was built in 1867 and served as a way station for travelers on the Mormon Pioneer and California National Historic Trails. The fort was strategically located at the junction of two major highways, making it an important stop for travelers in the late 1800s. Today, visitors can take a guided tour of the fort and learn about its rich history, including the stories of the families who lived and worked there. The fort has been restored to its original condition, with authentic furnishings and period-appropriate decor. Visitors can also explore the surrounding grounds and gardens, which feature a variety of plants and trees native to the region. Cove Fort is a fascinating glimpse into the past and a must-visit destination for history buffs and anyone interested in the pioneering spirit of the American West.",
            city: "Beaver",
            photoOK: "yes"
        },
        {
            id: 1,
            name: "Fremont Indian State Park and Museum",
            image: require("../assets/fremont.jpg"),
            website: "https://stateparks.utah.gov/parks/fremont-indian/",
            address: "Fremont Indian State Park and Museum, 3820 Clear Creek Canyon Rd, Sevier, UT 84766",
            phone: "435-527-4631",
            blog: "",
            rating: "",
            featured: false,
            description: "Fremont Indian State Park, located in central Utah, is a stunning destination for outdoor enthusiasts and history buffs alike. The park is named after the Fremont Indians, who lived in the region from around 700 to 1300 AD, and left behind an impressive collection of rock art and ancient dwellings. Visitors can explore the park's many hiking trails, which wind through picturesque canyons and offer stunning views of the surrounding mountains. The park also features a museum that showcases the area's rich cultural history and highlights the contributions of the Fremont Indians to the region's heritage. In addition, Fremont Indian State Park is a great spot for camping, with multiple campgrounds offering a variety of amenities and breathtaking views. Whether you're interested in history, hiking, or simply enjoying the natural beauty of Utah, Fremont Indian State Park is a must-see destination.",
            city: "Beaver",
            photoOK: "yes"
        },
    ]

    const cedarCity = [
        {
            id: 0,
            name: "Frontier Homestead Museum",
            image: require("../assets/fronteir.jpg"),
            website: "https://frontierhomestead.org/",
            address: "Frontier Homestead State Park Museum, `635 N Main St, Cedar City, UT 84721",
            phone: "(435) 586-9290",
            blog: "",
            rating: "",
            featured: false,
            description: "The Frontier Homestead Museum in Cedar City, Utah is a blast from the past! If you want to experience life like the pioneers did, this is the place to be. You can explore a replica of a pioneer cabin, a blacksmith shop, a dairy barn, and even a schoolhouse. Plus, there are horse-drawn carriages, wagons, and farm equipment on display that will take you back in time. The museum offers tours and educational programs for all ages, so it's perfect for families, history buffs, and anyone who wants to have a fun and informative experience. Don't miss out on this gem of a museum in Cedar City - it's definitely worth a visit!",
            city: "Cedar City",
            photoOK: "yes"
        },
        {
            id: 0,
            name: "Utah Shakespeare Festival",
            image: require("../assets/shakespear.jpg"),
            website: "https://www.bard.org/",
            address: "Utah Shakespeare Festival, 195 W Center St, Cedar City, UT 84720",
            phone: "435-586-7878",
            blog: "",
            rating: "",
            featured: false,
            description: `If you're a fan of Shakespeare, then the Shakespearean Festival in Cedar City, Utah is a must-see event! This festival is a magical celebration of all things Shakespearean, with performances of his plays in a stunning outdoor amphitheater.

            The festival features a range of performances, from classic Shakespearean plays like Romeo and Juliet and Macbeth, to lesser-known works like The Two Noble Kinsmen and Cymbeline. The actors are incredibly talented and bring the characters to life in a way that will leave you feeling like you're part of the action.
            
            Not only is the festival a treat for the ears, but it's also a feast for the eyes. The costumes and sets are absolutely gorgeous, transporting you to another time and place. And if you need a break from the performances, there are plenty of food vendors and craft booths to explore.
            
            Whether you're a die-hard Shakespeare fan or just looking for a unique and entertaining experience, the Shakespearean Festival in Cedar City, Utah is a must-visit destination. Don't miss out on this unforgettable celebration of the Bard and his timeless works!`,
            city: "Cedar City",
            photoOK: "yes"
        },
        {
            id: 0,
            name: "Cedar Breaks National Monument",
            image: require("../assets/cedarBreak.jpg"),
            website: "https://www.nps.gov/cebr/index.htm",
            address: "2390 West Highway 56 Suite #11 Cedar City, UT 84720",
            phone: "(435) 986-7120",
            blog: "",
            rating: "",
            featured: false,
            description: "Cedar Breaks National Monument is a stunning natural wonder located in southwestern Utah. This breathtaking destination boasts a massive natural amphitheater that stretches over 3 miles in length and almost 2,500 feet deep, showcasing vibrant colors of orange, red, and pink, which are especially impressive during sunrise and sunset. The monument is home to a diverse range of flora and fauna, including bristlecone pine trees, mule deer, and golden eagles. Visitors can explore the monument through various hiking trails and overlooks, offering incredible panoramic views of the surrounding landscape. Cedar Breaks is truly a hidden gem of the American Southwest, and a must-see destination for any nature enthusiast or adventure seeker.",
            city: "Cedar City",
            photoOK: "yes"
        },
    ]

    const stGeorge = [
        {
            id: 0,
            name: "st george1",
            image: require("../assets/jolla.jpg"),
            website: "https://www.sandiego.org/explore/coastal/la-jolla.aspx",
            address: "la Jolla, San Diego, CA",
            phone: "N/A",
            blog: "",
            rating: "",
            featured: false,
            description: "beach description",
            city: "St. George"
        },
        {
            id: 0,
            name: "st george2",
            image: require("../assets/jolla.jpg"),
            website: "https://www.sandiego.org/explore/coastal/la-jolla.aspx",
            address: "la Jolla, San Diego, CA",
            phone: "N/A",
            blog: "",
            rating: "",
            featured: false,
            description: "beach description",
            city: "St George"
        },
        {
            id: 0,
            name: "st george3",
            image: require("../assets/jolla.jpg"),
            website: "https://www.sandiego.org/explore/coastal/la-jolla.aspx",
            address: "la Jolla, San Diego, CA",
            phone: "N/A",
            blog: "",
            rating: "",
            featured: false,
            description: "beach description",
            city: "St. George"
        },
    ]

    const lasVegas = [
        {
            id: 0,
            name: "Lion Habitat Ranch",
            image: require("../assets/lion.jpg"),
            website: "https://lionhabitatranch.org/",
            address: "Lion Habitat Ranch inc, 382 Bruner Ave, Henderson, NV 89044",
            phone: "(702) 595-6666",
            blog: "",
            rating: "",
            featured: false,
            description: "The Lion Habitat Ranch in Las Vegas is an incredible destination that offers visitors a rare opportunity to get up close and personal with some of the world's most magnificent animals. Located just a short drive from the Las Vegas Strip, this 8-acre ranch is home to over 40 lions, including white lions, as well as a variety of other exotic animals. Visitors can take guided tours of the facility, during which they will learn about the animals, their behavior, and the important conservation efforts being made to protect them. The highlight of any visit to the Lion Habitat Ranch is undoubtedly the chance to watch the lions in action, as they run, play, and interact with each other in their natural habitat. Whether you're a wildlife enthusiast or simply looking for an unforgettable experience, the Lion Habitat Ranch is a must-visit destination in Las Vegas.",
            city: "Las Vegas"
        },
        {
            id: 0,
            name: "Wet'n'Wild Las Vegas",
            image: require("../assets/wetWild.jpg"),
            website: "https://en.wikipedia.org/wiki/Wet_%27n_Wild_(Las_Vegas)",
            address: "Wet'n'Wild Las Vegas, 7055 S Fort Apache Rd, Las Vegas, NV 89148",
            phone: " (702) 979-1600",
            blog: "",
            rating: "",
            featured: false,
            description: "Wet'n'Wild is an exciting water park located in Las Vegas, offering visitors an escape from the heat of the desert. With over 25 thrilling attractions, including water slides, wave pools, and lazy rivers, there is something for everyone at this water park. The park features several adrenaline-pumping slides, such as the Tornado, where riders are hurled into a massive funnel, and the Constrictor, a tube slide that twists and turns through tight curves. There are also several attractions designed for families and younger children, such as the Splash Island play area and the Kiddie Cove. Visitors can rent cabanas for added comfort and privacy or grab a bite to eat at one of the park's several restaurants and snack bars. Whether you're seeking a day of relaxation or non-stop thrills, Wet'n'Wild is the perfect destination for a fun-filled day in Las Vegas.",
            city: "Las Vegas"
        },
        {
            id: 0,
            name: "Marvel Avengers Station",
            image: require("../assets/marvel.jpg"),
            website: "https://www.stationattraction.com/",
            address: "Marvel Avengers S.T.A.T.I.O.N., 3300 S Las Vegas Blvd, Las Vegas, NV 89109",
            phone: "702-894-7626",
            blog: "",
            rating: "",
            featured: false,
            description: "Marvel Avengers Station is a one-of-a-kind attraction located in Las Vegas that immerses visitors into the world of the Marvel Cinematic Universe. As soon as you enter the facility, you are transported into the world of S.H.I.E.L.D, the espionage agency that features prominently in the movies. The Station features a variety of interactive exhibits and displays that allow you to explore the world of Marvel's most beloved superheroes, including Iron Man, Captain America, Thor, and the Hulk. Visitors can participate in various simulations and interactive experiences that allow them to test their own superhero abilities and learn about the science behind their favorite characters. Whether you're a die-hard Marvel fan or simply looking for a fun and interactive experience, the Marvel Avengers Station in Las Vegas is definitely worth a visit.",
            city: "Las Vegas"
        },
    ]
    const sanDiego = [
        {
            id: 0,
            name: "La Jola Shores Beach",
            image: require("../assets/jolla.jpg"),
            website: "https://www.sandiego.org/explore/coastal/la-jolla.aspx",
            address: "la Jolla, San Diego, CA",
            phone: "N/A",
            blog: "",
            rating: "",
            featured: false,
            description: "beach description",
            city: "San Diego"
        },
        {
            id: 0,
            name: "San Diego2",
            image: require("../assets/soap.jpg"),
            website: "https://www.thesoapfactoryutah.com/",
            address: "1411 W Center St, Provo, UT 84601",
            phone: "(801) 377-2494",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get clean and smell good while also having a blast? Head over to The Soap Factory! It's like Willy Wonka's factory, but instead of candy, they make soap! You can mix and match different scents and colors to create your perfect soap bar. Plus, you'll leave smelling like a fresh spring day, which is much better than smelling like a dirty sock.",
            city: "San Diego"
        },
        {
            id: 0,
            name: "San Diego3",
            image: require("../assets/soap.jpg"),
            website: "https://www.thesoapfactoryutah.com/",
            address: "1411 W Center St, Provo, UT 84601",
            phone: "(801) 377-2494",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get clean and smell good while also having a blast? Head over to The Soap Factory! It's like Willy Wonka's factory, but instead of candy, they make soap! You can mix and match different scents and colors to create your perfect soap bar. Plus, you'll leave smelling like a fresh spring day, which is much better than smelling like a dirty sock.",
            city: "San Diego"
        },
        {
            id: 0,
            name: "San Diego4",
            image: require("../assets/soap.jpg"),
            website: "https://www.thesoapfactoryutah.com/",
            address: "1411 W Center St, Provo, UT 84601",
            phone: "(801) 377-2494",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get clean and smell good while also having a blast? Head over to The Soap Factory! It's like Willy Wonka's factory, but instead of candy, they make soap! You can mix and match different scents and colors to create your perfect soap bar. Plus, you'll leave smelling like a fresh spring day, which is much better than smelling like a dirty sock.",
            city: "San Diego"
        },
    ]

    const provo = [
        {
            id: 0,
            name: "Soap Factory",
            image: require("../assets/soap.jpg"),
            website: "https://thesoapfactory.business.site/",
            address: "Soap Factory, 1411 W Center St, Provo, UT 84601",
            phone: "tel:(801) 377-2494",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get clean and smell good while also having a blast? Head over to The Soap Factory! It's like Willy Wonka's factory, but instead of candy, they make soap! You can mix and match different scents and colors to create your perfect soap bar. Plus, you'll leave smelling like a fresh spring day, which is much better than smelling like a dirty sock.",
            city: "Provo"
        },
        {
            id: 1,
            name: "Quarry: Indoor Climbing Center",
            image: require("../assets/quarry.jpg"),
            website: "https://www.provo.org/community/parks-and-trails/quarry-park",
            address: "Quarry: Indoor Climbing Center, 1700 E 650 S, Provo, UT 84606",
            phone: "tel:(801) 852-6606",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to feel like you're in a post-apocalyptic wasteland without all the actual danger and destruction? The Quarry has got you covered! This abandoned rock quarry has been turned into a park with hiking trails, a pond, and plenty of spots to sit and contemplate the meaning of life. Just don't fall in the pond, because who knows what kind of creatures lurk in there.",
            city: "Provo"
        },
        {
            id: 3,
            name: "Hruska's Kolaches",
            image: require("../assets/kolache.jpg"),
            website: " https://hruskaskolaches.com/",
            address: "Hruska's Kolaches, 434 W Center St, Provo, UT 84601",
            phone: "tel:(801) 607-2485",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to satisfy your hunger with some Eastern European goodness? Hruska's Kolaches has got you covered! With a variety of savory and sweet kolaches, you'll feel like you're in Prague. Plus, the warm and fluffy dough will make you want to stay forever.",
            city: "Provo"
        },
        {
            id: 4,
            name: "Peaks Ice Arena",
            image: require("../assets/peak.jpg"),
            website: "https://www.provo.org/community/peaks-ice-arena",
            address: "Peaks Ice Arena, 100 N Seven Peaks Blvd, Provo, UT 84606",
            phone: "tel:(801) 852-7465",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to skate like a pro and show off your moves on the ice? The Peaks Ice Arena is the place to be! It's like Dancing With the Stars, but with skates and fewer sequins. Plus, you can't beat the feeling of the wind in your hair as you glide across the ice. Just don't forget to wear a helmet, because falling on your head is never a good thing.",
            city: "Provo"
        },
        {
            id: 5,
            name: "BYU Creamery on 9th",
            image: require("../assets/byucream.jpg"),
            website: "https://creamery.byu.edu/",
            address: "BYU Creamery on 9th, 1209 N 900 E, Provo, UT 84602",
            phone: "tel:(801) 422-2663",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to cool off and get your dairy fix? Head over to The BYU Creamery! They have all kinds of delicious ice cream flavors, like raspberry fudge chunk and mint brownie. Plus, you can pretend you're in an old-timey soda fountain and order a milkshake. Just don't forget to bring your poodle skirt and leather jacket.",
            city: "Provo"
        },
        {
            id: 6,
            name: "Provo City Library",
            image: require("../assets/library.jpg"),
            website: "https://www.provolibrary.com/",
            address: "Provo City Library, 550 N University Ave, Provo, UT 84601",
            phone: "tel:(801) 852-6650",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get lost in a good book and feel smart? Head over to the Provo City Library! They have all kinds of books, from classic literature to trashy romance novels. Plus, you can",
            city: "Provo"
        },
        {
            id: 7,
            name: "Center Street Musical Theatre",
            image: require("../assets/theater.webp"),
            website: "https://centerstreetmt.com/",
            address: "Center Street Musical Theatre, 177 W Center St, Provo, UT 84601",
            phone: "tel:(801) 373-4485",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get entertained and show off your singing skills? Head over to Center Street Musical Theatre! They have live musical performances that are sure to make you tap your feet and sing along. Plus, you can pretend you're auditioning for American Idol and belt out your favorite showtunes. Just don't forget your jazz hands.",
            city: "Provo"
        },
        {
            id: 8,
            name: "BYU Book Store",
            image: require("../assets/byustore.jpg"),
            website: "https://www.byustore.com/",
            address: "BYU Book Store, 1075 E Campus Dr, Provo, UT 84602",
            phone: "tel:(801) 422-2400",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to get your study on and show off your school spirit? Head over to the BYU Bookstore! They have all the textbooks you need to get your learn on, plus BYU apparel to show off your school pride. Plus, you can pretend you're Hermione Granger and buy all the textbooks you'll never actually read. Just don't forget to bring your wand.",
            city: "Provo"
        },
        {
            id: 9,
            name: "Provo Beach Resort: Family Fun",
            image: require("../assets/beach.jpg"),
            website: "https://provobeach.com/",
            address: "Provo Beach Resort, 4801 N University Ave #210, Provo, UT 84604",
            phone: "tel:(801) 224-5001",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to have a beach day without leaving the landlocked state of Utah? Provo Beach has got you covered! With an indoor surfing simulator, a ropes course, laser tag, mini golf, and a giant arcade, you'll feel like you're at the beach... if the beach also had laser guns and neon lights. Come for the waves, stay for the fun!",
            city: "Provo"
        },
        {
            id: 10,
            name: "High Country Rafting Adventure",
            image: require("../assets/beach.jpg"),
            website: "https://www.viator.com/tours/Provo/High-Country-Adventure/d50801-132412P1?pid=P00094667&mcid=42383&medium=link&medium_version=selector&campaign=PrivateUtahHighCountryAdventure",
            address: "Provo Beach Resort, 4801 N University Ave #210, Provo, UT 84604",
            phone: "tel:(801) 224-5001",
            blog: "",
            rating: "",
            featured: false,
            description: "Want to have a beach day without leaving the landlocked state of Utah? Provo Beach has got you covered! With an indoor surfing simulator, a ropes course, laser tag, mini golf, and a giant arcade, you'll feel like you're at the beach... if the beach also had laser guns and neon lights. Come for the waves, stay for the fun!",
            city: "Provo"
        },
        
    ];

    const handleChange = event => {
        // console.log(event.target.value);
        
        setTrip(event.target.value);
    
      };
    
   const provoToSanDiego = [ {santaquin}, {beaver}, {cedarCity}, {stGeorge}, {lasVegas} ]
   const sanDiegoToProvo = [{lasVegas}, {stGeorge}, {cedarCity}, {beaver}, {santaquin}]
   const saltLakeToSanDiego = [{provo}, {santaquin}, {beaver}, {cedarCity}, {stGeorge}, {lasVegas}]
   const sanDiegoToSaltLake = [{lasVegas}, {stGeorge}, {cedarCity}, {beaver}, {santaquin},{provo}]
   const saltLakeToGilbert = [{provo}, {santaquin}, {beaver}, {cedarCity}, {stGeorge}, {lasVegas}]
   const gilbertToSaltLake = [{lasVegas}, {stGeorge}, {cedarCity}, {beaver}, {santaquin},{provo}]
      
let newTrip = []

if (trip === 'provoToSanDiego' ) {
    newTrip = provoToSanDiego
} if (trip === 'sanDiegoToProvo' ) {
    newTrip = sanDiegoToProvo
} if (trip === 'sanDiegoToSaltLake' ) {
    newTrip = sanDiegoToSaltLake
} if (trip === 'saltLakeToSanDiego' ) {
    newTrip = saltLakeToSanDiego
} if (trip === 'saltLakeToGilbert' ) {
    newTrip = saltLakeToGilbert
} if (trip === 'gilbertToSaltLake' ) {
    newTrip = gilbertToSaltLake
}else {
    
   console.log('error')
}

   

   newTrip.forEach((element, index) => {
        element.distance = index + 1;
        });


    // console.log(newTrip)

// const updatedArray = provoToSanDiego.map((element) => ({
//     ...element,
//     distance: +1
//   }));
   let n=6

//    console.log(provoToSanDiego)
    

   const shuffledCity = newTrip.sort(() => 0.5 - Math.random());
   let selectedCity = shuffledCity.slice(0, n);

//    selectedCity.sort((a, b) => a.age - b.age);
var res = selectedCity.sort(({distance:a}, {distance:b}) => a-b);


//    console.log(res)

//    selectedCity.map((item.index)) => (

//    )     

const shuffledCity2 = newTrip.sort(() => 0.5 - Math.random());
var res2 = shuffledCity2.sort(({distance:a}, {distance:b}) => a-b);
// let newSelectedCity2 = Object.value(res2);

// console.log(res2);

let city20 = '';
let city21 = '';
let city22 = '';
let city23 = '';
let city24 = '';
let city25 = '';
// let stop0 = '';
// let stop1 = '';
// let stop2 = '';

let max = 5
let min = 0
// let b = Math.floor(Math.random() * (max - min + 1) + min)
// console.log(b)

//  city22 = Object.value(cedarCity)[0]


res2.map((item, idx) => (
    eval('city2' + [idx] + '=' + 'Object.values(item)[0]'
    // + 'stop' + [idx] + '=' + 
    )
    // city20 = Object.values(cedarCity)[0]
    // eval('city2' + [idx] + '= ' + [item] + '.values(obj)[0];')
))

let nb = 3

let shuffledDestination20 = city20.sort(() => 0.5 - Math.random());
let stop0 = shuffledDestination20.slice(0, nb);

let shuffledDestination21 = city21.sort(() => 0.5 - Math.random());
let stop1 = shuffledDestination21.slice(0, nb);

let shuffledDestination22 = city22.sort(() => 0.5 - Math.random());
let stop2 = shuffledDestination22.slice(0, nb);

let shuffledDestination23 = city23.sort(() => 0.5 - Math.random());
let stop3 = shuffledDestination23.slice(0, nb);





let useMe2 = []

    if (stop0 !== '') {
        useMe2.push(stop0);
    } 

    if (stop1 !== '') {
        useMe2.push(stop1);
    } 

    if (stop2 !== '') {
        useMe2.push(stop2);
    } 

    if (stop3 !== '') {
        useMe2.push(stop3);
    } 

    if (city24 !== '') {
        let shuffledDestination24 = city24.sort(() => 0.5 - Math.random());
    let stop4 = shuffledDestination24.slice(0, nb);

        useMe2.push(stop4);
    } 

    if (city25 !== '') {
        let shuffledDestination25 = city25.sort(() => 0.5 - Math.random());
        let stop5 = shuffledDestination25.slice(0, nb);
        useMe2.push(stop5);
    } 

    // useMe2.push(stop0);
    // useMe2.push(stop1);
    // useMe2.push(stop2);

// console.log(useMe2)




   let newSelectedCity = Object.values(res);



//    console.log(newSelectedCity2)


   let city0 = '';
   let city1 = '';
   let city2 = '';
   let city3 = '';
   let city4 = '';
   let city5 = '';

   let ready0 = '';
   let ready1 = '';
   let ready2 = '';
   let ready3 = '';
   let ready4 = '';
   let ready5 = '';

   let listo0 = '';
   let listo1 = '';
   let listo2 = '';
   let listo3 = '';
   let listo4 = '';
   let listo5 = '';
  
   newSelectedCity.map((item, idx) => (
        eval( 'city' + [idx] + '=' + 'Object.values(item)[0];' + 'ready' + [idx] + '=' + 'Math.floor(Math.random() *' + 'city' + [idx] + '.length);' + 'listo' + [idx] + '=' + 'city' + [idx] + '[ready' + [idx] + ']' )
        //    const item2 = item1[randomIndex];
        

   ) )


   let cityName0 = '';
   let cityName1 = '';
   let cityName2 = '';
   let cityName3 = '';
   let cityName4 = '';
   let cityName5 = '';
   

 


let useMe = []

if (listo0 !== '') {
    useMe.push(listo0);
} 

if (listo1 !== '') {
    useMe.push(listo1);
} 

if (listo2 !== '') {
    useMe.push(listo2);
} 

if (listo3 !== '') {
    useMe.push(listo3);
} 
if (listo4 !== '') {
    useMe.push(listo4);
} 
if (listo5 !== '') {
    useMe.push(listo5);
} 

useMe.map((item, idx) => (
    eval('cityName' + [idx] + '=' + 'listo' + [idx] + '.city;')
))



let cityNamed0 = cityName0.replace(/\s/g, '');
let cityNamed1 = cityName1.replace(/\s/g, '');
let cityNamed2 = cityName2.replace(/\s/g, '');
let cityNamed3 = cityName3.replace(/\s/g, '');
let cityNamed4 = cityName4.replace(/\s/g, '');
let cityNamed5 = cityName5.replace(/\s/g, '');


// console.log(listo1)
// console.log(listo2)
// console.log(useMe)

//    use this
//    console.log(item)
//    const item1 = Object.values(item)[0]
  

//    const randomIndex = Math.floor(Math.random() * item1.length);
//    const item2 = item1[randomIndex];






//    console.log(item2)
//    console.log(newSelectedCity)
//    console.log(item)

//    var result = newSelectedCity.filter(obj => {
//     return obj.id === 2
//   })

//   console.log(result)


    // console.log(selectedCity)

//    let sample2= selectedCity.map(a => a);
//    console.log(sample2)


//    const shuffledLocation = selectedCity.sort(() => 0.5 - Math.random());
//    let selectedLocation = shuffledLocation.slice(0, n);

//    console.log(newSelectedCity);




 let capitolized = trip.charAt(0).toUpperCase() + trip.slice(1);
 let readyToUse = capitolized.replace(/([A-Z])/g, ' $1').trim()

 console.log(capitolized)
 

    return (
        <div>
            <Container>
            <Row className='my-4'>

<Col sm={2}></Col>
<Col >
    <h1 id='center' className='mt-4'>
        RoadTrip Stops
    </h1>
</Col>
<Col sm={2}></Col>
</Row>
<Row className="mb-4">
<Col>

</Col>
<Col>
 <div className='mb-2'>What's your destination? </div>
 <Input type="select" onChange={handleChange}>
    <option key="1" value="provoToSanDiego">Provo to San Diego</option>
    <option key="2" value="sanDiegoToProvo">San Diego to Provo</option>
    <option key="3" value="sanDiegoToSaltLake">San Diego to Salt Lake</option>
    <option key="4" value="saltLakeToSanDiego">Salt Lake to San Diego</option>
    <option key="5" value="saltLakeToGilbert">Salt Lake to Gilbert</option>
    <option key="6" value="gilbertToSaltLake">Gilbert to Salt Lake</option>

 </Input>
</Col>
<Col>

</Col>
</Row>
<Row>
<h1 className='my-4'>{readyToUse}</h1>

</Row>
<Row>
    <Col sm={4}>
        <Button>Generate a Route</Button>
    </Col>  

{/* {shuffledCity2.map((item, idx) => (
    {item.[]}
))} */}

<div>
{useMe2.map((recipe, idx) => {
return <div>
    <Row className='mt-5'>
    <Col>
    <h2 >{eval('cityName' + [idx])}</h2>
    </Col>
    <Col>
    </Col>
    <Col>
    <Button onClick={() => {
        // var shortName = item.short_name;
        // navigate(shortName);
        // let lastName =  item.substring(item.indexOf(" ") + 1);
        // console.log(item)
        // setDestination(eval('cityName' + [idx]));
        navigate(`/city/` + eval('cityNamed' + [idx]))
        }}>
        See All
    </Button>
    </Col>
    </Row>
    <Row>
    {}
{recipe.map((item, index) => {
return <Col sm={12} md={6} xl={4} className="mb-5"> <span key={index}>

                            
                            <Card
                                style={{
                                    backgroundColor: '#5637DD'
                                }}
                                // onClick={() => {
                                //     navigate('/');
                                //         }
                                //      }
                                >
                                <img
                                    src={item.image}
                                    height="50%"
                                    // onClick={() => {
                                    //     navigate()
                                    //     }
                                    //  }
                                />
                                <h1 style={{
                                    color: '#fff'
                                }}>{item.name} -{item.city}</h1>
                                <p>{item.description}</p>
    
                                <Row className='mb-3'>
                                    <Col ms={1}>
                                    
                                    </Col>
                                    <Col ms={4}>
                                        <Button as="a" href={item.phone}>Call</Button>
                                    </Col>
                                    <Col ms={2}>
                                    
                                    </Col>
                                    <Col ms={4}>
                                        
                                        <Button as="a" href={'https://www.google.com/maps/search/?api=1&query=' + item.address} target="_blank"> Directions </Button>
                                    </Col>
                                    <Col ms={1}>
                                    
                                    </Col>
                                </Row>
                                <Button color="primary" as="a" href={item.website} target="_blank" rel="noopener noreferrer">Visit Their Website</Button>
                                </Card>
                              


</span>
</Col> 
})}
</Row>
</div>
})}
</div>


{/* <RoadtripOptions useMe2={useMe2} /> */}

{/* <h2>Stop 2</h2>
{city21.map((item, idx) => (
                        <Col sm={12} md={4} className="my-4">
                            
                        <Card
                            style={{
                                backgroundColor: '#5637DD'
                            }}
                            // onClick={() => {
                            //     navigate('/');
                            //         }
                            //      }
                            >
                            <img
                                src={item.image}
                                height="50%"
                                // onClick={() => {
                                //     navigate()
                                //     }
                                //  }
                            />
                            <h1 style={{
                                color: '#fff'
                            }}>{item.name}</h1>
                            <p>{item.description}</p>

                            <Row className='mb-3'>
                                <Col ms={1}>
                                
                                </Col>
                                <Col ms={4}>
                                    <Button as="a" href={item.phone}>Call</Button>
                                </Col>
                                <Col ms={2}>
                                
                                </Col>
                                <Col ms={4}>
                                    
                                    <Button as="a" href={'https://www.google.com/maps/search/?api=1&query=' + item.address} target="_blank"> Directions </Button>
                                </Col>
                                <Col ms={1}>
                                
                                </Col>
                            </Row>
                            </Card>
                            </Col> 
                         )
                        )}
<h2>Stop 3</h2>
<Row>
{city22.map((item, idx) => (
                        <Col sm={12} md={4} className="my-4">
                            
                        <Card
                            style={{
                                backgroundColor: '#5637DD'
                            }}
                            // onClick={() => {
                            //     navigate('/');
                            //         }
                            //      }
                            >
                            <img
                                src={item.image}
                                height="50%"
                                // onClick={() => {
                                //     navigate()
                                //     }
                                //  }
                            />
                            <h1 style={{
                                color: '#fff'
                            }}>{item.name}</h1>
                            <p>{item.description}</p>

                            <Row className='mb-3'>
                                <Col ms={1}>
                                
                                </Col>
                                <Col ms={4}>
                                    <Button as="a" href={item.phone}>Call</Button>
                                </Col>
                                <Col ms={2}>
                                
                                </Col>
                                <Col ms={4}>
                                    
                                    <Button as="a" href={'https://www.google.com/maps/search/?api=1&query=' + item.address} target="_blank"> Directions </Button>
                                </Col>
                                <Col ms={1}>
                                
                                </Col>
                            </Row>
                            </Card>
                            </Col> 
                         )
                        )}
</Row> */}

<h2>Auto Generated Route</h2>
</Row>
            <Row className="mb-4">
               
                {useMe.map((item, idx) => (
                        <Col sm={12} md={4} className="my-4">
                            
                        <Card
                            style={{
                                backgroundColor: '#5637DD'
                            }}
                            // onClick={() => {
                            //     navigate('/');
                            //         }
                            //      }
                            >
                            <img
                                src={item.image}
                                height="50%"
                                // onClick={() => {
                                //     navigate()
                                //     }
                                //  }
                            />
                            <h1 style={{
                                color: '#fff'
                            }}>{item.name} -{item.city}</h1>
                            <p>{item.description}</p>

                            <Row className='mb-3'>
                                <Col ms={1}>
                                
                                </Col>
                                <Col ms={4}>
                                    <Button as="a" href={item.phone}>Call</Button>
                                </Col>
                                <Col ms={2}>
                                
                                </Col>
                                <Col ms={4}>
                                    
                                    <Button as="a" href={'https://www.google.com/maps/search/?api=1&query=' + item.address} target="_blank"> Directions </Button>
                                </Col>
                                <Col ms={1}>
                                
                                </Col>
                            </Row>
                            </Card>
                            </Col> 
                         )
                        )
                        } 
                </Row>
            </Container>
        </div>
    )

}

export default Roadtrip;
