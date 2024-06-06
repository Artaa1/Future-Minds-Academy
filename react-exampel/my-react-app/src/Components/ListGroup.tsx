
function ListGroup(props) {

//const handleClick = () => setCounter(counter+1);


    /*const country = [
        'New York',
        'Milano',
        'London',
        'Paris',
        'Prishtina'
    //];*/

    
    return (
    <>
    {/* <h1>List</h1> */}
    {/* <ul className="list-group"> */}
   {/* {country.map(item =>  */}
   {/* <li className="list-group-item">{item}</li> )} */}
  {/* </ul><br/> */}

  <button onClick={props.onClickFunctions}>+1</button>
  </>
    )
};

export default ListGroup