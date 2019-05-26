<?php


class Model {
	
	protected $pdo;
    
    public function __construct() {
        $this->pdo = new PDO("mysql:host=127.0.0.1;dbname=final", "root", '123456', array(PDO::MYSQL_ATTR_INIT_COMMAND => "set names utf8"));
    }
    
    public function __destruct() {
        $this->pdo = null;
    }
}