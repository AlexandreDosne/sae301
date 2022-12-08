// @ts-nocheck

const elCartContent = document.getElementById('cartcontent');
const elCartPrice = document.getElementById('cartprice');

// Prix total
var panier = JSON.parse(Cookies.get('cart'));
var prixTotal = 0;
panier.forEach(el =>
{
    prixTotal += el.tarif * el.quantite;
});

elCartPrice.value = prixTotal;

// Cart content
panier.forEach(el =>
{
    elCartContent.value += el.id + 'x' + el.quantite + ';';
});