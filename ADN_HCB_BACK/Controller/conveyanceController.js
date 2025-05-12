import Conveyance from '../Model/conveyanceModel.js';

// Add conveyance bill
export const addConveyance = async (req, res) => {
    const addConveyance = new Conveyance(req.body);
    await addConveyance.save();

    res.status(200).json({
        message: 'Conveyance bill updated'
    })
}

//get single conveyance bill
export const getSingleConveyanceBill = async (req, res) => {
    const conveyance = await Conveyance.find({ _id: req.params.id });
    if (!conveyance) return res.status(404).json({ message: 'This id is not found' });

    res.status(200).json({
        data: conveyance,
        message: " Data found successfully"
    })
}

// Get conveyance bill for current users
export const getConveyance = async (req, res) => {
    const { month, year } = req.body;
    const conveyanceBill = await Conveyance.find({
        preparer_id: req.params.id,
        reject_condition: false,
        month: month,
        year: year
    })

    res.status(200).json({
        data: conveyanceBill,
        message: 'Conveyance bill data'
    })
}

// Get pending list for next boss
export const getPendingList = async (req, res) => {
    const pendingList = await Conveyance.find({
        next_responsible_person_id: req.params.id,
        reject_condition: false
    })

    if (!pendingList) return res.status(404).json({ message: 'Pending List not found' });

    res.status(200).json({
        data: pendingList,
        message: 'Pending list found'
    })
}

// Update single conveyance bill
export const updateSingleConveyance = async (req, res) => {
    const updateData = req.body;
    const updateOne = await Conveyance.findOneAndUpdate(
        { _id: req.params.id },
        updateData,
        { new: true }
    )
    res.status(200).json({
        data: updateOne,
        message: 'Pending list found'
    })
}


// Update multiple conveyance bill
export const updateMultipleId = async (req, res) => {
    const multiID = req.body[0];
    const { next_responsible_person, next_responsible_person_id } = req.body;
    const { approver_name, approver_id, approver_designation } = req.body.approver;

    const updateOne = await Conveyance.updateMany(
        { _id: { $in: multiID } },
        {
            $set: {
                next_responsible_person: next_responsible_person,
                next_responsible_person_id: next_responsible_person_id
            },
            $push: {
                Approver_list: {
                    approver_name: approver_name,
                    approver_id: approver_id,
                    approver_designation: approver_designation
                }
            }
        },
        { runValidators: true }
    );

    res.status(200).json({
        data: updateOne,
        message: 'Pending list found'
    })

}

// Reject convenyance bill section
export const rejectConvenceBill = async (req, res) => {
    const { note } = req.body;

    const updateDoc = await Conveyance.findOneAndUpdate(
        { _id: req.params.id },
        { $set: { reject_note: note, reject_condition: true }, Approver_list: [] },
        { new: true }
    )
    if (!updateDoc) {
        return res.status(404).json({ message: "Document not found" });
    }

    res.status(200).json({
        data: updateDoc,
        message: 'Pending list found'
    })
}

// Delete conveyance section
export const deleteConveyanceBill = async (req, res) => {
    const deleteConveyance = await Conveyance.deleteOne({ _id: req.params.id });
    res.status(200).json({
        message: 'Delete Successfullly'
    })
}
