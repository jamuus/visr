var i = 0;
setInterval(() => {
    var s = Math.sin(++i / 100);
    console.log('#a:', s);
    console.log('#b:', s * s);
    console.log('#c:', s * s * s);
    console.log('#d:', s * s * s * s);
}, 1000 / 60);