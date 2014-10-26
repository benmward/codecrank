<html>
<head>
    <title>Just a php test</title>
</head>
<body>
    <a href="#" id="showContent" >show content</a>
    <?php
        $source = $_POST['pageSource'];
        print $source;
        print "hello print!";
        echo "hello echo!";
        return "hello!";
    ?>
</body>
</html>