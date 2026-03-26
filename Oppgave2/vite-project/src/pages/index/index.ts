async function getUsers() {
  try {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error getUsers:", error);
  }
}
getUsers();

// lag en ny bruker//

async function createUser() {
  const response = await fetch("http://localhost:3000/api/users");
  method: "POST",
  Headers: 
  
}