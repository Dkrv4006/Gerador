const rgb = [0,'a',1,'b',2,'c',3,'d',4,'e',5,'f',6,7,8,9]





document.addEventListener("click",function(e){
    let g = e.target.className

    const body = document.querySelector("body")
    if(g === 'body'){
    let cor = alea();
    body.style.backgroundColor = cor;
    }

    const co = document.querySelector(".container")
    const containerColor = document.querySelector(".containerColor")
    if(g === 'container'){
    let cor = alea();
    containerColor.textContent = cor;
    containerColor.style.display = "block";
    co.style.backgroundColor = cor;
    }

    const header = document.querySelector(".header")
    const headerColor = document.querySelector(".headerColor")
    if(g === 'header'){
    let cor = alea();
    headerColor.textContent = cor;
    headerColor.style.display = "block";
    header.style.backgroundColor = cor;
    }


   

    const box1 = document.querySelector(".box1")
    const box1Color = document.querySelector(".box1Color")
    if(g === 'box1'){
    let cor = alea();
    box1Color.textContent = cor;
    box1Color.style.display = "block";
    box1.style.backgroundColor = cor;
    }

    const box2 = document.querySelector(".box2")
    const box2Color = document.querySelector(".box2Color")
    if(g === 'box2'){
    let cor = alea();
    box2Color.textContent = cor;
    box2Color.style.display = "block";
    box2.style.backgroundColor = cor;
    }

    const box3 = document.querySelector(".box3")
    const box3Color = document.querySelector(".box3Color")
    if(g === 'box3'){
    let cor = alea();
    box3Color.textContent = cor;
    box3Color.style.display = "block";
    box3.style.backgroundColor = cor;
    }

    const right = document.querySelector(".right")
    const rightColor = document.querySelector(".rightColor")
    if(g === 'right'){
    let cor = alea();
    rightColor.textContent = cor;
    rightColor.style.display = "block";
    right.style.backgroundColor = cor;
    }
    console.log(id)
})



function alea(){   
    let cor = "#";
    for( i = 0; i < 6; i++)
    cor += rgb[numeroRandom()]
    return cor  
};
const numeroRandom = () =>  Math.floor(Math.random() * rgb.length)


