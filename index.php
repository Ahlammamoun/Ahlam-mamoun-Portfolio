
<?php

require __DIR__.'/utils/database.php'; 


if (!empty($_POST)) {
    $Nickname =  $_POST['Nickname'] ?? false;
    $Lastname =  $_POST['Lastname'] ?? false;
    $Entreprise =  $_POST['Entreprise'] ?? false;
    $Email = $_POST['email'] ?? false;
    $description =  $_POST['description'] ?? false;

    

    //On insère les données reçues
    $sth = $dbco->prepare("
     INSERT INTO contact(Nickname, Lastname, Entreprise, email, description)
     VALUES(:Nickname, :Lastname, :Entreprise, :email, :description)");
    $sth->bindParam(':Nickname', $Nickname);
    $sth->bindParam(':Lastname', $Lastname);
    $sth->bindParam(':Entreprise', $Entreprise);
    $sth->bindParam(':email', $Email);
    $sth->bindParam(':description', $description);
    $sth->execute();


  // est-ce qu'une entrée à bien été insérée dans ma BDD ?
  if ($sth == 1) {
        
    // oui, une entrée a bien été insérée dans la BDD

    // on redirige (on recharge) la page index.php
    // https://www.php.net/manual/fr/function.header.php
    // attention à l'écriture de l'entête, très pointilleuse
    // en effet :
    // header('Location: index.php');  // fonctionne
    // header('Location : index.php'); // déclenche un Internal Server Error
    echo 'merci';
    header('Location: index.php');
    // on s'assure que la suite du code ne soit pas exécutée une fois la redirection effectuée
    exit;

} else {

    // non, une entrée n'a pas été insérée dans la BDD
    exit('❌ erreur,formulaire non ajouté ');

}

}
   

require __DIR__.'/views/home.php';

