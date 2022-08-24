import React from "react"
import MainContent from "./components/MainContent"
import Navbar from "./components/Navbar"
import data from "./data"
import "./style.css"



export default function App(){
    const content = data.map(thing =>{
        return(
            <MainContent
            {...thing}
            />
        )
    })




    return(
        <>
      

        <Navbar/>
        {content}
       
        </>
    )
}