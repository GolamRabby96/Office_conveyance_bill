import User from '../Model/userModel.js'

export const createUer = async (req, res) => {

    const { user_id, user_name, user_zone, sub_zone, next_responsible_person, next_responsible_person_id, user_designation, user_department, user_access_level, user_priority, amount_limit } = req.body;

    const addUser = new User({
        user_id, user_name, user_zone, sub_zone, next_responsible_person,
        next_responsible_person_id, user_designation, user_department,
        user_access_level, user_priority, amount_limit, user_password: '12345'
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
    // console.log('--------------',updateData,'*******************' ,id)

    const updateOne = await User.findOneAndUpdate({ user_id: req.params.id }, updateData, {
        new: true
    });
    
    if (!updateOne) return res.status(404).json({ message: error.message })
    console.log('-----',updateOne);
    res.status(200).json({
        message: "User Deleted Successfully"
    })
}

export const checkUser = async (req, res) => {
    const { user_id, user_password } = req.body;
    const getUser = await User.find({ user_id: req.params.id });
    if (!getUser) return res.status(404).json({ userFlag: false, message: 'User not found' });

    if (user_id == getUser[0]?.user_id) {
        if (user_password == getUser[0]?.user_password) {
            const getUser = await User.find({ user_id: req.params.id }).select('-user_password');
            res.status(200).json({ data: getUser[0], userFlag: true, message: 'Login successfull' })

        }
        else {
            res.status(404).json({ message: 'User not found' })
        }
    }
    else {
        res.status(404).json({ message: 'User not found' })
    }
}


//delete user form the data base
export const deleteUser = async(req, res)=>{
    const userDelete = await User.deleteOne({user_id: req.params.id});
    res.status(200).json({
        message:'User Removed from your database'
    })
}