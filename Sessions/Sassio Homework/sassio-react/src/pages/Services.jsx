import Costumer from "../components/Costumer"
import Footer from "../components/Footer"
import GetStarted from "../components/GetStarted"
import ItSolutions from "../components/ItSolutions"
import Metrics from "../components/Metrics"
import Nav from "../components/Nav"
import ServiceSec from "../components/ServiceSec"
import SimpleSys from "../components/SimpleSys"
import WrapperXl from "../components/WrapperXl"

export default function Services() {
    return (
        <div className="wrapper-full service">
            <Nav />
            <WrapperXl
                title="Our Services"
                paragraph="We are a professional digital agency providing premium themes, UI/UX design and web apps that you will simply love."
            />
            <div className="wrapper-lg solution-section">
                <ItSolutions />
                <SimpleSys />
                <ServiceSec />
            </div>
            <div>
                <Costumer />
            </div>
            <div>
                <Metrics />
            </div>
            <div>
                <GetStarted />
            </div>
            <div className="wrapper-lg">
                <Footer />
            </div>
        </div>
    )
}