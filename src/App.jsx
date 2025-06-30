import React from "react";
import Projects from './components/Projects';
import Hero from './components/Hero';
import Footer from './components/Footer';

export default function App(){
    return(
        <div className="bg-white dark:bg-gray-900 dark:text-gray-900 dark:text-white">
            <Hero />
            <Projects />
            <Footer />
        </div>
    );
}