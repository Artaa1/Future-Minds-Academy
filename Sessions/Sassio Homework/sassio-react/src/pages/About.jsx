import Company from "../components/Company";
import Costumer from "../components/Costumer";
import Development from "../components/Development";
import Metrics from "../components/Metrics";
import Nav from "../components/Nav";
import Partners from "../components/Partners";
import WrapperXl from "../components/WrapperXl";
import Team from "../components/Team";
import Footer from "../components/Footer";

export default function About() {
    return (
        <div className="container-fluid wrapper-full about">
            <Nav />
            <div >
                <WrapperXl title="About us"
                    paragraph="With we want to optimize the customization process so
                     your team save time when building websites."
                />
            </div>
            <div>
                <Company />
            </div>
            <div className="wrapper-md metrics-section about">
                <Metrics />
            </div>
            <div>
                <Development />
            </div>
            <div className="wrapper-md about-costumer">
                <Costumer />
            </div>
            <div>
                <Team />
            </div>
            <div>
                <Partners />
            </div>
            <div className="wrapper-lg">
                <Footer />
            </div>
        </div>
    )
}