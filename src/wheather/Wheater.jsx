import React, { useState } from 'react'
import '../wheather/wheater.css'
import pic from '../media/sun-removebg-preview.png'
import hum from '../media/humidity.png'
import wind from '../media/wind.png'
const Wheater = () => {
    let api = {
        key: '305dad64b9f2665f8d995b5a9b553c75',
        base : "https://api.openweathermap.org/data/2.5/weather"
    }
    let [search, setSearch] = useState('')
    let [wheater,setWheater] = useState({})
    function locSearch() {
        fetch(`${api.base}?q=${search}&appid=${api.key}&units=metric`).then(res => res.json()).then(data => {
            console.log(data);
            setWheater(data)
        })
    }
  return (
    <div className='main'>
          <section>
            <input placeholder='Search Location' type="text" onChange={(e) => setSearch(e.target.value)} /> 
        <button onClick={locSearch} >Search</button>
        <img src={pic} height={100} alt="" />
         </section>
          {
              (wheater.name != undefined) ? (<div>
                  <p>{wheater.name},{ wheater.sys.country}</p>
                  <p>{ wheater.main.temp }</p>
              </div>):('data is not found')
      }
      <div className='img-div'>
        <div id='one'>
        <img  src={hum} alt="" height={30} />
          <p id='hum-p'>Humidity</p>
          </div>
        <div id='two'>
          <img src={wind} height={30} alt="" />
          <p>wind</p>
        </div>

      </div>
    </div>
  )
}

export default Wheater
