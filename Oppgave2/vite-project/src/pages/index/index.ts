console.log("Hello from index.ts!");
async function fetchData() {
  try {
    const response = await fetch("http://localhost:3000/api/users");
    const data = await response.json();
    console.log(data[0]);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
fetchData();
