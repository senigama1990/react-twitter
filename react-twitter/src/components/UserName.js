import React from 'react'

function UserName(props) {
    const name = props.userInfo[0].userName
    return (
        <div>
            <h4 className='username'>{ name }</h4>
        </div>
    )
}

export default UserName
