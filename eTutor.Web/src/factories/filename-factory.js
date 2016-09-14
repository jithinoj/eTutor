
(function () {

    var app = angular.module("Tutorials");

    var FileNameFactory = function () {

        var GetResourceFilePath = function (directory, fileName) {

            return app.pathName + "resources/" + directory + "/" + fileName;
        }

        return { Resolve: GetResourceFilePath };
    }


    app.factory('FileNameFactory', FileNameFactory)
})();