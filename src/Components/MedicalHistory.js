import React from 'react'

function MedicalHistory() {
    const MedicalHistory = {
        condition : "Hypertension, DM, Hypothyrodism"
    }
  return (
    <div className='flex items-center p-1'>
        <div className='flex items-end'>
            <img src={require("./Assets/report.png")}></img>
            <h1 className='text-header text-xs font-bold'>Medical history</h1>
        </div>
        <div>
            <h1 className='font-semibold text-sm pl-5 py-3'>{MedicalHistory.condition}</h1>
        </div>
    </div>
  )
}

export default MedicalHistory