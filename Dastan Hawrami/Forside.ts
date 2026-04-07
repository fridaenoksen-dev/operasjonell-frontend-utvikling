interface Bruker {
    id: number;
    name: string;
    email:string;
}

//Jeg skal legge til her API //
constapiUrl = "http://localhost:3000/api/user";

async function getUser(){
    try{
        const response = await fetch()
        const data: Bruker[] = await response.json();
        console.log("Alle brukere" , data);
        
    } catch (error) {
        console.log("Vi kunne ikke hente brukere", error);
        
    }
    
}
async function creatUser(nyBruker: Bruker){
    try{
        const response = await fetch(http://localhost:3000/api/user, {
        method: "PUT"
        headers: {"contetn-Type": "application/json"
            body: JSON.stringify(nyBruker),
        });

        const data: Bruker = await response.json();
        console.log("Bruker er laget i databasen" , data);
        
    } catch (error) {
        console.log("Vi kunne ikke lage brukere", error);
        
    }
    
}


async function updateUser(id: number , oppdaterBruker: Bruker){
    try{
        const response = await fetch(http://localhost:3000/api/user, {
        method: "PUT"
        headers: {"contetn-Type": "application/json"
            body: JSON.stringify(oppdaterBruker),
        });

        const data: Bruker[] = await response.json();
        console.log("Bruker er oppdatert" , data);
        
    } catch (error) {
        console.log("Vi kunne ikke oppdatere brukere", error);
        
    }
    
}

async function deleteUser(id: number){
    try{
        await fetch (http://localhost:3000/api/user, {
        method: "Delete"

        });
        console.log("Bruker med id:? er slettet);
        
    } catch (error) {
        console.log("Vi kunne ikke slette brukere", error);
        
    }
    
}

