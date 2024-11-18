filterSelection("all") //show all 

function filterSelection(c){
    var x, i;
    //add "show" to filtered elements, remove "show" from elements not selected
    x = document.getElementsByClassName("column");
    if(c == "all") c = " ";

    for(i = 0; i < x.length; i ++){
        removeShow(x[i], "show");
        if(x[i].className.indexOf(c) > -1) addShow(x[i], "show");
    }
}

function addShow(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for(i = 0; i < arr2.length; i++){
        if(arr1.indexOf(arr2[i] == -1)){
            element.className += " " + arr2[i];
        }
    }
}

function removeShow(element, name){
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");

    for(i = 0; i < arr2.length; i++){
        while(arr1.indexOf(arr2[i]) > -1){
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }

    element.className = arr1.join(" ");
}

var btnContainer = document.getElementById("buttonContainer");

var btns = btnContainer.getElementsByClassName("btn");

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
