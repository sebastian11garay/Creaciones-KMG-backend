
const createAdminProfile = async (req, res) => {
    try {
        const inputData = req.body;


        // const userFound = await db( inputData.email );
        const userId = req.payload._id

        inputData.userId = userId;

        // const userFound = await dbCreateAdminProfile( inputData );


        if ( userFound){
            return res.json({ msg: 'Error: usuario ya existe.' });
        }

        inputData.password = encryptedPassword ( inputData.password);
        console.log('antes',inputData);     

        const dataRegistered = await dbRegisterUser (inputData);
        const jsonUserFound = dataRegistered.toObject();

        delete jsonUserFound.password;

        res.json({
            user: jsonUserFound
        });
        


    } catch (error) {
        res.json({
            msg: 'Error: no se puede crear el usuario.'
        });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await dbGetAllUser();
        res.json({
            msg: 'Listado de usuarios',
            users
        });
    } catch (error) {
        res.json({
            msg: 'Error: no se encontro lista de usuarios.'
        });
    }
}

const getUserById = async(req, res) => {
    
    try {

        const userId = req.params.userId; 

        const user = await dbGetUserById( userId );

        res.json({
            msg: 'Usuario encontrado.',
            user    
        });

    } catch (error) {
        res.json({
            msg: 'Error: no se puede encontrar el usuario.'
        });
    }

}

const deleteUserById = async (req, res) => {

    try {
        const idUser = req.params.idUser;

        const userDelete = await dbDeleteUserById(idUser);
        res.json({
            msg: 'usuario borrado',
            userDelete
        });


    } catch (error) {
        res.json({
            msg: 'Error: no se puede borrar el usuario por ID'
        });
    }

}

const updateUserById = async (req, res) => {

try {
    const inputData = req.body;
    const idUser = req.params.idUser;

    const userUpdate = await dbUserUpdate(
        idUser,
        inputData,
        { new: true }
    );

    res.json({
        userUpdate
    });

} catch (error) {
    res.json({
        msg: 'Error: no se puede actualizar el usuario por Id'
    });
}

}
