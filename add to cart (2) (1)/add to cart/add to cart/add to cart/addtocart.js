const product = [
    {
        id: 0,
        image: 'image/Shrimp-Tacos-9-of-11.jpg',
        title: 'Shrimp-Tacos',
        price: 120,
    },
    {
        id: 1,
        image: 'image/Imagen-4.jpg',
        title: 'Rice and Beef',
        price: 60,
    },
    {
        id: 2,
        image: 'image/Chicken-Curry.jpg',
        title: 'Chicken-Curry',
        price: 230,
    },
    {
        id: 3,
        image: 'image/butter-chicken-ac2ff98.jpg',
        title: 'Buttered Chiken',
        price: 100,
    },
    {
        id: 4,
        image: 'image/bbq-chicken-recipe-image-sq.webp',
        title: 'BBQ Chicken Wings',
        price: 120,
    },
    
    {
        id: 6,
        image: 'image/wholesomeyum-Grilled-Chicken-Salad.jpg',
        title: 'wholesomeyum-Grilled-Chicken-Salad',
        price: 120,
    },
    {
        id: 7,
        image: 'image/Epic-summer-salad.jpg',
        title: 'Epic-summer-salad',
        price: 230,
    },
    {
        id: 8,
        image: 'image/seven-layer-salad.jpg',
        title: 'seven-layer-salad',
        price: 100,
    },
    {
        id: 9,
        image: 'image/grilled-chicken-salad-index-6628169554c88.jpg',
        title: 'chicken salad',
        price: 120,
    },
    {
        id: 10,
        image: 'image/crispy-chilli-beef-salad.jpg',
        title: 'Beef Salad',
        price: 60,
    },
    {
        id: 11,
        image: 'image/asian-salad-4.jpg',
        title: 'asian-salad',
        price: 230,
    },
    {
        id: 12,
        image: 'image/PastaSalad.jpg',
        title: 'PastaSalad',
        price: 100,
    },
    {
        id: 5,
        image: 'image/buffet.png',
        title: 'buffet',
        price: 60,
    },
    {
        id: 0,
        image: 'image/FISH_FRIDAY_1_asj2oh.avif',
        title: 'FISH_FRIDAY',
        price: 120,
    },
    {
        id: 1,
        image: 'image/dive-into-refreshing-summer-sippers.webp',
        title: 'summer sippers',
        price: 60,
    },
    {
        id: 2,
        image: 'image/Starbucks-Crystal-Ball-Frappuccino.jpg',
        title: 'Starbucks-Crystal-Ball-Frappuccino',
        price: 230,
    },
    {
        id: 3,
        image: 'image/creamy-hot-chocolate.jpg',
        title: 'creamy-hot-chocolate',
        price: 100,
    },
    {
        id: 3,
        image: 'image/coffe.jpg',
        title: 'coffe',
        price: 100,
    },
    {
        id: 3,
        image: 'image/tea_cup.jpg',
        title: 'tea_cup',
        price: 100,
    },
    {
        id: 3,
        image: 'image/fizzy.jpg',
        title: 'Fizzy drinks',
        price: 100,
    },
    {
        id: 3,
        image: 'image/istockphoto-176977950-1024x1024.jpg',
        title: 'wines and spirits',
        price: 100,
    }




];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}