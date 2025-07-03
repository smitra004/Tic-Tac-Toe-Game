let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newbtn = document.querySelector("#new");
let msg  = document.querySelector(".msg-container");
let para = document.querySelector("#msg");

let turnO = true;

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const showWinner = (pos1) =>{
    para.innerText = `Congratulations, The Winner is ${pos1}`;
    msg.classList.remove("hide");
}

const disablebox = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enablebox = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const checkWinner = () =>{
    for(let patterns of winpattern){
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                console.log("Winner", pos1);
                showWinner(pos1);
                disablebox();
            }
        }
    }
};

boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        console.log("button clicked");
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const resetGame = () =>{
    turnO = true;
    enablebox();
    msg.classList.add("hide");
}

newbtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

class User{
    constructor(name,email){
        this.Name = name;
        this.Email = email;
    }

    work(){
        console.log("I work");
    }
}

class human extends User{
    constructor(name,email){
        super(name, email);
    }

    sleep(){
        console.log("I sleep");
    }
}

let user = new human("Adam","adam@email.com");
