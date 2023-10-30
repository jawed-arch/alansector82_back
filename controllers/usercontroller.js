const User = require("../models/usermodel")
// const saltround=10
// const bcrypt = require("bcrypt")






adduser = (req,res)=>{
    console.log(req.body)
    var validate = ""
    if(req.body.name == "")
    {
        validate += "Name is required \n"
    }
    if(req.body.email == "")
    {
        validate += "Email is required \n"
    }     
    if(req.body.contact == "")
    {
        validate += "Contact is required \n"
    }    
    if(req.body.enquiry == "")
    {
        validate += "Enquiry is required \n"
    }    

    if(!!validate)
    {
        res.json({
            status:409,
            success:false,
            msg:validate
        })
    }
    else{
        let userobject = new User()
        userobject.email = req.body.email
        // userobject.password = bcrypt.hashSync(req.body.password,saltround)
        userobject.save()
        .then(userdata=>{
            let customerobject = new User()
            customerobject.name = req.body.name
            customerobject.email = req.body.email
            customerobject.contact = req.body.contact
            customerobject.enquiry = req.body.enquiry
            customerobject.userId = userdata._id
            customerobject.save()

            res.json({
                status:200,
                success:true,
                msg:'Your query has been submitted',
                data:req.body
                
            })
        })
    }
}

getalluser = (req,res)=>{
    User.find(req.body)
    .then(userdata=>{
         res.json({
             'status':200,
             'success':true,
             'msg':'Data loaded',
             'data': userdata,
         })
    })
    .catch(err=>{
     res.json({
         'status':500,
         'success':false,
         'msg':'Error',
         'error': String(err)
     })
    })
 }

module.exports = {
        adduser,
        getalluser,
}