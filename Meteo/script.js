// Pour réaliser cet exercice, vous utiliserez l'api d'openweather.
// Ici l'end point à utiliser --> https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// Remplacez lat et lon par les coordonnées de votre choix.
// Remplacez API key par votre clé d'API. ( s'inscrire sur le site d'openweather pour obtenir une clé d'API)
//https://api.openweathermap.org/data/2.5/weather?lat=48.8534&lon=2.3488&appid=26711d7f720887fc47b5c6f567f84f23


//geolocalisation

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=26711d7f720887fc47b5c6f567f84f23&units=metric")
        .then((response) => response.json())
        .then((data) => {
            let temp=data.main.temp 
            let ville=data.name
            console.log(position.coords.latitude)
            ville = ville.replace('Arrondissement de ', '');
            document.querySelector(".temperature").textContent=temp;    
            document.querySelector(".ville").textContent=ville;
        })    
        .catch(error => console.log(error))
    }, (error) => console.log(error));
    console.log("La géolocalisation est disponible");
} else {
    console.log("La géolocalisation n'est pas disponible")
    getTemperature("Paris");
}

// 1. Récupérer les données de température et de ville et les afficher dans les bons éléments HTML.
const changerVille = document.querySelector(".changer");
changerVille.addEventListener("click",() =>{
    let ville = prompt("Quelle ville souhaitez-vous voir ?");
    getTemperature(ville)
});



function getTemperature(city){  
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=26711d7f720887fc47b5c6f567f84f23&units=metric")
        .then(response => response.json())
        .then( data =>{
            let temp=data.main.temp 
            let ville=data.name
            ville = ville.replace('Arrondissement de ', ''); 
            document.querySelector(".temperature").textContent=temp;
            document.querySelector(".ville").textContent=ville;
        })
        //si jamais il arrive pas recup les données
        .catch(error => console.log(error))
}
