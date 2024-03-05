import React, { useState } from 'react'
import Data from './Data'
import '../src/app.css'
const App = () => {
    let [val,setval] = useState(Data)
  return (
      <div className='main'>
          
          <table>
              <thead>
                  <tr>
                      <th colSpan={2}>{ val.length} birthday's Today</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      val.map(res => {
                          return (
                              <>
                                  <tr>
                                      <td><img src={res.image} height={40}  style={{borderRadius:'50%'}} width={40} alt="" /></td>
                                      <td style={{padding:'20px'}}>{res.name}<br/>
                                          {res.age}</td>
                                  </tr>
                              </>
                          )
                      })
                  }
                  <tr><td colSpan={2}><button onClick={() => setval([])}>Clear All</button></td></tr>
              </tbody>
          </table>
      
    </div>
  )
}

export default App
