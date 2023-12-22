const products=[
    {
      id: 1,
      name:'Product 1',
      price: 19.99,
      image: 'doggy.jpg'
    },
    {
        id: 2,
        name:'Product 2',
        price: 29.99,
        image: 'doggy.jpg'
      },
      {
        id: 3,
        name:'Product 3',
        price: 14.99,
        image: 'doggy.jpg'
      },
      {
        id: 4,
        name:'Product 4',
        price: 39.99,
        image: 'doggy.jpg'
      },
      {
        id: 5,
        name:'Product 5',
        price: 49.99,
        image: 'doggy.jpg'
      },
      {
        id: 6,
        name:'Product 6',
        price: 99.99,
        image: 'doggy.jpg'
      },
];
function createProductCard(product){
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');
    const productImage=document.createElement('img');
    productImage.src=product.image;
    productImage.alt=product.name;
    productImage.classList.add('product-image');
    const productName=document.createElement('h3');
    productName.textContent=product.name;
    const productPrice=document.createElement('p');
    productPrice.textContent='$${product.price.toFixed(2)}';
    productCard.appendChild(productImage);
    productCard.appendChild(productName);
    productCard.appendChild(productPrice);
    return productCard;
    

}
function displayProduct(){
    const productsContainer=document.querySelector('.products.container');
    products.forEach((product)=>{
        const productCard=createProductCard(product);
        productsContainer.appendChild(productCard);
    });
}
document.addEventListener('DOMContentLoaded',()=>{
    displayProducts();
});