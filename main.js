// js 

let gridItems = document.getElementsByClassName("square");
let boradArry = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9"
]
let currentTurn = "x";
let gameIsFinshed = false

function startGame() {
    for (const item of gridItems) {
        item.addEventListener("click", () => {
            if (gameIsFinshed) {
                return
            }

            // filling the value visually
            let value = item.getAttribute("value");
            let index = value - 1
            if (boradArry[index] == "x" || boradArry[index] == "o") {
                return
            }
            let squareContent = document.querySelector(`.square[value="${value}"]`)
            squareContent.innerHTML = currentTurn


            // filling the value logically 
            boradArry[index] = currentTurn;
            evaluateBorad()

            if (currentTurn == "x") {
                currentTurn = "o"
            } else {
                currentTurn = "x"
            }
            document.getElementById('instruction').textContent = `${currentTurn} turn`
        })

        function evaluateBorad() {
            if (
                // rows
                (boradArry[0] == boradArry[1] && boradArry[1] == boradArry[2]) ||
                (boradArry[3] == boradArry[4] && boradArry[4] == boradArry[5]) ||
                (boradArry[6] == boradArry[7] && boradArry[7] == boradArry[8]) ||

                // columns
                (boradArry[0] == boradArry[3] && boradArry[3] == boradArry[6]) ||
                (boradArry[1] == boradArry[4] && boradArry[4] == boradArry[7]) ||
                (boradArry[2] == boradArry[5] && boradArry[5] == boradArry[8]) ||

                // diagonal
                (boradArry[0] == boradArry[4] && boradArry[4] == boradArry[8]) ||
                (boradArry[2] == boradArry[4] && boradArry[4] == boradArry[6])
            ) {
                let winner = currentTurn == "o" ? "o" : "x"
                gameIsFinshed = true
                // alert(`${winner} win!`)
                alertify.alert(`${winner} win!`);


            }
            var isDraw = true
            for (sqare of boradArry) {
                if (sqare != "x" && sqare != "o") {
                    isDraw = false
                }
            }
            if (isDraw) {
                gameIsFinshed = true
                alertify.alert("draw")
                console.log("hello")
            }

        }

    }
}
startGame()



document.getElementById("rest").addEventListener("click", function () {
    rest()
})

function rest() {

    for (item of gridItems) {
        let value = item.getAttribute("value");
        let squareContent = document.querySelector(`.square[value="${value}"]`)
        squareContent.innerHTML = ""

        boradArry = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9"
        ]
        gameIsFinshed = false
        currentTurn = "x"
        document.getElementById('instruction').innerText = `${currentTurn} turn`

    }


}