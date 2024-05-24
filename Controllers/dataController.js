import dataModels from "../models/dataModels.js"

export const createDataController= async(req,res)=>{
 try{
    //get from the body
    const {name,city} =req.body
    //validation
    if(!name || !city){
        return res.status(400).send({
            success:false,
            message:"Error in name or city"
        })
    }
    //send the data to the database
    const data = await new dataModels({name,city}).save()
    //return response
    return (res.status(201).send({  
        success: true, 
        message: "User register succesfully",
        data,
       })
    );
 }catch(error){
    res.status(400).send({
        success:true,
        message:"Error in creating the crud"
    })
 }
}


//get the data

export const  getDataController =async(req,res)=>{
 try{
    //get the data from modals
    const Category =await dataModels.find({})
    //success response
       res.status(200).send({
        success:true,
        Message:"Get your category here",
        Category
    })

 }catch(error){
        res.status(400).send({
        success:true,
        message:"Error in creating the crud"
    })

 }
}

//update the data
export const updateDataController  =async(req,res)=>{
    try{
        const {name}=req.body
        const {id} =req.params
        const Category = await dataModels.findByIdAndUpdate(id,{name},{new:true})
         res.status(200).send({
            success:true,
            Message:"category updated succesfully",
            Category
        })
    }
    catch(error){
        res.status(400).send({
            success:true,
            message:"Error in creating the crud"
        })

    }
}

//delete the data
export const DeleteDataController  = async(req,res)=>{
    try{
        const {id} = req.params;
        await dataModels.findByIdAndDelete(id);
        
        res.status(200).send({
            success:true,
            Message:"category Deleted succesfully"
        })

    }catch(error){
        res.status(400).send({
            success:true,
            message:"Error in creating the crud"
        })

    }
}