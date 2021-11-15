var carritosArray = "";

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            carritosArray = resultObj.data;
            showCarrito(carritosArray)
        }
        document.getElementById("carritoArticulo").innerHTML = contenido;
    }); 
});

function showCarrito(carritosArray){
    let inputUnidades = document.getElementById("unidades").value;
let contenido = " ";
contenido += '<hr>' + 'Nombre:  '  + carritosArray.articles[0].name +'<br>'
contenido += 'Costo por unidad:  '  + carritosArray.articles[0].unitCost +'<br>'
contenido += 'En moneda:  ' + carritosArray.articles[0].currency +'<br>'
let total = carritosArray.articles[0].unitCost * carritosArray.articles[0].count;
let subtotal = carritosArray.articles[0].unitCost * inputUnidades;
document.getElementById("subtotal").innerHTML = 'Subtotal: ' + subtotal;
document.getElementById("total").innerHTML = total;
document.getElementById("carritoArticulo").innerHTML = contenido;
};

// finaliza Pauta 1

document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("unidades").addEventListener("click", function(){
        let inputUnidades = document.getElementById("unidades").value;
        let contenido = " ";
        contenido += '<hr>' + 'Nombre:  '  + carritosArray.articles[0].name +'<br>'
        contenido += 'Costo por unidad:  '  + carritosArray.articles[0].unitCost +'<br>'
        contenido += 'En moneda:  ' + carritosArray.articles[0].currency +'<br>'
      let subtotal = carritosArray.articles[0].unitCost * inputUnidades;
      let total = carritosArray.articles[0].unitCost * inputUnidades;
     //total = total + total 
    document.getElementById("total").innerHTML = total;
   document.getElementById("subtotal").innerHTML = 'Subtotal: ' + subtotal;

  });
 document.getElementById("carritoArticulo").innerHTML = contenido;

});   

document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("envio1").addEventListener("click", function(){

        let inputUnidades = document.getElementById("unidades").value;
let total = carritosArray.articles[0].unitCost * inputUnidades;
    total = total + total * 0.15;
document.getElementById("total").innerHTML = total;
}
)});
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("envio2").addEventListener("click", function(){

        let inputUnidades = document.getElementById("unidades").value;
let total = carritosArray.articles[0].unitCost * inputUnidades;
    total = total + total * 0.07;
document.getElementById("total").innerHTML = total;
}
)});
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("envio3").addEventListener("click", function(){

        let inputUnidades = document.getElementById("unidades").value;
let total = carritosArray.articles[0].unitCost * inputUnidades;
    total = total + total * 0.05;
document.getElementById("total").innerHTML = total;
}
)});

let envioOk = false

document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("envio3").addEventListener("click", function(){

   envioOk = true
     })
});
document.addEventListener("DOMContentLoaded", function(e){
document.getElementById("envio2").addEventListener("click", function(){
    envioOk = true
    
     })
});

document.addEventListener("DOMContentLoaded", function(e){
 document.getElementById("envio1").addEventListener("click", function(){
        
        envioOk = true
        
})
});
document.addEventListener("DOMContentLoaded", function(e){
document.getElementById("btnV").addEventListener("click", function(){
        
    if (envioOk === false){
         alert("Debe seleccionar un envío")
        
        }
    
    })
});
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("nada1").addEventListener("click", function(){
            
        if (envioOk === false){
             alert("Debe seleccionar un envío")
            
            }
        
        })
    });

// let pagoOk = false;
//document.addEventListener("DOMContentLoaded", function(e){
    //document.getElementById("submitCredito").addEventListener("click", function(){
           
           //envioOk = true
           
   //})
   //});