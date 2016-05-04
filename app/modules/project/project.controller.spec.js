define([
     
], function(){
    describe('Project Main Controller ', function(){
        
        beforeEach(module('app.project'));
        
        var ctrl;
        beforeEach(inject(function($controller){
            ctrl = $controller('ProjectCtrl');
        }));
        
        it("should have a value", function() {
            expect(ctrl.someValue).toEqual(42);
        });
    })
})