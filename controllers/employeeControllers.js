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

export const getEmployee = async (req, res, next) => {
    try {
        const listEmployee = await Employee.find();
        res.status(200).json({
            status: true,
            message: "successfull",
            data: listEmployee
        })

    } catch (err) {
        console.log(err)
    }
}


export const singleEmployee = async (req, res, next) => {
    try {
        const { id } = req.body
        if (!id) {
            console.log("Id is required");

        }
        const employee = await Employee.findById(id)
        if (!employee) {
            console.log("Employee not found");
        } else {
            res.status(200).json({
                status: true,
                message: "success",
                data: employee
            })
        }

    } catch (err) {
        console.log(err)
    }
}

export const updateEmployee = async (req, res, next) => {
    try {
        const { id, name, Rol, Gender } = req.body

        if (!id) {
            console.log("Id is required")
        }
        const updateData = {}
        if (Id) updateData.Id = Id
        if (name) updateData.name = name
        if (Rol) updateData.Rol = Rol
        if (Gender) updateData.Gender = Gender

        const updatedData = await Employee.findByIdAndUpdate(id, updateData, {
            new: true,
        })
        res.status(200).json({
            status: true,
            message: "success",
            data: updateEmployee
        })

    } catch (err) {
        console.log(err)
    }
}

export const deleteEmployee = async (req, res, next) => {
    try {
        const { id } = req.body
        if (!id) {
            console.log("Id is required")
        }
        const deleteemployee = await Employee.findByIdAndDelete(id)
        if (!deleteEmployee) {
            console.log("Employee not found");
        } else {
            res.status(200).json({
                status: true,
                message: "success",
                data: deleteEmployee
            })
        }

    } catch (err) {
        console.log(err)
    }
}