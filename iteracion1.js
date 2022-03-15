/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

let createdUl= document.createElement("ul");
document.body.appendChild(createdUl);
countries.forEach( country => {
    let createdCountry = document.createElement("li");
    createdCountry.textContent = country;
    createdUl.appendChild(createdCountry);
})


/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */

let elemToRemove = document.querySelector(".fn-remove-me");
elemToRemove.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
let div = document.querySelector('[data-function="printHere"]');

let createdUldiv= document.createElement("ul");
div.appendChild(createdUldiv);
cars.forEach( car => {
    let createdCar = document.createElement("li");
    createdCar.textContent = car;
    createdUldiv.appendChild(createdCar);
})

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries2.forEach(country => {
    let div = document.createElement("div")
    let titleh4 = document.createElement("h4")
    titleh4.textContent= country.title;
    let img = document.createElement("img")
    img.src= country.imgUrl;
    div.appendChild(titleh4)
    div.appendChild(img)
    document.body.appendChild(div);
})

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */

let button = document.createElement("button");
button.innerText= "Borrar el último de la lista"
document.body.appendChild(button);
const handleClick = () => {
    let list = document.querySelectorAll("div");
    if(list.length>0){
        list[list.length-1].remove();
    }
}
button.addEventListener("click",handleClick);



/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html. */

countries2.forEach(country => {
    let div = document.createElement("div")
    let titleh4 = document.createElement("h4")
    titleh4.textContent= country.title;
    let img = document.createElement("img")
    img.src= country.imgUrl;
    div.appendChild(titleh4)
    div.appendChild(img)

    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";

    div.appendChild(deleteButton);
    deleteButton.addEventListener("click",() => div.remove());

    document.body.appendChild(div);
})