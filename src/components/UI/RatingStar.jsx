import React from 'react'
import { FaStar } from 'react-icons/fa'

const RatingStar = () => {
    return (
        <div>
            <ul className="list-inline ">
                <li className='list-inline-item' style={{fontWeight: '500', color:'#ffc000'}}>4.7</li>
                <li className="list-inline-item"><FaStar style={{ color: "#ffc000" }} /></li>
                <li className="list-inline-item"><FaStar style={{ color: "#ffc000" }} /></li>
                <li className="list-inline-item"><FaStar style={{ color: "#ffc000" }} /></li>
                <li className="list-inline-item"><FaStar style={{ color: "#ffc000" }} /></li>
                <li className="list-inline-item"><FaStar style={{ color: "#ffc000" }} /></li>
            </ul>
        </div>
    )
}

export default RatingStar