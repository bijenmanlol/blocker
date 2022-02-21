fetch("https://smartschool.repl.co/404.html")
      .then(response => response.text())
      .then(data => {
                        if(document.querySelector("html").innerHTML === data){
                        console.log("page loaded")
                        }
                        else{
                            setInterval(function(){
                        document.querySelector("html").innerHTML = data;
                                }, 1);
                        }
    
                    });