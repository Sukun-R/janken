function janken() {
    let number = Math.floor(Math.random() * (0 + 1 - 4)) + 4;
    hyoji()
    setTimeout(() => {
        switch (number) {
            case 1:
                document.getElementById('janken').innerHTML = "γ°γΌπ"
                break;
            case 2:
                document.getElementById('janken').innerHTML = "γγ§γ­β"
                break;
            case 3:
                document.getElementById('janken').innerHTML = "γγΌπ"
                break;
        }
    }, 1000)
}

function hyoji() {
    document.getElementById('moji').innerHTML = "γΈγ£γ³γ±γ³"
    document.getElementById('janken').innerHTML = "δ½γεΊγγγͺοΌ"
    setTimeout(() => {
        document.getElementById('moji').innerHTML = "γγ³οΌ"
    }, 1000)
}