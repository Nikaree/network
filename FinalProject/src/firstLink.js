import './css/firstLink.css'
document.getElementById("zodiac").onclick = function () {
  document.getElementById("formChooseInfo").style.display = "none";
  document.getElementById("formChooseZodiac").style.display = "inline";
};

document.getElementById("info").onclick = function () {
  document.getElementById("formChooseZodiac").style.display = "none";
  document.getElementById("infoZodiac").style.display = "none";
  document.getElementById("formChooseInfo").style.display = "inline";
  document.getElementById("formChooseInfo").innerHTML =
    "При слове «гороскоп» большинство людей представляет колонку в газете или в журнале с 12 абзацами коротеньких прогнозов для всех знаков зодиака или ежегодный гороскоп на год для каждого знака зодиака. Но немногие знают истинное происхождение этого слова и то, что зодиак — лишь малая часть гороскопа.Гороскоп рождения — это своего рода 'документ', дорожная карта пребывания человека на Земле, выданный ему Космосом как носителю определенной миссии, закодированной в высокой программе гороскопа и включающей человека в общий процесс эволюции человечества. С помощью астрологии можно судить о чертах характера человека, о его способностях, возможностях в перспективе, в отличие от психологии, которая рассматривает личность человека в статике. Астрология может дать представление о событиях, которые человек будет привлекать к себе в жизни в соответствии с программой, заложенной при рождении. Можно прогнозировать даже время событий. Как говорили древние: «Звезды склоняют, но не обязывают».Программа развития человека, которую можно определить по карте рождения, гороскопу, является определяющей, но не жесткой. Человеку необходимо знать свою программу, чтобы наилучшим образом с ней взаимодействовать, извлекать из нее уроки, делать выводы. Древние признавали, что фатальность существует только для человека, который не знает собственной программы. Ничто в нашей жизни не происходит случайно, любой факт является звеном в цепи множества событий, и так как каждый человек обладает самосознанием, он способен видоизменять свою программу. Для этого необходимо что-то изменить в себе, а изменяя себя (так как все взаимосвязано), человек изменяет мир. Вступая во взаимодействие со своей программой, он получает возможность влиять на свою судьбу. Но глобальные ритмы, которые являются общими для всего человечества, если мы не продвинемся по пути эволюции, нам изменить не дано. Только астрология дает возможность человеку сопоставить циклы своего развития с космическими циклами, она предоставляет нам право познания собственной программы; от этого жизнь приобретает ясность и направление. Астрология необходима, чтобы упорядочить нашу жизнь.";
};

document.getElementById("Aries").onclick = function () {
  document.getElementById("infoZodiac").style.display = "inline";
  document.getElementById("infoZodiac").innerHTML =
    "(20 марта – 19 апреля) Овен выступает в качестве знака, открывающего зодиакальный гороскоп. В момент получения своих названий все знаки зодиака располагались в созвездии Овна. Люди, принадлежащие этому знаку, наделены природной целеустремленностью и мощной внутренней силой. Это позволяет им прокладывать себе путь по жизни в моменты, когда кажется, что дальше возможности двигаться вперед уже нет.";
};

document.getElementById("Gemini").onclick = function () {
  document.getElementById("infoZodiac").style.display = "inline";
  document.getElementById("infoZodiac").innerHTML =
    "(21 мая – 20 июня) Знаки зодиака Близнецы обладают особой двойственностью характера и неспособностью к постоянству. Они практически всегда смотрят на предмет с двух сторон, и одновременная любовь с ненавистью к одному человеку для них вполне нормальное явление, причем они даже не способны объяснить причины собственных эмоций.";
};

document.getElementById("Taurus").onclick = function () {
  document.getElementById("infoZodiac").style.display = "inline";
  document.getElementById("infoZodiac").innerHTML =
    "(20 апреля – 20 мая) Тельцам свойственно одновременно благородство и независимость. Обладая внушительной силой, они не стремятся демонстрировать ее при первой возможности, выжидая максимально подходящий для этого момент. Жизненный успех сопутствует тельцам только в случае упорства и постоянного труда, а не банального везения или удачи.";
};

document.getElementById("Cancer").onclick = function () {
  document.getElementById("infoZodiac").style.display = "inline";
  document.getElementById("infoZodiac").innerHTML =
    "(21 июня – 22 июля) Знаки зодиака Рак обладают в первую очередь повышенной чувствительностью, когда даже банальная грубость в свой адрес может стать причиной резкого ухудшения настроения и унынья. При всем при этом внутри них находится мощная энергетика, способная передавать настроение окружающим, причем как плохое, так и хорошее.";
};

document.getElementById("Leo").onclick = function () {
  document.getElementById("infoZodiac").style.display = "inline";
  document.getElementById("infoZodiac").innerHTML =
    "(23 июля – 22 августа) Знаки зодиака Лев, это в первую очередь сочетание амбициозности и лени. Всю свою жизнь представители знака стремятся занять как можно более высокое положение в обществе и обеспечить себе материальный достаток, вот только ждут, что все это упадет на голову само собой, и ничего предпринимать не потребуется.";
};

document.getElementById("Virgo").onclick = function () {
  document.getElementById("infoZodiac").style.display = "inline";
  document.getElementById("infoZodiac").innerHTML =
    "(23 августа – 22 сентября) Со стороны кажется, что Девы никогда не способны вырваться из череды бытовых проблем, но это не больше, чем визуальный эффект. Знаки зодиака Дева отличаются отличной наблюдательностью, выявляя все изъяны, существующие в нашей жизни. Там, где исправить их имеется возможность, Дева обязательно попробует это сделать.";
};

document.getElementById("Libra").onclick = function () {
  document.getElementById("infoZodiac").style.display = "inline";
  document.getElementById("infoZodiac").innerHTML =
    "(23 сентября – 22 октября) Знаки зодиака Весы отличаются в первую очередь скромностью и обаянием. Его представители не склонны наносить обиды окружающим, и не обижаются на каждое неприятное слово в собственный адрес. Опираясь на интуицию, они очень часто оказываются способны найти оптимальный вариант действий, предсказать развитие ситуации в будущем.";
};

document.getElementById("Scorpio").onclick = function () {
  document.getElementById("infoZodiac").style.display = "inline";
  document.getElementById("infoZodiac").innerHTML =
    "(23 октября – 21 ноября) Знаки зодиака Скорпион наиболее интересны для исследования специалистами. Именно представители этого зодиакального символа обладают наибольшей широтой разнообразия характеров. Среди Скорпионов встречают и материалисты, и верящие в потусторонний мир, и настоящие гении, и уникальные глупцы. Всех их объединяет только одно, они очень интересные, но и очень опасные люди. Именно поэтому нужно всегда следить, чтобы их жало не оказалось направлено на вас.";
};

document.getElementById("Sagittarius").onclick = function () {
  document.getElementById("infoZodiac").style.display = "inline";
  document.getElementById("infoZodiac").innerHTML =
    "(22 ноября – 21 декабря) Открытые, общительные, умные и жизнерадостные, Стрельцы в большинстве случаев находятся в отличном расположении духа. Зачастую они всю жизнь предпочитают активный образ жизни, причем касается это не только тела, но и ума. Знаки зодиака Стрелец отличаются свободолюбием и очень болезненно переносит любые ограничения, возникающие на жизненном пути.";
};

document.getElementById("Capricorn").onclick = function () {
  document.getElementById("infoZodiac").style.display = "inline";
  document.getElementById("infoZodiac").innerHTML =
    "(22 декабря – 20 января) Знаки зодиака Козерог демонстрируют образец стойкости и целеустремленности. Люди, родившиеся в этот период зимы, стремятся достичь любой поставленной цели вне зависимости от степени ее важности. Зачастую они обладают развитым мышлением, и при отсутствии природной лени готовы проявлять свои способности при любой возможности. Учиться Козероги готовы всегда, даже будучи в зрелом возрасте.";
};

document.getElementById("Aquarius").onclick = function () {
  document.getElementById("infoZodiac").style.display = "inline";
  document.getElementById("infoZodiac").innerHTML =
    "(21 января – 18 февраля) Знак зодиака Водолей предполагает наличие у человека очень ранимой души. Представители знака могут иметь массу знакомых, но при этом действительно близких людей, которым они способны открыть душу, насчитывается минимальное количество. Любопытно, но в друзьях у них всегда находятся люди с неуравновешенным, неспокойным характером, которые постоянно попадают в какие-либо проблемы.";
};

document.getElementById("Pisces").onclick = function () {
  document.getElementById("infoZodiac").style.display = "inline";
  document.getElementById("infoZodiac").innerHTML =
    "(19 февраля – 19 марта) Рыбы знак интересный. Интересный в первую очередь способностью полноценно оценивать себя и свои возможности, находить достоинства и недостатки. За счет того, что себя Рыбы знают досконально, они способны подходить к самооценке с достаточной степенью ироничности.";
};