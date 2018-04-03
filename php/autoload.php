<?php
    spl_autoload(function($class) {
        $file = str_replace('\\', '/', $class);
        require "$file.php";
    });