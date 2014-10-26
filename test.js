<html>
<head>
    <title>Just a test</title>
    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js"></script>
    <script type="text/javascript">
    $(function() {
    		$('#showContent').click(function(event){
    			event.preventDefault();
    			var pageSource = '<html>' + $('html').html() +'</html>';
    			alert(pageSource);
    		});
    });
    </script>
</head>
<body>
    <a href="#" id="showContent" >show content</a>
</body>
</html>