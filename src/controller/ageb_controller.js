
const modelAGEB =  require('../model/ageb_model')
const controllerAGEB = {}



controllerAGEB.agebs_cp = (req,res)=>{
    
    console.log(req.body)
   
    modelAGEB.agebs_cp(req.body,function(resultado){
        res.send(resultado)
    })
    
}

controllerAGEB.polygons_ageb = (req,res)=>{
    modelAGEB.polygons_ageb(req.body,function(resultado){
        res.send(resultado)
    })

}

controllerAGEB.markers_cp = (req,res) =>{
    modelAGEB.markers_cp(req.body,function(resultado){
        res.send(resultado)
    })

}


module.exports = controllerAGEB