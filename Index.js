
function formValidation(){
    var a=document.getElementById("Name").value;
    var b=document.getElementById("Password").value;
    console.log(a);
    console.log(typeof(b));
    return true;
    if(a==null || b==null || a=='' || b=='')
    return false;
return true;
}
