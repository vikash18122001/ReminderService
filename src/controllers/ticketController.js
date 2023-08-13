const TicketService=require('../services/mailService');


const create=async (req,res)=>{
    try {
        const response=await TicketService.createNotification(req.body);
        return res.status(201).json({
            success:true,
            data:response,
            err:{},
            message:'successfully registered on email reminders'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'unable to register an email reminder',
            success:false,
            error:{error},
            data:response
        })
    }
}
module.exports={
    create
}