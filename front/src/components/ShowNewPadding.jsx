import React, { useEffect, useState } from 'react'
import { showPatientNew, updateFlag } from '../api/allApi.js'

function ShowNewPadding() {
    const [newPatient, setNewPatient] = useState([])
    const [status, setStatus] = useState('')

    useEffect(() => {
        const fetchNewPatient = async () => {
            try {
                const res = await showPatientNew();
                setNewPatient(res.data)
                if (res.data.flag === 1) {
                    setStatus("pending")
                }
                else {
                    setStatus("process")
                }
                // console.log(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchNewPatient()
    }, [])

    const hdlUpdateStatus = async (e) => {
        // e.preventDefault();
        // e.stopPropagation();
        try {
            const body = {
                id: newPatient.id
            }
            const response = await updateFlag(body)
            console.log("success", response)
            window.location.reload();
        } catch (error) {
            console.log(error)
        }

    }


    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            {/* <p>id {newPatient.id}</p> */}
            <p>ชื่อ {newPatient.first_name}</p>
            <p>นามสกุล {newPatient.last_name}</p>
            <p>เลขบัตรประชาชน {newPatient.cid}</p>
            <p>status {status}</p>
            <button className="btn btn-active btn-primary" onClick={(e)=>hdlUpdateStatus(e)}>update status</button>
        </div>
    )
}

export default ShowNewPadding