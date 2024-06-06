export default function WrapperXl(props){
    return (
        <div className="wrapper-xl text-center">
            <div className="about-section">
                <img src="assets/images/bg.png" alt="" className="bg-img about" />
                <h1 className="dark">{props.title}</h1>
                <br />
                <p>
                    {props.paragraph}
                </p>
            </div>
        </div>
    )
}