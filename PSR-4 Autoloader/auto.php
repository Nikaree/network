<?php

spl_autoload_register(function ($MyClasses) {
    $Path = __DIR__ . '/'. str_replace("\\", "/",$MyClasses ) . '.php';
    require_once $Path;
});


use MyClasses\MyClass1;
use MyClasses\Myclass2\MyClass2;

($class1 = new MyClass1())->show();
($class2 = new MyClass2())->show();


