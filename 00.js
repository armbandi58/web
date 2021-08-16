console.log("Ez mar az");

console.log(document.getElementById('element-one'));

console.log(document.getElementById('element-one'));

var flag_click00 = false;

document.getElementById('element-one').onclick = function() {
    if (!flag_click00) {
        console.log(document.getElementById('element-one'));
        document.getElementById('element-one').style.backgroundColor = 'black';
        flag_click00 = true;
    } else if (flag_click00) {
        console.log(document.getElementById('element-one'));
        document.getElementById('element-one').style.backgroundColor = '';
        // document.getElementById('element-one').classList.remove('hide');
        flag_click00 = false;
    }
}