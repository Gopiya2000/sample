<html>
<body>

<h2>JavaScript const</h2>

<p>You can NOT reassign a constant object:</p>

<p id="demo"></p>

<script>
try {
  const car = {type:"Fiat", model:"500", color:"white"};
  car = {type:"Volvo", model:"EX60", color:"red"};
}
catch (err) {
  document.getElementById("demo").innerHTML = err;
}
</script>

</body>
</html>