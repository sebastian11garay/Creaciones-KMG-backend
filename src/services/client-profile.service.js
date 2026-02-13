import ClientProfileModel from "../models/client-profile.model.js";

const dbCreateclientProfile = async (clientData) => {
    return await ClientProfileModel.create(clientData);
}
const dbGetClientProfiles = async () => {
    return await ClientProfileModel.find();
}

const dbGetClientProfileById = async (_idUser) => {
    return await ClientProfileModel.findOne({_idUser});
}

const dbDeletedClientProfileById = async (_idUser) => {
    return await ClientProfileModel.findOneAndDelete({_idUser});
}

const dbUpdateClientProfileByID = async (idUser, clientUpdate ) => {
    return await ClientProfileModel.findByIdAndUpdate(
        idUser,
        clientUpdate,
        { new: true }
    );
}

export {
    dbCreateclientProfile,
    dbGetClientProfiles,
    dbGetClientProfileById,
    dbDeletedClientProfileById,
    dbUpdateClientProfileByID,
}