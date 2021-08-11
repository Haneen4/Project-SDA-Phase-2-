
let carts = document.querySelectorAll('.add-cart');
let products = [
    {
        name:'orange' ,
        price: 20 ,
        inCart: 1
    },
    {
        name:'orange' ,
        price: 20 ,
        inCart:1
    },
    {
        name:'orange' ,
        price: 20 ,
        inCart: 0
    },
    {
        name:'orange' ,
        price: 20 ,
        inCart: 0
    },
    {
        name:'orange' ,
        price: 20 ,
        inCart: 0
    },
    {
        name:'orange' ,
        price: 20 ,
        inCart: 0
    },
    {
        name:'orange' ,
        price: 20 ,
        inCart: 0
    },
    {
        name:'orange' ,
        price: 20 ,
        inCart: 0
    },
    {
        name:'orange' ,
        price: 20 ,
        inCart: 0
    },
    {
        name:'orange' ,
        price: 20 ,
        inCart: 0
    },
    {
        name:'orange' ,
        price: 20 ,
        inCart: 0
    },
    {
        name:'orange' ,
        price: 20 ,
        inCart: 0
    },
];

for (let i=0; i < carts.length; i++){
    carts[i].addEventListener('click', () => {
        cartNumbers();
    })
}

function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if (productNumbers){
        document.querySelector('.cartnum span').textContent = productNumbers;
    }
}

function cartNumbers(){
    let productNumbers= localStorage.getItem('cartNumbers');
    productNumbers=parseInt(productNumbers);
    if (productNumbers){
        localStorage.getItem('cartNumbers' , productNumbers + 1);
        document.querySelector('.cartnum span').textContent = productNumbers + 1;
    }else{
        localStorage.getItem('cartNumbers' , 1);
        document.querySelector('.cartnum span').textContent = 1;
    }
}
onLoadCartNumbers();
