module.exports = {
    port: 3000,
    session: {
        secret: 'myblog',
        key: 'myblog',
        maxAge: 1000 * 60 * 30
    },
    mongodb: 'mongodb://localhost:32768/myblog'
};
