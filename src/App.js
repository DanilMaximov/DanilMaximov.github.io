import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
import Works from './components/Works';
import Footer from "./components/Footer";


export default function App(){
    return (
        <>
           <Home />
           <About />
           <Resume />
           <Works />
            <Footer />
       </>
    )
}