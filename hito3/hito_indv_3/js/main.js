

function traerDatos(){
     
    const xhttp = new XMLHttpRequest();
     
    xhttp.open('GET', 'http://localhost/hito_indv_3/datos.json',true);
    xhttp.send();
    xhttp.onreadystatechange = function(){
        
        
        if ( this.readyState == 4 && this.status == 200){
            
            let datos=JSON.parse(this.responseText);
            console.log(datos);
           
            let  res = document.getElementById('resp');
            res.innerHTML ='';
           
            for (let item of datos){
                res.innerHTML +=`
                    <tr>
                        <td>${item.CODPROV}</td>
                        <td>${item.NOMBRE_PROVINCIA}</td>
                        <td>${item.CODAUTON}</td>
                        <td>${item.COMUNIDAD_CIUDAD_AUTONOMA}</td>
                        <td>${item.CAPITAL_PROVINCIA}</td>

                `
             }
        }


    }

}

