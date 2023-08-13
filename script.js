const apikey = "ab584828634e01a8dc6db8f7d3d219ec";

const weatherDataEl=document.getElementById('weather-data');
const cityInputEl=document.getElementById('city-input');

const formEl=document.querySelector('form');

formEl.addEventListener('submit',(e)=>{
e.preventDefault();
const cityValue=cityInputEl.value;
console.log(cityValue);

getWeatherData(cityValue);



});


async function getWeatherData(cityValue){
	try{


const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apikey}&units=metric`);


if(!response.ok){
	throw new Error('Network error something went wrong');
}



const data=await response.json();

console.log(data);


const temperature=Math.round(data.main.temp);

const desc=data.weather[0].description;
const icon=data.weather[0].icon;
const details=[
`Feels Like:${Math.round(data.main.feels_like)}`,

`Humidity:${data.main.humidity}%`,

`Wind:${data.wind.speed} m/s`,
	]

weatherDataEl.querySelector('.icon').innerHTML=`<img src="http://openweathermap.org/img/wn/${icon}.png" alt="Weather Icon">`;


weatherDataEl.querySelector('.temperature').textContent=`${temperature}`;
weatherDataEl.querySelector('.description').textContent=`${desc}`;


weatherDataEl.querySelector('.details').innerHTML=details.map((details)=>`   <div>${details}</div>`).join('');


	}

	catch(e){}
}