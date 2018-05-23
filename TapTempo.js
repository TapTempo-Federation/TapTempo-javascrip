var t = [];
document.addEventListener("keydown", function() {
    t.push(performance.now());
    if (t.length > 1) {
        console.log(60000 / (t[t.length - 1] - t[0]) * (t.length - 1));
    }
    if (t.length > 4) {
        t.shift();
    }
})
