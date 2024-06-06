import React from 'react';
import Hero from "../components/Hero";
import Nav from "../components/Nav";



export default function About() {
    return (
        <div >
            <Nav />
            <Hero title="Hello About page"
                secondTitle="Landing Page"
                subtitle="Besides its beautiful design. Sassio is an incredibly rich core framework for you to showcase your App."
            />
            

        </div>
    )
}