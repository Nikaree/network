
<html>
<head>
    <meta charset="utf-8">
    <title>Chat</title>
</head>
<body style="background: rgb(143, 177, 196); max-width:1400px">
<br>
<div>
    <form method="get" action="/">
        <input size="20"  name="login" placeholder="login"/>
        <input size="20" name="password" placeholder="password"/>
        <input size="20" name="message" placeholder="message"/>
        <button type="submit" name="enter"size="30">Enter</button>
        <button type="submit" name="clear"ssize="30">Clear</button>
    </form>
</div>
</body>
</html>


<?php

if (isset($_GET['enter'])){
//загрузка

    function add($login, $message){

        if ($message !== '') {
            $json = json_decode(file_get_contents("archive.json"));
            $messageObj= (object)[
                'date' => (new DateTimeImmutable())->format('Y-m-d h:i'),
                'user' => $login,
                'message' => $message
            ];
            $json->messages[] = $messageObj;
            file_put_contents("archive.json", json_encode($json));
            out();
            // header('Location: /');
        }
        else {
            echo "<script> alert('вы не ввели сообщение') </script>";;
        }

    }

//выгрузка
    function out(){
        if (file_exists('archive.json')) {
            $json = json_decode(file_get_contents("archive.json"));
            foreach($json->messages as $message) {
                echo "<p> $message->date $message->user - $message->message</p>";
            }
        }
    }


    if (isset($_GET['login']) && isset($_GET['password']) && isset($_GET['message'])) {
        $login = (string)$_GET['login'];
        $password = (string)$_GET['password'];
        $message = (string)$_GET['message'];

        if (($login == "nika" && $password == "qwerty123") || ($login == "vova" && $password == "qwerty")) {
            add($login, $message);
        } else {
            echo "<script> alert('введены неверные логин или пароль') </script>";
        }

    }
}
//Удаление всех сообщений
if (isset($_GET['clear'])){
    
    unlink('archive.json');
    echo "<script> alert('История очищена') </script>";
    header('Refresh: 0; url=index.php');
}
?>




