       var i = 0;

       function changeColor() {
           var doc = document.getElementsByClassName("name");
           /**
            * array of colors
            */
           var col = ["Green", "blue", "orange", "green", "purple", "black", "brown", "pink"];
           doc[0].style.color = col[i];
           console.log(i);
           i++;
           if (i > col.length - 1) {
               i = 0;
           }
       }
       setInterval(changeColor, 5000);

       function getNewColor() {
           var symbols, color;
           /**
            * Hexadecimal symbols are used to get random colors
            */
           symbols = "0123456789ABCDEF";
           /**
            * color codes starts with #
            */
           color = "#";
           for (var i = 0; i < 6; i++) {
               color = color + symbols[Math.floor(Math.random() * 16)];
           }
           document.body.style.background = color;
       }
       setInterval(getNewColor, 7000);