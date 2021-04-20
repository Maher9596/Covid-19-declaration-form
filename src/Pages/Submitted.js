import React from 'react'
import {Link} from 'react-router-dom'
function Submitted() {
    
    const future = new Date()
    future.setDate(future.getDate() + 15)
    const finalDate = future.getFullYear() +'-'+ ((future.getMonth() + 1) < 10 ? '0' : '') + (future.getMonth() + 1) +'-'+ future.getDate()


    return (
        <div className="p-2 w-4/6 m-auto text-center border border-4 border-indigo-300">
            <h1 className="mb-4 text-lg font-bold">Quarantine Not Required - Valid till <span>{finalDate}</span></h1>
            <h3 className="mb-2">Dear Employee,</h3>
            <p>As per self-declaration, Our team reviewed and confirmed that you do not require a quarantine and is allowed to join for work.</p>
           <Link to="/"><p className="text-left text-blue-500">Go back</p></Link>          
        </div>
    )
}

export default Submitted

