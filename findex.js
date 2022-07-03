class Fetch {
    async getCurrent(input) {
        const myKey = "d9d4618517e140de98d766a91a28d918";

        //make request to url

        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
        );

        const data = await response.json();

        console.log(data);

        return data;
    }
}

/*geolocation*/
let userPos;
let scrollPos = window.scrollY;
const successCallback = (position) => {
    console.log(position);
};
const errorCallback = (position) => {
    console.log(position);
}
navigator.geolocation.getCurrentPosition(successCallback,
    errorCallback);

// /*interactive*/
// window.addEventListener('scroll', highlight);
// window.addEventListener('click', highlight);

// /* API Asynchronous requests */
// const http = require("https://api.ambeedata.com");
// const options = {
//     method: GET,
//     hostname: "api.ambeedata.com",
//     port: null,
//     path: "/latest/by-lat-lng?lat=12.9889055&lng=77.574044",
//     headers: {
//         xkey: "ef484e291a94243f336352f07d186ffb41ba2516b8c6fbe244456074b66d7ad2",
//         Contenttype: "index.json"
//     }
// };
// const req = http.request(options, function(res) {
//     const chunks = [];
//     res.on("data", function(chunk) {
//         chunks.push(chunk);
//     });
//     res.on("end", function() {
//         const body = Buffer.concat(chunks);
//         console.log(body.toString());
//     });
// });
// req.end();
// /*weathe data*/
// const notificationElement = document.querySelector(".notification");
// const iconElement = document.querySelector(".weathericon");
// const tempElement = document.querySelector(".temperaturevalue p");
// const descElement = document.querySelector(".temperaturedescription p");
// const locationElement = document.querySelector(".location p");
// /*no need for this as I will be using an api*/
// const weather = {
//     temperature: {
//         valye: 18,
//         unit: "celsius"
//     },
//     description: "few clouds",
//     iconId: "Old",
//     city: "London",
//     country: "GB",

//document.querySelector('#search').addEventListener('click', getPokemon);

//function getPokemon(e) {
//    const name = document.querySelector("#pokemonName").value;
//fetch('https://pokeapi.co/api/v2/pokemon/${name}')
//   .then((response) => response.json()).
// then((data) => {
//   document.querySelector(.
//  "#pokemonBox").innerHTML = ' <
// div >
//       <
//     img src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png"
//alt = "ditto" / >
//  <
///div> <
//div class = "pokemonInfo" >
//  <
//h1 >
//Ditto <
///h1> <
//p > Description < /p>'
// })
//.catch((err) => {
//  console.log('Pokemon not Found', err);
//});
//e.preventDefault();
//}
// }