define(function() {
    function ProjectModel() {
        this.id = null;
        this.name = null;
        this.client = null;
        this.details = null;
        this.isCompleted = false;
        this.startDate = null;
        this.endDate = null;
        this.employees = [];
    }
    return ProjectModel;
});