<?php
if(isset($_POST['add'])){
    $name = $_POST['name'];
    $data = $nom . "\n";   
    // Open the file
    $f = fopen("data.txt", 'a');
    // Add name
    fputs($f, $data);
    // Close the file
    fclose($f);
    header(location : 'index.html');
}
?>