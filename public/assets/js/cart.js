// @ts-nocheck

const elCartList = document.getElementById('cartList');

var articles = [];

if (document.cookie.length != 0)
    articles = JSON.parse(document.cookie);

elCartList.innerHTML = articles;