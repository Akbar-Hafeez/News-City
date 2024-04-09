import { useState } from 'react'


import './App.css'

import LoadingBar from 'react-top-loading-bar'

import React from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
 Routes,
  Route,
  } from "react-router-dom";

const App =()=> {
 
const pageSize=10;
 const apiKey ="415d850f3c3a4c75a58224871c705a9d";
 const [progress, setProgress] = useState(0)

  
    return (
      <>
       <Router>
   
    <Navbar/>
    <LoadingBar
        color='#f11946'
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
    <Routes>
   <Route exact path='/' element={<div><News setProgress ={setProgress} apiKey={apiKey}  key="General" pageSize={pageSize} country={"in"} category={"General"}/></div>}/>
    <Route exact path='/business' element={<div><News setProgress ={setProgress} apiKey={apiKey}  key="Business" pageSize={pageSize} country={"in"} category={"Business"}/></div>}/>
<Route exact path='/entertainment' element={<div><News setProgress ={setProgress} apiKey={apiKey}  key="Entertainment" pageSize={pageSize} country={"in"} category={"Entertainment"}/></div>}/>
<Route exact path='/health' element={<div><News setProgress ={setProgress} apiKey={apiKey}   key="Health" pageSize={pageSize} country={"in"} category={"Health"}/></div>}/>
<Route exact path='/science' element={<div><News setProgress ={setProgress} apiKey={apiKey}   key="Science" pageSize={pageSize} country={"in"} category={"Science"}/></div>}/>
<Route exact path='/sports' element={<div><News setProgress ={setProgress} apiKey={apiKey}   key="Sports" pageSize={pageSize} country={"in"} category={"Sports"}/></div>}/>
<Route exact path='/technology' element={<div><News setProgress ={setProgress} apiKey={apiKey}   key="Technology" pageSize={pageSize} country={"in"} category={"Technology"}/></div>}/>
   </Routes>
   </Router>
   </>
    )
  }


export default App;

