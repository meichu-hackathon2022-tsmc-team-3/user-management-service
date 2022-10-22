const DepartmentCRUD = require("../crud/department.crud");
const DepartmentRelationsCRUD = require("../crud/departmentRelations.crud");
const UserCRUD = require("../crud/user.crud");
const {
    UserInfoField
} = require("./user.controller");

const _departmentInfoField = (department) => {
    return {
        did: department.did,
        name: department.name       
    }
}

exports.departmentInfoField = (department) => {
    return {
        name: department.name
    }
}

exports.getDepartments = async (req, res) => {

    const departments = await DepartmentCRUD.getDepartments(req.query.skip || 0, req.query.limit || 10);

    res.result = []
    departments.forEach(e => {
        res.result.push(_departmentInfoField(e));
    });

    res.status(200).json({
        detail: res.result
    });

}

exports.getDepartment = async (req, res) => {

    const department = await DepartmentCRUD.getDepartmentByDid(req.params.did);

    if (department === null){
        return res.status(404).json({
            detail: "Department not found"
        });
    }

    res.result = _departmentInfoField(department);

    const relations = await DepartmentRelationsCRUD.getRelationByDid(res.result.did);

    res.result.admins = []
    res.result.employees = [];

    for await (const relation of relations){
        let user = await UserCRUD.getUserByUid(relation.uid);

        if (user === null){
            console.log(`LOG:\tdetected relations with invalid user ${relation.uid} with relation id ${relation._id}`);
            continue;
        }

        user = UserInfoField(user);
        
        if (relation.role === 'admin'){
            res.result.admins.push(user);
            continue;
        }
        
        res.result.employees.push(user);
    }

    return res.status(200).json({
        detail: res.result
    });

}