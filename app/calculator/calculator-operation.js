var curVal=0;
var inputNum=0;
var gotequal=0;
var flag=0;//0->none, 1->+ ,2->- ,3->* ,4->/
function claculate(input){
    if(!isNaN(input)){
        input=Number(input);
        inputNum=inputNum*10+input;
        return inputNum;
    }
    else if(!gotequal){
        doCalculation();
        flag=0;
        inputNum=0;
    }
    gotequal=0;
    checkSign(input);
    return curVal;
}

function checkSign(input){
    if(input=='+'){
        flag=1;
    }
    else if(input=='-'){
        flag=2;
    }
    else if(input=='*'){
        flag=3;
    }
    else if(input=='/'){
        flag=4;
    }
    else  if(input=='='){
        gotequal=1;
    }
}
function doCalculation(){
    if(flag==0){
        curVal=inputNum;
    }
    else if(flag==1){
        curVal =curVal+inputNum;
    }
    else if(flag==2){
        curVal =curVal-inputNum;
    }
    else if(flag==3){
        curVal =curVal*inputNum;
    }
    else if(flag==4){
        if(inputNum==0) curVal =Infinity;
        else curVal= curVal/inputNum;
    }
}


