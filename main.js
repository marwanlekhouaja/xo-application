let myItem = document.querySelector(".container-game");
let myElements = Array.from(myItem.querySelectorAll("*")).slice(-9);

let title = document.querySelector(".title")

let turn = 'x'

myElements.forEach(function(element) {
    element.onclick = function() {
        if (turn === 'x' && element.innerHTML === '') {
            element.innerHTML = 'X'
            // update the turn and title
            turn = 'o'
            title.innerHTML = "O"
        } else if (turn === 'o' && element.innerHTML === '') {
            element.innerHTML = 'O';
            // update the turn and title
            turn = 'x'; 
            title.innerHTML = "X"
        }
        // Winner Function Will Be Run Every Onclick On Each Element
        winner()
    }
});

let squares = []
function winner () {
    for (i=0; i<myElements.length; i++) {
        squares[i] = myElements[i].innerHTML;
    }
    if (squares[0] === squares[1] && squares[1] === squares[2] && squares[1] !== "") {
        end(0, 1, 2)
    } else if (squares[3] === squares[4] && squares[4] === squares[5] && squares[4] !== "") {
        end(3, 4, 5)
    } else if (squares[6] === squares[7] && squares[7] === squares[8] && squares[7] !== "") {
        end(6, 7, 8)
    } else if (squares[0] === squares[3] && squares[3] === squares[6] && squares[3] !== "") {
        end(0, 3, 6)
    } else if (squares[1] === squares[4] && squares[4] === squares[7] && squares[4] !== "") {
        end(1, 4, 7)
    } else if (squares[2] === squares[5] && squares[5] === squares[8] && squares[5] !== "") {
        end(2, 5, 8)
    } else if (squares[0] === squares[4] && squares[4] === squares[8] && squares[4] !== "") {
        end(0, 4, 8)
    } else if (squares[2] === squares[4] && squares[4] === squares[6] && squares[4] !== "") {
        end(2, 4, 6)
    }
}

// The First Three condition to check for three rows
// The second Three condition to check for three columns
// The last Two condition to check for The Two Diagonal

function end(num1, num2, num3) {
    // Make the square black
    title.innerHTML = `${squares[num1]} Winner`
    myElements[num1].style.background = "#000"
    myElements[num2].style.background = "#000"
    myElements[num3].style.background = "#000"

    setInterval(function() {
        title.innerHTML += "."
    }, 1000)
    setTimeout(function() {
        location.reload()
    }, 4000)
}

