function myFunction(){
    var a=document.getElementById('input-1').value;
    a=parseInt(a);
    var b=document.getElementById('input-2').value;
    b=parseInt(b);
    var se=document.getElementById('select');
    var value=se.options[se.selectedIndex].value;
    value=parseInt(value);
    var kq;
    switch(value){
        case 1:{
            kq=(a+(b*2))/3;
            kq=parseFloat(kq);
            document.getElementById('result').value=kq;
        }
        case 2:{
            kq=((a*2)+(b*3))/5;
            kq=parseFloat(kq);
            document.getElementById('result').value=kq;
        }
        case 3:{
            kq=((a*3)+(b*4))/7;
            kq=parseFloat(kq);
            document.getElementById('result').value=kq
        }
    }
    if(kq>=9){
        document.getElementById('display').innerHTML="Học Sinh giỏi";
        document.getElementById("display").style.color="red";
    }
    else if( 9>kq>=7){
        document.getElementById('display').innerHTML="Hoc Sinh Khá";
        document.getElementById('display').style.color="blue";
    }
    else if(7>kq>=5){
        document.getElementById('display').innerHTML="Học Trung Bình";
        document.getElementById('display').style.color="Yellow";
    }
    else{
        document.getElementById('display').innerHTML="Học Sinh Yếu ";
        document.getElementById('display').style.color="Pink";
    }
}
function myFunction2(){

}