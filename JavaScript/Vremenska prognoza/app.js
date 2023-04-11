const API_KEY=`dde669c54dbec53c562abad52d716702`;
const BASE_URL = `https://api.openweathermap.org/data/2.5`;

const CITY_NAME = " Novi PAzar"
const inp = document.querySelector(".input")
const btn = document.querySelector(".btn")

async function getData(city){
const data = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);

const response = await data.json();
return response
}
const countainersCity=document.querySelector(".city")
 
getCityDetails().then((e)=>{
e.forEach((city)=> {
    const cityCard=document.createElement("div");
    cityCard.className="card-city";

    const zona = document.createElement("p");
    zona.innerText= city.timezone
    
});


});

btn.addEventListener("click" , ()=>{
    getData(inp.value).then((res) =>{
        console.log(res)
    });

 });