import React from 'react'

const Box = (props) => {
    return (
        <div>
            <div className="box">
                <p>{props.num}</p>
                <p>{props.name}</p>
            </div>
        </div>
    )
}

export default Box