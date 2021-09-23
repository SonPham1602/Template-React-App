import React from 'react'
import { FaToggleOff, FaToggleOn } from 'react-icons/fa'

export default function InputToggle({ toggleValue, callBackOnChange }) {
    return (
        <div>
            {
                toggleValue ?
                    <FaToggleOn size={20} className="text-primary" onClick={() => callBackOnChange(false)} />
                    :
                    <FaToggleOff size={20} className="text-gray-700" onClick={() => callBackOnChange(true)} />
            }
        </div>
    )
}
