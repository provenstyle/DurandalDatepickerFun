define(['plugins/http', 'durandal/app', 'knockout'], function (http, app, ko) {
	 return {
        displayName: 'Using a ko.observable to pick a date',
        chosenDate: ko.observable(),
        activate: function () {
        }
    };
});