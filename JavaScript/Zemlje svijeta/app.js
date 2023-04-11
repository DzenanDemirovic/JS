let glavni = document.querySelector(".country");
async function getAllCoutry(){
    try{
const response = await fetch("https://restcountries.com/v3.1/all");
const data= await response.json();
return data;
    }catch(error){
        console.error(error);
    }
}

getAllCoutry().then((e)=>{
    console.log(e);
})
async function getCountryDetails(){
try{
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const data = await response.json();
    return data;
}catch(error){
    console.error(error);
    +



    
}
}
const countriesContainer =document.querySelector(".country");


getCountryDetails().then((e) =>{
    e.forEach((country) => {
        const countryCard = document.createElement("div");
        countryCard.className = "country-card";

        const ime = document.createElement("p");
        ime.innerText = country.name.common;

        countryCard.appendChild(ime);
        countryCard.appendChild(glavni);
        countriesContainer.appendChild(countryCard);

        const glavni = document.createElement("p");
        glavni.innerText=country.capital;
    });
    
});















