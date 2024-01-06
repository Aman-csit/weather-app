const inputBox=document.querySelector('.input-box');
const searchbtn=document.getElementById('searchbtn');
const Weather_img=document.querySelector('.Weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity= document.getElementById('humidity');
const wind_speed= document.getElementById('wind-speed');

const location_not_found=document.querySelector('.location-not-found');

const weather_body=document.querySelector('.weather-body');
 async function checkWeather(city){
    // Please enter your own API key
const api_key="db92eb00d7f906047428897398f840ec";
 const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
const weather_data= await fetch(`${url}`).then(response => response.json());

if(weather_data.cod === `404`){
   location_not_found.style.display="flex";
   weather_body.style.display="none";
   console.log("error");
    return;
}

location_not_found.style.display="none";
weather_body.style.display="flex";
temperature.innerHTML=`${Math.round(weather_data.main.temp -273.15)}°C`;
description.innerHTML=`${weather_data.weather[0].description}`;
humidity.innerHTML=`${weather_data.main.humidity}%`;
wind_speed.innerHTML=`${weather_data.wind.speed}km/H`;
switch(weather_data.weather[0].main){
    case 'cloud':
     Weather_img.src="/Assets/image/cloud.jpg";
        break;
    case 'clear':
     Weather_img.src="/Assets/image/clear.jpg";
        break;
    case 'rain':
     Weather_img.src="/Assets/image/rain.jpg";
        break;  
    case 'mist':
     Weather_img.src="/Assets/image/mist.jpg";
        break;  
    case 'snow':
     Weather_img.src="/Assets/image/snow.jpg";
        break;        


            
}


}
searchbtn.addEventListener('click',()=>{
checkWeather(inputBox.value);
});