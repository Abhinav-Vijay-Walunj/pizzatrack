const mongoose=require('mongoose');
// get mongoose
const Schema = mongoose.Schema
// schema is class or constructor so we named S capital
// in Schema we define the col_name then then type: and does it mandatory or not require:true;
//menu scehmea

// always we store data at database and then use path or url to fetch it not that image actually
const menuSchema= new Schema({
    _id:{
        type:Number,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    size:{
        type:String,
        required:true
    },
})
// blueprint of database

// using model method we create model from database
// .model('model_name',schema name);
const Menu = mongoose.model('Menu',menuSchema);

module.exports = Menu ;
// we can also export module like below
// module.exports =mongoose.model('Menu',menuSchema);
