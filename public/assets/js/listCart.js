// @ts-nocheck
const elCartList = document.getElementById('cartList');
const elPrixTotal = document.getElementById('prixTotal');

var panier = JSON.parse(Cookies.get('cart'));
var prixTotal = 0;

panier.forEach(el =>
{
    let ss = (el.quantite > 1) ? 's' : '';
    let prixFinal = el.tarif * el.quantite;

    elCartList.innerHTML += `<li>${el.titre} - ${el.quantite} ticket${ss} (${prixFinal}€)</li>`;

    prixTotal += prixFinal;
});

elPrixTotal.innerText = 'Prix total : ' + prixTotal.toString() + '€';

document.getElementById('retourSite').addEventListener('click', () =>
{
    Cookies.remove('cart');
});