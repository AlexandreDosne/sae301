// @ts-nocheck

const categories = {
    THEATER: 0,
    CONCERT: 1,
    SPECTACLE: 2,
    EXPOSITION: 3,
};

const listingItems = [
    document.getElementsByClassName('catThéatre'),
    document.getElementsByClassName('catConcert'),
    document.getElementsByClassName('catSpectacle'),
    document.getElementsByClassName('catExposition')
];

const filterbutton = document.getElementById('jsCatAll');
const filterbutton1 = document.getElementById('jsCat0');
const filterbutton2 = document.getElementById('jsCat1');
const filterbutton3 = document.getElementById('jsCat2');
const filterbutton4 = document.getElementById('jsCat3');

function FilterItems(category)
{
    for (let i = 0; i < listingItems.length; ++i)
    {
        for (let j = 0; j < listingItems[i].length; ++j)
        {
            listingItems[i][j].hidden = (i != category);
        }
    }
}

function ShowAllItems()
{
    for (let i = 0; i < listingItems.length; ++i)
    {
        for (let j = 0; j < listingItems[i].length; ++j)
        {
            listingItems[i][j].hidden = false;
        }
    }

    filterbutton.classList.toggle('filter-active');
    filterbutton1.classList.remove('filter-active');
    filterbutton2.classList.remove('filter-active');
    filterbutton3.classList.remove('filter-active');
    filterbutton4.classList.remove('filter-active');
}

document.getElementById('jsCatAll').addEventListener('click', ShowAllItems);
document.getElementById('jsCat0').addEventListener('click', () =>
{
    FilterItems(categories.THEATER);
    filterbutton1.classList.toggle('filter-active');
    filterbutton.classList.remove('filter-active');
});
document.getElementById('jsCat1').addEventListener('click', () =>
{
    FilterItems(categories.CONCERT);
    filterbutton2.classList.toggle('filter-active');
    filterbutton.classList.remove('filter-active');
});
document.getElementById('jsCat2').addEventListener('click', () =>
{
    FilterItems(categories.SPECTACLE);
    filterbutton3.classList.toggle('filter-active');
    filterbutton.classList.remove('filter-active');
});
document.getElementById('jsCat3').addEventListener('click', () =>
{
    FilterItems(categories.EXPOSITION);
    filterbutton4.classList.toggle('filter-active');
    filterbutton.classList.remove('filter-active');
});
