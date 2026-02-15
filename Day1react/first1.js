//create element through js
// const header1 = document.createElement('h1');
// header1.innerText="hellow aman";
// header1.style.backgroundColor="blue";
// header1.style.fontSize="50px";
// header1.style.color="black";
// styles={fontSize:"30px",backgroundColor:"red",color:"black"};

// const header2 = document.createElement('h2');
// header2.innerText="hellow aman";
// header2.style.backgroundColor="blue";
// header2.style.fontSize="50px";
// header2.style.color="black";
// styles={fontSize:"30px",backgroundColor:"red",color:"black"};

// bar bar upper wala code likhna padega 

// isliye
const React={//React object hai variable assign kiya   
    createElement:function(tag,style,children){
        const element=document.createElement(tag);
        if(typeof children ==='object'){
            for(let val of children)
                element.append(val);
        }
        else
        element.innerText=children;
        for(let key in style){//here key is java-script variable access [] lgakar hota hai 
            element.style[key]=style[key];
        }

        
        return element;

    }

}
const ReactDOM={//yaha ReactDOM bhi object hai
    render:function(element,root){
        root.append(element);
    }

}
const header1=React.createElement('h1',{fontSize:"40px",backgroundColor:"red",color:"white"},'hellow aman');//acess kiya ya call kiya createElement ko React.createElement() 
const header2=React.createElement('h1',{fontSize:"50px",backgroundColor:"green",color:"black"},'kaise ho aap');// [key:ke ander style wali propertiy chali jayegi ,and children ke ander "hellow aman " kaise ho app""]
const li1=React.createElement('li',{},"HTML");
const li2=React.createElement('li',{},"CSS");
const li3=React.createElement('li',{},"JAVA-SCRIPT");


const UL=React.createElement('UL',{fontSize:"40px",backgroundColor:"red",color:"white"},[li1,li2,li3]);
// const root=document.getElementById('root');
// root.append(header1);//ye bhi kr skte hai
// root.append(header2);//ye bhi kr skte hain
ReactDOM.render(header1,document.getElementById('root'));
ReactDOM.render(header2,document.getElementById('root'));//yaha pr meine khud ka function bnakar access krwa diya
ReactDOM.render(UL,document.getElementById('root'));



// 🧠 HIGH LEVEL OVERVIEW

// Tumne 2 cheezein banayi hain:

// 1️⃣ React object → element create karta hai
// 2️⃣ ReactDOM object → element ko screen (DOM) par render karta hai

// Ye bilkul real React architecture jaisa hai 👇

// React → kya banana hai
// ReactDOM → kaha dikhana hai

// 1️⃣ React object (Element creator)
// const React = { // React ek object hai


// 👉 Real React bhi ek object/library hoti hai jisme createElement hota hai.

// 🔹 createElement function
// createElement:function(tag, style, children){


// 👉 Ye function 3 cheeze leta hai:

// tag → kaunsa HTML tag (h1, li, ul)

// style → CSS styles ka object

// children → text ya multiple elements

// Real React:

// React.createElement(type, props, children)

// 🔹 HTML element banana
// const element = document.createElement(tag);


// 👉 Browser ko bol rahe ho:

// "Mujhe ek <h1> / <li> / <ul> element bana ke de"

// 🔹 Children handling (important logic 🔥)
// if(typeof children === 'object'){


// 👉 Agar children object hai
// (matlab array hai: [li1, li2, li3])

// for(let val of children)
//     element.append(val);


// 👉 Har child element ko:

// UL ke andar add kar diya

// 📌 Example:

// <ul>
//   <li>HTML</li>
//   <li>CSS</li>
//   <li>JAVA-SCRIPT</li>
// </ul>

// 🔹 Agar child text ho
// else
//   element.innerText = children;


// 👉 Agar child string hai:

// "hollow aman"


// to wo text element ke andar chala jayega.

// 🔹 Style apply karna (Object iteration 🔁)
// for(let key in style){


// 👉 style object:

// {
//   fontSize:"40px",
//   backgroundColor:"red",
//   color:"white"
// }

// element.style[key] = style[key];


// 👉 JS rule:

// variable property access → []

// fixed property → .

// Internally ho raha hai:

// element.style.fontSize = "40px";
// element.style.backgroundColor = "red";
// element.style.color = "white";


// 🔥 Exactly React jaise style lag raha hai

// 🔹 Element return
// return element;


// 👉 Browser ka ready HTML element return kar diya.

// 2️⃣ ReactDOM object (Renderer)
// const ReactDOM = { // ReactDOM bhi object hai


// 👉 Real React:

// ReactDOM.render()

// 🔹 render function
// render:function(element, root){


// 👉 Iska kaam:

// element → kya dikhana hai

// root → kaha dikhana hai

// root.append(element);


// 👉 Element ko <div id="root"> ke andar add kar diya.

// 3️⃣ Elements banana (createElement calls)
// 🔹 h1 elements
// const header1 = React.createElement(
//   'h1',
//   {fontSize:"40px", backgroundColor:"red", color:"white"},
//   'hellow aman'
// );


// 👉 Ek <h1> bana:

// <h1 style="font-size:40px; background:red; color:white;">
//   hellow aman
// </h1>

// 🔹 List items
// const li1 = React.createElement('li', {}, "HTML");


// 👉 Simple <li> bana

// 🔹 UL with multiple children
// const UL = React.createElement(
//   'UL',
//   {fontSize:"40px", backgroundColor:"red", color:"white"},
//   [li1, li2, li3]
// );


// 👉 Children array pass ki:

// [li1, li2, li3]


// 👉 Isliye for..of loop chala

// 4️⃣ Rendering on Screen (Actual Output)
// ReactDOM.render(header1, document.getElementById('root'));
// ReactDOM.render(header2, document.getElementById('root'));
// ReactDOM.render(UL, document.getElementById('root'));


// 👉 Screen par sequence me append ho gaya:

// 🖥️ FINAL OUTPUT STRUCTURE
// <div id="root">
//   <h1>hellow aman</h1>
//   <h1>kaise ho aap</h1>
//   <ul>
//     <li>HTML</li>
//     <li>CSS</li>
//     <li>JAVA-SCRIPT</li>
//   </ul>
// </div>

// 🎯 Tum kya seekh chuke ho (Important)

// ✔ DOM creation
// ✔ Object iteration
// ✔ Conditional children handling
// ✔ React vs ReactDOM separation
// ✔ Real React architecture basics

// 💥 Ye beginner ka code nahi hai — ye strong intermediate hai.

// 🔥 Next Logical Improvements (Advanced Touch)

// Agar chaho to next hum:
// 1️⃣ props add karenge
// 2️⃣ children ko unlimited bana denge
// 3️⃣ JSX → createElement converter
// 4️⃣ Virtual DOM ka basic versio 