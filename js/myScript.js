if (confirm("Здравствуйте. Вы желаете рассчитать примерную стоимость заказа?"));

let tip = prompt("Какой тип сайта вы желаете? Выберите цифру: 1 - Сайт визитка(200р.); 2 - Корпоративный сайт(300р.); 3 - Сайт-каталог(400р.).", "");

if (tip == 1) alert("Ваша стоимость на данный момент составляет: 200р. Нажмите КНОПКУ ,чтобы продолжить.");
if (tip == 2) alert("Ваша стоимость на данный момент составляет: 300р. Нажмите КНОПКУ ,чтобы продолжить.");
if (tip == 3) alert("Ваша стоимость на данный момент составляет: 400р. Нажмите КНОПКУ ,чтобы продолжить.");

let diz = prompt("Какой дизайн сайта вы желаете? Выберите цифру: 1 - Минимализм(+300р.); 2 - Ретро(+400р.); 3 - Рисованный(+600р.).", "");

if ((tip == 1) && (diz == 1)) {
    alert("Ваша стоимость на данный момент составляет: 500р. Нажмите КНОПКУ ,чтобы продолжить.")
} else if ((tip == 1) && (diz == 2)) {
    alert("Ваша стоимость на данный момент составляет: 600р. Нажмите КНОПКУ ,чтобы продолжить.")
} else if ((tip == 1) && (diz == 3)) {
    alert("Ваша стоимость на данный момент составляет: 800р. Нажмите КНОПКУ ,чтобы продолжить.")
};


if ((tip == 2) && (diz == 1)) {
    alert("Ваша стоимость на данный момент составляет: 600р. Нажмите КНОПКУ ,чтобы продолжить.")
} else if ((tip == 2) && (diz == 2)) {
    alert("Ваша стоимость на данный момент составляет: 700р. Нажмите КНОПКУ ,чтобы продолжить.")
} else if ((tip == 2) && (diz == 3)) {
    alert("Ваша стоимость на данный момент составляет: 900р. Нажмите КНОПКУ ,чтобы продолжить.")
};

if ((tip == 3) && (diz == 1)) {
    alert("Ваша стоимость на данный момент составляет: 700р. Нажмите КНОПКУ ,чтобы продолжить.")
} else if ((tip == 3) && (diz == 2)) {
    alert("Ваша стоимость на данный момент составляет: 800р. Нажмите КНОПКУ ,чтобы продолжить.")
} else if ((tip == 3) && (diz == 3)) {
    alert("Ваша стоимость на данный момент составляет: 1000р. Нажмите КНОПКУ ,чтобы продолжить.")
};

let ad = prompt("Какой сайт вы желаете? Выберите цифру: 1 - Адаптированный(+1000р.); 2 - Неадаптированный(+0р.)", "");
                
if ((tip == 1) && (diz == 1) && (ad == 1)) {
    alert("Ваша итоговая стоимость составляет: 1500р. Нажмите КНОПКУ ,чтобы закончить.")
} else if ((tip == 1) && (diz == 2) && (ad == 1)) {
    alert("Ваша итоговая стоимость составляет: 1600р. Нажмите КНОПКУ ,чтобы закончить.")
} else if ((tip == 1) && (diz == 3) && (ad == 1)) {
    alert("Ваша итоговая стоимость составляет: 1800р. Нажмите КНОПКУ ,чтобы закончить.")
};


if ((tip == 2) && (diz == 1) && (ad == 1)) {
    alert("Ваша итоговая стоимость составляет: 1600р. Нажмите КНОПКУ ,чтобы закончить.")
} else if ((tip == 2) && (diz == 2) && (ad == 1)) {
    alert("Ваша итоговая стоимость составляет:: 1700р. Нажмите КНОПКУ ,чтобы закончить.")
} else if ((tip == 2) && (diz == 3) && (ad == 1)) {
    alert("Ваша итоговая стоимость составляет: 1900р. Нажмите КНОПКУ ,чтобы закончить.")
};

if ((tip == 3) && (diz == 1) && (ad == 1)) {
    alert("Ваша итоговая стоимость составляет: 1700р. Нажмите КНОПКУ ,чтобы закончить.")
} else if ((tip == 3) && (diz == 2) && (ad == 1)) {
    alert("Ваша итоговая стоимость составляет: 1800р. Нажмите КНОПКУ ,чтобы закончить.")
} else if ((tip == 3) && (diz == 3) && (ad == 1)) {
    alert("Ваша итоговая стоимость составляет: 2000р. Нажмите КНОПКУ ,чтобы закончить.")
};

if ((tip == 1) && (diz == 1) && (ad == 2)) {
    alert("Ваша итоговая стоимость составляет: 500р. Нажмите КНОПКУ ,чтобы закончить.")
} else if ((tip == 1) && (diz == 2)&& (ad == 2)) {
    alert("Ваша итоговая стоимость составляет: 600р. Нажмите КНОПКУ ,чтобы закончить.")
} else if ((tip == 1) && (diz == 3)&& (ad == 2)) {
    alert("Ваша итоговая стоимость составляет: 800р. Нажмите КНОПКУ ,чтобы закончить.")
};


if ((tip == 2) && (diz == 1) && (ad == 2)) {
    alert("Ваша итоговая стоимость составляет: 600р. Нажмите КНОПКУ ,чтобы закончить.")
} else if ((tip == 2) && (diz == 2) && (ad == 2)) {
    alert("Ваша итоговая стоимость составляет: 700р. Нажмите КНОПКУ ,чтобы закончить.")
} else if ((tip == 2) && (diz == 3) && (ad == 2)) {
    alert("Ваша итоговая стоимость составляет: 900р. Нажмите КНОПКУ ,чтобы закончить.")
};

if ((tip == 3) && (diz == 1) && (ad == 2))  {
    alert("Ваша итоговая стоимость составляет: 700р. Нажмите КНОПКУ ,чтобы закончить.")
} else if ((tip == 3) && (diz == 2) && (ad == 2)) {
    alert("Ваша итоговая стоимость составляет: 800р. Нажмите КНОПКУ ,чтобы закончить.")
} else if ((tip == 3) && (diz == 3) && (ad == 2)) {
    alert("Ваша итоговая стоимость составляет: 1000р. Нажмите КНОПКУ ,чтобы закончить.")
};