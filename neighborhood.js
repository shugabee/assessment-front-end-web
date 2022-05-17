const restaurantButton = document.querySelector('#restaurant')

const myArray = ["Viva Chicken", "Riggatti's Pizza", "Morty's Cafe", "Red Fort", "Angelica's", "Mad Pita"];

const random = Math.floor(Math.random() * myArray.length);


restaurantButton.addEventListener('click', () => {
    Math.floor(Math.random() * myArray.length);
    alert(myArray[random]);
})






