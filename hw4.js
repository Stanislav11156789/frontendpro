let x = +prompt('enter first number');
let y = +prompt('enter second number');
let sign = prompt('enter operation + - * /');
let sum = x + y;
let difference = x-y;
let multiplication = x * y;
let qoutient = x / y;

switch (sign) {
    case '+':
        alert(x + '+' + y + '=' +sum);
    break;
    case '-':
        alert(x+ '-' + y + '=' + difference);
        break;
    case '*':
        alert(x+ '*' + y + '=' + multiplication);
        break;
    case '/':
        alert(x+ '/' + y + '=' + qoutient);
        break;
    default:
        alert('entered not operation');
        break;
}
