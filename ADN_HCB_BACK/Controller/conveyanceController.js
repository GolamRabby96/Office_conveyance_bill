import Conveyance from '../Model/conveyanceModel.js';

export const addConveyance = async(req, res)=>{
    console.log(req.body);
    const addConveyance = new Conveyance(req.body);
    await addConveyance.save();

    res.status(200).json({
        message:'Conveyance bill updated'
    })
}


export const getConveyance = async(req, res) =>{
    const {month, year} = req.body;
    const conveyanceBill = await Conveyance.find({
        month : month,
        year : year
    })

    res.status(200).json({
        data: conveyanceBill,
        message:'Conveyance bill data'
    })
}


export const getPendingList = async(req, res) =>{
    const pendingList = await Conveyance.find({
        next_responsible_person_id : req.params.id
    })

    if (!pendingList) return res.status(404).json({ message: 'Pending List not found' });

    res.status(200).json({
        data: pendingList,
        message:'Pending list found'
    })
}

export const updateMultipleId = async(req, res)=>{
    const multiID = req.body[0];
    const {next_responsible_person, next_responsible_person_id} = req.body;
    const {approver_name, approver_id, approver_designation} = req.body.approver;
    console.log(multiID);
    console.log(next_responsible_person , next_responsible_person_id);
    console.log(approver_name, approver_id , approver_designation);
}
