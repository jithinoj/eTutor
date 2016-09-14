

(function () {

    var app = angular.module("Tutorials", ['ngRoute']);
    app.pathName = location.pathname;
        
    app.config(function ($routeProvider) {
        $routeProvider
            
                .when("/main", {
                    templateUrl: 'src/directory/courses.html',
                    controller: 'CourseController as ctrl'
                })

                .when("/main/:folder", {
                    templateUrl: 'src/directory/files.html',
                    controller: 'FilesController  as ctrl'
                })
                
                .when("/main/:folder/:fileName", {
                    templateUrl: 'src/directory/player.html',
                    controller: 'PlayerController  as ctrl'
                })
                
               .otherwise({ redirectTo: "/main" });
    });


}());