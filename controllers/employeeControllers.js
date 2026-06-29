import Employee from "../model/employee.js"


export const addEmployee = async (req, res, next) => {
    try {
        const { empcod, name, jobRole, salary, email } = req.body

        if (!name) {
            console.log("name is required");
        } else {
            const newEmployee = new Employee({
                empcod, name, jobRole, salary, email
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
        const { name, minSalary, maxSalary } = req.query;
        const filter = {};

        if(minSalary || maxSalary) {
            filter.salary = {};
            if(minSalary) filter.salary.$gte = Number(minSalary);
            if(maxSalary) filter.salary.$lte = Number(maxSalary);
        }

        const listEmployee = await Employee.find(filter).sort({ craetedAt: -1 });

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
        const { empcod, name, email, jobRol, salary } = req.body

        if (!id) {
            console.log("Id is required")
        }
        const updateData = {}
        if (empcod) updateData.empcod = empcod
        if (name) updateData.name = name
        if (email) updateData.email = email
        if (jobRol) updateData.Rol = Rol
        if (salary) updateData.Gender = Gender

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