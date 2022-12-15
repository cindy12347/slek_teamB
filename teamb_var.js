var choice;

var conscious;
var symtom;
var systolic;
var diastolic;
var cvp = 100; // center venous pressure
var bf = 30;   // breath frequency 
var tem = 37;  // body tem
var uo = 100;  // urine output


type1_0 = document.getElementById("type1_0");
type2_0 = document.getElementById("type2_0");
type3_0 = document.getElementById("type3_0");
type4_0 = document.getElementById("type4_0");
type4_1 = document.getElementById("type4_1");
type4_2 = document.getElementById("type4_2");
type4_3 = document.getElementById("type4_3");
var part_choice;


    
function type_click(choice_outside) {
    choice = choice_outside;
    
    alert(choice);
    
    switch (choice_outside) {
        case 1:
            conscious = "conscious1";
            symtom = "請以鼠標選擇部位";
            systolic = 1;
            diastolic = 1;
            cvp = 1; // center venous pressure
            bf = 1;   // breath frequency 
            tem = 1;  // body tem
            uo = 1;  // urine output
            break;
        case 2:
            conscious = "conscious2";
            symtom = "請以鼠標選擇部位";
            systolic = 2;
            diastolic = 2;
            cvp = 2; // center venous pressure
            bf = 2;   // breath frequency 
            tem = 2;  // body tem
            uo = 2;  // urine output
            break;
        case 3:
            conscious = "conscious3";
            symtom = "請以鼠標選擇部位";
            systolic = 3;
            diastolic = 3;
            cvp = 3; // center venous pressure
            bf = 3;   // breath frequency 
            tem = 3;  // body tem
            uo = 3;  // urine output
            break;
        case 4.1:
            conscious = "conscious4.1";
            symtom = "請以鼠標選擇部位";
            systolic = 4.1;
            diastolic = 4.1;
            cvp = 4.1; // center venous pressure
            bf = 4.1;   // breath frequency 
            tem = 4.1;  // body tem
            uo = 4.1;  // urine output
            break;
        case 4.2:
            conscious = "conscious4.2";
            symtom = "請以鼠標選擇部位";
            systolic = 4.2;
            diastolic = 4.2;
            cvp = 4.2; // center venous pressure
            bf = 4.2;   // breath frequency 
            tem = 4.2;  // body tem
            uo = 4.2;  // urine output
            break;
        case 4.3:
            conscious = "conscious4.3";
            symtom = "請以鼠標選擇部位";
            systolic = 4.3;
            diastolic = 4.3;
            cvp = 4.3; // center venous pressure
            bf = 4.3;   // breath frequency 
            tem = 4.3;  // body tem
            uo = 4.3;  // urine output
            break;
        default:
            conscious = "default";
            symtom = "default";
            systolic = 120;
            diastolic = 80;
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
    document.getElementById("cvp").innerText = cvp;
    document.getElementById("bf").innerText = bf;
    document.getElementById("tem").innerText = tem;
    document.getElementById("uo").innerText = uo;

    
    return choice_outside;
}
    


function light(part) {
    var part;
    switch (choice) {
        case 1:
            switch (part) {
                case 1:
                    symtom = "symtom-1-1"
                    break;
                case 2:
                    symtom = "symtom-1-2"
                    break;
                default:
                    symtom = "請以鼠標選擇部位";
                    break;
            }
            break;
        case 2:
            switch (part) {
                case 1:
                    symtom = "symtom-2-1"
                    break;
                case 2:
                    symtom = "symtom-2-2"
                    break;
                default:
                    symtom = "請以鼠標選擇部位";
                    break;
            }
            break;
        case 3:
            switch (part) {
                case 1:
                    symtom = "symtom-3-1"
                    break;
                case 2:
                    symtom = "symtom-3-2"
                    break;
                default:
                    symtom = "請以鼠標選擇部位";
                    break;
            }
            break;
        case 4.1:
            switch (part) {
                case 1:
                    symtom = "symtom-4.1-1"
                    break;
                case 2:
                    symtom = "symtom-4.1-2"
                    break;
                default:
                    symtom = "請以鼠標選擇部位";
                    break;
            }
            break;
        case 4.2:
            switch (part) {
                case 1:
                    symtom = "symtom-4.2-1"
                    break;
                case 2:
                    symtom = "symtom-4.2-2"
                    break;
                default:
                    symtom = "請以鼠標選擇部位";
                    break;
            }
            break;
        case 4.3:
            switch (part) {
                case 1:
                    symtom = "symtom-4.3-1"
                    break;
                case 2:
                    symtom = "symtom-4.3-2"
                    break;
                default:
                    symtom = "請以鼠標選擇部位";
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


function type4_click() {
    
    type4_0.classList.toggle("type4-button-background");
    type4_1.classList.toggle("displaynone");
    type4_2.classList.toggle("displaynone");
    type4_3.classList.toggle("displaynone");
}







