test1_aztec_allfile
โปรแกรมจัดการข้อมูล Patient แสดง, เพิ่ม และ อัพเดต
จัดการด้วย (React+Node.js+MySQL)
Frontend:React, Axios
Backend:Node.js, Express, MySQL, Prisma
Database:MySQL

API 
สำหรับ ดึงข้อมูล GET: http://localhost:8000/test/showPatientNew
สำหรับ สร้างข้อมูล Patient POST: http://localhost:8000/test/createPatient
สำหรับ อัพเดทflag PUT: http://localhost:8000/test/updateFlagPatient

folder รวมโค้ดจากทั้งฝั่ง front และ back 
โจทย์ 
เขียนโปรแกรมให้ 
1. อ่านข้อมูลจาก table ด้านล่างคนล่าสุดอัตโนมัติเฉพาะคนที่ flag เป็น 1 เมื่อเปิดหน้า website ขึ้นมา
2. มีปุ่มอัพเดทให้ flag เป็น 2 และแสดงคนถัดไปขึ้นมา

-- สร้างตารางเก็บข้อมูลการอ่านบัตรประชาชน
CREATE TABLE PatientCardRead (
    read_id     INT IDENTITY(1,1) PRIMARY KEY, -- running ID
    cid         VARCHAR(13) NOT NULL,          -- เลขบัตรประชาชน
    first_name  NVARCHAR(100) NULL,            -- ชื่อ
    last_name   NVARCHAR(100) NULL,            -- นามสกุล
    dob         DATE NULL,                     -- วันเกิด
    read_time   DATETIME DEFAULT GETDATE(),    -- เวลาอ่านบัตร
    flag        TINYINT DEFAULT 1              -- 1 = pending (อ่านใหม่), 2 = processed (บันทึกแล้ว)
);

-- เพิ่มข้อมูลตัวอย่างสำหรับใช้ค้นหา
INSERT INTO PatientCardRead (cid, first_name, last_name, dob, flag)
VALUES
('1101700234567', N'สมชาย',  N'ใจดี',   '1988-04-05', 1),
('1499900123456', N'สุกัญญา',N'รุ่งเรือง','1992-11-12',1),
('1999900123999', N'วิทยา',  N'ทองดี',  '1979-02-20', 2),
