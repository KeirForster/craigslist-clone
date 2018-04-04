<?php
    header('Content-type: application/json; charset=utf-8');
    require 'db/DbUtil.php';
    require 'db/SqlQuery.php';
    
    $db = new DbUtil();
    $db->getCategories();