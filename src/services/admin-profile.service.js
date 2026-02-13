import adminProfileModel from "../models/admin-profile.model.js"

const dbCreateAdminProfile = async (adminData) => {
    return await adminProfileModel.create(adminData);
}
const dbGetAdminProfiles = async () => {
    return await adminProfileModel.find();
}

const dbGetAdminProfileById = async (_userId) => {
    return await adminProfileModel.findOne({_userId});
}

const dbDeletedAdminProfileById = async (_userId) => {
    return await adminProfileModel.findOneAndDelete({_userId});
}

const dbUpdateAdminProfileById = async (idAdmin, adminUpdate ) => {
    return await adminProfileModel.findByIdAndUpdate(
        idAdmin,
        adminUpdate,
        { new: true }
    );
}


export {
    dbCreateAdminProfile,
    dbGetAdminProfiles,
    dbGetAdminProfileById,
    dbDeletedAdminProfileById,
    dbUpdateAdminProfileById

}