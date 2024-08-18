const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
        },
        lastname: {

            type:String,
        },
        age:{
            type:Number
        }
    }, {
        collection:'user'
    }    

)
module.exports=mongoose.model('user',userSchema)