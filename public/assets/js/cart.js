// @ts-nocheck
const elCartList = document.getElementById('cartList');
const elPrixTotal = document.getElementById('prixTotal');

AfficherPanier();


// Event listeners pour les boutons plus et moins (delegation d'event)
document.addEventListener('click', function (event)
{
    if (!event.target.matches('.jsCartPlus')) return;
    event.preventDefault();
    ModifierQty(event.target.getAttribute('targ-id'));
});

document.addEventListener('click', function (event)
{
    if (!event.target.matches('.jsCartMinus')) return;
    event.preventDefault();
    ModifierQty(event.target.getAttribute('targ-id'), false);
});


// Definition de fonctions
function AfficherPanier()
{
    elCartList.innerHTML = '';
    elPrixTotal.innerText = '';

    if (Cookies.get('cart') == undefined || Cookies.get('cart').length <= 2)
    {
        elPrixTotal.innerText += 'Votre panier est vide.';
        document.getElementById('btnCheckout').hidden = true;
        return;
    }

    var panier = JSON.parse(Cookies.get('cart'));
    var prixTotal = 0;

    panier.forEach(el =>
    {
        let ss = (el.quantite > 1) ? 's' : '';
        let prixFinal = el.tarif * el.quantite;

        elCartList.innerHTML += `<li>${el.titre} - ${el.quantite} ticket${ss} (${prixFinal}€) <button targ-id="${el.id}" class="jsCartPlus">+<button><button targ-id="${el.id}" class="jsCartMinus">-<button></li>`;

        prixTotal += prixFinal;
    });

    if (prixTotal == 0)
        elPrixTotal.innerText += 'Votre panier est vide.';
    else
        elPrixTotal.innerText += 'Prix total : ' + prixTotal.toString() + '€';
}

// Incremente ou decremente la quantite d'un article si present
function ModifierQty(cid, plus = true)
{
    let cookies = JSON.parse(Cookies.get('cart'));

    cookies.forEach(el =>
    {
        if (el.id == cid)
        {
            if (plus)
            {
                el.quantite++;
            }
            else
            {
                if (el.quantite > 0)
                {
                    el.quantite--;

                    if (el.quantite == 0)
                    {
                        let thisIndex = cookies.indexOf(el);
                        cookies.splice(thisIndex, 1);
                    }
                }
            }

            Cookies.set('cart', JSON.stringify(cookies), { path: '/' });
            AfficherPanier();
            return;
        }
    });
}