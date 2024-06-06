import Nav from "../component/Nav";
import Hero from "../component/Hero";

export default function Home(){
    return(
        <div className="App">
        <Nav activePage="active"/>
        <Hero  title="The effective solutions for your business"
               subtitle="We are a team who creates marketing strategies for B2B and B2C companies"
        />
       </div>
    )
}