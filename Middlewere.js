let value=false


module.exports={
     verifylogin : (req, res, next) => {
        
        
        setTimeout(() => {
            
            value=true
           
          }, 100000);
          next();
      },

 verifysignin:(req,res,next)=>{
    if(value==true){
        next()
    }else{
        
        res.status(404).json("Not Found")
    }
}

}


