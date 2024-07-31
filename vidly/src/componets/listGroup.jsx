import React, { Component } from 'react';


const  ListGroup  = (props) => {
    const {items , selectedItem , onSelectGenre} = props ; 
    return ( 
        <ul className='list-group alert-dark mt-70' >
            {items.map(item=>(<li key={item._id}  onClick={()=>onSelectGenre(item)} 
             className={item === selectedItem ? 'list-group-item active ': 'list-group-item'}>
                {item.name}</li>
))}
            
        </ul> 
     );
}
 
export default  ListGroup ;