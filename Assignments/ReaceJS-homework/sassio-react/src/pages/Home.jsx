import React from 'react';
import Nav from "../components/Nav";
import Hero from "../components/Hero";



export default function Home() {
    return (
        <div className="container-fixed">
            <Nav />
            <Hero title="Premium Startup & App"
                secondTitle="Landing Page"
                subtitle="Besides its beautiful design. Sassio is an incredibly rich core framework for you to showcase your App."
            />
           

        </div>
    )
}