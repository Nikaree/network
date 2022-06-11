<?php

namespace Style\Color;

class RedText
{
    public function printText($text)
    {
        echo "<a style=\"background-color:red; font-size: 20px;\">" . $text . "</a><br>";
    }
}
