# angi-file

angi-file is a directive for angularjs to help you make a model for input file and validate for supported file formats.
### Version
1.0.0
### Features

  - Support two way data binding using ng-model
  - Support file format validations
  - Support multiple files option

### Installation

```sh
npm install angi-file
```
OR
```sh
bower install angi-file
```
### DEMO

[Click Here](https://l.sgoyal.net/angiFile "angi-file demo implementation") to see running demo.

## Get the code

* This plugin is opensource and source code is available at [github](https://github.com/sgoyalnet/angi-file)
* Source code for the demo can be seen here. [Demo Source](https://github.com/sgoyalnet/angi-file-demo)

### Usages

* Include script into your index.html file.
```html
<script src="node_modules/angi-file/dist/angi-file.min.js"></script>
```
OR
```html
<script src="bower_component/angi-file/dist/angi-file.min.js"></script>
```
* Add dependency to you app module
```javascript
angular.module ("net.sgoyal.sample",['net.sgoyal.angi-file'])
```
* Use it in your template file
```html
<input multiple formats="jpg,png" type="file" ng-model="form.file" required name="file" class="form-control">
```
You will get your file object in your controller scope. Enjoy!!!

* your controller
```javascript
(function () {
	angular.module ("net.sgoyal.sample")
	.controller ("AppCtrl", function ($scope) {
		$scope.form = {};
		//form submit handler
		$scope.saveUser = function (userform) {
		    console.log ($scope.form.file);
			if (userform.$valid)
				alert ("Form saved");// will only be called if user have selected valid formats that you have configured.
		};
	});
})();
```

### Attributes

* ***formats*** (pass file formats in comma seperated string you want to support. it will mark you form invalid in case of un-supported file was selected).
* ***multiple*** (to support multi file selection. Will return array of file object).

### Contribute

Do you want to improve it? Sounds cool. Please drop me a line at <mail.goyalshubham@gmail.com>
