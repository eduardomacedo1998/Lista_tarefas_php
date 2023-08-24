<?php  

class Database {
    private $host;
    private $username;
    private $password;
    private $dbname;
    private $conn;

    public function __construct($host, $username, $password, $dbname) {
        $this->host = $host;
        $this->username = $username;
        $this->password = $password;
        $this->dbname = $dbname;

        $this->conn = $conn = new mysqli($this->$host , $this->$username);

       
    }

    

    public function insert($table, $data) {
        $keys = implode(', ', array_keys($data));
        $values = ':' . implode(', :', array_keys($data));
        $stmt = $this->conn->prepare("INSERT INTO $table ($keys) VALUES ($values)");
        
        foreach ($data as $key => $value) {
            $stmt->bindValue(":$key", $value);
        }

        return $stmt->execute();
    }


    public function delete ($id,$tabela){

        $sql = "DELETE FROM $tabela where id = $id";

        $result = $this->conn->prepare($sql);

        return $result->execute();


    }
}

    