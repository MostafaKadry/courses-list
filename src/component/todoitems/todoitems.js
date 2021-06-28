import React from 'react';
import './todoitems.css';
const ToDoList = (props) => {
    const {items, deleteItmes} = props;
    let length = items.length;
    const listItems = length ? (
            
        items.map(item => {
        return(
            <div key={item.id} id={item.id} className="default-items-devs">
                <span>{item.name}</span>
                <span>{item.age}</span>
                <span onClick={()=> deleteItmes(item.id)} className="close"> &#10060; </span>
            </div>
        )
    }) ) : ( 
        <p> There is no item to show  </p> 
    )
    
    return(
        <div className="listitems">
            <div className="list-items-head">
                <span>Name</span>
                <span>Age</span>
                <span>Action</span>
            </div>
                <div className="default-items">
                    {listItems}
                </div>
        </div>
    )
}

export default ToDoList;