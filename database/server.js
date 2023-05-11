const expresse = require("express")
require("dotenv").config()
const mongoose= require("mongoose")
const postJob= require("./Routes/jobPosts")
const userRoute= require("./Routes/userRoute")
const internRoute= require("./Routes/Internships")
const app= expresse()

mongoose.connect(process.env.MONG_URI)
.then(()=>{
        app.listen(process.env.PORT,()=>{
            console.log("listening on ",process.env.PORT)
        })
    }
)
.catch((error)=>{
    console.log("Error:",error)
})

app.use(expresse.json())
app.use((req,res,next)=>{
    console.log(req.method,req.path)
    next()
})
app.use("/posts",postJob)
app.use("/users",userRoute)
app.use("/internships",internRoute)


