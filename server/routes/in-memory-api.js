var inMemoryAPI = function (app, endPoint, mockData) {

    var data = [];

    function setMockData(mockData) {
        if (mockData) {
            if (typeof mockData === 'object' && mockData.length !== undefined) {
                data = mockData;
            } else {
                data = [mockData];
            }
        }
    }

    function findById(id) {
        id = +id;
        var filteredData = data.filter(function (item) {
            return item.id === id;
        });
        return filteredData[0];
    }

    function findIndexById(id) {
        return data.indexOf(findById(id));
    }

    function getMaxId() {
        var sortedData = data.sort(function (a, b) {
            return b.id - a.id;
        });
        return sortedData[0].id;
    }

    function getNextId() {
        var maxId = getMaxId();
        return ++maxId;
    }

    function createAPI(app) {
        app.get(endPoint, function (req, res) {
            return res.json({
                status: 'success',
                data: data
            });
        });

        app.get(endPoint + '/:id', function (req, res) {
            var id = req.params.id;
            return res.json({
                status: 'success',
                data: findById(id)
            });
        });

        app.post(endPoint, function (req, res) {
            var newData = req.body;
            newData.id = getNextId();
            data.push(newData);
            return res.json({
                status: 'success',
                data: newData
            });
        });

        app.put(endPoint + '/:id', function (req, res) {
            var id = req.params.id;
            var entity = findById(id);
            var index = data.indexOf(entity);
            data.splice(index, 1, req.body);
            return res.json({
                status: 'success',
                data: data[index]
            });
        });

        app.delete(endPoint + '/:id', function (req, res) {
            var id = req.params.id;
            var index = findIndexById(id);
            data.splice(index, 1);
            return res.json({
                status: 'success'
            });
        });
    }

    function init() {
        setMockData(mockData);
        createAPI(app);
    }

    init();
}
module.exports = inMemoryAPI;