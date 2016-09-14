
(function () {

    var app = angular.module("Tutorials");

    var FilesController = function (routeParams, navigator, CourseService) {

        let _this = this;
        files = [];        

        CourseService.GetFiles(routeParams.folder)
                        .then(function (files) {

                            _this.files = files;
                        });

        this.playFile = function (fileName) {

            navigator.redirectToFile(routeParams.folder, fileName);           
        };   

    };

    app.controller("FilesController", ["$routeParams", "RedirectService", "CourseService", FilesController]);

}());