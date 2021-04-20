import React from 'react'

function Header() { 
    return (
        <div>
          
         <div className="flex justify-center bg-indigo-600 mt-2">
          <h1 className="mt-4 mb-4 text-4xl font-mono">Declaration Form</h1>
         </div>
         <h3 className="mt-2 text-2xl font-mono">COVID-19 Self-Declaration for Employees</h3>        
         <p className="mt-2 font-mono">“All employees shall fill declaration at least 48 hours before shift/duty starts, shall receive a response and then only resume duty, if they are not advised to be in quarantine.”</p>
        </div>
    )
}

export default Header
