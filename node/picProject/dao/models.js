module.exports = {
    User: {
        uname: {
            type: String,
            required: true
        },
        upwd: {
            type: String,
            required: true
        }
    },
    Picture: {
        name: String,
        description: String,
        url: String
    }
}
