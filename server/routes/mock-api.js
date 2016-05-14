var _ = require('lodash');

var mockAPI = function (app, endPoint, mockData, options) {

    var data = [];
    options = options || {};
    
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
        return _.find(data, {id: id});
    }

    function findIndexById(id) {
        return data.indexOf(findById(id));
    }

    function getNextId() {
        var maxId = _.max(_.map(data, 'id'))
        return ++maxId;
    }

    function createAPI(app) {
        app.get(endPoint, function (req, res) {
            data = _.orderBy(data, 'createdDate');
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
            newData.createdDate = +new Date();
            newData.createdBy = {
                id: 1,
                text: 'system'
            };
            if(options.post && options.post.beforeSave){
                newData = options.post.beforeSave(newData);
            }
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
            var newData = _.cloneDeep(entity);
            _.extend(newData, req.body);
            newData.updatedDate = +new Date();
            newData.updatedBy = {
                id: 1,
                text: 'system'
            };
            if(options.put && options.put.beforeSave){
                newData = options.put.beforeSave(newData);
            }
            data.splice(index, 1, newData);
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
module.exports = mockAPI;