exports.users = [
    {
        uid: "E010101",
        name: "Shio Ming",
        email: "shioming@tsmc.gmail.com",
        RFID_id: "DEADBEEF",
        status: 1,
    },
    {
        uid: "E285392",
        name: "Shio Hua",
        email: "Hua392@tsmc.gmail.com",
        RFID_id: "DEADC0DE",
        status: 1,
    },
    {
        uid: "E2593829",
        name: "Shio Luo",
        email: "luo0329@tsmc.gmail.com",
        RFID_id: "DADAFACE",
        status: 1,
    },
    {
        uid: "E096096",
        name: "Gia Ming",
        email: "ming0324@tsmc.gmail.com",
        RFID_id: "0U0U0U",
        status: 1,
    },
    {
        uid: "E096095",
        name: "Giaa Ming",
        email: "ming0314@tsmc.gmail.com",
        RFID_id: "0U0U0U",
        status: 1,
    }
];

exports.departments = [
    {
        did: "QA",
        name: "QA",
    },
    {
        did: "RD",
        name: "RD",
    },
    {
        did: "PM",
        name: "PM"
    }
]

exports.departmentRelations = [
    {
        uid: "E010101",
        did: "QA",
        role: "admin"
    },
    {
        uid: "E2593829",
        did: "QA",
        role: "employee"
    },
    {
        uid: "E096096",
        did: "QA",
        role: "employee"
    },
    {
        uid: "E285392",
        did: "RD",
        role: "employee"
    }, {
        uid: "E096095",
        did: "PM",
        role: "employee"

    }
]