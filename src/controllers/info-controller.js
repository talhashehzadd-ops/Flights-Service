const { StatusCodes} = require("http-status-codes")

const info = (req, res)=>{
    //  return res.status(500).json
    return res
       .status(StatusCodes.OK)
           .json({     // .status is for the status code and it returns the same res object then res.status().json also returns the same res object
                success : true,
                message : "API IS LIVE for V1",
                error: {},
                data : {}
            })
        }


// const info2 = (req, res)=>{
//     return res.status(StatusCodes.OK).json({     // .status is for the status code and it returns the same res object then res.status().json also returns the same res object
//         success : true,
//         message : "API IS LIVE for V2",
//         error: {},
//         data : {}
//     })
// }

module.exports = {      // epxorted as an object
    info
}