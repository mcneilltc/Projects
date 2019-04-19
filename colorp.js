const brain = require("brain.js")

const network = new brain.NeuralNetwork();

// network.train([
//     {input: [1], output: [1]},
//     {input: [0], output: [0]}
// ]);

// const result = network.run([1]);

// console.log(result);

// network.train([
//     {input: [60, 150], output: [1]},
//     {input: [30, 60], output: [0]}
// ]);
// const result2 = network.run([73, 250]);

// console.log(result2);

// network.train([
//     {input: [ 80, 200], output: [1]},
//     {input: [ 60, 150], output: [1]},
//     {input: [ 30, 60], output: [0]},
//     {input: [ 20, 50], output: [0]}
// ]);
// const result3 = network.run([73, 250]);

// console.log(result3);

// network.train([
//     {input: {height: 80, weight: 260}, output: {adult :1}},
//     {input: {height: 60, weight: 150}, output: {adult: 1}},
//     {input: {height:30, weight:60}, output: {child: 0}},
//     {input: {height: 20, weight: 50}, output: {child: 0}}
// ]);
// const result4 = network.run({height: 73, weight: 250});

// console.log(result4);

// network.train([
// {input:{r: 1, g: 1, b: 1}, output:{light: 1}},
// {input:{r: 0, g: 0, b: 0}, output:{dark: 1}},
// {input:{r: 0.25, g: 0.25, b: 0.25}, output:{dark: 1}},
// {input:{r: 0.75, g: 0.75, b: 0.75}, output:{light: 1}}
// //{input:{r: 0.2, g: 0.25, b: 0.25}, output:{dark: 1}}
// //{input:{r: 0.75, g: 0,.75 b: 0.75}, output:{light: 1}}

// // when added the output 0 means not true and 1 is true. With them all being true this will mean that all values are being read and calculated

// ]);

// const color = network.run({r:0.75 , g: 1, b: 0});

// console.log(color);
// //$('#example').click{}

const input = document.querySelector("input");
const example = document.querySelector("#example");

//add an eventlistener to look for a change in my input
input.addEventListener("change", (e) => {

    //call the function getRgb

    const rgb = getRgb(e.target.value); // binded e to the input and now it can be called .target.value give you the availity to grab what is slelected out of the color selector

    console.log(rgb);
    network.train([
        {input:{r: 1, g: 1, b: 1}, output:{light: 1}},
        {input:{r: 0, g: 0, b: 0}, output:{dark: 1}},
        {input:{r: 0.25, g: 0.25, b: 0.25}, output:{dark: 1}},
        {input:{r: 0.75, g: 0.75, b: 0.75}, output:{light: 1}}
    ]);
    
    const color = brain.likely(rgb, network);
    //const color = network.run({r:0.75 , g: 1, b: 0});
    console.log(color);
    example.style.background = e.target.value
    example.style.color = result === "dark"? "white" : "black"

} )
 //brain.js and getRGB helper function
 function getRgb(hex) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
  
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: Math.round(parseInt(result[1], 16) / 2.55) / 100,
        g: Math.round(parseInt(result[2], 16) / 2.55) / 100,
        b: Math.round(parseInt(result[3], 16) / 2.55) / 100,
    } : null;
  }
//(e)-- attaches an object to the eventlistener

//document.getElementById("example").addEventListener(`click`, function(){})