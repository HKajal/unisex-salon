<?php
       if(isset($_POST['register']))
       {
        $mycon=mysqli_connect('localhost','root',"",'salon');
        $n=$_POST['name'];
        $e=$_POST['email'];
        $ph=$_POST['phone'];
        $pa=$_POST['password'];

        $q="insert into users values('$n','$e','$ph','$pa')";
        mysqli_query($mycon,$q) or die("Query failed to execute...");
       } 

    if(isset($_POST['loggin'])){
        $mycon=mysqli_connect('loaclhost','root','','salon');
        $e=$_POST['emaill'];
        $ph=$_POST['phonee'];
        $pa=$_POST['passwordd'];
        $q="select * from users where email='$e' and phone='$ph' and password='$pa'";
        $data=mysqli_query($mycon,$q);
       if(mysqli_num_rows($data)>0){
        header("Location: http://localhost/NewSalon/index.php");
       } 
       else{
        header("Location: http://localhost/NewSalon/error.html");
       }
    }
    ?>

<?php
    $mycon=mysqli_connect('localhost','root','','salon');
    $c=$_POST['center'];
    $s=$_POST['services'];
    $q="insert into booking values('$c','$s')";
    mysqli_query($mycon,$q) or die("Query failed to execute...");
?>