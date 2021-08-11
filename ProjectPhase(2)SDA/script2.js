const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
searchButton.addEventListener('click', () => {
  const inputValue = searchInput.value;
 search(inputValue);
});
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

function search( inputValue ) {
    let obj = products.find(o => o.name ===  inputValue );

console.log(obj);
}

var Loginform=document.getElementById("Loginform");
var Regform=document.getElementById("Regform");
var Indicator=document.getElementById("Indicator");
function Login(){
    Regform.style.transform="translateX(600PX)";
    Loginform.style.transform="translateX(300PX)";
    Indicator.style.transform="translateX(0PX)";
}
function Register(){
    Regform.style.transform="translateX(0PX)";
    Loginform.style.transform="translateX(-300PX)";
    Indicator.style.transform="translateX(100PX)";
}
