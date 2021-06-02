import React from 'react'

function Messege(props) {
    const { userInfo: [{ messege }] } = props
    return (
        <div>
            <p className='messege'>{messege}</p>
        </div>
    )
}

export default Messege
