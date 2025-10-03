import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import Page1 from "./pages/Page.jsx";

function App() {
  const [patient, setPatient] = useState(null);

  // ฟังก์ชันดึงข้อมูลคนแรกที่ flag = 1
  const fetchPatient = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/patient');
      setPatient(response.data);
    } catch (err) {
      console.error('Error fetching patient data', err);
    }
  };

  // ฟังก์ชันอัปเดต flag ของคนให้เป็น 2
  const updatePatientFlag = async () => {
    if (patient) {
      try {
        await axios.post('http://localhost:5000/api/update-patient', {
          read_id: patient.read_id,
        });
        fetchPatient();  // ดึงข้อมูลคนถัดไป
      } catch (err) {
        console.error('Error updating patient flag', err);
      }
    }
  };

  useEffect(() => {
    fetchPatient(); // เรียกใช้งานเมื่อหน้าเว็บไซต์โหลด
  }, []);

  return (
    <div className="App">
      <Page/>
    </div>
  );
}

export default App
