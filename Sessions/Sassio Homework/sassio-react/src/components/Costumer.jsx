export default function Costumer(){
    return(
        
      <div>
         <div className="row m-10 gap-9 costumer-section service">
            <div className="col-1">
               <button className="speciale-1">EXPLORE NEW PLACES</button>
               <h2 className="costumer-header">What our costumer says</h2>
            </div>
            <div className="col-1 info">
               <h4>Design Quality</h4>
               <br/>
               <p>The template is really nice and offers quite a large set of options. It’s beautiful and the
                  coding is
                  done quickly and seamlessly. Thank you!
               </p>
               <br/>
               <h4>Devon Lane</h4>
               <p>Team Leader, Paypal</p>
            </div>
            <div className="col-1 info">
               <h4>Design Quality</h4>
               <br/>
               <p>The template is really nice and offers quite a large set of options. It’s beautiful and the
                  coding is
                  done quickly and seamlessly. Thank you!
               </p>
               <br/>
               <h4>Theresa Webb</h4>
               <p>Softwer Tester, Envato</p>
            </div>
         </div>
         <div className="row m-5  row-phone row-tablet">
            <div className="arrows service">
               <span className="material-symbols-outlined arrow west">west</span>
               <span className="material-symbols-outlined arrow east">east</span>
            </div>
         </div>
      </div>
    )
}