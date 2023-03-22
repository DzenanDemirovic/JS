 let glavni = document.querySelector(".container");
 
 async function getAllUsers(){
let data = await fetch("https://jsonplaceholder.typicode.com/users");
let response = data.json();
return response
  }
  let podaciKorisnika ;
  getAllUsers().then((d) => {
    let podaciKorisnika = d;

podaciKorisnika.forEach(element => {
    createCard(element.name,element.username,element.id);
});

    console.log(podaciKorisnika);
  });

function createCard(name,username,id){
let card = document.createElement("div");
card.className = "card"
let ime = document.createElement("p");
ime.innerText= "Ime"+ " " + name;
let userNAme = document.createElement("username")
userNAme.innerText = "username" + " " + username

card.addEventListener("click", ()=>{
    window.location.href = `index1.html?id=${id}`;
});

card.appendChild(ime);
card.append(userNAme);
glavni.appendChild(card);

}