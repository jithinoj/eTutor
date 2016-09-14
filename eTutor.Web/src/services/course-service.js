
(function () {
    
    var app = angular.module("Tutorials");

    var CourseService = function (http, log, URLService) {

        this.GetCourses = function () {

            return http.get(URLService.coursesURL)
                        .then(function (response) {

                            return response.data;
                        });
        };


        this.GetFiles = function (directoryName) {

            return http.get(URLService.filesURL + directoryName)
                        .then(function (response) {

                            return response.data;
                        });
        };

    };

    app.service("CourseService", ['$http', '$log', 'URLService', CourseService]);

}());