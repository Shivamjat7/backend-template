import express from 'express'

const app =  express();


app.get('/',(req,res)=>{
    return res.status(200).json({msg:'hello from backend'})
})




export default app;