<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>



<body>
    <form  method="POST" name="submit-to-google-sheet">

        <input type="email" name="Email" placeholder="Email" required>
        <input type="text" name="Nickname" placeholder="Nickname" required>
        <input type="text" name="Lastname" placeholder="Lastname" required>
        <input type="text" name="Entreprise" placeholder="Entreprise" required>
        <button type="submit">Send</button>


    </form>
</body>

<?php
if (!empty($_POST)) {

    



    // I get the informations and put them in a variable , and a value by default
    $Email = $_POST['Email'] ?? false;
    $Nickname = (string) $_POST['Nickname'] ?? false;
    $Lastname = (string) $_POST['Lastname'] ?? false;
    $Entreprise = (string) $_POST['Entreprise'] ?? false;


//var_dump($_POST);

    
}
?>















</html>