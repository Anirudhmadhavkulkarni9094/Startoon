import React from 'react'

function Header() {
    const patientInfo = {
        name : "S.Meena",
        gender : "F",
        age : "23",
        patient_Id : 34567890987654
    }
  return (
    <div className='flex justify-between py-5 px-4 font-bold text-header relative'>
    <div>
        <h1>{patientInfo.name}, {patientInfo.gender}/{patientInfo.age}</h1>
        <p>Patient ID: {patientInfo.patient_Id}</p>
    </div>
    <img src={require("./Assets/profile.png")} alt='profile'></img>
    
    </div>
    
  )
}

export default Header