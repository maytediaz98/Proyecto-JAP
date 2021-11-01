const ORDER_ASC_BY_STARS = "ASC";
const ORDER_DESC_BY_STARS = "DESC";
var currentComentsArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;
var producto = {};
var productosArray = " ";
var relatedProduct = [1,3];




//TRAIGO LOS COMENTARIOS DEL JSON Y LOS CARGO EN VARIABLES 
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            coments = resultObj.data;

            let comentUserHTML  = document.getElementById("user");
            let comentDescriptionHTML = document.getElementById("description");
            let comentScoreHTML = document.getElementById("score");
            let comentDateTimeHTML = document.getElementById("dateTime");

            comentUserHTML.innerHTML = coments.user;
            comentDescriptionHTML.innerHTML = coments.description;
            comentScoreHTML.innerHTML = coments.score;
            comentDateTimeHTML.innerHTML = coments.dateTime;
        }
    });
});

//TRAIGO LOS DATOS DEL PRODUCTO Y LOS CARGO EN VARIABLES
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {

            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productPrecioHTML = document.getElementById("productPrecio");
            let productCountHTML = document.getElementById("soldCount");
            let productCurrencyHTML = document.getElementById("currencyProduct");
            let productRelatedProductHTML = document.getElementById("relatedProduct");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productPrecioHTML.innerHTML = "USD " + product.cost;
            productCountHTML.innerHTML = product.soldCount;
            productCurrencyHTML.innerHTML = product.currencyProduct;
            productRelatedProductHTML.innerHTML = product.relatedProduct;
        
            showImagesGallery(category.images);
        }
    });
});

//ORDEN DE LOS COMENTARIOS ASC
function sortComents(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_STARS)
    {
        result = array.sort(function(a, b) {
            if ( a.score < b.score ){ return -1; }
            if ( a.score > b.score ){ return 1; }
            return 0;
        });
    }
    return result;
}
//MUESTRO LOS COMENTARIOS
function showComentsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentComentsArray.length; i++){
        let coments = currentComentsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(coments.score) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(coments.score) <= maxCount))){
        if (coments.score == 0)
        coments.score = "✰✰✰✰✰"
         if (coments.score == 1)
        coments.score = "★✰✰✰✰"
         if (coments.score == 2)
        coments.score = "★★✰✰✰"
         if (coments.score == 3)
        coments.score = "★★★✰✰"
        if (coments.score == 4)
        coments.score = "★★★★✰"
        if (coments.score == 5)
        coments.score = "★★★★★"
            htmlContentToAppend += `
            <a href="product-info.html" class="list-group-item list-group-item-action">
                <div class="row">
                    </div>
                    <div class="col">
                        <div class="d-flex w-100 justify-content-between">
                            <h4 class="mb-1">`+ coments.user +`</h4>
                            <small class="text-muted">` + coments.dateTime + `</small>
                        </div>
                        <p class="mb-1">` + coments.score + `</p>
                        <p class="mb-1">` + coments.description + `</p>
                    </div>
                </div>
            </a>
            `
        }
        document.getElementById("com-list-container").innerHTML = htmlContentToAppend;
    }
}
 //FUNCION QUE ORDENA Y MUESTRA LOS COMENTARIOS 
function sortAndShowComents(sortCriteria, comentsArray){
    currentSortCriteria = sortCriteria;

    if(comentsArray != undefined){
    currentComentsArray = comentsArray;
    }
    currentComentsArray = sortComents(currentSortCriteria, currentComentsArray);
    showComentsList();
}

//BOTÓN PARA ENVIAR NUEVO  COMENTARIO 
document.addEventListener("DOMContentLoaded", function(e){
    document.getElementById("enviarBtn").addEventListener("click", function(){
        let inputUsuario = document.getElementById("inputUsuario");
let inputComentario = document.getElementById("inputComentario");
let datoUsuario = true;
let datoComentario = true;
        if (inputUsuario.value === ''){
            datoUsuario = false ; 
            alert("El campo Usuario no puede estar vacío")}
            else
            {datoUsuario=true;}
            
        if (inputComentario.value === ''){
            datoComentario = false;
            alert("El campo Comentario no puede estar vacío");
        }
        else
        {datoComentario = true;}
        
        if (datoUsuario ===true && datoComentario === true) 
        {
            alert ("Comentario enviado correctamente")
            inputUsuario.value = "";
            inputComentario.value = "";

        }
        })
        });
        
 document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowComents(ORDER_ASC_BY_STARS, resultObj.data);
        }
    });

    //CLICK BOTON ASC
    document.getElementById("sortAscStars").addEventListener("click", function(){
        sortAndShowComents(ORDER_ASC_BY_STARS);
    });
});

document.addEventListener("DOMContentLoaded", function (e){

    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            productosArray = resultObj.data;
            relatedProduct.forEach(function(i){
            showRelatedProducts(productosArray,[i]);
        }
    )};
    document.getElementById("relatedProduct").innerHTML = contenido;
}
    )});
    function showRelatedProducts(productosArray,[i]){
        let contenido = " ";
            contenido += '<hr>' + 'Nombre:  ' + '<br>' +productosArray[relatedProduct[0]].name +'<br>'
            contenido += 'Descripción:  ' + '<br>'+ productosArray[relatedProduct[0]].description + '<br>' 
            contenido += 'Imágen: ' + '<br>'+ `<img src="`  + productosArray[relatedProduct[0]].imgSrc + `" class="img-thumbnail">`+'<br>'+ '<hr>'
            contenido += 'Nombre:  ' + '<br>' + productosArray[relatedProduct[1]].name +'<br>'
            contenido += 'Descripción:  ' + '<br>'+ productosArray[relatedProduct[1]].description + '<br>' 
            contenido += 'Imágen: ' + '<br>'+ `<img src="`  + productosArray[relatedProduct[1]].imgSrc + `" class="img-thumbnail">`

            document.getElementById("relatedProduct").innerHTML = contenido;
    };
    



    
document.addEventListener("DOMContentLoaded", function(e){
    let usuariologgeado = localStorage.getItem('User-Logged');
    
    let user = document.getElementById("user3");
    
    if (usuariologgeado){
      usuariologgeado = JSON.parse(usuariologgeado);
      user.innerText = 'Usuario: '+ usuariologgeado.usuario;
      user.style = "color: rgb(144, 187, 189)";
    }
    });