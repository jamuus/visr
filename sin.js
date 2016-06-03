var i = 0;
setInterval(() => {
    var s = Math.sin(++i / 10);
    console.log('#a:', s);
    console.log('#b:', s * s);
    console.log('#c:', s * s * s);
    console.log('#d:', s * s * s);
    console.log('#e:', s * s * s);
    console.log('#f:', s * s * s);
}, 1000 / 30);