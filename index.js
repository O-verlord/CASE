import express from 'express';
import router from './routes/createRoute.js'
import compareRouter from './routes/comparePosition.js';




const app = express();

app.use('/entity',router);

app.use('/compare',compareRouter);

app.use((err, req, res, next)=>{
    console.dir(err);
})


app.listen(3000, ()=>{
    console.log("listening");
});
