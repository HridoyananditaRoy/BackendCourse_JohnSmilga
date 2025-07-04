const authorize = (req,res,next)=>{
    const {user} = req.query;
    //req.query is an object that contains the query string parameters 
    // of the request.
    //It is used to access the query string parameters of the request.
    //If the user is not authorized, we can send a response 
    // with a status code of 401.

    //If user = 'john', we will authorize the user
    
    if(user === 'john'){
        req.user = {name: 'john', id: 3};
         next();
    }
    else{
        res.status(401).send('Unauthorized User');
        //401 is the status code for Unauthorized
    }
    console.log('Authorize User');
    next();
}



module.exports = authorize;