const { error } = require("winston")

const about = (req, res) => {
    return res.status(200).json({
        "message" : 'Ok Tested',
        status : "live",
        error : {},
        data : {}
    })
}

module.exports = {
    about
}