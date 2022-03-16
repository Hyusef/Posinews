import './App.css';
import styled from 'styled-components';
import Navbar from "./components/Navbar"
import axios from "axios";
import {useState,useEffect} from "react"

function App() {
  const [newsInfo,setNewsInfo] = useState([1,2,3]);

  useEffect(()=>{
    axios.get("/good").then(res=>{
      setNewsInfo(res.data)
      }).catch(err=>console.log(err));
  },[])


  return (
    <div className="App"> 
    <Navbar/>
      {newsInfo.map((ele,i)=>{
    return (
    <>
    <img width="400px" src={`https://${ele.newsImage}`}></img>
      <p>{ele.newsTitle}</p>
      </>
    
    )
      })}
  
</div>
  );
}

export default App;
