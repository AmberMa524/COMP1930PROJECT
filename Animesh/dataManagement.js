var budget1;

var devices1;

var brand1;

function saveData(a, b, c){

    budget1 = a;

    devices1 = b;

    brand1 = c;

    localStorage.setItem("budget1", a);

    localStorage.setItem("devices1", b);

    localStorage.setItem("brand1", c);

    console.log("budget:" + budget1);

    console.log("device" + devices1);

    console.log("brand" + brand1);

}

function getBrand(){

    return localStorage.getItem("brand1");


}

function getDevice(){

    return localStorage.getItem("devices1");


}

function getBudget(){

    return localStorage.getItem("budget1");


}

function pageChange(){

    window.location.replace("questionnaireresults.html");


}