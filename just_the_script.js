    <script>
      function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      function setBackgroundColor() {
        var backgroundColor = getRandomColor();
        document.body.style.backgroundColor = backgroundColor;
        document.getElementById("hex").innerHTML = backgroundColor;
      }
      setBackgroundColor();
      document.getElementById("reload-button").addEventListener("click", function() {
        setBackgroundColor();
      });
    </script>
