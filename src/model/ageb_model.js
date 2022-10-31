const conexion = require('../DB/db_conecction')
const modelageb = {}
function agebs_cp(data,callback){
    var sql = "select * from agebs  where agebs.codigoPostal= ?"
    conexion.query(sql,[data.cp], function(err, results){
          if (err){ 
            throw err;
          }
        return callback(results);
    })
}


function polygons_ageb(data,callback){
    var sql = "select * from agebs  where agebs.idAgeb= ?"
    conexion.query(sql,[data.ageb], function(err, results){
          if (err){ 
            throw err;
          }
        return callback(results);
    })
}

function markers_cp(data,callback){
    console.log(data)
   sql =  "select * from comercios where codigoPostal= ?"
   conexion.query(sql,[data.cp], function(err, results){
    if (err){ 
      throw err;
    }
  return callback(results);
})
}

modelageb.agebs_cp = agebs_cp
modelageb.polygons_ageb = polygons_ageb
modelageb.markers_cp = markers_cp

module.exports = modelageb