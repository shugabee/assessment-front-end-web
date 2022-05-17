console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert("The form has been submitted successfully.");
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);



const img = document.querySelector('img');

img.addEventListener('mouseover', () => {
	alert('Good job at being you!');
});
