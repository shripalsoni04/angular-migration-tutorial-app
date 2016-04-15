/**
 * Service to provide methods for simulating $http methods related to CRUD operations
 * by storing data in memory.
 */

define(function() {
    'use strict';
    
    function InMemoryDatastoreService($q, inMemoryDatastorePath, inMemoryDatastoreApiEndPoint) {
        var that = this;
        that.$q = $q;
        that._datastore = null;
        that.inMemoryDatastoreApiEndPoint = inMemoryDatastoreApiEndPoint;

        that.datastoreReadyPromise = $q(function(resolve) {
            require([inMemoryDatastorePath], function(datastore) {
                that._datastore = datastore;
                resolve(datastore);
            });
        })
    }
    
    /**
     * Returns promise which resolves to in memory datastore.
     */
    InMemoryDatastoreService.prototype._loadDatastore = function() {
        return this._datastore ? this.$q.when(this._datastore) : this.datastoreReadyPromise;
    }
    
    InMemoryDatastoreService.prototype._getEntityName = function(url) {
        return url.replace(this.inMemoryDatastoreApiEndPoint, '');
    }

    InMemoryDatastoreService.prototype._getLocation = function(href) {
        var l = document.createElement('a');
        l.href = href;
        return l;
    };
    InMemoryDatastoreService.prototype._parseUrl = function(url) {
        var location = this._getLocation(url);
        var pathname = location.pathname.substring(1);
        var pathParts = pathname.split('/');
        var base = pathParts[0];
        var entityName = pathParts[1];
        var id = pathParts[2];
        return {
            base: base,
            entityName: entityName,
            id: id
        };
    }


    InMemoryDatastoreService.prototype._getList = function(entityName) {
        return this._loadDatastore().then(function(datastore) {
            if (!datastore[entityName]) {
                datastore[entityName] = [];
            }
            return this.$q.when(datastore[entityName]);
        }.bind(this));
    }

    InMemoryDatastoreService.prototype._getById = function(entityName, id) {
        return this._getList(entityName).then(function(collection) {
            return _.find(collection, { id: +id });
        }.bind(this));
    }

    InMemoryDatastoreService.prototype.get = function(url) {
        var oUrlDetail = this._parseUrl(url);
        if (oUrlDetail.id) {
            return this._getById(oUrlDetail.entityName, oUrlDetail.id);
        } else {
            return this._getList(oUrlDetail.entityName);
        }
    }

    InMemoryDatastoreService.prototype.getById = function() {
        var entityName = this._getEntityName(url);
        return this._loadDatastore().then(function(datastore) {
            if (!datastore[entityName]) {
                datastore[entityName] = [];
            }
            return this.$q.when(datastore[entityName]);
        }.bind(this));
    }

    InMemoryDatastoreService.prototype.post = function(url, oEntity) {
        var oUrlDetail = this._parseUrl(url);
        return this._getList(oUrlDetail.entityName).then(function(collection) {
            var maxId = _.maxBy(collection, 'id').id;
            oEntity.id = maxId + 1;
            collection.push(oEntity);
            return oEntity;
        }.bind(this));
    }

    InMemoryDatastoreService.prototype.put = function(url, oEntity) {
        var oUrlDetail = this._parseUrl(url);
        return this._getList(oUrlDetail.entityName).then(function(collection) {
            var entityIndex = collection.indexOf(_.find(collection, { 'id': +oUrlDetail.id }))
            collection.splice(entityIndex, 1, oEntity);
            return oEntity;
        }.bind(this));
    }
    
    InMemoryDatastoreService.prototype.delete = function(url) {
        var oUrlDetail = this._parseUrl(url);
        return this._getList(oUrlDetail.entityName).then(function(collection) {
            var entityIndex = collection.indexOf(_.find(collection, { 'id': +oUrlDetail.id }))
            collection.splice(entityIndex, 1);
        }.bind(this));
    }

    InMemoryDatastoreService.$inject = ['$q', 'inMemoryDatastorePath', 'inMemoryDatastoreApiEndPoint'];
    return InMemoryDatastoreService;
});