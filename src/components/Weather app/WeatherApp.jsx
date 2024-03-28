import React, { useState } from 'react'
import '../Weather app/WeatherApp.css'
import search_icon from '../Assets /search.png' 
import clear_icon from '../Assets /clear.png' 
import cloud_icon  from '../Assets /cloud.png' 
import rain_icon from '../Assets /rain.png' 
import snow_icon from '../Assets /snow.png' 
import wind_icon from '../Assets /wind.png'
import drizzle_icon from '../Assets /drizzle.png'
import humidity_icon from '../Assets /humidity.png'


const WeatherApp = () => {
    const [wiIcon,setwiIcon]=useState(cloud_icon) 

    let api_key="0833c87ed7ee072de19f759631553c57";
    const search = async ()=>{
      const element=document.getElementsByClassName("cityInput");
      if (element[0].value==="") {
        return 0;
      }
    
      let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=metric&appid=${api_key}`
      
      let response=await fetch(url);
      let data= await response.json();
      const humidity=document.getElementsByClassName("humidity-percentage")
      const wind = document.getElementsByClassName("wind-rate")
      const temperature = document.getElementsByClassName("weather-temp")
      const location = document.getElementsByClassName("weather-location") 
       
      humidity[0].innerHTML=data.main.humidity + "%";
      wind[0].innerHTML=Math.floor(data.wind.speed) + "kmph";
      temperature[0].innerHTML=Math.floor(data.main.temp) + "℃";
      location[0].innerHTML=data.name;
      
      if(data.weather[0].icon==="01d" || data.weather[0].i==="01n" ) setwiIcon(clear_icon);
      else if (data.weather[0].icon==="02d" || data.weather[0].i==="02n" ) setwiIcon(clear_icon);
      else if (data.weather[0].icon==="03d" || data.weather[0].i==="03n" ) setwiIcon(cloud_icon);
      else if (data.weather[0].icon==="04d" || data.weather[0].i==="04n" ) setwiIcon(cloud_icon);
      else if (data.weather[0].icon==="09d" || data.weather[0].i==="09n" ) setwiIcon(drizzle_icon);
      else if (data.weather[0].icon==="10d" || data.weather[0].i==="10n" ) setwiIcon(rain_icon);
      else if (data.weather[0].icon==="11d" || data.weather[0].i==="11n") setwiIcon(rain_icon);
      else if (data.weather[0].icon==="13d" || data.weather[0].i==="13n") setwiIcon(snow_icon);
      else setwiIcon(clear_icon);
      }
    

  return(
    <div className='Container'>
       <div className='top-bar'>
       <input type='text' className='cityInput' placeholder='search' />
           <div className='search_icon'>
           <img src={search_icon} alt="" onClick={()=>{search()}}/>
          </div>
        </div>
    <div className='weather-image'>
        <img src={cloud_icon} alt=''/>
    </div>
    <div className="weather-temp">24°c</div>
          <div className="weather-location">London</div>
          <div className="data-container">
            <div className="element">
              <img src={humidity_icon} alt="" className='icon'/>
              <div className="data">
                <div className="humidity-percentage">64%</div>
                <div className="text">Humidity</div> 
              </div>
            </div>
            <div className="element">
              <img src={wind_icon} alt="" className='icon'/>
              <div className="data">
                <div className="wind-rate">18kmph</div>
                <div className="text">Wind Speed</div> 
              </div>
            </div>
    </div>


    </div>
  )
}

export default WeatherApp