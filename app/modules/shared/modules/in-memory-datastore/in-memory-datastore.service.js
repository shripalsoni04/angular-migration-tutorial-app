define(function() {
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

    InMemoryDatastoreService.prototype._loadDatastore = function() {
        return this._datastore ? this.$q.when(this._datastore) : this.datastoreReadyPromise; 
    }
    
    InMemoryDatastoreService.prototype._getEntityName = function(url){
        return url.replace(this.inMemoryDatastoreApiEndPoint, '');
    }
    
    InMemoryDatastoreService.prototype.get = function(url) {
        var entityName = this._getEntityName(url);
        return this._loadDatastore().then(function(datastore) {
            if (!datastore[entityName]) {
                datastore[entityName] = [];
            }
            return this.$q.when(datastore[entityName]);
        }.bind(this));
    }

    InMemoryDatastoreService.$inject = ['$q', 'inMemoryDatastorePath', 'inMemoryDatastoreApiEndPoint'];
    return InMemoryDatastoreService;
});