import Footer from "../component/Footer";
import Hero from "../component/Hero";
import Nav from "../component/Nav";

export default function Spring() {
    return (
        <div>
            <Nav />
            <Hero title="Welcome to Fall"
                photo="spring.png" />
            <Footer />
        </div>
    )
}