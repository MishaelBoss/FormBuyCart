var maestro = [50, 56, 57, 58, 63, 67];
var mastercard = [51, 52, 53, 54, 55];
var diners = [36, 30, 38];
var jcb = [31, 35];
var ae = [34, 37];

function changeCard(){
    var str = document.getElementById('card').value.toString();
    var imageElement = document.getElementById("images-bank");

    while (str.length < 16){
        str += '0';
    }
    document.getElementById('image-card').innerHTML = str;
    if (str.substring(0, 1) == '4'){
        document.getElementById('op-card').innerHTML = 'VISA';
        imageElement.src = "images/visa.png";
    }
    else if (str.substring(0, 1) == '2'){
        document.getElementById('op-card').innerHTML = 'MIR';
        imageElement.src = "images/mir.png";
    }
    else if (str.substring(0, 2) == '60'){
        document.getElementById('op-card').innerHTML = 'DISCOVER';
        imageElement.src = "images/discover.png";
    }
    else if (str.substring(0, 2) == '62'){
        document.getElementById('op-card').innerHTML = 'China UnionPay';
        imageElement.src = "images/UnionPay.png";
    }
    else if (str.substring(0, 1) == '7'){
        document.getElementById('op-card').innerHTML = 'UEK';
        imageElement.src = "images/xz-bank.jpg";
    }
    else if (maestro.includes(Number(str.substring(0, 2)))){
        document.getElementById('op-card').innerHTML = 'MAESTRO';
        imageElement.src = "images/maestro.png";
    }
    else if (mastercard.includes(Number(str.substring(0, 2)))){
        document.getElementById('op-card').innerHTML = 'MASTERCARD';
        imageElement.src = "images/masterCard.png";
    }
    else if (diners.includes(Number(str.substring(0, 2)))){
        document.getElementById('op-card').innerHTML = 'DINERS';
        imageElement.src = "images/xz-bank.jpg";
    }
    else if (jcb.includes(Number(str.substring(0, 2)))){
        document.getElementById('op-card').innerHTML = 'JCB International';
        imageElement.src = "images/xz-bank.jpg";
    }
    else if (ae.includes(Number(str.substring(0, 2)))){
        document.getElementById('op-card').innerHTML = 'American Express';
        imageElement.src = "images/xz-bank.jpg";
    }
    else{
        document.getElementById('op-card').innerHTML = 'NONE';
    }
}
function changeCVV(){
    var str = document.getElementById('cvv').value.toString();
    while (str.length < 3){
        str += '0';
    }
    document.getElementById('image-cvv').innerHTML = str;
}