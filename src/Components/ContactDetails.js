import React from 'react'
import Submit from './Submit'

function ContactDetails() {
    return (
        <div className="p-6 mt-4 bg-gray-300">
        <form>
            <p className="text-gray-500">I, My name mentioned below, Acknowledge that the above information is correct and I do accept the consequences on false information.</p>
          <div className="">
            <div className="mt-2 ">
                <input className="border border-gray-400 px-3 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 w-full  md:w-1/4 lg:w-1/4  h-8 text-sm"
                 required 
                 type="text" 
                 placeholder="Name of the Employee"
                />
            </div>
            <div className="mt-2 ">
                <input className="border border-gray-400 px-3 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 w-full  md:w-1/4 lg:w-1/4  h-8 text-sm"
                 required 
                 type="text" 
                 placeholder="Employee ID"
                />
            </div>
            <div className="mt-2 ">
                <input className="border  border-gray-400 px-3 rounded-lg shadow-sm focus:outline-none focus:border-indigo-500 w-full  md:w-1/4 lg:w-1/4  h-8 text-sm"
                 required 
                 type="text" 
                 placeholder="Contact Number"
                />
            </div>
            <div className="mt-2 ">
                <Submit />
            </div>
          </div>
        </form>
        </div>
    )
}

export default ContactDetails
