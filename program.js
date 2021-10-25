function all() {
var d=new Date();
var day=d.getDay();
document.getElementById('h').innerHTML= d.getHours() + ":" + d.getMinutes()
switch (day) {
    case 0:t="یکشنبه";
     document.getElementById('z1').innerHTML=("نگارش");
     document.getElementById('z2').innerHTML=("ریاضی");
     document.getElementById('z3').innerHTML=("دین‌و‌زندگی");
     document.getElementById('z4').innerHTML=("جغرافیا");
    break;
    case 1:t="دوشنبه";
     document.getElementById('z1').innerHTML=("آزمایشگاه");
     document.getElementById('z2').innerHTML=("زبان/دفاع");
     document.getElementById('z3').innerHTML=("شیمی");
     document.getElementById('z4').innerHTML=("دفاع");
    break;
    case 2: t ="سه‌شنبه";
     document.getElementById('z1').innerHTML=("کارآفرینی");
     document.getElementById('z2').innerHTML=("فارسی");
     document.getElementById('z3').innerHTML=("ریاضی");
     document.getElementById('z4').innerHTML=("جغرافیا");
    break;
    case 3:t="چهارشنبه";
     document.getElementById('z1').innerHTML=("ورزش");
     document.getElementById('z2').innerHTML=("فیزیک");
     document.getElementById('z3').innerHTML=("هندسه");
     document.getElementById('z4').innerHTML=("دفاع");
    break;
    case 4:t="پنچ‌شنبه";
     document.getElementById('j').style.display=("none");
    break;
    case 5:t="جمعه";
     document.getElementById('j').style.display=("none");
    break;
    case 6:t="شنبه";
     document.getElementById('z1').innerHTML=("زبان");
     document.getElementById('z2').innerHTML=("فیزیک");
     document.getElementById('z3').innerHTML=("عربی");
     document.getElementById('z4').innerHTML=("شیمی");
    break;

};
document.getElementById('sajy').innerHTML = t
};
all()
