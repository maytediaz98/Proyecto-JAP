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
let contenido = " ";
contenido += '<hr>' + 'Nombre:  '  + carritosArray.articles[0].name +'<br>'

contenido += 'Costo por unidad:  '  + carritosArray.articles[0].unitCost +'<br>'
contenido += 'En moneda:  ' + carritosArray.articles[0].currency +'<br>'
contenido += '<br> Subtotal:  ' + carritosArray.articles[0].unitCost * 2 +'<br>'
//contenido += 'Vista del producto seleccionado: '+ '<br>' + `<img src="`  + carritosArray.articles[0].src + `" class="img-thumbnail">` + '<hr>'
contenido +=  'Cantidad seleccionada:  '  + carritosArray.articles[0].count +'<br>'

let total = carritosArray.articles[0].unitCost * carritosArray.articles[0].count;
total = total + total * 0.15;
document.getElementById("total").innerHTML = total;

document.getElementById("carritoArticulo").innerHTML = contenido;

};
// finaliza Pauta 1

document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("modificarBtn").addEventListener("click", function(){
        let inputUnidades = document.getElementById("unidades").value;
        let contenido = " ";
contenido += '<hr>' + 'Nombre:  '  + carritosArray.articles[0].name +'<br>'
contenido += 'Costo por unidad:  '  + carritosArray.articles[0].unitCost +'<br>'
contenido += 'En moneda:  ' + carritosArray.articles[0].currency +'<br>'
let subtotal = carritosArray.articles[0].unitCost * inputUnidades;
let total = carritosArray.articles[0].unitCost * inputUnidades;
total = total + total * 0.15;
document.getElementById("total").innerHTML = total;
document.getElementById("subtotal").innerHTML = 'Subtotal: ' + subtotal;

document.getElementById("carritoArticulo").innerHTML = contenido;
        })
        });

        document.addEventListener("DOMContentLoaded", function(e){
            document.getElementById("finalizarPedido").addEventListener("click", function(){
                alert("Pedido finalizado con exito!");
     
                })
                });
                