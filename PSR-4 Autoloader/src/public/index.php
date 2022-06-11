<?php

spl_autoload_register(function($className) {
    $path = __DIR__ . "/../src/" . str_replace("\\", "/", $className) . ".php";
    require($path);
});

$obj1 = new Style\Color\RedText();
$obj2 = new Style\Font\BoldFont();

$obj1->printText("ДА ЭТО ЖЕ ТЕКСТ НА КРАСНОМ ФОНЕ!");
$obj2->printText("НЕ МОЖЕТ БЫТЬ, ЖИРНЫЙ ШРИФТ");