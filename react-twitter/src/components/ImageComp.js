import React from 'react'
import Image from '../images/images.jpg'

function ImageComp() {
    return (
        <div>
            <a href="/">
                <img className='profile-image' src={Image} alt='profile'/>
            </a>
        </div>
    )
}

export default ImageComp
