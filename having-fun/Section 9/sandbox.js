const users = [
    {name: 'pinzi', premium: true},
    {name: 'cris', premium: true},
    {name: 'sori', premium: false},
    {name: 'alex', premium: false}
];

const premiumUsers = users.filter((user) => {
    return user.premium; 
});

console.log(premiumUsers);

const products = [
    {name: 'banana', price: 100},
    {name: 'portocala', price: 150},
    {name: 'nintendo', price: 1000},
    {name: 'caca', price: 50}
];

const changedPrice = products.map((product) => {
    if(product.price > 100) return (product.price/2);
    else return product.price;
});

console.log(changedPrice);