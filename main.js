const img = ['./Assets/showcase1.png','./Assets/showcase2.png','./Assets/showcase3.png','./Assets/showcase4.png'];
let current=0;
let tempImg=2;

function trocaImagem() {
    document.images["case"].src = img[current];

    current = (current + 1) % img.length;
}

let intervalControl = setInterval(trocaImagem, 1000 * tempImg);


