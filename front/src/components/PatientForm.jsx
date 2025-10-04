import React, { useState } from 'react'
import { createPatient } from '../api/allApi.js';

function PatientForm() {

    const [formData, setFormData] = useState({
        cid: '',
        firstName: '',
        lastName: '',
        dob: ''
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedDob = new Date(formData.dob).toISOString();
        console.log(formattedDob)
        try {
            const body = {
                cid: formData.cid,
                firstName: formData.firstName,
                lastName: formData.lastName,
                dob: formattedDob,
            }
            console.log(body)
            const response = await createPatient(body)
            console.log("success", response)
            window.location.reload();

        } catch (error) {
            console.log(error)
        }
        // console.log(formData);

    };
    return (
        <div className='flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='' >
                <div className='m-3'>
                    <label htmlFor="cid">CID (เลขบัตรประชาชน):</label>
                    <input
                        type="text"
                        id="cid"
                        name="cid"
                        value={formData.cid}
                        onChange={handleChange}
                        required
                        className='input input-success'
                    />
                </div>

                <div className='m-3'>
                    <label htmlFor="firstName">First Name (ชื่อ):</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className='input input-success'

                    />
                </div>

                <div className='m-3'>
                    <label htmlFor="lastName">Last Name (นามสกุล):</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className='input input-success'

                    />
                </div>

                <div className='m-3'>
                    <label htmlFor="dob">Date of Birth (วันเกิด):</label>
                    <input
                        type="date"
                        id="dob"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        required
                        className='input input-success'

                    />
                </div>

                <button type="submit" className='btn btn-active btn-success m-3'>Submit</button>
            </form>
        </div>
    )
}

export default PatientForm