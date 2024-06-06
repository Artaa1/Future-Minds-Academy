import Costumer from "../components/Costumer";
import Donwload from "../components/Donwload";
import Footer from "../components/Footer";
import Gethelp from "../components/Gethelp";
import Hero from "../components/Hero";
import Metrics from "../components/Metrics";
import Nav from "../components/Nav";
import Powerful from "../components/Powerful";
import Pricing from "../components/Pricing";
import Screenshots from "../components/Screenshots";
import Success from "../components/Success";
import Trusted from "../components/Trusted";
import Wrapper from "../components/Wrapper";

export default function Home() {
    return (
        <div className="container-fixed">
            <div className="header row" id="top">
                <Nav />
            </div>
            <div className="hero row">
                <Hero title="Premium Startup & App"
                    secondtitle="Landing Page"
                    paragraph="Besides its beautiful design. Sassio is an incredibly rich core framework for you to showcase your App."
                />
            </div>
            <div className="trusted-by text-center p-4">
                <Trusted />
            </div>
            <div className="wrapper-full text-center">
                <Wrapper/>
            </div>
            <div className="row path-succes-section">
                <Success/>
            </div>
            <div >
                <Powerful/>
            </div>
            <div >
                <Costumer/>
            </div>
            <Metrics/>
            <div className="row p-2">
                <Screenshots/>
            </div>
            <div className="simple-pricing m-1 p-1">
                <Pricing/>
            </div>
            <div className="row faq-section m-10 gap-9">
                <Gethelp/>
            </div>
            <div className="row down-app">
                <Donwload/>
            </div>
            <div className="footer-info-protofolio">
                <Footer/>
            </div>
        </div>
    )
}