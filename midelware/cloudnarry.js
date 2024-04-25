const cloudinary = require('cloudinary').v2;
const fs=require('fs')
// import fs from "fs"

cloudinary.config({ 
    cloud_name: 'dajg09rud', 
    api_key: '276127346337385', 
    api_secret: 'mFbUqkoMWpWDjl7puSJLOc9MvKg'
  });

  const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfull
        //console.log("file is uploaded on cloudinary ", response.url);
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        return null;
    }
}



module.exports= {uploadOnCloudinary}