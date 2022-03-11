document.getElementById("btn").onclick = function () { 
        var visits=document.getElementById('p_visits').value;
        var age=document.getElementById('age').value;
        var date=document.getElementById('date').value;
        var dep=document.getElementById('dep').value;
        
        var errorMsg=new Array(); 
        var messageHtml = "";      
            if(dep!= "Pediatrician" && dep!="Ophthalmology"){ 
                    errorMsg.push("Department name not valid\n");
            }           
            if(date>"1-5-2022" && date<"31-5-2022" ){
                    errorMsg.push("Date not valid\n");
            }
            if(isNaN(age) || age<0){
                    errorMsg.push("Age not valid\n");
            }
            if(isNaN(visits) || visits<0){
                    errorMsg.push("Number of visits not valid\n");
            }
        errorMsg.forEach(function (message) {
        messageHtml += "<li>" + message + "</li>";
    });

    document.getElementById("error").innerHTML = messageHtml;
    }