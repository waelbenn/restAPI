const { default: mongoose } = require("mongoose");

const connectDB=()=>{
    mongoose.connect("mongodb+srv://waelbenn:1jszlvnEr6Wg5697@cluster0.esu4mzf.mongodb.net/?retryWrites=true&w=majority",(err)=>{
        if (err) throw err
        else console.log("database is connected")
    })
}

module.export=connectDB