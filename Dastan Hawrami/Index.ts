async function getUsers() {
    const response = await fetch("http://localhost:3000/api/users");
        const data = await response.json();
        console.log("alle brukere:" , data);
        
}

async function createUser() {
    const response = await fetch("httå://localhost:3000/api/users", {
    method: "POST",
    headers: {
        "content-type": "application/json",
    },
    body: JSON.stringfy({name: "Dastan" , email: "dastan@yahoo.no"}),
});
const data = await Response.json();
console.log("Ny bruker laget av bruker" , data);

async function updateUsers() {
    const response = await fetch ("http://localhost:3000/api/user/1" , {
        method: "PUT",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringfy({name :Nytt navn}),
    }),
    const data = await response.json();
    console.log("Bruker er oppdater i systemet", data);
    
}

async function deleteUsers() {
    await fetch("http://localhost:3000/api/user/1", {
        method: "Delete"

    });
    console.log("Bruker er slettet i databasen");
    
    
}
