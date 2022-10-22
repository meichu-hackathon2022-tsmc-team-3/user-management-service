const UserCRUD = require("../crud/user.crud");
const DepartmentRelationsCRUD = require("../crud/departmentRelations.crud");

const _userInfoField = (user) => {

    return {
        uid: user.uid,
        name: user.name,
        email: user.email,
        RFID_id: user.RFID_id,
    };

}

exports.UserInfoField = (user) => {
    return {
        uid: user.uid,
        name: user.name
    }
}

exports.getAllUser = async (req, res) => {

    const users = await UserCRUD.getUser();

    res.result = [];
    for (const user of users) {
        res.result.push(_userInfoField(user));
    }

    return res.status(200).json({
        detail: res.result
    });
}

exports.getUser = async (req, res, next) => {

    let user = null;

    if ('uid' in req.params) {
        user = await UserCRUD.getUserByUid(req.params.uid);
    }

    if ('rfid' in req.params) {
        user = await UserCRUD.getUserByRFID(req.params.rfid);
    }

    if (user === null) {
        return res.status(404).json({
            detail: "User not found"
        })
    }

    res.result = _userInfoField(user);

    res.result.departments = [];
    const relations = await DepartmentRelationsCRUD.getRelationByUid(user.uid);
    for await (const relation of relations) {
        res.result.departments.push(relation.did);
    }

    return res.status(200).json({
        detail: res.result
    });
}