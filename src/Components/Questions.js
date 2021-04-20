import React from 'react'

function Questions() {
    return (
        <div className=" p-6 bg-gray-300 mt-5 font-mono">
            <p>Kindly answer the following questions, fill in the contact details and sign this disclosure form.</p>
            <form className="mt-6 ">
                <div className="">
                <label className="font-mono">Question 1: Have you recently arrived Oman in the last 14 days?</label>
                <div><input type="radio" name="q1"/><span className="ml-4 text-gray-600">Yes</span></div> 
                <div><input type="radio" name="q1" /><span className="ml-4 text-gray-600">No</span></div>
                </div>
                <div className="mt-4"> 
                <label className="font-mono ">Question 2:Did you come in contact or live with any confirmed, suspected or quarantined person with new novel coronavirus COVID-19 in the past 14 days?</label>
                <div><input type="radio" name="q2"/><span className="ml-4 text-gray-600">Yes</span></div> 
                <div><input type="radio" name="q2"/><span className="ml-4 text-gray-600">No</span></div>
                </div>
                <div className="mt-4"> 
                <label className="font-mono">Question 3: Have you been tested for COVID-19 in the past 1 month ?</label>
                <div><input type="radio" name="q3"/><span className="ml-4 text-gray-600">Yes</span></div> 
                <div><input type="radio" name="q3"/><span className="ml-4 text-gray-600">No</span></div>
                </div>
                <div className="mt-4"> 
                <label className="font-mono">Question 4: Are you presently suffering from any health condition that put you at higher risk of serious illness? </label>
                <div><input type="radio" name="q4"/><span className="ml-4 text-gray-600">Yes</span></div> 
                <div><input type="radio" name="q4"/><span className="ml-4 text-gray-600">No</span></div>
                </div>
                <div className="mt-4"> 
                <label className="font-mono">Question 5: Are you presently suffering from any of symptoms (such as fever, cough, sore throat, shortness of breath, diarrhea, vomiting, runny nose, body ache, loss of smell, loss of taste)? </label>
                <div><input type="radio" name="q5"/><span className="ml-4 text-gray-600">Yes</span></div> 
                <div><input type="radio" name="q5"/><span className="ml-4 text-gray-600">No</span></div>
                </div>
            </form>
        </div>
    )
}

export default Questions
