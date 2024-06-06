
import AllProject from "../components/AllProject"
import Footer from "../components/Footer"
import GetStarted from "../components/GetStarted"
import Nav from "../components/Nav"
import PortofolioShow from "../components/PortofolioShow"

export default function Portofolio() {
    return (
        <div>
            <Nav />
            <div className="wrapper-md">
                <div>
                    <PortofolioShow />
                </div>
                <div>
                    <AllProject />
                </div>
                <div>
                    <GetStarted />
                </div>
            </div>
            <div className="wrapper-lg">
                <Footer />
            </div>
        </div>
    )
}