import BlogHeader from "../components/BlogHeader"
import BlogIntro from "../components/BlogIntro"
import Footer from "../components/Footer"


export default function Blog(){
    return(
        <div class="container-full">
            <BlogHeader/>
            <BlogIntro/>
            <div className="wrapper-lg">
            <Footer/>
            </div>
        </div>
    )
}