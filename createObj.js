const createGeoJSON = function(req, res, next){
    let schemaObject= {
        "type": "Feature",
        "geometry": { "type": "Point", "coordinates":req.body.coordinates },
        "properties": {
          "vehicleClass": req.body.vehicleClass,
         "vehicleType": req.body.vehicleType,
         "Doc_ID":req.params.id
         
        }
      }
      res.locals.schemaObject = schemaObject;

     next();

}

export default createGeoJSON;