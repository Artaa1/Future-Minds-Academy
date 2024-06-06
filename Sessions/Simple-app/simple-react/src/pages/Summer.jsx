import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Nav from "../component/Nav";

export default function Summer() {
    return (
        <div>
            <Nav />
            <Hero title="Welcome to Summer"
                photo="summer.png" />
            <Footer />
        </div>
    )
}