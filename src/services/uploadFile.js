import {message} from "antd";

const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png" || file.type === "image/webp";

    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
        return false
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
        return false
    }
    return true;
};

export const uploadFileCloudinary = async (file, preset) =>{
    if(beforeUpload(file)){
        const data = new FormData();
        data.append("file", file);
        data.append("upload_preset", preset);
        const dataResponse = await fetch("https://api.cloudinary.com/v1_1/nhat-duy/upload", 
                {method: "POST",body: data}
                ).then(res=>res.json()).catch(err=>err.json())
        if (dataResponse.url){
            // message.success("Upload img success!")
            return dataResponse
        }
        message.error("Upload img error!");
        console.log("dataResponse",dataResponse);
        return null;
    }

}

export const uploadFileFireBase = async (file, preset) =>{

}
