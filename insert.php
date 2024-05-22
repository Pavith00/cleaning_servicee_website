<!DOCTYPE html>
<html>

<head>
    <title>Insert Page page</title>
</head>

<body>
 
        <?php

        // servername => localhost
        // username => root
        // password => empty
        // database name => my_db
        $conn = mysqli_connect("localhost", "root", "", "customerdb");

        // Check connection
        if(!$conn){
            die("ERROR: Could not connect. ". mysqli_error($conn));
        }

        mysqli_select_db($conn , "customerdb");
		
		// We are going to insert the data into our Customer table
        $sql = "INSERT INTO customer_details VALUES('$_POST[name]',
            '$_POST[email]','$_POST[subject]','$_POST[message]')";
		
        // Taking all 4 values from the form data(input)
       // $name = $_POST['name'];
       // $email = $_POST['email'];
       // $subject = $_POST['subject'];
        //$message = $_POST['message'];


        

        // Check if the query is successful
        if(!mysqli_query($conn, $sql)){
            die('Error: ' . mysqli_error($conn));
     }
    echo "1 record added";

        // Close connection
        mysqli_close($conn);
        ?>
    
</body>

</html>