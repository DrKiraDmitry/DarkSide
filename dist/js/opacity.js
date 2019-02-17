function func()
{
 var chb= document.getElementsByClassName('checkbox');
 if(chb[0].checked)
 {
     document.getElementById('Dside') .style.opacity='1';
 }
 else{
    document.getElementById('Dside') .style.opacity='0';
 }
 if(chb[1].checked)
 {
     document.getElementById('Dside2') .style.opacity='1';
 }
 else{
    document.getElementById('Dside2') .style.opacity='0';
 }
}
