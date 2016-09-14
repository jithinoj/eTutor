

(function () {

    var app = angular.module("Tutorials");

    var CourseController = function (CourseService, navigator) {

        let _this   = this;
        directories = [];

        CourseService.GetCourses()
                        .then(function (directories) {

                            _this.directories = directories;
                        });


        this.getFiles = function (directory) {

            navigator.redirectToDirectory(directory);
        };

    };

    app.controller("CourseController", ['CourseService', 'RedirectService', CourseController]);

}());