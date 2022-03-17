let a =    Math.round(Math.random()*100),
    b =    Math.round(Math.random()*100),
    c  =   Math.round(Math.random()*100);


if          (a < b && b < c)    txt = ` ${a},  ${b},  ${c}`;
else if     (a < c && c < b)    txt = ` ${a},  ${c},  ${b}`;
else if     (b < a && a < c)    txt = ` ${b},  ${a},  ${c}`;
else if     (b < c && c < a)    txt = ` ${b},  ${c},  ${a}`;
else if     (c < a && a < b)    txt = ` ${c},  ${a},  ${b}`;
else                            txt = ` ${c},  ${b},  ${a}`;




document.getElementById("cargadorTexto").textContent = txt;
