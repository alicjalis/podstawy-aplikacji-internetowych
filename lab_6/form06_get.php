<!DOCTYPE html>
<html>
    <body>
        <?php
            session_start();

            if (isSet($_SESSION["blad"])) {
                echo $_SESSION["blad"]."<br/><br/>";
                unset($_SESSION["blad"]);
            }

            $link = mysqli_connect("localhost", "scott", "tiger", "instytut");
            if (!$link) {
                printf("Connect failed: %s\n", mysqli_connect_error());
                exit();
            }
            $sql = "SELECT * FROM pracownicy";
            $result = $link->query($sql);
            foreach ($result as $v) {
                echo $v["ID_PRAC"]." ".$v["NAZWISKO"]."<br/>";
            }
            $result->free();
            $link->close();
        ?>
    <a href="form06_post.php">Dodaj nowego pracownika</a><br/>
    </body>
</html>