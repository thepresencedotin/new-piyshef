// const $ = document.querySelector.bind(document);
// const sc = $(".sc");
// const r = $(".r");
// const o = $(".o");
// const ll = $(".ll");
// const eq = $(".eq");

// function transformLetters() {
//     const scroll = window.scrollY;

//     console.log({ AmountScrolled: scroll });

//     sc.style.transform = `scale(${1-scroll*0.008})`;

//     r.style.transform = `translate3d(0, 0, ${scroll*0.95}px)`;

//     o.style.transform = `translate3d(0, 0, ${scroll*1.05}px) scale(${1-scroll*0.008})`;

//     ll.style.transform = `translate3d(${-scroll*0.6}px, 0, ${scroll*0.5}px)`;

//     eq.style.transform = `scale(${-scroll*0.9})`;

//     sc.style.opacity = `${3-scroll*0.09}`;
//     o.style.opacity = `${3-scroll*0.09}`;
//     eq.style.opacity = `${3+scroll*0.009}`;

// }

// window.addEventListener("scroll", transformLetters);


const $ = document.querySelector.bind(document);
const sc = $(".sc");
const r = $(".r");
const o = $(".o");
const ll = $(".ll");
const eq = $(".eq");

function transformLetters() {
    const scroll = window.scrollY;

    sc.style.transform = `scale(${1-scroll*0.009})`;

    r.style.transform = `translate3d(0, 10, ${3-scroll*0.09}px)`;

    o.style.transform = `translate3d(0, 0, 0 scale(${-1-scroll*0.009})`;

    //ll.style.transform = `translate3d(${scroll*0.1}px, 0,0)`;  //themselves
    ll.style.transform = `translate3d(${-scroll*0.6}px, 0, ${scroll*0.5}px)`;

    // eq.style.transform = `scale(${-scroll*0.0009})`;
    eq.style.transform = `translate3d(${-scroll*0.6}px, 0, ${scroll*5.5}px) scale(${-scroll*0.0009})`;

    sc.style.opacity = `${3-scroll*0.009}`;
    o.style.opacity = `${3-scroll*0.009}`;
    eq.style.opacity = `${scroll*0.0009}`;

}

window.addEventListener("scroll", transformLetters);
