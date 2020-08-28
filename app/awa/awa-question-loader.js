function loadAWAQuestion(type){
    var dir;
    if(type == 'issue'){
        dir = "res/strings/ets-issue-pool/";
    }else{
        dir = "res/strings/ets-argument-pool/";
    }

    var questionNo = randomNumber(1, 150);
    
    ShowQuestion(dir, questionNo.toString());
    ShowDescription(dir, questionNo.toString());
}

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
}

function ShowQuestion(dir, questionNo){
    var fileName = questionNo.concat("q.txt");

    jQuery.get(dir.concat(fileName), function(data) {
        $(".awa-question").text(data);
    });
}
function ShowDescription(dir, questionNo){
    var fileName = questionNo.concat("q.txt");
    
    jQuery.get(dir.concat(fileName), function(data) {
        $(".awa-description").text(data);
    });
}
  