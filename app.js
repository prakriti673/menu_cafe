//get only unique categories
//with reduce()

{/* <link rel="stylesheet" href="style.css"></link> */}

const menu=[
    {
        id: 1,
        name: "Pancakes",
        price: "$7.99",
        category:"Breakfast",
        photofood :"photos/pancake.jpg",
        desc: "A  flat cake made by pouring batter into a hot pan and frying it on both sides.Topped with maple syrup and served with fresh fruits.",
    },
    {
        id: 2,
        name: "Salad Bowl",
        price: "$6.99",
        category:"Breakfast",
        photofood :"photos/rainbow-salad-power-bowl-1.jpg",
        desc: "Mixed, mostly natural ingredients like tomatoes, green beans, cucumbers, beets, and mushrooms dressed with olive oil, mustard sauce and other dressings.",
    },
    {
        id: 3,
        name: "Burger and fries",
        price: "$10.99",
        category:"Lunch",
        photofood :"photos/Burger-and-Fries.jpg",
        desc: "Patty of ground meat, typically beef—placed inside a sliced bun or bread roll,topped with harissa-mayonnaise and ketchup.Served alongside crispy fries and ketchup.",
    },
    {
        id: 4,
        name: "Croissant",
        price: "$8.99",
        category:"Dessert",
        photofood :"photos/Fruits-and-nutella.jpg",
        desc: "Buttery, flaky, viennoiserie pastry using the French yeast-leavened laminated dough, topped with fresh bananas,strawberries and chocolate syrup.",
    },
    {
        id: 5,
        name: "Farm-Pizza",
        price: "$12.99",
        category:"Lunch",
        photofood :"photos/pizzajp.jpg",
        desc: "flattened bread dough topped with olive oil, oregano, tomato, mushroom, onions, capsicum, olives, mozzarella, baked using a wood-fired oven heated to a very high temperature",
    },
    {   id: 6,
        name: "Quesadillas",
        price: "$6.99",
        category:"Lunch",
        photofood :"photos/quesadilla.jpg",
        desc: " Mexican dish consisting of a tortilla that is filled primarily with cheese, and sometimes meats, spices, and other fillings, and then cooked on a griddle or stove"
    },
    {   id: 7,
        name: "Spaghetti",
        price: "$7.49",
        category:"Lunch",
        photofood :"photos/spaghetti.jpg",
        desc: "Spaghetti tossed with a lot of veggies and some tomato sauce and topped with olive oil,basil leaves and some mozzarella."
    },
    {   id: 8,
        name: "Cheesecake",
        price: "$3.99",
        category:"Dessert",
        photofood :"photos/cheesecake.jpg",
        desc: "Dessert made with a soft fresh cheese, eggs, and sugar with a crust from crushed cookies ,topped with whipped cream and fresh strawberries."
    },
    {   id: 9,
        name: "Cappuccino",
        price: "$2.49",
        category:"Breakfast",
        photofood :"photos/coffee.jpg",
        desc: "A coffee drink that today is typically composed of a single, double, or triple espresso shot and hot milk, with the surface topped with foamed milk."
    }
];

const menu_option=document.querySelector(".allitems");
const container=document.querySelector(".menu_options");

//load items
window.addEventListener("DOMContentLoaded",function()
{
    displayMenuItems(menu);
    displayMenuButtons();       
});

//filter items

function displayMenuItems(menuItems)
{
    let displayMenu=menuItems.map(function (item)
    {
        return `<article class="menu-items">
        <div class="item_img">
            <img src="${item.photofood}" alt="${item.name}" id="photofood">
        </div>
        <div class="desc">
            <div class="nameprice">
                <h4 id="name">${item.name}</h4>
                <h4 id="price">${item.price}</h4>
            </div>
            <hr id="break1">
            <div class="info">
                <p>${item.desc}</p> 
            </div>
        </div>
    </article>`;
    });
    displayMenu=displayMenu.join("");
    menu_option.innerHTML=displayMenu;
}
function displayMenuButtons(values)
{
    const categories=menu.reduce(function(values,item)
    {
        if(!values.includes(item.category))
        {
            values.push(item.category);
        }
        return values;
    },["All"]);
    const categoryBtn=categories.map(function(category){
        return `<button class="btn" type="button" data-id=${category}>
             ${category}</button>`;
    }).join("");
    container.innerHTML = categoryBtn;
    const btn=document.querySelectorAll(".btn");
    console.log(categoryBtn);
    btn.forEach(function(butn)
    {
        butn.addEventListener('click',function(e)
        {
            const category= e.currentTarget.dataset.id;
            const menuCategory=menu.filter(function(menuItem)
            {
                if(menuItem.category==category)
                    return menuItem;
            });
            if(category=='All')
            {
                displayMenuItems(menu);
            }
            else
            {
                displayMenuItems(menuCategory);
            }
        });
    });
}