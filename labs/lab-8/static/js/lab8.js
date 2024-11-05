/****************************************************************************************************************/
/* In-Class Exercises                                                                                           */
/****************************************************************************************************************/
/* 1. create an array called "fruits" and assign the values "Strawberry", "Raspberry", and "Apple" to it         */
// add code here
let fruits = [];

fruits = ["Strawberry", "Raspberry","Apple"];
console.log(fruits);



/* 2. add two more fruits to the "fruits" array using the correct array method                                   */
// add code here
fruits.push("kiwi","watermelon");
console.log(fruits);



/* 3. sort the fruits array alphabetically using the correct array method                                        */
// add code here

console.log(fruits.sort());


/* 4. create a function called printFruit that prints each item in the fruits array to the console              */
/*    and call the printFruit function                                                                          */
// add code here
function printFruit (){
    //let text = fruits;
    for (let index in fruits){
        console.log(fruits[index]);
    } 
};

printFruit();



/* 5. create a fruit class that has three properties: name, color, and season and one method: printFruit()      */
/*    that prints all three properties of the fruit to the console. Then, create 3 fruit objects and print      */
//   them using the printFruit() method             
//add code here

 class Fruit {
    constructor(name, color, season){
    this.name = name; 
    this.color = color; 
    this.season =season; 
    };
};
printFruit(); {
    console.log(
        "Fruit Name" + this.name + "Fruit color" + this.color +  "Fruit season" + this.season
    );
}

const Strawberry = new Fruit (Strawberry, red, summer);

apple.printFruit();
    /*getname() {
        return name;
    }
    }
    printFruit(); 
};*/

/****************************************************************************************************************/
/* In-Class Lab                                                                                                 */
/****************************************************************************************************************/
/* 1. Write a function that asks the user if they want to say hi. If the user selects "Okay" (true), then       */
/*    display a welcome message. If the user selects "Cancel" (false), then display a different message         */
function areYouSure() {
text = "Welcom"
    if (confirm("Do you want to say hi?")) {
        alert("Nice to meet you :>");
    } else {
        alert(":<");
        text = "mean"
    }
}
areYouSure();


/* 2. Write a function to change 3 styles on the webpage                                                        */


function changeStyle() {

    document.getElementsById ("button1").style.display = "cant go back";

    document.getElementsById("welcome").style.display = ":>";

    document.getElementsById("button2").style.display = "rotate(72deg)";

    document.body.style.backgroundColor = "purple"


};
    /*var fontsize = "16px"
    var left= "400px"
    var top= "200px"

    document.getElementById("myElement").style.top=top
    document.getElementById("myElement").style.left=left

    document.getElementById("myElement").style = allMyStyle 

};
changeStyle()
*/
