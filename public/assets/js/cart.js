// @ts-nocheck
const elCartList = document.getElementById('cartList');
const elPrixTotal = document.getElementById('prixTotal');

Cookies.set('cart', '[{"id": 1, "titre": "TITRE", "tarif": 10, "quantite": 2}, {"id": 2, "titre": "AUTRE", "tarif": 12, "quantite": 1}]', { path: '/' });

if (Cookies.get('cart') != undefined)
{
    AfficherPanier();
}

function AfficherPanier()
{
    var panier = JSON.parse(Cookies.get('cart'));
    var prixTotal = 0;

    panier.forEach(el =>
    {
        let ss = (el.quantite > 1) ? 's' : '';
        elCartList.innerHTML += `<li>${el.titre} - ${el.quantite} ticket${ss} (${el.tarif}€)</li>`;

        prixTotal += el.tarif * el.quantite;
    });

    elPrixTotal.innerText += prixTotal.toString() + '€';
}