import React from 'react'
import { useNavigate } from 'react-router-dom'
const TeleMedHome = () => {
    const navigate=useNavigate()
  return (
    <>
    <h1>|| Appointment List</h1>
    <div>
        <button>Review</button>
        <button>Pending</button>
        <button>Done</button>
        <button>Old</button>
    </div>
    <div>
        <button>Patient</button>
        <button>Announcement</button>
        <button>coming soon</button>
        <button >More</button>
    </div>
    {/* <h1>yes</h1> */}
    </>
  )
}

export default TeleMedHome