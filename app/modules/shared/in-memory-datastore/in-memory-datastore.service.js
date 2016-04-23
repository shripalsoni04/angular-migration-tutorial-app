/**
 * Service to provide methods for simulating $http methods related to CRUD operations
 * by storing data in memory.
 */

define(function() {
    'use strict';
    
    InMemoryDatastoreService.$inject = ['$q', 'inMemoryDatastorePath', 'Exception'];
    
    function InMemoryDatastoreService($q, inMemoryDatastorePath, Exception) {
        
        // Service API
        this.get = get;
        this.post = post;
        this.put = put;
        this.delete = remove;
        
        // Service Implementation        
        var datastore = null;
        var datastoreReadyPromise = $q(function(resolve) {
            require([inMemoryDatastorePath], function(datastore) {
                datastore = datastore;
                resolve(datastore);
            });
        })
        
       /**
        * Returns promise which resolves to in memory datastore.
        */    
        function loadDatastore(){
            return datastore ? $q.when(datastore) : datastoreReadyPromise;
        }
        
        /**
         * Returns location object based on href string.
         */
        function getLocation(href) {
            var l = document.createElement('a');
            l.href = href;
            return l;
        }
        
        /**
         * Parses string url to get baseName, entityName and id of the entity if any.
         */
        function parseUrl(url) {
            var location = getLocation(url);
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
        
        /**
         * Returns list of records for the entity.
         */
        function getList(entityName) {
            return loadDatastore()
                .then(function(datastore) {
                    if (!datastore[entityName]) {
                        datastore[entityName] = [];
                    }
                    return $q.when(datastore[entityName]);
                })
                .catch(Exception.catcher('GET list request failed for '+entityName));
        }
        
        /**
         * Returns record of an entity as per its id.
         */
        function getById(entityName, id) {
            return getList(entityName)
                .then(function(collection) {
                    return _.find(collection, { id: +id });
                })
                .catch(Exception.catcher('GET request failed for '+entityName+' with id '+id));
        }
        
        /**
         * Returns either list of records or a single entity based on url.
         */
        function get(url) {
            var oUrlDetail = parseUrl(url);
            if (oUrlDetail.id) {
                return getById(oUrlDetail.entityName, oUrlDetail.id);
            } else {
                return getList(oUrlDetail.entityName);
            }
        }
        
        /**
         * Creates new records for the entity.
         */
        function post(url, oEntity) {
            var oUrlDetail = parseUrl(url);
            return getList(oUrlDetail.entityName)
                .then(function(collection) {
                    var maxId = _.maxBy(collection, 'id').id;
                    oEntity.id = maxId + 1;
                    collection.push(oEntity);
                    return oEntity;
                })
                .catch(Exception.catcher('POST request failed for '+oUrlDetail.entityName));
        }
        
        /**
         * Updates the records of an entity.
         */
        function put(url, oEntity) {
            var oUrlDetail = parseUrl(url);
            return getList(oUrlDetail.entityName)
                .then(function(collection) {
                    var entityIndex = collection.indexOf(_.find(collection, { 'id': +oUrlDetail.id }))
                    collection.splice(entityIndex, 1, oEntity);
                    return oEntity;
                })
                .catch(Exception.catcher('PUT request failed for '+oUrlDetail.entityName+' with id '+oEntity.id));
        }
        
        /**
         * Removes the entity specified in url from the collection of that entity.
         */
        function remove(url) {
            var oUrlDetail = parseUrl(url);
            return getList(oUrlDetail.entityName)
                .then(function(collection) {
                    var entityIndex = collection.indexOf(_.find(collection, { 'id': +oUrlDetail.id }))
                    collection.splice(entityIndex, 1);
                })
                .catch(Exception.catcher('DELETE request failed for '+oUrlDetail.entityName+' with id '+oUrlDetail.id));
        }
    }
        
    return InMemoryDatastoreService;
});