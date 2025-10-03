import React from 'react'

function page() {
    return (
        <div>
            <h1>ข้อมูลผู้ป่วย</h1>
            {patient ? (
                <div>
                    <p>ชื่อ: {patient.first_name}</p>
                    <p>นามสกุล: {patient.last_name}</p>
                    <p>วันเกิด: {patient.dob}</p>
                    <button onClick={updatePatientFlag}>อัปเดต Flag</button>
                </div>
            ) : (
                <p>ไม่มีข้อมูลผู้ป่วยให้แสดง</p>
            )}
        </div>
    )
}

export default page