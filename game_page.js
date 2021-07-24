player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name +":";
document.getElementById("player2_name").innerHTML = player2_name +":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn -"+player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn -"+player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowerCase =" + word);

    chartAt1 = word.chartAt(1);
    console.log(chartAt1);

    length_divide_2 = Math.floor(word.length/2);
    chartAt2 = word.chartAt(length_divide_2);
    console.log(chartAt2)

    length_minus_1=word.length - 1;
    chartAt3=word.chartAt(length_minus_1);
    console.log(chartAt3);
     
    remove_charAt1 = word.replace(chartAt1,"_");
    remove_charAt2 = word.replace(chartAt2,"_");
    remove_charAt3 = word.replace(chartAt3,"_");

    question_word = "<h4 id='word_display> Q."+remove_charAt3
    input_box ="<br> Answer: <input type='text' id='input_checkbox'>";
    check_button="<br><br><button onclick='check()' class='btn btn-success'>Check</button>";
    row= question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
    input_box ="<br> Answer: <input type='text' id='input_checkbox'>";
    check_button="<br><br><button onclick='check()' class='btn btn-success'>Check</button>";
    row= question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value="";
}

question_turn="player1";
answer_turn="player2";

function check() {
    get_answer= document.getElementById("input_checkbox").value;
    answer = get_answer,toLowerCase();
    console.log("answer in lower case - "+ answer);
   if(answer_turn == "player1")
   {
       player1_score = player1_score +1;
       document.getElementById("player1_score").innerHTML = player1_score;
   }
   else
   {
       player2_score = player2_score +1;
       document.getElementById("player2_score").innerHTML = player2_score;
   }
   if (question_turn == "player1")
   {
       question_turn = "player2";
       document.getElementById("player_question").innerHTML = "Question Turn -" + player2_name;
   }
   else
   {
       question_turn = "player1";
       document.getElementById("player_question").innerHTML = "Question Turn -" + player1_name;
   }
   if (answer_turn == "player1")
   {
       answer_turn = "player2";
       document.getElementById("player_answer").innerHTML = "Answer Turn -" + player2_name;
   }
   else 
   {
    answer_turn = "player1";
    document.getElementById("player_answer").innerHTML = "Answer Turn -" + player1_name;
   }
}