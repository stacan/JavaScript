/*
let work = prompt('Login : ', '');

let message = (Log ('Сотрудник')) ? 'Привет!' :
  (Log ('Директор')) ? 'Здравствуйте!' :
  (Log('Нет логина')) ? ' ' :


alert( message );
*/
//==================================
/*
let work = prompt('Ваш логин : ', '');

let message = (login == 'Сотрудник') ? 'Привет!' :
  (login == 'Директор') ? 'Здравствуйте!' :
  (login == '') ? 'Нет логина ' :
  '';
alert( message );
*/
//============================
/*
let login = prompt('Введите вашу должность','');
let message = (login == "Сотрудник") ? 'Привет!' :
(login == "Директор") ? 'Здравствуйте' :
(login == "") ? 'Вы не ввели логин':
'';
alert(message);
console.log(message);
*/
//==================================
//!!!!!!!!!!!!!!!!!!!!!!!!
/*
let login = prompt('Введите имя:')
let message=(login=='сотрудник')? 'Привет, малыш!':
  (login=='директор')? 'Здравствуйте!':
  (login=='')? 'Ты - деревянная шляпа!':
  '';
alert(message); 
*/
//=====================================
/*
let b = 2;
const c = 5;

b = 6;
c = 8; //тут будет ошибка, const нельзя переназначить

console.log(b);
console.log(c);
*/
//======================================
/*
let znak = prompt(' Введите свой знак зодиака: ', ' ');
switch (znak){

}

alert('Привет,' +znak);

default:
  alert('проверьте правильность введения');
//=========================
/*
const znak = prompt(' Введите свой знак зодиака: ');
alert("Привет, " + znak)
*/

/*
let znak = prompt(' Введите свой знак зодиака: ');
switch (znak) {
case 'овен':
alert('Привет, овен');
break;
case 'телец':
alert('Привет, телец');
break;
case 'близнецы':
alert('Привет, близнецы');
break;
case 'рак':
alert('Привет, рак');
break;
case 'лев':
alert('Привет, лев');
break;
case 'дева':
alert('Привет, дева');
break;
case 'весы':
alert('Привет, весы');
break;
case 'скорпион':
alert('Привет, скорпион');
break;
case 'стрелец':
alert('Привет, стрелец');
break;
case 'козерог':
alert('Привет, козерог');
break;
case 'водолей':
alert('Привет, водолей');
break;
case 'рыбы':
alert('Привет, рыбы');
break;
default:
alert('Проверьте правильность введения');
}
*/
//=================================================
/*
printf("Hi #1%s! #0%s day!", "Great", "man");

function printf(str) {
  let args = arguments;

  str = str.replace(/#(\d+)%s/g, function(_, n) {
    return args[ +n + 1 ] || "";
  });

  console.log(str);
}
*/
//==================================================
/*
const sprintf = (template, ...args) => template.replace(/%./g, m => args.shift());
let str = sprintf('Lorem %s ipsum %s dolor sit %d amet', 'foo', 'bar', 42);
*/
//====================================================
























































































