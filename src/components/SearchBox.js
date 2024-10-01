import React from "react";

const SeachBox= ({searchfield,searchChange}) =>{
    return (
        <div class='pa2'>
        <input 
        className='pa3 ba b--green bg-lighest-blue'
        type='search' 
        placeholder="search robots" 
        onChange={searchChange}/>
        </div>
    );
}

export default SeachBox;