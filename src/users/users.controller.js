const User = require('./users.model');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        // save to db
        const savedUser = await user.save();
        res.status(200).send({user: savedUser, message: "User has been created in database"})
    } catch (error) {
      res.status(500).send(error);        
    }
}

exports.findUser = async (req, res) => {
    try {
        const user = req.params.username;
        const targetUser = User.findOne({username: user });
        res.status(200).send({ user: targetUser, message: "User found" })
    } catch (error) {
        res.status(500).send(error);

    }

}

exports.updateUser = async (req, res) => {
    try {
        const user = req.params.username;
        const changeName = await User.updateOne({username: user});
        res.status(200).send({user: changeName});
    } catch (error) {
        res.status(500).send(error);
        
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = req.params.username;
        const removeUser = await User.deleteOne({username: user});
        res.status(200).send({user: removeUser});
    } catch (error) {
        res.status(500).send(error);
    }
}

