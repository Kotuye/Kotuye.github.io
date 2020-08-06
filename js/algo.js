/* A NÉGY NEVEZETES ALGORITMUS  */

/*
Összegzés algoritmusa:
összeg = 0
CIKLUS amíg van még szám, addig 
    szám = következő elem
    összeg = összeg + szám 
CIKLUS vÉGE
*/
let numericArrey = [1, 2, 3, 4, 5, 7, 6, 9];
let = sum = 0; 
for (let i = 0; i < numericArrey.length; i++){
    sum += numericArrey[i];
}
console.log("sum: ", sum);



/*
SZÁMLÁLS algoritmusa:
db =0
CIKLUS AMÍG van még szám, ADDIG
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        db = db + 1
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/
let db = 0;
for (let i = 0; i < numericArrey.length; i++){
    if(numericArrey[i] % 2 == 0){
        db++;
    }
}
console.log("Event numbers: ", db);

/*
Szélső érték keresés algoritmusa:

legnagyobb = első elem
CIKLUS AMÍG van még szám, ADDIG:
    szám 7 következő szám
    HA szám > legnagyobb, AKKOR
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let biggest = numericArrey[0];
for (let i = 0; i < numericArrey.length; i++) {
    if (numericArrey[i] > biggest){
        biggest = numericArrey[i];
    }
    
}
console.log("The biggest element: ", biggest);

let smallest = numericArrey[0];
for (let i = 0; i < numericArrey.length; i++) {
    if (numericArrey[i] < smallest){
        smallest = numericArrey[i];
    }
    
}
console.log("The smallest element: ", smallest);

/*
Eldöntés algoritmusa:
találat = HAMIS
CIKLUS AMÍG van elem és a találat NEM
    szám = következő elem
    HA igaz a feltétel a számra, AKKOR
        találat = IGAZ
    FELTÉTEL VÉGE
CIKLUS VÉGE
*/

let contains = false;
for (let i = 0; i < numericArrey.length && contains == false; i++) {
   if (numericArrey[i] == 14){
       contains = true;
   }
}
console.log("This array contains 14: ", contains);