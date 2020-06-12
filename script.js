var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '!@#$%^&*=-_';
var Lower= 'abcdefghijklmnopqrstuvwxyz';

var charNum = document.getElementById("charNum");
var numbersBox = document.getElementById("numbers");
var symbolsBox = document.getElementById("symbols");
var LowerBox = document.getElementById("Lower");
var generate = document.getElementById("generate");
var yourPassword = document.getElementById("yourPassword");

generate.addEventListener("click",function(e){
    var characters = char;
    (numbersBox.checked) ? characters += numbers : '';
    (symbolsBox.checked) ? characters += symbols : '';
    (LowerBox.checked) ? characters += Lower : '';
    yourPassword.value = password(charNum.value, characters);
});

function password(l,characters){
		var pwd = '';
    for(var i = 0; i<l; i++){
    		pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
}