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

