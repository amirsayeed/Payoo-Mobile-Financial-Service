document.getElementById("logout-btn").addEventListener("click",function(){
    window.location.assign('./index.html');
})

doToggle("cashout","none");
doToggle("transfer","none");
doToggle("transaction","none");
doToggle("bonus","none");
doToggle("bill","none");


document.getElementById("add-money-box").addEventListener("click", function() {
    doToggle("add-money","block");
    doToggle("cashout","none");
    doToggle("transfer","none");
    doToggle("bonus","none");
    doToggle("bill","none");
    doToggle("transaction","none");
});

document.getElementById("cashout-box").addEventListener("click", function() {
    doToggle("cashout","block");
    doToggle("add-money","none");
    doToggle("transfer","none");
    doToggle("bonus","none");
    doToggle("bill","none");
    doToggle("transaction","none");
});

document.getElementById("transaction-box").addEventListener("click", function(event) {
    doToggle("transaction","block");
    doToggle("add-money","none");
    doToggle("cashout","none");
    doToggle("transfer","none");
    doToggle("bonus","none");
    doToggle("bill","none");
});

document.getElementById("transfer-box").addEventListener("click", function(event) {
    doToggle("transfer","block");
    doToggle("transaction","none");
    doToggle("cashout","none");
    doToggle("add-money","none");
    doToggle("bonus","none");
    doToggle("bill","none");
});

document.getElementById("bonus-box").addEventListener("click", function(event) {
    doToggle("bonus","block");
    doToggle("transaction","none");
    doToggle("cashout","none");
    doToggle("add-money","none");
    doToggle("transfer","none");
    doToggle("bill","none");
});

document.getElementById("bill-box").addEventListener("click", function(event) {
    doToggle("bill","block");
    doToggle("transaction","none");
    doToggle("cashout","none");
    doToggle("add-money","none");
    doToggle("bonus","none");
    doToggle("transfer","none");
});
