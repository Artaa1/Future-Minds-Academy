export default function Company() {
    return (
        <div className="wrapper-md text-center">
            <div className="row">
                <div className="col-1 company-section about">
                    <button className="speciale btn-classic">ABOUT COMPANY</button>
                    <h1 className="display-1 company-info title">All services for your online presence</h1>
                    <p className="company-info">
                        Since 2017, we have led innovation and new product delivery <br /> in
                        business startup services delivered online.
                    </p>
                    <div className="row">
                        <div className="col-5 m-1">
                            <div className="back-pink p-1">
                                <img src="assets/images/sketch.png" alt="sketch" />
                            </div>
                        </div>
                        <div className="col-5 missions">
                            <h3 className="dark">Our Mission</h3>
                            <p className="company-paragraf">We have all the business products in one place so <br /> you can focus on
                                what you do best.</p>
                        </div>
                    </div><br />
                    <div className="row">
                        <div className="col-5 m-1">
                            <div className="back-blue p-1">
                                <img src="assets/images/color.png" alt="sketch" />
                            </div>
                        </div>
                        <div className="col-5 missions">
                            <h3 className="dark">Our Vission</h3>
                            <p className="company-paragraf">We have all the business products in one place so <br /> you can focus on
                                what you do best.</p>
                        </div>
                    </div>
                </div>
                <div className="col-5">
                    <img src="assets/images/double.png" alt="images of missions" className="img-missions" />
                </div>
            </div>
        </div>
    )
}