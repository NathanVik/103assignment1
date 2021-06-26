var firstVariable="first";
document.write(firstVariable + " ");

var secondVariable="second";
document.write(secondVariable + " ");

var thirdVariable="third";
document.write(thirdVariable + " ");

var fourthVariable="fourth";
document.write(fourthVariable + " ");

var fifthVariable="fifth";
document.write(fifthVariable + " ");

var sixthVariable="sixth";
document.write(sixthVariable + " ");

var seventhVariable="seventh";
document.write(seventhVariable + " ");

var eighthVariable="eighth";
document.write(eighthVariable + " ");

var ninthVariable="ninth";
document.write(ninthVariable + " ");

var tenthVariable="tenth";
document.write(tenthVariable + " ");

var eleventhVariable="eleventh";
document.write(eleventhVariable + " ");

var twelfthVariable="twelfth";
document.write(twelfthVariable + " ");

var thirteenthVariable="thirteenth";
document.write(thirteenthVariable + " ");

var fourteenthVariable="fourteenth";
document.write(fourteenthVariable + " ");

var fifteenthVariable="fifteenth";
document.write(fifteenthVariable + " ");

var sixteenthVariable="sixteenth";
document.write(sixteenthVariable + " ");

var seventeenthVariable="seventeenth";
document.write(seventeenthVariable + " ");

var eighteenthVariable="eighteenth";
document.write(eighteenthVariable + " ");

var nineteenthVariable="nineteenth";
document.write(nineteenthVariable + " ");

var twentiethVariable="twentieth";
document.write(twentiethVariable + " ");

for(var i=0;i<=100;i+=2){
    console.log(i);
}

var userNameDB="nathan@gmail.com";
var passWordDB="nathan123";

function login(){
    var un=document.getElementById("userName").value;
    var ps=document.getElementById("passWord").value;
    console.log(un,ps);

    if(userNameDB===un && passWordDB===ps){
        document.write(`Welcome to the system, ${un}`);
    }else{document.write(`Wrong info bud`);
    }
}