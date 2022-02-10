
const vardi = ['DŽeina Arenda', 'Jurita Stikane ', 'Signe Līce', 'Linda Atvare', 'Jurita Stikāne'];
const balvas = ['Iphone 13', 'Dators', 'Māja', 'Dzīvoklis', 'Mašīna'];
const naudaKopa = 1000000;//kopeja summa
let uzvaretajuSkaits = 5;
let rindas = document.querySelector('.rindas');
rindas.innerHTML = ' ';


for (let i = 0; i < uzvaretajuSkaits; i++) {
    let rand = Math.random() * vardi.lenght;
    rand = Math.floor(rand);//noapalo uz leju


    let laimesti = balvas[rand];
    let uzvaretajs = vardi[rand];


    rindas.innerHTML += `
<tr>
<td>${i + 1}</td>
<td>${uzvaretajs}</td>
<td>${laimesti}</td>
</tr>`
}