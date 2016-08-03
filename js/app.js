$(document).ready(function (event) {
    //count to 100
    for (var i = 1; i <= 100; i++) {
        //if the number is divisble by 15, print "FizzBuzz!"
        if (i % 15 == 0) {
            $('#main').append("<p>FizzBuzz!</p>");
        }
        //if the number is divisible by 5, print "Buzz"
        else if (i % 5 == 0) {
            $('#main').append("<p>Buzz</p>");
        }
        //if the number is divisible by 3, print "Fizz"
        else if (i % 3 == 0) {
            $('#main').append("<p>Fizz</p>");
        } else {
            $('#main').append("<p>" + i + "</p>");
        }
    }
});
