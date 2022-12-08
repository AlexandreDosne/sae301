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
}

document.getElementById('jsCatAll').addEventListener('click', ShowAllItems);
document.getElementById('jsCat0').addEventListener('click', () => { FilterItems(categories.THEATER); });
document.getElementById('jsCat1').addEventListener('click', () => { FilterItems(categories.CONCERT); });
document.getElementById('jsCat2').addEventListener('click', () => { FilterItems(categories.SPECTACLE); });
document.getElementById('jsCat3').addEventListener('click', () => { FilterItems(categories.EXPOSITION); });