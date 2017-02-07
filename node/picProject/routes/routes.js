module.exports = function(app) {
    require('./login')(app);
    require('./register')(app);
    require('./home')(app);
    require('./upload')(app);
};
