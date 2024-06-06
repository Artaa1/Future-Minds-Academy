export default function ItSolutions() {
    return (
        <div className="itsolutions">
            <div class="col-1">
                <img src="assets/images/services-first.png" className="img-missions" alt=""/>
            </div>
            <div className="col-1 solution-info">
                <h1 className="solution-heading">IT solutions for your <br /> business.</h1>
                <p className="solution-paragraf">Praesent sollicitudin felis a ornare volutpat. Nullam malesuada sem sit
                    amet semper tristique.
                    Donec nec neque lectus. Nunc mattis, lectus eu lacinia pre tium, nisl nisi interdum tortor.
                </p>
                <div className="solutions">
                    <ul>
                        <li>
                            <div className="solutions-item">
                                <div className="icon-container">
                                    <span className="material-symbols-outlined">check</span>
                                </div>
                                <span className="dark">Installation Guide</span>
                            </div>
                        </li>
                        <li>
                            <div className="solutions-item">
                                <div className="icon-container">
                                    <span className="material-symbols-outlined">check</span>
                                </div>
                                <span className="dark">Easy setup process</span>
                            </div>
                        </li>
                        <li>
                            <div className="solutions-item">
                                <div className="icon-container">
                                    <span className="material-symbols-outlined">check</span>
                                </div>
                                <span className="dark">Live call support</span>
                            </div>
                        </li>
                        <li>
                            <div className="solutions-item">
                                <div className="icon-container">
                                    <span className="material-symbols-outlined">check</span>
                                </div>
                                <span className="dark">Start a private group video call</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <button className="solution-btn">Explore</button>
            </div>
        </div>
    )
}