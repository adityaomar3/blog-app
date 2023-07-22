import mongoose from 'mongoose'

 const Connection = async (username,password) =>{
    try{
        const URL = `mongodb+srv://${username}:${password}@blog-app.tpkjfqi.mongodb.net/?retryWrites=true&w=majority`;
        await mongoose.connect(URL, {useNewUrlParser: true});
        console.log(`Database connected`);
        
    }catch(e){
        console.log(`Error while making connction with db`, e);

    }
}

export default Connection