

(function () {

    var app = angular.module("Tutorials");

    var URLService = function () {

        this.coursesURL = app.pathName + 'api/directory';
        this.filesURL   = app.pathName + 'api/directory/';

    };

    app.service('URLService', URLService);

})();
