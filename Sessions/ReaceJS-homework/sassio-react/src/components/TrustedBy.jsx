export default function TrustedBy(props){
    return(
        <div className="trusted-by text-center p-4">
         <p>{props.title}</p>
         <div className="row">
            <div className="col m-5">
               <img src="assets/images/amazon.png" />
            </div>
            <div className="col m-5">
               <img src="assets/images/amd.png" />
            </div>
            <div className="col m-5">
               <img src="assets/images/cisco.png" />
            </div>
            <div className="col m-5">
               <img src="assets/images/dropcam.png" />
            </div>
            <div className="col m-5">
               <img src="assets/images/logitech.png" />
            </div>
            <div className="col m-5">
               <img src="assets/images/spotify.png" />
            </div>
         </div>
      </div>
    )
}