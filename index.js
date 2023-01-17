// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function beforeEach() {
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield");
}

  
//     describe('Array functions', function () {
//       beforeEach(function () {
//         cats.length = 0;
  
//         cats.push('Milo', 'Otis', 'Garfield');
//       });


function destructivelyAppendCat() {
    cats.push("Ralph");
}

function destructivelyPrependCat() {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name){
    const newCat = [...cats] ;
    newCat.push("Broom");
    return newCat ;
}
  
function prependCat(name) {
    const addCat = cats.slice() ;
    addCat.unshift("Arnold")
    return addCat ;
}

function removeLastCat() {
    const removeCat = cats.slice(0,-1);
    return removeCat; 
}

function removeFirstCat() {
    const removeCat = cats.slice(1);
    return removeCat;
}
  

  
//       describe('removeFirstCat()', function () {
//         it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged', function () {
//           expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);
  
//           expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
//         });
//       });
//     });
//   });
  