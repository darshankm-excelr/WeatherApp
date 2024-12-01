const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey="470c3800f3c8367b616347792be6e229";
const searchbox=document.getElementById("inp");
const searchbtn=document.getElementById("search");
 const weatherIcon=document.getElementById("weather");
 async function checkWeather(city){ 
    const response=await fetch(url+ city +`&appid=${apikey}`);
    var data=await response.json();
    console.log(data);
    document.getElementById("temp").innerHTML= Math.round( data.main.temp)+"°C";
    document.getElementById("city").innerHTML=data.name;    
    document.getElementById("humidity").innerHTML=data.main.humidity+"%";
    document.getElementById("windspeed").innerHTML=data.wind.speed +"km/h";

    if(data.weather[0].main== "Clouds"){
        weatherIcon.src="https://cdn-icons-png.flaticon.com/128/1163/1163657.png";
    }
    else if(data.weather[0].main== "Clears"){
        weatherIcon.src="https://www.flaticon.com/free-icon/clear-sky_3222800";

    }
    else if(data.weather[0].main== "Rain"){
        weatherIcon.src="https://cdn-icons-png.flaticon.com/128/1163/1163657.png    ";
        
    }
    else if(data.weather[0].main== "Drizzle"){
        weatherIcon.src="https://cdn-icons-png.flaticon.com/128/12709/12709610.png";
        
    }
    else if(data.weather[0].main== "Mist"){
        weatherIcon.src="https://www.flaticon.com/free-icon/fog_1197102";
        
    }
    /*document.getElementById("weathers").style.display="block";*/
    
 }
 searchbtn.addEventListener("click",()=>{
    checkWeather(searchbox.value);
 })
 

