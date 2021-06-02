import React from 'react'

function Time(props) {
    const time = props.userInfo[0].lastOnline
    return (
        <div>
            <time>{ time }</time>
        </div>
    )
}

export default Time
