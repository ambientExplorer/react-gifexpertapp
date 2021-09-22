import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState("");

    const handleInputChange = ( e ) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        // console.log("Submit hecho");
        if( inputValue.trim().length > 2 ){
            setCategories(cates => [ inputValue, ...cates]);
            setinputValue("");
        }


    }

    return (
        <form onSubmit= { handleSubmit }>
            <input 
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    )
}

