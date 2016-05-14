/**
 * Project API Model Class
 */

define(function () {
    'use strict';

    function ProjectAPIGetModel() {
        this.id = null;
        this.name = null;
        this.client = null;
        this.details = null;
        this.isCompleted = false;
        this.startDate = null;
        this.endDate = null;
        this.employees = [];
        this.createdDate = null;
        this.createdBy = null;
        this.updatedDate = null;
        this.updatedBy = null;
    }

    ProjectAPIGetModel.prototype.toLocal = function () {
        this.startDate = this.startDate ? new Date(this.startDate) : null;
        this.endDate = this.endDate ? new Date(this.endDate) : null;
        return this;
    }

    function ProjectAPIPostModel() {
        this.id = null;
        this.name = null;
        this.clientId = null;
        this.details = null;
        this.isCompleted = false;
        this.startDate = null;
        this.endDate = null;
        this.employees = [];
    }

    ProjectAPIPostModel.prototype.toRemote = function () {
        this.startDate = this.startDate ? +this.startDate : null;
        this.endDate = this.endDate ? +this.endDate : null;
        return this;
    }

    return {
        Get: ProjectAPIGetModel,
        Post: ProjectAPIPostModel
    };
});