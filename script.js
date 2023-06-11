  
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



    // function login1(){

    //     var userN = "ujayaweera738@gmail.com";
    //     var pwdd = "1234";

    //     var user = document.getElementById("user").value;
    //     var pwd = document.getElementById("pwd").value;

    //     if(user==userN & pwd==pwdd ){

    //         alert("Login is Successfully")
    //     }

    //     else{

    //         alert("Try agin")
    //     }

    // }


    // function login1(){


    //     var userN = "ujayaweera738@gmail.com";
    //     var pwdd = "1234";
    //     var chance = 1;
    //     var attempt= 3;
        

    //     var user = document.getElementById("user").value;
    //     var pwd = document.getElementById("pwd").value;

       

    //         if(user==userN & pwd==pwdd){

    //            alert("Successfully");
    //         }

    //         else {

    //             chance = chance++;
               
    //             if(chance===attempt){
                
    //             alert("Your Accout locked");  }

    //             else {

    //                 alert("Wrong Login"); 
    //             }

               
    //         }


    //     }


            var userN = "ujayaweera738@gmail.com";
            var pwdd = "1234";
            var chance = 0;
            var attempt = 3;

    function login1() {
       
      
        var user = document.getElementById("user").value;
        var pwd = document.getElementById("pwd").value;
      
        if (user === userN && pwd === pwdd) {
          alert("Successfully");
        } else {
         
            chance++;
            
         
            if(chance<attempt){

                alert("Your Login is wrong");
                clearInput();
                
            }

            else {
                alert("Your accout is locked");

            }


        }
      }

      function clearInput(){

        var user = document.getElementById("user").value="";
        var pwd = document.getElementById("pwd").value="";


      }
      

            


    

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    function see() {
        var month = document.getElementById("bb").value;
      
        switch (month) {
          case "January":
            alert("Month is January");
            break;
          case "February":
            alert("Month is February");
            break;
          case "March":
            alert("Month is March");
            break;
          case "April":
            alert("Month is April");
            break;
          default:
            alert("Data not found");
        }
      }


    //   var i = 4;

    //   var i = i+=5;

    //   console.log(i);


      for( var i= 0; i<5; i+=2){

        console.log("ok");
      }


    //   var mysq = 5;

    //   for(var i=0; i<6; i++ ){

    //     if(mysq%2==0)
    //   }
      
    

   

 

   