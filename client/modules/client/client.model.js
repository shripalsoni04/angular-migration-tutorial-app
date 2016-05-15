/**
 * Client API Models
 */

define([
    
], function(){
   'use strict';
   
   function ClientAPIGetModel(){
       this.id = null;
       this.name = null;
       this.timezone = null;
       this.country = null;
       this.email = null;
   }
   
   ClientAPIGetModel.prototype.toLocal = function(){
       return this;
   }
   
   return {
       Get: ClientAPIGetModel
   };
});