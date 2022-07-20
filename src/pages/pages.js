import React from "react"
import Home from "./Home"
import Contact from "./Contact"
import About from "./About"
import { Route, Routes } from "react-router-dom"

export default function Pages(){
    return (
         <Routes>
                <Route path="/" element={ <Home/>} />
                <Route path="/contact" element={ <Contact/>} />
                <Route path="/about" element={ <About/>} />
        </Routes> 
    )
}
