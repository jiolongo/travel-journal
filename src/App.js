import React from "react"
import Navbar from "./components/Navbar"
import MainContent from "./components/MainContent"
import data from "./data"
import "./style.css"



export default function App(){
    const content = data.map(item =>{
        return(
            <MainContent
                {...item}
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