function showData(){
    var num=randomNumber(1, 150);
    var File = num.toString();
    
    ShowQuestion(File);
    ShowDescription(File);
}

function randomNumber(min, max) {  
    return Math.floor(Math.random() * (max - min)) + min; 
}

function ShowQuestion(File){
    var FileName=File.concat("q.txt");
    var dir="res/strings/ets-issue-pool/";
    FileName=dir.concat(FileName);

    jQuery.get(FileName, function(data) {
        $(".awa-question").text(data);
    });
}
function ShowDescription(File){
    var FileName=File.concat("d.txt");
    var dir="res/strings/ets-issue-pool/";
    FileName=dir.concat(FileName);

    jQuery.get(FileName, function(data) {
        $(".awa-description").text(data);
    });
}
  