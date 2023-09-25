// Write your solution here!
const cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push ("Ralph")
} 

function destructivelyPrependCat(){
    cats.unshift("Bob")
}

function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}

function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}

function appendCat(){
   const newCats = [...cats,"Broom"]
    return newCats
}

function prependCat(){
   const newCats = ["Arnold", ...cats]
    return newCats
}

const removeLastCat=()=>{
   const newCats= cats.slice(0,-1);
    return newCats
}

const removeFirstCat=()=>{
   const newCats= cats.slice (1);
   return newCats
}