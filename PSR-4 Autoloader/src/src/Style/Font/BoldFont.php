<?php

namespace Style\Font;

class BoldFont
{
    public function printText($text)
    {
        echo "<a style=\"font-weight: bold; font-size: 20px;\">" . $text . "</a><br>";
    }
}
