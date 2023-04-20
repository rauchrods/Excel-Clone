
let thead = document.querySelector("#table-heading");
let tbody = document.querySelector("#table-body");

let currposooutput = document.querySelector("#curr-pos");

let boldbtn = document.querySelector("#bold-btn");
let italicbtn = document.querySelector("#italic-btn");
let underlinebtn = document.querySelector("#underline-btn");
let txtcolorbtn = document.querySelector("#text-color");
let fillcolorbtn = document.querySelector("#fill-color");


let leftalignbtn = document.querySelector("#align-left-btn");
let centeralignbtn = document.querySelector("#align-center-btn");
let rightalignbtn = document.querySelector("#align-right-btn");

let fontsizebtn = document.querySelector("#font-size-select");
let fontstylebtn = document.querySelector("#font-style-select");

let copybtn = document.querySelector("#copy-btn");
let cutbtn = document.querySelector("#cut-btn");
let pastebtn = document.querySelector("#paste-btn");

let borderbtmbtn = document.querySelector("#border-btm-btn");
let bordertopbtn = document.querySelector("#border-top-btn");
let borderleftbtn = document.querySelector("#border-left-btn");
let borderrightbtn = document.querySelector("#border-right-btn");
let borderouterbtn = document.querySelector("#border-outer-btn");


let addsheetbtn = document.querySelector("#add-sheet-btn");
let sheet_no=2;

let cutobj={};

 let tr = document.createElement("tr");
 let th = document.createElement("th");
 th.innerText = "◢";
 th.style.fontSize = "15px";
 tr.appendChild(th);


for(let col = 0; col< 26; col++) {
    let th = document.createElement("th");
    th.innerText = String.fromCharCode(col+65);
    tr.appendChild(th);
}

thead.appendChild(tr);
 

for(let row = 0; row< 150; row++) {

    let tr = document.createElement("tr");
    let th = document.createElement("th");
    th.innerText=(row+1);
    tr.appendChild(th);

    
     for(let col = 0; col< 26; col++) {
        let td = document.createElement("td");
        td.setAttribute("contenteditable", true);
        td.setAttribute("onfocus", "getcurrentcell(event)");
        td.setAttribute("spellcheck", false);
        td.setAttribute("id", `${String.fromCharCode(col+65)}${row+1}`);
        tr.appendChild(td);
     }


    tbody.appendChild(tr);
}


let currele;

function getcurrentcell(event){
 currele =  event.target;
 let myid = currele.getAttribute("id");
 currposooutput.value = myid;
 console.log(currele);


//   fontsizebtn.value = currele.style.fontSize;
}

boldbtn.addEventListener("click",()=>{

    if(currele.style.fontWeight == "bold"){
        currele.style.fontWeight = "normal";
    }
    else{
        currele.style.fontWeight = "bold";
    }

    console.log("bold clicked");
});

italicbtn.addEventListener("click",()=>{

    if(currele.style.fontStyle == "italic"){
        currele.style.fontStyle = "normal";
    }
    else{
        currele.style.fontStyle = "italic";
    }
    console.log("italic clicked");
});

underlinebtn.addEventListener("click",()=>{

    if(currele.style.textDecoration == "underline"){
        currele.style.textDecoration = "none";
    }
    else{
        currele.style.textDecoration = "underline";
    }
    console.log("underline clicked");
});

txtcolorbtn.addEventListener("input",()=>{

    currele.style.color = txtcolorbtn.value;

    console.log("txt-color active");
});

fillcolorbtn.addEventListener("input",()=>{

    currele.style.backgroundColor = fillcolorbtn.value;

    console.log("txt-color active");
});

leftalignbtn.addEventListener("click",()=>{

    currele.style.textAlign = "left";

    // console.log("left-alignbtn active");
});

centeralignbtn.addEventListener("click",()=>{
    currele.style.textAlign = "center";
    console.log("center-alignbtn active");
});


rightalignbtn.addEventListener("click",()=>{
    currele.style.textAlign = "right";
    console.log("right-alignbtn active");
});

fontsizebtn.addEventListener("change",()=>{
    currele.style.fontSize = `${fontsizebtn.value}px`;
    
});

fontstylebtn.addEventListener("change",()=>{
    // console.log(f);
    currele.style.fontFamily = fontstylebtn.value;
    
});

cutbtn.addEventListener("click",()=>{
    cutobj={
        innertxt: currele.innerText,
        styles: currele.style.cssText
    }
    currele.innerText="";
    currele.style="";
    console.log(cutobj);
    
});

copybtn.addEventListener("click",()=>{
    cutobj={
        innertxt: currele.innerText,
        styles: currele.style.cssText
    }

    console.log(cutobj);
    
});

pastebtn.addEventListener("click",()=>{

    currele.innerText = cutobj.innertxt;
    currele.style = cutobj.styles;
});

borderbtmbtn.addEventListener("click",()=>{
    if(currele.style.borderBottom == "2px solid black"){
        currele.style.borderBottom = "1px solid lightgray";
    }
    else{
        currele.style.borderBottom = "2px solid black";
    }    
});

bordertopbtn.addEventListener("click",()=>{
    if(currele.style.borderTop == "2px solid black"){
        currele.style.borderTop = "1px solid lightgray";
    }
    else{
        currele.style.borderTop = "2px solid black";
    }    
});

borderleftbtn.addEventListener("click",()=>{
    if(currele.style.borderLeft == "2px solid black"){
        currele.style.borderLeft = "1px solid lightgray";
    }
    else{
        currele.style.borderLeft = "2px solid black";
    }    
});

borderrightbtn.addEventListener("click",()=>{
    if(currele.style.borderRight == "2px solid black"){
        currele.style.borderRight = "1px solid lightgray";
    }
    else{
        currele.style.borderRight = "2px solid black";
    }    
});

borderouterbtn.addEventListener("click",()=>{
    if(currele.style.border == "2px solid black"){
        currele.style.border = "1px solid lightgray";
    }
    else{
        currele.style.border = "2px solid black";
    }    
});

addsheetbtn.addEventListener("click",()=>{
    let sheetdiv = document.querySelector(".sheet-add");
    let sheettab = document.createElement("span");
    sheettab.innerText = `Sheet ${sheet_no}`;
    sheet_no++;
    sheetdiv.insertBefore(sheettab, sheetdiv.lastElementChild);
});




