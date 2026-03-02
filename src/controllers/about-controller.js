const about = (req, res) => {
    return res.status(200).json({
        "message" : 'Ok Tested',
        status : "live",
        err : {},
        data : {}
    })
}

module.exports = {
    about
}