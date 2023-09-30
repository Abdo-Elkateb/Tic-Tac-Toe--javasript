// js 

let gridItems = document.getElementsByClassName("square");
let boradArry = [
    "1", "2", "3", "4", "5", "6", "7", "8", "9"
]
let currentTurn = "x";

for (const item of gridItems) {
    item.addEventListener("click", () => {
        
        // filling the value visually
        let value = item.getAttribute("value");
        let squareContent = document.querySelector(`.square[value="${value}"]`)
        squareContent.innerHTML = currentTurn


        // filling the value logically 
        let index = value -1
        boradArry[index] = currentTurn;
        evaluateBorad()

        if (currentTurn == "x") {
            currentTurn = "o"
        } else {
            currentTurn = "x"
        }
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
            (boradArry[0] == boradArry[4] && boradArry[4] == boradArry[8 ]) ||
            (boradArry[2] == boradArry[4] && boradArry[4] == boradArry[6]) 
        ) {
            let winner = currentTurn == "o" ? "o" : "x"
            alert(`${winner} win!`)
        }
    }




}
