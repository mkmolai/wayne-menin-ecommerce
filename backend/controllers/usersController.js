const User = require('../models/User')
const {getToken} = require('../util');

exports.getAllUsers = async (req, res, next) => {

        try {
            const [users, _] = await User.getAllUsers(); 
            res.status(200).json(users)
        } catch (error) {
            console.log(error)
            next(error)
        } 
}

exports.getUserByCredentials = async (req, res, next) => {

    const userInfo= req.body

    try {
        const [user, _] = await User.getUserByCredentials(userInfo);
        
        if(user[0])
        {
            res.status(200).json({
                _id: user[0].Id,
                name: user[0].Name,
                email: user[0].Email,
                password: user[0].Password,
                isAdmin: user[0].isAdmin,
                token: getToken(user[0])
            })
        
        }
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}


exports.getUserById = async (req, res, next) => {

    try {
        let user_Id = req.params.id;
        const [user, _] = await User.getUserById(user_Id);
        if(user)
        {

            res.status(200).json(user[0])
        }
        
    } catch (error) {
        console.log(error)
        next(error)
    }
}
 

exports.registerUser = async (req, res, next) => {
    try {
        const new_user_obj = req.body;

        let user = new User(new_user_obj);
        // let user = new User(name);

        user = await user.save();

        res.status(201).json({message: "User created"})
       
    } catch (error) {
        console.log(error)
        next(error)
    }
}

exports.editUserById = async (req, res, next) => {

}

exports.deleteUserById = async (req, res, next) => {

}