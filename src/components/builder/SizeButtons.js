import React from 'react'

import "../../css/SizeButtons.css"

function SizeButtons(props) {
    return (
        <div className="container">
            <button className="size-btn">{props.size}</button>
        </div>
    )
}

export default SizeButtons
