import ZONE from '../Model/zoneModel.js'

export const addZone = async (req,res) => {
    const { zone_name, sub_zone } = req.body;

    const zoneAdd = new ZONE({ zone_name, sub_zone });
    await zoneAdd.save();

    res.status(200).json({
        data: zoneAdd,
        message: 'ssssssssssssssssssssss'
    })
}

export const getSubZone = async (req,res)=>{
    const getZone = await ZONE.find({zone_name: req.params.name});
    if(!getZone) return res.status(404).json({message:'Zone not found'});
    res.status(200).json({
        data:getZone,
        message: "Zone Found"
    })
}


export const allZone = async(req, res)=>{
    const allZone = await ZONE.find({});
    if(!allZone) return res.status(404).json({message:'Zone not found'});

    res.status(200).json({
        data:allZone,
        message:"Zone Found"
    })
}

export const deleteSubZone = async(req, res)=>{
    const deleteZone = await ZONE.deleteOne({_id: req.params.id});

    res.status(200).json({
        message:'Zone delete successfully'
    })
}