(function () {
    angular.module('net.sgoyal.angi-file',[])
    .directive('input', fileInput);
    fileInput.$inject = [];
    function fileInput() {
        var fileTypeRegex = /^file$/i;
        return {
            restrict: 'E',
            require: '?ngModel',
            link: link,
            scope:{
              formats:'@formats'
            }
        };
        function link(scope, element, attrs, ngModel) {
            if (ngModel && element[0].tagName === 'INPUT' && fileTypeRegex.test(attrs['type'])) {
                var supportedFormats = scope.formats.split(",").map(function(format){return format.toLowerCase()});
                function validate(file) {
                    var ext = "";
                    if ('multiple' in attrs) {
                        for (var index = 0 ; index < file.length; index++) {
                          ext = getExt(file[index].name).toLowerCase();
                          if (supportedFormats.indexOf(ext) > -1) {
                              ngModel.$setValidity('validFormat', true);
                          } else {
                              ngModel.$setValidity('validFormat', false);
                              break;
                          }
                        }
                    } else {
                        ext = getExt(file.name).toLowerCase();
                        if (supportedFormats.indexOf(ext) > -1) {
                            ngModel.$setValidity('validFormat', true);
                        } else {
                            ngModel.$setValidity('validFormat', false);
                        }
                    }
                    return file;
                }
                ngModel.$parsers.push(validate);
                element.on('change', function () {
                    var input = this;
                    if ('multiple' in attrs) {
                        var files = Array.prototype.map.call(input.files, function (file) { return file; });
                        ngModel.$setViewValue(files);
                    }
                    else {
                        ngModel.$setViewValue(input.files[0]);
                    }
                });
            }
        }
        function getExt (fname) {return fname.substr((~-fname.lastIndexOf(".") >>> 0) + 2);}
    }
})();
