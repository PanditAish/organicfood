import orange from "../../Assets/Images/foodimg/orangeimg.webp";
import apple from '../../Assets/Images/foodimg/appleimg.jpg';
import mango from "../../Assets/Images/foodimg/mangoimg.jpg";
import onion from "../../Assets/Images/foodimg/onion.jpg";
import tomato from "../../Assets/Images/foodimg/tomato.jpg";
import pepper from "../../Assets/Images/foodimg/peppers.jpg";
import almond from "../../Assets/Images/foodimg/almond.avif";
import cashew from "../../Assets/Images/foodimg/cashew-nuts.avif";
import walnut from "../../Assets/Images/foodimg/walnut-nuts.jpg";
import rice from "../../Assets/Images/foodimg/brownrice.jpg";
import millet from "../../Assets/Images/foodimg/bajri-millet.avif";
import farro from "../../Assets/Images/foodimg/quotfarrograin.jpg";

const Menu = [
    {
        id: 1,
        image: `${orange}`,
        name: "Orange",
        category: "Fruit",
        price: 50
    },
    {
        id: 2,
        image: `${apple}`,
        name: "Apple",
        category: "Fruit",
        price: 60 
    },
    {
        id: 3,
        image: `${mango}`,
        name: "Mango",
        category: "Fruit",
        price: 80 
    },
    {
        id: 4,
        image: `${onion}`,
        name: "Onion",
        category: "Vegetable",
        price: 70 
    },
    {
        id: 5,
        image: `${tomato}`,
        name: "Tomato",
        category: "Vegetable",
        price: 60
    },
    {
        id: 6,
        image: `${pepper}`,
        name: "Peppers",
        category: "Vegetable",
        price: 80 
    },
    {
        id: 7,
        image: `${almond}`,
        name: "Almond",
        category: "Dry Fruit",
        price: 90 
    },
    {
        id: 8,
        image: `${cashew}`,
        name: "Cashew",
        category: "Dry Fruit",
        price: 85
    },
    {
        id: 9,
        image: `${walnut}` ,
        name: "Walnut",
        category: "Dry Fruit",
        price: 77
    },
    {
        id: 10,
        image: `${rice}`,
        name: "Brown-rice",
        category: "Grains",
        price: 98 
    },
    {
        id: 11,
        image: `${millet}` ,
        name: "millet",
        category: "Grains",
        price: 50 
    },
    {
        id: 12,
        image: `${farro}`,
        name: "Farro",
        category: "Grains",
        price: 70 
    }
];

export default Menu;