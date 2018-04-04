<?php
    header('Content-type: text/html; charset=utf-8');
    require 'db/DbUtil.php';
    require 'db/SqlQuery.php';
    
    $db = new DbUtil();
    $db->getCategories();