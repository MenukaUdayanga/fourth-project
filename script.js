  
    // var email = "ujayaweera@gmail.com";
    // alert(email);

    var x = 10;
    var y =15;

    var answer = x+y;

    console.log(answer);


    // function

    function add(){

        var firstNumber = "Menuka";
        var secondNumber = "Udayanga";

        console.log("Answer is "+(firstNumber+" "+secondNumber));
    

    }

    function userLogin(){
      
        var userName = document.getElementById("userName").value;
        var password = document.getElementById("Password").value;

       
        document.getElementById("data").innerHTML="UserName is "+userName+" Password is "+password;

        
    }

   
    function getsum(){

        var num1 = parseInt(document.getElementById("first").value);
        var num2 = parseInt(document.getElementById("second").value);
        var num3 = parseInt(document.getElementById("thired").value);

        var answer=(num1+num2+num3)/2;

        if(answer>55){

            alert("Not worry");
        }

        else{

            alert(" worry");
        }
        
    }


    var vall1 = 6;
    var vall2 = 2;

    var answer = vall1%vall2;


    if(answer==0){

        alert("Answer is even");
    }
     else{ alert("Answer is odd");}



    function login1(){

        var user = document.getElementById("user").value;
        var pwd = document.getElementById("pwd").value;

        if(user=="ujayaweera738@gmail.com" & pwd=="1234" ){

            alert("Login is Successfully")
        }

        else{

            alert("Try agin")
        }

    }

 

   