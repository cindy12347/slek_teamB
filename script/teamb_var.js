var choice;

var conscious;
var symtom;
var tem = 37;  // body tem
var systolic;
var diastolic;
var hr;
var bf = 30;   // breath frequency 
var cvp = 100; // center venous pressure
var uo = 100;  // urine output

var weight;
var sex;
var age;

var rand_num;
var rand_left;


type1_0 = document.getElementById("type1_0");
type1_1 = document.getElementById("type1_1");
type1_2 = document.getElementById("type1_2");
type1_3 = document.getElementById("type1_3");
type1_4 = document.getElementById("type1_4");
type2_0 = document.getElementById("type2_0");
type2_1 = document.getElementById("type2_1");
type2_2 = document.getElementById("type2_2");
type3_0 = document.getElementById("type3_0");
type3_1 = document.getElementById("type3_1");
type3_2 = document.getElementById("type3_2");
type3_3 = document.getElementById("type3_3");
type4_0 = document.getElementById("type4_0");
type4_1 = document.getElementById("type4_1");
type4_2 = document.getElementById("type4_2");
type4_3 = document.getElementById("type4_3");
var part_choice;


    
function type_click(choice_outside) {
    choice = choice_outside;
    rand_num = Math.floor(Math.random()*100);
    rand_left = rand_num % 3;
    
    switch (choice_outside) {
        case 1.1:
            switch(rand_left) {
                case 0:
                    conscious = "輕微焦慮";
                    symtom = "請以鼠標選擇部位";
                    systolic = 122;
                    diastolic = 85;
                    hr = 85;
                    cvp = 10; // center venous pressure
                    bf = 14;   // breath frequency 
                    tem = 36.5;  // body tem
                    uo = 70;  // urine output
                    weight = 75;
                    sex = "男";
                    age = 43;
                    break;
                case 1:
                    conscious = "輕微焦慮";
                    symtom = "請以鼠標選擇部位";
                    systolic = 110;
                    diastolic = 77;
                    hr = 90;
                    cvp = 7; // center venous pressure
                    bf = 16;   // breath frequency 
                    tem = 36.8;  // body tem
                    uo = 40;  // urine output
                    weight = 48;
                    sex = "女";
                    age = 32;
                    break;
                case 2:
                    conscious = "焦慮";
                    symtom = "請以鼠標選擇部位";
                    systolic = 102;
                    diastolic = 76;
                    hr = 94;
                    cvp = 8; // center venous pressure
                    bf = 18;   // breath frequency 
                    tem = 36.1;  // body tem
                    uo = 45;  // urine output
                    weight = 62;
                    sex = "女";
                    age = 56;
                    break;
            }
        break;
        case 1.2:
            switch(rand_left) {
                case 0:
                    conscious = "焦慮";
                    symtom = "請以鼠標選擇部位";
                    systolic = 105;
                    diastolic = 78;
                    hr = 106;
                    cvp = 6; // center venous pressure
                    bf = 22;   // breath frequency 
                    tem = 36;  // body tem
                    uo = 35;  // urine output
                    weight = 85;
                    sex = "男";
                    age = 19;
                    break;
                case 1:
                    conscious = "焦慮";
                    symtom = "請以鼠標選擇部位";
                    systolic = 100;
                    diastolic = 75;
                    hr = 115;
                    cvp = 5; // center venous pressure
                    bf = 24;   // breath frequency 
                    tem = 36.4;  // body tem
                    uo = 20;  // urine output
                    weight = 53;
                    sex = "女";
                    age = 26;
                    break;
                case 2:
                    conscious = "焦慮";
                    symtom = "請以鼠標選擇部位";
                    systolic = 95;
                    diastolic = 72;
                    hr = 118;
                    cvp = 4; // center venous pressure
                    bf = 26;   // breath frequency 
                    tem = 36.6;  // body tem
                    uo = 20;  // urine output
                    weight = 59;
                    sex = "男";
                    age = 37;
                    break;
            }
        break;
        case 1.3:
            switch(rand_left) {
                case 0:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 80;
                    diastolic = 60;
                    hr = 125;
                    cvp = 3; // center venous pressure
                    bf = 30;   // breath frequency 
                    tem = 35.5;  // body tem
                    uo = 10;  // urine output
                    weight = 66;
                    sex = "女";
                    age = 44;
                    break;
                case 1:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 78;
                    diastolic = 55;
                    hr = 130;
                    cvp = 3; // center venous pressure
                    bf = 32;   // breath frequency 
                    tem = 35.7;  // body tem
                    uo = 15;  // urine output
                    weight = 81;
                    sex = "男";
                    age = 24;
                    break;
                case 2:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 75;
                    diastolic = 49;
                    hr = 137;
                    cvp = 2; // center venous pressure
                    bf = 34;   // breath frequency 
                    tem = 35.3;  // body tem
                    uo = 10;  // urine output
                    weight = 55;
                    sex = "女";
                    age = 38;
                    break;
            }
        break;
        case 1.4:
            switch(rand_left) {
                case 0:
                    conscious = "嗜睡";
                    symtom = "請以鼠標選擇部位";
                    systolic = 70;
                    diastolic = 45;
                    hr = 143;
                    cvp = 2; // center venous pressure
                    bf = 36;   // breath frequency 
                    tem = 35.1;  // body tem
                    uo = "<5";  // urine output
                    weight = 70;
                    sex = "男";
                    age = 18;
                    break;
                case 1:
                    conscious = "嗜睡";
                    symtom = "請以鼠標選擇部位";
                    systolic = 68;
                    diastolic = 44;
                    hr = 145;
                    cvp = 1; // center venous pressure
                    bf = 38;   // breath frequency 
                    tem = 35;  // body tem
                    uo = "<5";  // urine output
                    weight = 58;
                    sex = "男";
                    age = 26;
                    break;
                case 2:
                    conscious = "昏迷";
                    symtom = "請以鼠標選擇部位";
                    systolic = 65;
                    diastolic = 45;
                    hr = 144;
                    cvp = 0; // center venous pressure
                    bf = 38;   // breath frequency 
                    tem = 34.8;  // body tem
                    uo = "<5";  // urine output
                    weight = 62;
                    sex = "女";
                    age = 22;
                    break;
            }
        break;
        case 2.1:
            switch(rand_left) {
                case 0:
                    conscious = "遲鈍";
                    symtom = "請以鼠標選擇部位";
                    systolic = 82;
                    diastolic = 58;
                    hr = 128;
                    cvp = 18; // center venous pressure
                    bf = 30;   // breath frequency 
                    tem = 37;  // body tem
                    uo = 10;  // urine output
                    weight = 81;
                    sex = "男";
                    age = 78;
                    break;
                case 1:
                    conscious = "嗜睡";
                    symtom = "請以鼠標選擇部位";
                    systolic = 78;
                    diastolic = 57;
                    hr = 134;
                    cvp = 20; // center venous pressure
                    bf = 32;   // breath frequency 
                    tem = 36.9;  // body tem
                    uo = 10;  // urine output
                    weight = 79;
                    sex = "女";
                    age = 72;
                    break;
                case 2:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 75;
                    diastolic = 56;
                    hr = 137;
                    cvp = 22; // center venous pressure
                    bf = 35;   // breath frequency 
                    tem = 36.2;  // body tem
                    uo = "<5";  // urine output
                    weight = 74;
                    sex = "男";
                    age = 69;
                    break;
            }
        break;
        case 2.2:
            switch(rand_left) {
                case 0:
                    conscious = "遲鈍";
                    symtom = "請以鼠標選擇部位";
                    systolic = 77;
                    diastolic = 53;
                    hr = 122;
                    cvp = 16; // center venous pressure
                    bf = 28;   // breath frequency 
                    tem = 35.9;  // body tem
                    uo = 15;  // urine output
                    weight = 89;
                    sex = "男";
                    age = 59;
                    break;
                case 1:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 66;
                    diastolic = 48;
                    hr = 124;
                    cvp = 19; // center venous pressure
                    bf = 29;   // breath frequency 
                    tem = 36.8;  // body tem
                    uo = 10;  // urine output
                    weight = 71;
                    sex = "女";
                    age = 71;
                    break;
                case 2:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 69;
                    diastolic = 49;
                    hr = 130;
                    cvp = 22; // center venous pressure
                    bf = 33;   // breath frequency 
                    tem = 36.6;  // body tem
                    uo = "<5";  // urine output
                    weight = 78;
                    sex = "男";
                    age = 66;
                    break;
            }
        break;
        case 3.1:
            switch(rand_left) {
                case 0:
                    conscious = "焦慮";
                    symtom = "請以鼠標選擇部位";
                    systolic = 82;
                    diastolic = 60;
                    hr = 118;
                    cvp = 18; // center venous pressure
                    bf = 29;   // breath frequency 
                    tem = 36.9;  // body tem
                    uo = 5;  // urine output
                    weight = 45;
                    sex = "男";
                    age = 17;
                    break;
                case 1:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 78;
                    diastolic = 60;
                    hr = 123;
                    cvp = 20; // center venous pressure
                    bf = 31;   // breath frequency 
                    tem = 36.7;  // body tem
                    uo = "<5";  // urine output
                    weight = 48;
                    sex = "男";
                    age = 21;
                    break;
                case 2:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 76;
                    diastolic = 57;
                    hr = 128;
                    cvp = 21; // center venous pressure
                    bf = 32;   // breath frequency 
                    tem = 36.4;  // body tem
                    uo = 5;  // urine output
                    weight = 69;
                    sex = "女";
                    age = 29;
                    break;
            }
        break;
        case 3.2:
            switch(rand_left) {
                case 0:
                    conscious = "焦慮";
                    symtom = "請以鼠標選擇部位";
                    systolic = 80;
                    diastolic = 58;
                    hr = 118;
                    cvp = 19; // center venous pressure
                    bf = 28;   // breath frequency 
                    tem = 35.8;  // body tem
                    uo = 5;  // urine output
                    weight = 49;
                    sex = "女";
                    age = 50;
                    break;
                case 1:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 79;
                    diastolic = 57;
                    hr = 128;
                    cvp = 22; // center venous pressure
                    bf = 31;   // breath frequency 
                    tem = 36.9;  // body tem
                    uo = "<5";  // urine output
                    weight = 70;
                    sex = "男";
                    age = 32;
                    break;
                case 2:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 75;
                    diastolic = 56;
                    hr = 130;
                    cvp = 22; // center venous pressure
                    bf = 35;   // breath frequency 
                    tem = 38.6;  // body tem
                    uo = "<5";  // urine output
                    weight = 64;
                    sex = "女";
                    age = 46;
                    break;
            }
        break;
        case 3.3:
            switch(rand_left) {
                case 0:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 79;
                    diastolic = 60;
                    hr = 125;
                    cvp = 19; // center venous pressure
                    bf = 29;   // breath frequency 
                    tem = 36.9;  // body tem
                    uo = 10;  // urine output
                    weight = 67;
                    sex = "男";
                    age = 64;
                    break;
                case 1:
                    conscious = "遲鈍";
                    symtom = "請以鼠標選擇部位";
                    systolic = 76;
                    diastolic = 55;
                    hr = 131;
                    cvp = 20; // center venous pressure
                    bf = 31;   // breath frequency 
                    tem = 37.4;  // body tem
                    uo = 10;  // urine output
                    weight = 59;
                    sex = "女";
                    age = 68;
                    break;
                case 2:
                    conscious = "嗜睡";
                    symtom = "請以鼠標選擇部位";
                    systolic = 70;
                    diastolic = 46;
                    hr = 135;
                    cvp = 21; // center venous pressure
                    bf = 33;   // breath frequency 
                    tem = 37.8;  // body tem
                    uo = "<5";  // urine output
                    weight = 81;
                    sex = "男";
                    age = 27;
                    break;
            }
        break;
        case 4.1:
            switch(rand_left) {
                case 0:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 85;
                    diastolic = 25;
                    hr = 119;
                    cvp = 5; // center venous pressure
                    bf = 28;   // breath frequency 
                    tem = 38.4;  // body tem
                    uo = 15;  // urine output
                    weight = 88;
                    sex = "男";
                    age = 47;
                    break;
                case 1:
                    conscious = "遲鈍";
                    symtom = "請以鼠標選擇部位";
                    systolic = 76;
                    diastolic = 22;
                    hr = 121;
                    cvp = 4; // center venous pressure
                    bf = 29;   // breath frequency 
                    tem = 38.9;  // body tem
                    uo = 5;  // urine output
                    weight = 42;
                    sex = "女";
                    age = 50;
                    break;
                case 2:
                    conscious = "嗜睡";
                    symtom = "請以鼠標選擇部位";
                    systolic = 72;
                    diastolic = 20;
                    hr = 124;
                    cvp = 3; // center venous pressure
                    bf = 34;   // breath frequency 
                    tem = 39.3;  // body tem
                    uo = "<5";  // urine output
                    weight = 57;
                    sex = "女";
                    age = 73;
                    break;
            }
        break;
        case 4.2:
            switch(rand_left) {
                case 0:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 81;
                    diastolic = 24;
                    hr = 118;
                    cvp = 6; // center venous pressure
                    bf = 29;   // breath frequency 
                    tem = 36.4;  // body tem
                    uo = 5;  // urine output
                    weight = 61;
                    sex = "女";
                    age = 26;
                    break;
                case 1:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 77;
                    diastolic = 21;
                    hr = 129;
                    cvp = 5; // center venous pressure
                    bf = 30;   // breath frequency 
                    tem = 36.8;  // body tem
                    uo = "<5";  // urine output
                    weight = 65;
                    sex = "女";
                    age = 34;
                    break;
                case 2:
                    conscious = "嗜睡";
                    symtom = "請以鼠標選擇部位";
                    systolic = 71;
                    diastolic = 20;
                    hr = 134;
                    cvp = 3; // center venous pressure
                    bf = 30;   // breath frequency 
                    tem = 36.9;  // body tem
                    uo = "<5";  // urine output
                    weight = 63;
                    sex = "男";
                    age = 54;
                    break;
            }
        break;
        case 4.3:
            switch(rand_left) {
                case 0:
                    conscious = "混亂";
                    symtom = "請以鼠標選擇部位";
                    systolic = 86;
                    diastolic = 26;
                    hr = 80;
                    cvp = 6; // center venous pressure
                    bf = 28;   // breath frequency 
                    tem = 36.8;  // body tem
                    uo = "<5";  // urine output
                    weight = 54;
                    sex = "女";
                    age = 41;
                    break;
                case 1:
                    conscious = "遲鈍";
                    symtom = "請以鼠標選擇部位";
                    systolic = 80;
                    diastolic = 23;
                    hr = 82;
                    cvp = 4; // center venous pressure
                    bf = 30;   // breath frequency 
                    tem = 36.9;  // body tem
                    uo = "<5";  // urine output
                    weight = 43;
                    sex = "女";
                    age = 23;
                    break;
                case 2:
                    conscious = "嗜睡";
                    symtom = "請以鼠標選擇部位";
                    systolic = 79;
                    diastolic = 22;
                    hr = 85;
                    cvp = 4; // center venous pressure
                    bf = 31;   // breath frequency 
                    tem = 35.8;  // body tem
                    uo = "<5";  // urine output
                    weight = 74;
                    sex = "男";
                    age = 36;
                    break;
            }
        break;
        default:
            conscious = "default";
            symtom = "default";
            systolic = 120;
            diastolic = 80;
            hr = 1;
            cvp = 100; // center venous pressure
            bf = 30;   // breath frequency 
            tem = 37;  // body tem
            uo = 100;  // urine output
            weight = 56;
            sex = "女";
            age = 22;
            break;
    }
    document.getElementById("conscious").innerText = conscious;
    document.getElementById("symtom").innerText = symtom;
    document.getElementById("systolic").innerText = systolic;
    document.getElementById("diastolic").innerText = diastolic;
    document.getElementById("hr").innerText = hr;
    document.getElementById("cvp").innerText = cvp;
    document.getElementById("bf").innerText = bf;
    document.getElementById("tem").innerText = tem;
    document.getElementById("uo").innerText = uo;
    document.getElementById("weight").innerText = weight;
    document.getElementById("sex").innerText = sex;
    document.getElementById("age").innerText = age;


    
    return choice_outside;
}
    


function light(part) {
    var part;
    switch (choice) {
        case 1.1:
            switch (rand_left) {
                case 0:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "右手腕割傷"
                            break;
                        case 7:
                            symtom = "溫暖紅潤"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "左小腿撕裂傷"
                            break;
                        case 7:
                            symtom = "溫暖紅潤"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "右前臂骨折"
                            break;
                        case 7:
                            symtom = "溫暖紅潤"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
            }
        break;
        case 1.2:
            switch (rand_left) {
                case 0:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "左手腕割傷"
                            break;
                        case 7:
                            symtom = "溫暖紅潤"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "少量瘀傷"
                            break;
                        case 4:
                            symtom = "大片瘀傷"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "右肱骨骨折且脹大"
                            break;
                        case 7:
                            symtom = "溫暖紅潤"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "右小腿骨折且脹大"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
            }
        break;
        case 1.3:
            switch (rand_left) {
                case 0:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "大片瘀傷"
                            break;
                        case 6:
                            symtom = "雙側小腿開放性骨折"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "大片瘀傷"
                            break;
                        case 5:
                            symtom = "大片瘀傷"
                            break;
                        case 6:
                            symtom = "多處擦傷"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "頸部割傷"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "無異狀"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
            }
        break;
        case 1.4:
            switch (rand_left) {
                case 0:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "大片瘀傷"
                            break;
                        case 6:
                            symtom = "骨盆骨折"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "少量瘀傷"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "大片瘀傷且脹大"
                            break;
                        case 6:
                            symtom = "四肢瘀傷"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "大量擦傷"
                            break;
                        case 4:
                            symtom = "大片瘀傷"
                            break;
                        case 5:
                            symtom = "大片瘀傷"
                            break;
                        case 6:
                            symtom = "雙側大腿骨骨折且脹大"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
            }
        break;
        case 2.1:
            switch (rand_left) {
                case 0:
                    switch (part) {
                        case 1:
                            symtom = "有心雜音"
                            break;
                        case 2:
                            symtom = "呼吸有囉音"
                            break;
                        case 3:
                            symtom = "頸靜脈怒張"
                            break;
                        case 4:
                            symtom = "胸悶"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "四肢水腫"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "有心雜音"
                            break;
                        case 2:
                            symtom = "呼吸有囉音"
                            break;
                        case 3:
                            symtom = "頸靜脈怒張"
                            break;
                        case 4:
                            symtom = "胸悶"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "四肢水腫"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "有心雜音"
                            break;
                        case 2:
                            symtom = "呼吸有囉音"
                            break;
                        case 3:
                            symtom = "頸靜脈怒張"
                            break;
                        case 4:
                            symtom = "胸部悶痛"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "四肢水腫"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
            }
        break;
        case 2.2:
            switch (rand_left) {
                case 0:
                    switch (part) {
                        case 1:
                            symtom = "有心雜音"
                            break;
                        case 2:
                            symtom = "呼吸有囉音"
                            break;
                        case 3:
                            symtom = "頸靜脈怒張"
                            break;
                        case 4:
                            symtom = "胸部悶痛"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "四肢水腫"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "有心雜音"
                            break;
                        case 2:
                            symtom = "呼吸有囉音"
                            break;
                        case 3:
                            symtom = "頸靜脈怒張"
                            break;
                        case 4:
                            symtom = "胸部悶痛"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "四肢水腫"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "有心雜音"
                            break;
                        case 2:
                            symtom = "呼吸有囉音"
                            break;
                        case 3:
                            symtom = "頸靜脈怒張"
                            break;
                        case 4:
                            symtom = "左胸悶痛"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "四肢水腫"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
            }
        break;
        case 3.1:
            switch (rand_left) {
                case 0:
                    switch (part) {
                        case 1:
                            symtom = "心音小聲"
                            break;
                        case 2:
                            symtom = "咳嗽、單側無呼吸音"
                            break;
                        case 3:
                            symtom = "頸靜脈擴張"
                            break;
                        case 4:
                            symtom = "胸部刺痛"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "無異狀"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "心音小聲"
                            break;
                        case 2:
                            symtom = "單側無呼吸音"
                            break;
                        case 3:
                            symtom = "頸靜脈擴張"
                            break;
                        case 4:
                            symtom = "胸部刺痛"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "無異狀"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "心音小聲"
                            break;
                        case 2:
                            symtom = "單側無呼吸音"
                            break;
                        case 3:
                            symtom = "頸靜脈擴張"
                            break;
                        case 4:
                            symtom = "穿刺傷"
                            break;
                        case 5:
                            symtom = "大片瘀傷"
                            break;
                        case 6:
                            symtom = "多處割傷"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
            }
        break;
        case 3.2:
            switch (rand_left) {
                case 0:
                    switch (part) {
                        case 1:
                            symtom = "心音小聲"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "頸靜脈擴張"
                            break;
                        case 4:
                            symtom = "大片瘀傷"
                            break;
                        case 5:
                            symtom = "大片瘀傷"
                            break;
                        case 6:
                            symtom = "多處擦傷"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "心音小聲"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "頸靜脈擴張"
                            break;
                        case 4:
                            symtom = "大片瘀傷"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "無異狀"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "心音小聲"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "頸靜脈擴張"
                            break;
                        case 4:
                            symtom = "胸部悶痛"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "無異狀"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
            }
        break;
        case 3.3:
            switch (rand_left) {
                case 0:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "咳嗽、呼吸有囉音"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "胸部悶痛"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "無異狀"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "咳血"
                            break;
                        case 3:
                            symtom = "頸靜脈擴張"
                            break;
                        case 4:
                            symtom = "胸部悶痛"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "無異狀"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸有囉音"
                            break;
                        case 3:
                            symtom = "頸靜脈擴張"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "無異狀"
                            break;
                        case 7:
                            symtom = "濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
            }
        break;
        case 4.1:
            switch (rand_left) {
                case 0:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "咳嗽、呼吸有囉音"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "無異狀"
                            break;
                        case 7:
                            symtom = "溫暖紅潤"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "右小腿有傷口，整隻小腿紅腫"
                            break;
                        case 7:
                            symtom = "溫暖紅潤"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "整個腹部疼痛"
                            break;
                        case 6:
                            symtom = "無異狀"
                            break;
                        case 7:
                            symtom = "溫暖紅潤"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
            }
        break;
        case 4.2:
            switch (rand_left) {
                case 0:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "喘鳴聲"
                            break;
                        case 3:
                            symtom = "紅疹"
                            break;
                        case 4:
                            symtom = "紅疹"
                            break;
                        case 5:
                            symtom = "紅疹"
                            break;
                        case 6:
                            symtom = "無異狀"
                            break;
                        case 7:
                            symtom = "溫暖紅潤"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "喘鳴聲"
                            break;
                        case 3:
                            symtom = "紅疹"
                            break;
                        case 4:
                            symtom = "紅疹"
                            break;
                        case 5:
                            symtom = "紅疹"
                            break;
                        case 6:
                            symtom = "無異狀"
                            break;
                        case 7:
                            symtom = "溫暖紅潤"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "喘鳴聲、呼吸困難"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "紅疹"
                            break;
                        case 6:
                            symtom = "紅疹"
                            break;
                        case 7:
                            symtom = "溫暖紅潤"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
            }
        break;
        case 4.3:
            switch (rand_left) {
                case 0:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "無異狀"
                            break;
                        case 4:
                            symtom = "上胸椎骨折"
                            break;
                        case 5:
                            symtom = "瘀傷"
                            break;
                        case 6:
                            symtom = "瘀傷"
                            break;
                        case 7:
                            symtom = "溫暖紅潤，僅頭頸部濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "頸椎脫位"
                            break;
                        case 4:
                            symtom = "瘀傷"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "無異狀"
                            break;
                        case 7:
                            symtom = "溫暖紅潤，僅上胸以上濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "心音正常"
                            break;
                        case 2:
                            symtom = "呼吸音正常"
                            break;
                        case 3:
                            symtom = "頸椎骨折"
                            break;
                        case 4:
                            symtom = "無異狀"
                            break;
                        case 5:
                            symtom = "無異狀"
                            break;
                        case 6:
                            symtom = "瘀傷"
                            break;
                        case 7:
                            symtom = "溫暖紅潤，僅頭頸部濕冷蒼白"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
            }
        break;

    }
    document.getElementById("symtom").innerText = symtom;
   
}

function lightoff() {
    symtom = "請以鼠標選擇部位";
    document.getElementById("symtom").innerText = symtom;
}
function type1_click() {
    
    type1_0.classList.toggle("type4-button-background");
    type1_1.classList.toggle("displaynone");
    type1_2.classList.toggle("displaynone");
    type1_3.classList.toggle("displaynone");
    type1_4.classList.toggle("displaynone");
}
function type2_click() {
    
    type2_0.classList.toggle("type4-button-background");
    type2_1.classList.toggle("displaynone");
    type2_2.classList.toggle("displaynone");
}
function type3_click() {
    
    type3_0.classList.toggle("type4-button-background");
    type3_1.classList.toggle("displaynone");
    type3_2.classList.toggle("displaynone");
    type3_3.classList.toggle("displaynone");
}

function type4_click() {
    
    type4_0.classList.toggle("type4-button-background");
    type4_1.classList.toggle("displaynone");
    type4_2.classList.toggle("displaynone");
    type4_3.classList.toggle("displaynone");
}







