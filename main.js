const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const renderGoodsItem = (title, price, img = "http://placehold.it/70x50/a2345f") => `<div class="products-item"><img src="${img}"><h3>${title}</h3><p>${price}</p></div>`;

const renderGoodsList = (list) => {
    document.querySelector('.products').innerHTML = (list.map(item => renderGoodsItem(item.title, item.price))).join("");
}

renderGoodsList(goods);