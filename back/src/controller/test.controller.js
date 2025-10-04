import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient

const testController = {}

testController.showPatientNew = async (req, res) => {
    try {
        const newPatient = await prisma.patientCardRead.findFirst({
            where:{
                flag:1,
            },
            orderBy:{
                id:"desc"
            }

        })
        if(newPatient){
            res.status(200).json(newPatient); 
        }
        else{
            res.status(404).json({ error: "No patient found with flag = 1" });
        }
    } catch (error) {
        console.log(error)
        console.log("showPatientError")
        res.status(404).json({ error: "Not Found" })

    }
}

testController.createPatient = async (req, res, next) => {
    const {cid, firstName, lastName, dob, } = req.body
    try {
        const newPatient = await prisma.patientCardRead.create({
            data:{
                cid,
                first_name:firstName,
                last_name:lastName,
                dob
            }
        })
        if(newPatient){
            res.status(200).json(newPatient); 
        }
        else{
            res.status(404).json({ error: "fail create patient" });
        }

    } catch (error) {
        console.log(error)
        console.log("createPatientError")
        res.status(404).json({ error: "Not Found" })
    }
}

testController.updateFlagPatient = async (req, res, next) => {
    const {id} = req.body
    try {
        const updateFlag = await prisma.patientCardRead.update({
            where:{
                id:id
            },
            data:{
                flag:2,
                read_time: new Date().toISOString(),
            }
        })
        if(updateFlag){
            res.status(200).json(updateFlag); 
        }
        else{
            res.status(404).json({ error: "fail update flag" });
        }

    } catch (error) {
        console.log(error)
        console.log(`updateFlagError`)
        res.status(404).json({ error: "Not Found" })
    }
}

export default testController