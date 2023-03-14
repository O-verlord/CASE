import express from 'express';
import client from '../Tile-38.js'
import bodyParser from 'body-parser'

const parseJSON = bodyParser.json({inflate: true});
const parseURLEncoded = bodyParser.urlencoded({extended: true});


const compareRouter = express.Router();
const tile_38 = client();

compareRouter.use(parseJSON);
compareRouter.use(parseURLEncoded)

.get('/position/emergency/:id',async (req, res, next)=>{
    const {id} = req.params;
    const {vehicleClass,vehicleType,coordinates} = req.body;

    try{
        
        await tile_38.executeCommand(`JSET entity ${id} geometry.coordinates ${JSON.stringify(coordinates)} RAW`)
        await tile_38.nearbyQuery('entity')
        
        
    }catch(err){
        next(err);
    }
    res.send('success');
    next();
})


export default compareRouter;