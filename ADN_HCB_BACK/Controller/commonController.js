import Conveyance from '../Model/conveyanceModel.js';



export const rejectList = async(req, res)=>{

    const rejectConveyance = await Conveyance.find({
        preparer_id: req.params.id,
        reject_condition : true
    })

    if(!rejectConveyance) return res.status(404).json({message:"Document not found"});

    res.status(200).json({
        data: rejectConveyance,
        message: "Reject list found"
    })
}