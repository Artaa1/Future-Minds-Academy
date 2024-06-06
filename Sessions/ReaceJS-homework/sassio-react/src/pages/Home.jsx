import React from 'react';
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import TrustedBy from '../components/TrustedBy';
import Wrapper from '../components/Wrapper';




export default function Home() {
    return (
        <div >
            <Nav />
            <Hero title="Premium Startup & App"
                secondTitle="Landing Page"
                subtitle="Besides its beautiful design. Sassio is an incredibly rich core framework for you to showcase your App."
            />
            <TrustedBy title="Trusted by the world’s best" />
            <Wrapper
                headling="You're in a secure company"
                rtActivity="Real time activity"
                firstDescription="Get instant insight on what's happening in your business.It uses a dictionary of the over 200 Latin words,"
                instantDeploy="Instant deploy"
                sDescription="Deploy your project in a fraction of a second, no time! It uses a dictionary of the over 200Latin words,"
                easyIntegrations="Easy integrations"
                thDescription="Integrate our solution with other tech leaders in the<br/> industry. It uses a dictionary of the over 200 Latin words"
                perfectUI="Perfect UI/UX"
                fDescription="Get instant insight on what's happening in your business.<br/> It uses a dictionary of the over 200 Latin words,"
            />


        </div>
    )
}