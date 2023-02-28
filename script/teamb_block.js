

type_buttons = document.getElementsByClassName("type-button");
welcome_block = document.getElementById("welcome-block");
body_num_block = document.getElementById("body-num-block");
menu_block = document.getElementById("menu-block");
cons_sym_block = document.getElementById("cons-sym-block");

back_button = document.getElementById("back-button");

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



for(var i = 0; i < type_buttons.length; i ++) {
    type_buttons[i].addEventListener("click", function() {
        menu_block.style.display = "none";
        cons_sym_block.style.display = "flex";

        welcome_block.style.display = "none";
        body_num_block.style.display = "flex";
        main_left = document.getElementById("main-left");
        main_right = document.getElementById("main-right");
        if (choice == 0) {
            type_buttons.style.height = "6vw"
        } else {
            main_left.style.width = "30%";
            main_right.style.width = "70%";
            type_buttons.style.height = "20vw"
        }
    })

}
back_button.addEventListener("click", function(){
    
    menu_block.style.display = "flex";
    cons_sym_block.style.display = "none";
    welcome_block.style.display = "flex";
    body_num_block.style.display = "block";
    main_left.style.width = "40%";
    main_right.style.width = "60%";
    type_button.style.height = "6vw";
    
    
    
    
})

            







            
            
            
    
