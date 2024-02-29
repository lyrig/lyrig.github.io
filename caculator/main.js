// Used for easily access
but_format = document.querySelector(".but_format");
scan = document.querySelector(".scan");
stylesheet = document.styleSheets[0];

const id_list = ["%", "CE", "C", "back", "1/x", "x2", "2x", "/", "7", "8", "9", "x",
"4", "5", "6", "-", "1", "2", "3", "+", "+/-", "0", ".", "="];
let but_list = [];
let number_content = "0";
let cal_content = "";
var MLE = false; // 是否有运算错误
var past_number = 0.0; // 上次保存的数字
var start_input = true; // 
var float_type = false; // 是否是float
var dot_type = true; // 能否用dot
var last_cal = "";
var begin_flag = true; // 下次输入是否重置
var t_number = 0; // 当前运算新输入的数字
var change_t=true; 
var start_caculate=false; // 开始计算
let cal_scan = document.createElement('p');
let number_scan = document.createElement('p');
cal_scan.textContent = number_content;
number_scan.textContent = number_content;
scan.appendChild(cal_scan);
scan.appendChild(number_scan);



// 调整计算器类型
let cal_type = "standard";

if(cal_type == "standard"){
    for(let i = 0; i < stylesheet.cssRules.length; i++) {
        if(stylesheet.cssRules[i].selectorText === '.but_format') {
            elementRules = stylesheet.cssRules[i];
        }
    }
    elementRules.style.setProperty('grid-template-columns', 'repeat(4, 1fr)')
}
else{
    for(let i = 0; i < stylesheet.cssRules.length; i++) {
        if(stylesheet.cssRules[i].selectorText === '.but_format') {
            elementRules = stylesheet.cssRules[i];
        }
    }
    elementRules.style.setProperty('grid-template-columns', 'repeat(5, 1fr)')
}


// 初始化设置
function Setup(){
    if(cal_type == "standard"){
        update();
        for(i=0; i < 4*6; ++i ){
            number_content.concat(number_content, "0");
            tbut = document.createElement("button");
            tbut.type="button";
            tbut.id=id_list[i];
            tbut.textContent=id_list[i];
            but_format.appendChild(tbut);
            but_list.push(tbut);
            if(id_list[i] == "."){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    if(start_caculate){
                        number_content = "0";
                        start_caculate = false;
                    }
                    if(begin_flag){
                        restart();
                        begin_flag=false;
                    }
                    float_type=true;
                    if(dot_type){
                        number_content = number_content.concat(".");
                        dot_type=false;
                    }
                    update();
                    start_input = false;
                }
            }
            else if(id_list[i] == "0"){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    if(begin_flag){
                        restart();
                        begin_flag=false;
                    }
                    if(start_input){
                        number_content = "";
                    }
                    number_content = number_content.concat("0");
                    update();
                }
            }
            else if(id_list[i] == "1"){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    if(begin_flag){
                        restart();
                        begin_flag=false;
                    }
                    if(start_input){
                        number_content = "1";
                        start_input = false;
                    }
                    else{
                        number_content = number_content.concat("1");
                    }
                    update();
                }
            }
            else if(id_list[i] == "2"){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    if(begin_flag){
                        restart();
                        begin_flag=false;
                    }
                    if(start_input){
                        number_content = "2";
                        start_input = false;
                    }
                    else{
                        number_content = number_content.concat("2");
                    }
                    update();
                }
            }
            else if(id_list[i] == "3"){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    if(begin_flag){
                        restart();
                        begin_flag=false;
                    }
                    if(start_input){
                        start_input=false;
                        number_content = "3";
                    }
                    else{
                        number_content = number_content.concat("3");
                    }
                    update();
                }
            }
            else if(id_list[i] == "4"){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    if(begin_flag){
                        restart();
                        begin_flag=false;
                    }
                    if(start_input){
                        start_input=false;
                        number_content = "4";
                    }
                    else{
                        number_content = number_content.concat("4");
                    }
                    update();
                }
            }
            else if(id_list[i] == "5"){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    if(begin_flag){
                        restart();
                        begin_flag=false;
                    }
                    if(start_input){
                        start_input=false;
                        number_content = "5";
                    }
                    else{
                        number_content = number_content.concat("5");
                    }
                    update();
                }
            }
            else if(id_list[i] == "6"){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    if(begin_flag){
                        restart();
                        begin_flag=false;
                    }
                    if(start_input){
                        start_input=false;
                        number_content = "6";
                    }
                    else{
                        number_content = number_content.concat("6");
                    }
                    update();
                }
            }
            else if(id_list[i] == "7"){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    if(begin_flag){
                        restart();
                        begin_flag=false;
                    }
                    if(start_input){
                        start_input=false;
                        number_content = "7";
                    }
                    else{
                        number_content = number_content.concat("7");
                    }
                    update();
                }
            }
            else if(id_list[i] == "8"){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    if(begin_flag){
                        restart();
                        begin_flag=false;
                    }
                    if(start_input){
                        start_input=false;
                        number_content = "8";
                    }
                    else{
                        number_content = number_content.concat("8");
                    }
                    update();
                }
            }
            else if(id_list[i] == "9"){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    if(begin_flag){
                        restart();
                        begin_flag=false;
                    }
                    if(start_input){
                        start_input=false;
                        number_content = "9";
                    }
                    else{
                        number_content = number_content.concat("9");
                    }
                    update();
                }
            }
            else if(id_list[i] == '+'){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    change_t=true;
                    if(begin_flag){
                        past_number = parse_number();
                        begin_flag=false;
                        cal_content = number_content.toString().concat("+");
                        start_caculate = true;
                        start_input=true;
                        change_t=true;
                        update()
                    }
                    else{
                        if(!start_caculate){
                            past_number = parse_number();
                            cal_content = past_number.toString().concat("+");
                            update();
                        }
                        else{
                            calculate();
                            change_t=true;
                            number_content = past_number.toString();
                            cal_content = number_content.concat("+");
                            update();
                        }
                    }
                    last_cal = '+';
                    start_input=true;
                    start_caculate = true;
                }
            }
            else if(id_list[i] == "="){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                        return;
                    }
                    begin_flag=true;
                    calculate();
                    start_caculate=false;
                    refresh();
                }
            }
            else if(id_list[i] == "C"){
                but_list[i].onclick = function(){
                    restart();
                }
            }
            else if(id_list[i] == 'CE'){
                but_list[i].onclick = function(){
                    number_content = "0";
                    update();
                }
            }
            else if(id_list[i] == "+/-"){
                but_list[i].onclick = function(){
                    if(number_content == "0"){
                        return;
                    }
                    if(number_content[0] == "-"){
                        number_content = number_content.replace("-", "");
                    }
                    else{
                        number_content = "-" + number_content;
                    }
                    update();
                }

            }
            else if(id_list[i] == "-"){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    change_t=true;

                    if(begin_flag){
                        past_number = parse_number();
                        begin_flag=false;
                        cal_content = number_content.toString().concat("-");
                        start_caculate = true;
                        start_input=true;
                        change_t=true;
                        update()
                    }
                    else{
                        if(!start_caculate){
                            past_number = parse_number();
                            cal_content = number_content.concat("-");
                            update();
                        }
                        else{
                            calculate();
                            change_t=true;
                            // cal_content = "lalalal"
                            number_content = past_number.toString();
                            cal_content = number_content.toString().concat("-");
                            update();
                        }
                    }
                    last_cal = '-';
                    start_input=true;
                    start_caculate = true;
                } 
            }
            else if(id_list[i] == 'x'){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    change_t=true;
                    if(begin_flag){
                        begin_flag=false;
                        past_number = parse_number();
                        cal_content = number_content.toString().concat("x");
                        start_caculate = true;
                        start_input=true;
                        change_t=true;
                        update()
                    }
                    else{
                        if(!start_caculate){
                            past_number = parse_number();
                            cal_content = past_number.toString().concat("x");
                            update();
                        }
                        else{
                            calculate();
                            change_t=true;
                            number_content = past_number.toString();
                            cal_content = past_number.toString().concat("x");
                            update();
                        }
                    }
                    last_cal = 'x';
                    start_input=true;
                    start_caculate = true;
                } 
            }
            else if(id_list[i] == '/'){
                but_list[i].onclick = function(){
                    if(MLE){
                        restart();
                    }
                    if(last_cal == "/"){
                        return;
                    }
                    change_t=true;
                    if(begin_flag){
                        begin_flag=false;
                        past_number = parse_number();
                        cal_content = number_content.toString().concat("/");
                        start_caculate = true;
                        start_input=true;
                        update();
                    }
                    else{
                        if(!start_caculate){
                            past_number = parse_number();
                            cal_content = past_number.toString().concat("/");
                            update();
                        }
                        else{
                            calculate();
                            change_t=true;
                            if(number_content=="Inf"){

                            }
                            else{
                                number_content = past_number.toString();
                                cal_content = past_number.toString().concat("/");
                                update();
                            }
                        }
                    }
                    last_cal = '/';
                    start_input=true;
                    start_caculate = true;
                } 
            }
        }
    }
    else{
        // 还未实现
    }
}
Setup();


// 运算相关
function parse_number(){
    var number;
    if (float_type){
        // 是float类型运算
        number = parseFloat(number_content);
    }
    else{
        number = parseInt(number_content);
    }
    return number;
}

function update(){
    cal_scan.textContent = cal_content;
    number_scan.textContent = number_content;
    // number_scan.textContent = "1";
}

function refresh(){
    if(number_content != "Inf"){
        cal_content = number_content;
        number_content = past_number.toString();
        dot_type=true;
        float_type=false;
        update();
    }
    else{
        dot_type=true;
        float_type=false;
    }

}

function restart(){
    cal_content = "";
    number_content = "0";
    past_number = 0.0;
    start_input = true; // 
    float_type = false; // 是否是float
    dot_type = true; // 能否用dot
    last_cal = "";
    change_t=true;
    MLE=false;
    begin_flag=true;
    start_caculate=false;
    update();
}

function check_math(number, eps=1e-5){
    return !(number < eps && number > -eps);
}

function calculate(){
    if(last_cal == "+"){
        if(change_t){
            t_number = parse_number();
            change_t=false;
        }
        t_past = past_number;
        past_number += t_number;
        number_content = t_past.toString() + "+" + t_number.toString() + "=";
    }
    else if(last_cal == "-"){
        if(change_t){
            t_number = parse_number();
            change_t=false;
        }
        t_past = past_number;
        past_number -= t_number;
        number_content = t_past.toString() + "-" + t_number.toString() + "=";
    }
    else if(last_cal == "x"){
        if(change_t){
            t_number = parse_number();
            change_t=false;
        }
        t_past = past_number;
        past_number *= t_number;
        number_content = t_past.toString() + "x" + t_number.toString() + "=";
    }
    else if(last_cal == "/"){
        if(change_t){
            t_number = parse_number();
            change_t=false;
        }
        t_past = past_number;
        if(!check_math(t_number)){
            MLE=true;
            cal_content = cal_content + t_number.toString()+"=";
            number_content="Inf";
            update();
            return;
        }
        past_number /= t_number;
        number_content = t_past.toString() + "/" + t_number.toString() + "=";
    }
}