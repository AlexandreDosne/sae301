// @ts-nocheck

const COOKIE_PREFIX = 'cart=';
const COOKIE_SUFIX = ';path=/';
const elCartList = document.getElementById('cartList');

// document.cookie = COOKIE_PREFIX + 'null' + COOKIE_SUFIX;

// JSON des cookies
var articles = [];
// Le tableau lisible des articles
var panier = '';

if (document.cookie.length != 0)
    articles = JSON.parse(document.cookie);

elCartList.innerHTML = articles;

articles.forEach(element =>
{
    panier += '[' + element + '] ';
});