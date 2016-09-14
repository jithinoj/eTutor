
(function () {

    var app = angular.module("Tutorials");

    var RedirectService = function (location) {

        this.redirectToCourses = function () {

            location.path('/main');
        };

        this.redirectToDirectory = function (directory) {

            location.path('/main/' + directory);
        };

        this.redirectToFile = function (directory, file) {

            location.path('/main/' + directory + "/" + file);
        }

    };

    app.service('RedirectService', ['$location', RedirectService])

})();