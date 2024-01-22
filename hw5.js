let sign = prompt('виберіть операцію add, sub, mult, div');
let x = +prompt('введіть перше число');
let y = +prompt('введіть друге число');
let sum = x + y;
let difference = x-y;
let multiplication = x * y;
let qoutient = x / y;

switch (sign) {
    case 'add':
        console.log(x + '+' + y + '=' +sum);
        console.log(x+ '-' + y + '=' + difference);
        console.log(x+ '*' + y + '=' + multiplication);
        console.log(x+ '/' + y + '=' + qoutient);
}
switch (sign) {
    case 'sub':
        console.log(x + '+' + y + '=' +sum);
        console.log(x+ '-' + y + '=' + difference);
        console.log(x+ '*' + y + '=' + multiplication);
        console.log(x+ '/' + y + '=' + qoutient);
}
switch (sign) {
    case 'mult':
        console.log(x + '+' + y + '=' +sum);
        console.log(x+ '-' + y + '=' + difference);
        console.log(x+ '*' + y + '=' + multiplication);
        console.log(x+ '/' + y + '=' + qoutient);
}
switch (sign) {
    case 'div':
        console.log(x + '+' + y + '=' +sum);
        console.log(x+ '-' + y + '=' + difference);
        console.log(x+ '*' + y + '=' + multiplication);
        console.log(x+ '/' + y + '=' + qoutient);
}
if ( y !==0 ){
    console.log(y+ '/' + 0 + '=' + qoutient);
}
else {
    console.log("Ділення на 0 неможливе.");
}