function janken() {
    let number = Math.floor(Math.random() * (0 + 1 - 4)) + 4;
    hyoji()
    setTimeout(() => {
        switch (number) {
            case 1:
                document.getElementById('janken').innerHTML = "グー👊"
                break;
            case 2:
                document.getElementById('janken').innerHTML = "チョキ✌"
                break;
            case 3:
                document.getElementById('janken').innerHTML = "パー🖐"
                break;
        }
    }, 1000)
}

function hyoji() {
    document.getElementById('moji').innerHTML = "ジャンケン"
    document.getElementById('janken').innerHTML = "何が出るかな？"
    setTimeout(() => {
        document.getElementById('moji').innerHTML = "ポン！"
    }, 1000)
}