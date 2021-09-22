import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    // const categories = ["One Punch", "Samurai X", "Dragon ball"];
    const [categories, setCategories] = useState(["Dragon ball"]);

    // const handleAdd = () => {
    //     setCategories( [...categories, "Konosuba"] );
    // }

    return (
        <>
        <h1>GifExpertApp</h1> 
        <AddCategory setCategories={ setCategories } />
        <hr />


        <ol>
            {
                categories.map( category => (
                    <GifGrid
                        key={ category }
                        category={ category }
                    />
                ))
            }
        </ol>

        </>
    );
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}



export default GifExpertApp;