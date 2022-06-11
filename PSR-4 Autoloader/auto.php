<?php
spl_autoload_register(function ($class_name) {

    $path = dirname(__DIR__ ) . '/' . 'src/' . str_replace("\\", "/", $class_name) . 'php';
    require_once ($path);

});

$obj  = new MyClass1();
$obj2 = new MyClass2();

$obj ->show();
$obj2->show();
