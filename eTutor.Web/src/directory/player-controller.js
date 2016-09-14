(function () {
   
    var app = angular.module("Tutorials");
    
    var PlayerController = function (routeParams, FileNameFactory) {

        this.fileName = FileNameFactory.Resolve(routeParams.folder, routeParams.fileName);
    };

    app.controller('PlayerController', ['$routeParams', 'FileNameFactory', PlayerController]);

}());
