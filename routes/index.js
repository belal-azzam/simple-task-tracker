const apiRoute = require('./api/ApiRoutes');
function init(server) {
    server.use('/api', apiRoute);
};
module.exports = {init: init};