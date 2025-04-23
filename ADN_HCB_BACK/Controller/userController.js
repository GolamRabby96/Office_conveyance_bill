import User from '../Model/userModel.js'

export const createUer = async (req, res) => {
    console.log(req.body);
    const { user_id, user_name, user_zone, sub_zone, next_responsible_person, next_responsible_person_id, user_designation, user_department, user_access_level } = req.body;

    const addUser = new User({
        user_id, user_name, user_zone, sub_zone, next_responsible_person, next_responsible_person_id, user_designation, user_department, user_access_level, user_password: '12345'
    })
    await addUser.save();
    res.status(200).json({
        message: 'User add successfully'
    })
}

export const getAllUser = async (req, res) => {
    const userData = await User.find({}).select("-user_password");

    if (!userData) return res.status(404).json({ message: 'User not found' });
    res.status(200).json({
        data: userData,
        message: 'User data received'
    })
}

export const getUserById = async (req, res) => {
    const userData = await User.findOne({ user_id: req.params.id });

    if (!userData) return res.status(200).json({
        data: false,
        message: 'Mension user found'
    });
    res.status(200).json({
        data: userData,
        message: 'Mension user found'
    })
}

export const updateUser = async (req, res) => {
    const updateData = req.body;
    const id = { user_id: req.params.id };

    const updateOne = await User.findOneAndUpdate(id, updateData, {
        new: true
    });

    req.status(200).json({
        data: updateOne,
        message: "User Deleted Successfully"
    })
}