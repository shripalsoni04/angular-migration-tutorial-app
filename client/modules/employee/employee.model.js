/**
 * Employee API Models
 */

define([
    
], function(){
    'use strict';
    
    function EmployeeAPIGetModel(){
        this.id = null;
        this.name = null;
        this.role = null;
        this.email = null;
    }
    
    EmployeeAPIGetModel.prototype.toLocal = function(){
        return this;    
    };
    
    return {
        Get: EmployeeAPIGetModel
    };
});