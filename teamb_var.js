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
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 1:
                    conscious = "conscious2";
                    symtom = "請以鼠標選擇部位";
                    systolic = 2;
                    diastolic = 2;
                    hr = 2;
                    cvp = 2; // center venous pressure
                    bf = 2;   // breath frequency 
                    tem = 2;  // body tem
                    uo = 2;  // urine output
                    break;
                case 2:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 3;
                    diastolic = 3;
                    hr = 3;
                    cvp = 3; // center venous pressure
                    bf = 3;   // breath frequency 
                    tem = 3;  // body tem
                    uo = 3;  // urine output
                    break;
            }
        break;
        case 1.2:
            switch(rand_left) {
                case 0:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 1:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 2:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
            }
        break;
        case 1.3:
            switch(rand_left) {
                case 0:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 1:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 2:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
            }
        break;
        case 1.4:
            switch(rand_left) {
                case 0:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 1:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 2:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
            }
        break;
        case 2.1:
            switch(rand_left) {
                case 0:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 1:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 2:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
            }
        break;
        case 2.2:
            switch(rand_left) {
                case 0:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 1:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 2:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
            }
        break;
        case 3.1:
            switch(rand_left) {
                case 0:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 1:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 2:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
            }
        break;
        case 3.2:
            switch(rand_left) {
                case 0:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 1:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 2:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
            }
        break;
        case 3.3:
            switch(rand_left) {
                case 0:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 1:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 2:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
            }
        break;
        case 4.1:
            switch(rand_left) {
                case 0:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 1:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 2:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
            }
        break;
        case 4.2:
            switch(rand_left) {
                case 0:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 1:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 2:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
            }
        break;
        case 4.3:
            switch(rand_left) {
                case 0:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 1:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
                    break;
                case 2:
                    conscious = "conscious1";
                    symtom = "請以鼠標選擇部位";
                    systolic = 1;
                    diastolic = 1;
                    hr = 1;
                    cvp = 1; // center venous pressure
                    bf = 1;   // breath frequency 
                    tem = 1;  // body tem
                    uo = 1;  // urine output
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
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "symtom-2-1"
                            break;
                        case 2:
                            symtom = "symtom-2-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "symtom-3-1"
                            break;
                        case 2:
                            symtom = "symtom-3-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
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
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
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
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
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
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
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
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
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
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
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
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
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
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
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
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "symtom-2-1"
                            break;
                        case 2:
                            symtom = "symtom-2-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "symtom-3-1"
                            break;
                        case 2:
                            symtom = "symtom-3-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
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
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
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
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
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
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 1:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
                            break;
                        default:
                            symtom = "請以鼠標選擇部位";
                            break;
                    }
                    break;
                case 2:
                    switch (part) {
                        case 1:
                            symtom = "symtom-1-1"
                            break;
                        case 2:
                            symtom = "symtom-1-2"
                            break;
                        case 3:
                            symtom = "symtom-1-3"
                            break;
                        case 4:
                            symtom = "symtom-1-4"
                            break;
                        case 5:
                            symtom = "symtom-1-5"
                            break;
                        case 6:
                            symtom = "symtom-1-6"
                            break;
                        case 7:
                            symtom = "symtom-1-7"
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







