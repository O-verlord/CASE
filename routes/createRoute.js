import express from 'express';
import client from '../Tile-38.js';
import bodyParser from 'body-parser'
import caseError from '../errors/caseError.js';
import createGeoJSON from '../createObj.js';

const tile_38 = client();

const parseJSON = bodyParser.json({inflate: true});
const urlEncoded = bodyParser.urlencoded({extended: true});

const router = express.Router();


    router.use(parseJSON)
    router.use(urlEncoded)

    .post('/create/:id',createGeoJSON,async (req, res, next)=>{
       
          try{
            await tile_38.set('entity', `${req.params.id}`,res.locals.schemaObject);
            next();
          }catch(err){
            next(err)
          }    
          
           res.send(res.locals.schemaObject);
           next();

    })
 
   export default router;