//adds to catalogue so that notes and other options become available, easier to search
import React from 'react';

function AddButton () {
    const catlgFlag = false; 
    if (catlgFlag) {
        return (
            <button>
                Added to Catalogue
            </button>
        )
        }
    else {
        return (
            <button>
                Add to Catalogue
            </button>
        )
    }
}

export default AddButton;

// onClick={e=>{addToCat(e)}}
// /{addToCat}