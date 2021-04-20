import React from 'react'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'

function Submit() {
    const[buttonText, setButtonText] = useState("Submit")
    const history = useHistory()

    const formSubmit = (e) => {
        e.preventDefault()
        setButtonText("Submitting...")
        setTimeout(() => {
            history.push("/submitted")
        }, 3000)
    }

    return (
        <>
        <button 
            className="w-full  md:w-1/4 lg:w-1/4 h-8 bg-indigo-600 border border-transparent rounded-md shadow-sm text-sm hover:bg-indigo-700 focus:bg-indigo-900"
            type="submit"
            onClick={formSubmit}
        >
            {buttonText}       
        </button>
        </>
    )
}

export default Submit
