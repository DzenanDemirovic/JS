const params = new URLSearchParams(window.location.search);
const id = params.get("id");
console.log(id);
async function getAllUsers(){
    let data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/post`
    );
    let response = data.json();
    return response
      };