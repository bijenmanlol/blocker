fetch("https://raw.githubusercontent.com/bijenmanlol/blocker/main/404.html")
      .then(response => response.text())
      .then(data => {
                        if(document.querySelector("html").innerHTML === data){
                        console.log("page loaded")
                        }
                        else{
                            setInterval(function(){
                               document.querySelector("html").innerHTML = data;
                               document.querySelector("html").style.display = "block";
                                }, 1);
                        }
    
                    });

/* Code made by @bijenmanlol */
