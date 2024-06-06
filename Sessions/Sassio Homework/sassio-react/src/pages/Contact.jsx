import ContactForm from "../components/ContactForm"
import ContactInfo from "../components/ContactInfo"
import Footer from "../components/Footer"
import Map from "../components/Map"
import Nav from "../components/Nav"
import SalesSuport from "../components/SalesSuport"
import WrapperXl from "../components/WrapperXl"

export default function Contact() {
    return (
        <div>
            <Nav />
            <WrapperXl
                title="Contact us"
                paragraph=" With we want to optimize the customization process so your team can save time when building
                    websites."
            />
            <div className="wrapper-lg solution-section">
            </div>
            <div >
                <ContactInfo />
                <ContactForm />
                <Map />
                <SalesSuport />
                <div className="wrapper-lg">
                    <Footer />
                </div>
            </div>
        </div>
    )
}