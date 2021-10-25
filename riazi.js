function all() {
var d=new Date();
var day=d.getDay();
document.getElementById('h').innerHTML= d.getHours() + ":" + d.getMinutes();
var z1=document.getElementById('z1');
var z2=document.getElementById('z2');
var z3=document.getElementById('z3');
var z4=document.getElementById('z4');
switch (day) {
    case 0:t="یکشنبه";
     z1.innerHTML=("زبان");
     z2.innerHTML=("دفاع");
     z3.innerHTML=("ریاضی");
     z4.innerHTML=("نگارش");
    break;
    case 1:t="دوشنبه";
     z1.innerHTML=("فیزیک");
     z2.innerHTML=("ورزش");
     z3.innerHTML=("دین‌و‌زندگی");
     z4.innerHTML=("شیمی");
    break;
    case 2: t ="سه‌شنبه";
     z1.innerHTML=("ریاضی");
     z2.innerHTML=("نگارش/زبان");
     z3.innerHTML=("فارسی");
     z4.innerHTML=("جغرافیا");
    break;
    case 3:t="چهارشنبه";
     z1.innerHTML=("فیزیک");
     z2.innerHTML=("هندسه");
     z3.innerHTML=("کارآفرینی");
     z4.innerHTML=("جغرافیا");
    break;
    case 4:t="پنچ‌شنبه";
     document.getElementById('j').style.display=("none");
    break;
    case 5:t="جمعه";
     document.getElementById('j').style.display=("none");
    break;
    case 6:t="شنبه";
     z1.innerHTML=("شیمی");
     z2.innerHTML=("عربی");
     z3.innerHTML=("آزمایشگاه");
     z4.innerHTML=("دفاع");
    break;

};
document.getElementById('sajy').innerHTML = t
};
all()
