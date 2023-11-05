import React from 'react';

function Information() {
    const patientInfo = {
        phone :  8022334455,
        mail : "Meenarabinsachin2@gmail.com",
        affectedSide : "Bilateral",
        condition : "Ortho",
        speciality : "Osteoarthritis"
    }
  return (
    <div className="flex p-5">
      <table className="w-full  border-collapse text-xs">
        <tr className=''>
          <td className=" font-bold text-gray">Phone no.</td>
          <td className=" flex font-bold text-xs pl-7 w-fit"><img src={require("./Assets/call.png")} className='w-5 h-5 mx-3 rounded-full'></img>{patientInfo.phone}</td>
        </tr>
        <tr className=''>
          <td className=" font-bold text-gray ">Mail ID</td>
          <td className="  flex font-bold text-xs pl-7 "><img src={require("./Assets/message.png")} className='w-5 h-5 mx-3 rounded-full'></img>{patientInfo.mail}</td>
        </tr>
        <tr className=''>
          <td className=" font-bold text-gray ">Affected side</td>
          <td className=" flex font-bold text-xs pl-7 "><img src={require("./Assets/body.png")} className='w-5 h-5 mx-3 rounded-full'></img>{patientInfo.affectedSide}</td>
        </tr>
        <tr className=''>
          <td className=" font-bold text-gray ">Condition</td>
          <td className=" flex font-bold text-xs pl-7 "><img src={require("./Assets/knee.png")} className='w-5 h-5 mx-3 rounded-full'></img>{patientInfo.condition}</td>
        </tr>
        <tr className=''>
          <td className=" font-bold text-gray ">Speciality</td>
          <td className=" flex font-bold text-xs pl-7 w-fit"><img src={require("./Assets/doctor.png")} className='w-5 h-5 mx-3 rounded-full'></img>{patientInfo.speciality}</td>
        </tr>
      </table>
      
    </div>
  );
}

export default Information;
