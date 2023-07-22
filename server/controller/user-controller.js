import { response } from 'express';
import User from '../models/user.js'

export const signupUser= async(req,res)=>{
    try{
        const user = request.body;

        new User(user);
        const newUser = new User(user);
        await newUser.save(); 
        return response.status(200).json({msg: 'signup successful'})

    }catch(e){
        return response.status(500).json({msg:'Error while signup the user'})

    }
}