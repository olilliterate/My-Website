function checkMultiAnswer(question_num, answer) {
    let answer_box = document.getElementById(question_num + "-answer");
    answer_box.style.display = 'block';
    if (document.querySelector('input[name=' + question_num + ']:checked')) {
        const inputed_answer = document.querySelector('input[name=' + question_num + ']:checked').value;
        
        if (inputed_answer === answer) {
            answer_box.innerHTML = "Well done! That is the correct answer";
        }
        else{
            answer_box.innerHTML = "Incorrect, please try again";
        }
    }
    else{
        answer_box.innerHTML = "Please input an answer";
    }
    
}

function shrinkNavBar(query) {
    if (query.matches) {
        let nav_ele_0 = document.getElementById("about_nav");   
        let nav_ele_1 = document.getElementById("experience_nav");
        let nav_ele_2 = document.getElementById("groups_nav");
        nav_ele_0.innerHTML = "About";
        nav_ele_1.innerHTML = "Experience";
        nav_ele_2.innerHTML = "Groups";
    }
    else{
        let nav_ele_0 = document.getElementById("about_nav");
        let nav_ele_1 = document.getElementById("experience_nav");
        let nav_ele_2 = document.getElementById("groups_nav");
        nav_ele_0.innerHTML = "About Me";
        nav_ele_1.innerHTML = "My Education And Experience";
        nav_ele_2.innerHTML = "A Short Look At Groups";
    }

}

const mmObj = window.matchMedia("(max-width: 600px)");
mmObj.addEventListener("change", () => shrinkNavBar(mmObj));