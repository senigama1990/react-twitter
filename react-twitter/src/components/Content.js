import React from 'react'
import Icons from './Icons'
import Messege from './Messege'
import Time from './Time'
import UserName from './UserName'

function Content(props) {
    return (
        <div className='content'>
            <div className='user-and-time'>
                <UserName userInfo={props.userInfo}/>
                <Time userInfo={props.userInfo}/>
            </div>
            <Messege userInfo={props.userInfo}/>
            <Icons/>
        </div>
    )
}

export default Content
