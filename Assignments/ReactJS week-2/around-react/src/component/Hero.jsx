export default function Hero(props) {
    return(
        <div class="container-fixed container-res gap-4">
        <div class="row hero gap-3">
            <div class="wrapper-lg">
                <div class="col-2">
                    <div class="hero-content">
                        <h1>{props.title}</h1>
                        <span>{props.subtitle}</span>
                        <div class="send-btn">
                            <form>
                                <input type="text" placeholder="&#128231 Enter your email" />
                                <button class="normal-btn btn-primary button-primary">Book a call</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col img-fixed">
                <img src="assets/images/header-img.png" class="img-xxl" />
            </div>
        </div>
    </div>
    )
}