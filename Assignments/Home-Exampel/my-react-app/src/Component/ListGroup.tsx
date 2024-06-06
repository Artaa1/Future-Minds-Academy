import { useState } from "react";

interface Props{
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;//Passing Functions via Promps
}

function ListGroup({items, heading, onSelectItem}: Props) {
   
 const [selectedIndex, setSelectedIndex] = useState(-1);
 

    return (
        <>
            <h1>{heading}</h1>
            <ul className="list-group">
                {items.map((item, index) => (
                    <li className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'} key={item}
                        onClick={() => {setSelectedIndex(index);  /*Passing Functions via Promps*/ onSelectItem(item)}}>{item}</li>
                ))}
            </ul>
        </>
    );
}

export default ListGroup