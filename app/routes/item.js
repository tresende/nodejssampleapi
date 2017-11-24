module.exports = function (app) {

    this.connection = {};
    this.itemsDAO = {};

    app.get('/api/item/:id', (req, res) => {
        search(req.query, res);
    });

    app.get('/api/item', (req, res) => {
        search(req.query, res);
    });

    app.post('/api/item', function (req, res) {
        var item = req.body;
        setConnection();
        itemsDAO.save(item, function (err, results) {
            connection.end();
            res.json(results);
        });
    });

    search = function (params, res) {
        setConnection();
        itemsDAO.search(params, function (err, results) {
            connection.end();
            res.json(results);
        });
    }

    setConnection = function (){
        this.connection = app.dataAccess.connectionFactory();
        this.itemsDAO = new app.dataAccess.itemsDAO(connection);
    }
};