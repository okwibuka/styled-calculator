`use strict`;

function content(num){
document.form.holder.value += num;
}
function equal(){
    document.form.holder.value = eval(document.form.holder.value)
}
function remove(){
    let exp = document.form.holder.value;
    document.form.holder.value = exp.substring(0, exp.length - 1)  
}