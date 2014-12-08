var rsApp = angular.module('rsApp', ['angularSmoothscroll']);

rsApp.controller('rsController', ['$scope', function($scope) {

    $scope.answered = [];
    $scope.score = 0;


    $scope.answers = [
    {
        answer1: "candy corn",
        answer2: "trail mix",
        answer3: "salty toffee",
        points1: 1,
        points2: 2,
        points3: 3
    },
    {
        answer1: "hand made french toast",
        answer2: "fried chicken and waffles",
        answer3: "spinach and lobster quiche",
        points1: 1,
        points2: 2,
        points3: 3
    },
    {
        answer1: "lay on some sweet ham",
        answer2: "hit me with more onion",
        answer3: "bring on the chili pepper",
        points1: 1,
        points2: 2,
        points3: 3
    },
    {
        answer1: "i'll have a hot cocoa",
        answer2: "pass the herbal teas",
        answer3: "pour me a glass of cab",
        points1: 1,
        points2: 2,
        points3: 3
    },
    {
        answer1: "juicy fruit chews",
        answer2: "mouth wash strip",
        answer3: "big red gum",
        points1: 1,
        points2: 2,
        points3: 3
    },
    {
        answer1: "pass the salt please",
        answer2: "hit me with a drop of both",
        answer3: "needs some hot sauce",
        points1: 1,
        points2: 2,
        points3: 3
    },
    {
        answer1: "all my shirts have cocoa stains",
        answer2: "i don't know where they're from",
        answer3: "all my shirts have grease stains",
        points1: 1,
        points2: 2,
        points3: 3
    },
    {
        answer1: "a scoop of pie on my cake",
        answer2: "a scoop of pie on my steak",
        answer3: "extra steak with my steak",
        points1: 1,
        points2: 2,
        points3: 3
    },
    {
        answer1: "don't skimp on the butter",
        answer2: "where is the smoked gravy",
        answer3: "i want all of the pepper",
        points1: 1,
        points2: 2,
        points3: 3
    },
    {
        answer1: "i'm just always thirsty",
        answer2: "i feel fine... i think",
        answer3: "i drink all the pepto",
        points1: 1,
        points2: 2,
        points3: 3
    }
    ];

    $scope.addPoints = function(points, index) {

        var answered = false;

        for (var i = 0; i < $scope.answered.length; i++) {
            if (index === $scope.answered[i]) {
                answered = true;
            }
        }

        if (!answered) {

            $scope.score = $scope.score + points;
            var score = $scope.score;
            var sweet = false;
            var salty = false;
            var savory = false;
            var spicy = false;

            $scope.answered.push(index);

            if(score >= 10 && score <= 14) {

                sweet = true;
                salty = false;
                savory = false;
                spicy = false;

            } else if(score >= 15 && score <= 19) {

                sweet = false;
                salty = true;
                savory = false;
                spicy = false;

            } else if(score >= 20 && score <= 24) {

                sweet = false;
                salty = false;
                savory = true;
                spicy = false;

            } else if(score >= 25 && score <= 30) {

                sweet = false;
                salty = false;
                savory = false;
                spicy = true;

            }

            if ( $scope.answered.length > 9 && sweet) {

                $("#no-result").css("display", "none");
                $("#sweet").css("display", "block");

                var tweenSweet = new TimelineMax();

                tweenSweet.from(".heading img", 0.5, {
                    css:{autoAlpha: 0, x: "200%"},
                    ease: Back.easeInOut
                })
                .from(".left h1", 0.65, {
                    css:{autoAlpha: 0},
                    ease: Strong.easeInOut
                }, "-=0.25")
                .from(".right p", 0.65, {
                    css:{autoAlpha: 0},
                    ease: Strong.easeInOut
                }, "-=0.25");
            }

            if ( $scope.answered.length > 9 && salty) {

                $("#no-result").css("display", "none");
                $("#salty").css("display", "block");

                var tweenSalty = new TimelineMax();

                tweenSalty.from(".heading img", 0.5, {
                    css:{autoAlpha: 1, x: "200%"},
                    ease: Back.easeInOut
                })
                .from(".left h1", 0.65, {
                    css:{autoAlpha: 0},
                    ease: Strong.easeInOut
                }, "-=0.25")
                .from(".right p", 0.65, {
                    css:{autoAlpha: 0},
                    ease: Strong.easeInOut
                }, "-=0.25");
            }

            if ( $scope.answered.length > 9 && savory) {

                $("#no-result").css("display", "none");
                $("#savory").css("display", "block");

                var tweenSavory = new TimelineMax();

                tweenSavory.from(".heading img", 0.5, {
                    css:{autoAlpha: 1, x: "200%"},
                    ease: Back.easeInOut
                })
                .from(".left h1", 0.65, {
                    css:{autoAlpha: 0},
                    ease: Strong.easeInOut
                }, "-=0.25")
                .from(".right p", 0.65, {
                    css:{autoAlpha: 0},
                    ease: Strong.easeInOut
                }, "-=0.25");
            }

            if ( $scope.answered.length > 9 && spicy) {

                $("#no-result").css("display", "none");
                $("#spicy").css("display", "block");

                var tweenSpicy = new TimelineMax();

                tweenSpicy.from(".heading img", 0.5, {
                    css:{autoAlpha: 1, x: "200%"},
                    ease: Back.easeInOut
                })
                .from(".left h1", 0.65, {
                    css:{autoAlpha: 0},
                    ease: Strong.easeInOut
                }, "-=0.25")
                .from(".right p", 0.65, {
                    css:{autoAlpha: 0},
                    ease: Strong.easeInOut
                }, "-=0.25");
            }


        } 


    };

}]);

window.onbeforeunload = function(){
    window.scrollTo(0,0);
};