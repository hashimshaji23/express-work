import Employee from "../model/employee.js"


export const addEmployee = async (req, res, next) => {
    try {
        const { Id, name, Rol, Gender } = req.body

        if (!name) {
            console.log("name is required");
        } else {
            const newEmployee = new Employee({
                Id, name, Rol, Gender
            })
            const saveUser = await newEmployee.save()
            res.status(200).json({
                status: true,
                message: "successfull",
                data: saveUser
            })
        }
    } catch (err) {
        console.log(err)
    }
}

export const getEmployee = async (req, res, next)=>{
    try{
        const listEmployee = await Employee.find();
        res.status(200).json({
            status: true,
            message: "successfull",
            data: listEmployee
        })
        
    }catch(err){
        console.log(err)
    }
}