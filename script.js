angular.module('myApp', [])
    .controller('myCtrl', function($scope, $interval) {
        $scope.flightBookings = 400;
        $scope.amazingTours = 400;
        $scope.ticketBookings = 200;

        var flightPromise, toursPromise, ticketsPromise;

        $scope.startIncrement = function(type) {
            switch(type) {
                case 'flight':
                    flightPromise = $interval(function() {
                        $scope.flightBookings++;
                    }, 100);
                    break;
                case 'tours':
                    toursPromise = $interval(function() {
                        $scope.amazingTours++;
                    }, 100);
                    break;
                case 'tickets':
                    ticketsPromise = $interval(function() {
                        $scope.ticketBookings++;
                    }, 100);
                    break;
            }
        };

        $scope.stopIncrement = function(type) {
            switch(type) {
                case 'flight':
                    $interval.cancel(flightPromise);
                    break;
                case 'tours':
                    $interval.cancel(toursPromise);
                    break;
                case 'tickets':
                    $interval.cancel(ticketsPromise);
                    break;
            }
        };
    });
