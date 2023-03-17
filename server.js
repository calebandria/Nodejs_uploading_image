const cors = require("cors");
const express = require('express');
const app = express();

global.__basedir = __dirname;

app.use(cors());
/* 
const initRoutes =require("./src/routes") */

app.use(express.urlencoded({extended:true}));
//setup server port


/* app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
 */
/* app.post('/profile', upload.single('avatar'), function(req, res){
    console.log(req.file);
    res.json({ message:"successfully uploaded files"});
})
 */
let port = 5000
app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})



