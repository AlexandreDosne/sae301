// @ts-nocheck

const elInfo = document.getElementsByTagName('productdetails')[0];

if (Cookies.get('cart') != undefined)
{
    let quantite = 0;
    let id = elInfo.getAttribute('pr-id');
    let cks = JSON.parse(Cookies.get('cart'));

    cks.forEach(el =>
    {
        if (el.id == id)
        {
            quantite = el.quantite;
        }
    });

    if (quantite != 0)
        document.getElementById('btnAcheterTicket').innerText = 'Acheter un ticket (' + quantite + ' dans le panier)';
}

document.getElementById('btnAcheterTicket').addEventListener('click', (e) =>
{
    e.preventDefault();

    let id = elInfo.getAttribute('pr-id');
    let titre = elInfo.getAttribute('pr-name');
    let tarif = elInfo.getAttribute('pr-price');
    let quantite = 0;
    let panier;

    if (Cookies.get('cart') == undefined)
    {
        Cookies.set('cart', `[{"id": ${id}, "titre": "${titre}", "tarif": ${tarif}, "quantite": 1}]`, { path: '/' });
        document.getElementById('btnAcheterTicket').innerText = 'Acheter un ticket (1 dans le panier)';
        return;
    }

    panier = JSON.parse(Cookies.get('cart'));
    let productFound = false;

    panier.forEach(el =>
    {
        if (el.id == id)
        {
            productFound = true;
            el.quantite++;
            quantite = el.quantite;
        }
    });

    if (!productFound)
    {
        panier.push(JSON.parse(`{"id": ${id}, "titre": "${titre}", "tarif": ${tarif}, "quantite": 1}`));
        quantite = 1;
    }

    Cookies.set('cart', JSON.stringify(panier), { path: '/' });
    document.getElementById('btnAcheterTicket').innerText = 'Acheter un ticket (' + quantite + ' dans le panier)';
});