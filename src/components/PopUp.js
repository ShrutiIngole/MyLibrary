import React from 'react';

const PopUp = ({message}) => {
    return(
        <div className="pop-up">
        <i className="far fa-window-close" />
            {message}
        </div>
    )
}