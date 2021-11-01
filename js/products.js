const ORDER_ASC_BY_PRECIO = "ASC";
const ORDER_DESC_BY_PRECIO = "DESC";
const ORDER_BY_RELEVANCIA = "Relevancia";
var currentProductsArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_PRECIO)
    {
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_PRECIO){
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; }
            if ( a.cost < b.cost ){ return 1; }
            return 0;
        });
     } else if (criteria === ORDER_BY_RELEVANCIA){
            result = array.sort(function(a, b) {
                let aCount = parseInt(a.soldCount);
                let bCount = parseInt(b.soldCount);
    
                if ( aCount > bCount ){ return -1; }
                if ( aCount < bCount ){ return 1; }
                return 0;
            });
    }

    return result;
}

function showProductsList(){

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount))){



            htmlContentToAppend +=`


  <div class="col-md-4 col-lg-5">
    <div class="card mb-4 shadow-sm">
    
    <img src="` + product.imgSrc + `" 
     <div class="card-body">
        <p class="card-text">` + product.description + `</p>
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group">
          <a href="product-info.html"  <button   type="button" class="btn btn-sm btn-outline-secondary"> `+ product.name +`</button> </a> 
           
          </div>
          <small class="text-muted">` +product.currency + " " + product.cost + ` </small>
        </div>
      </div>
      </div>
     </div>
      `         
         
        }

       document.getElementById("idProducts").innerHTML = htmlContentToAppend;
    }
}

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











document.addEventListener("DOMContentLoaded", function(e){
    let usuariologgeado = localStorage.getItem('User-Logged');
    
    let user = document.getElementById("user2");
    
    if (usuariologgeado){
      usuariologgeado = JSON.parse(usuariologgeado);
      user.innerText = 'Usuario: '+ usuariologgeado.usuario;
      user.style = "color: rgb(144, 187, 189)";
    }
    });

















function sortAndShowProducts(sortCriteria, productsArray){
    currentSortCriteria = sortCriteria;

    if(productsArray != undefined){
        currentProductsArray = productsArray;
    }

    currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);


    showProductsList();
}

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowProducts(ORDER_ASC_BY_PRECIO, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_PRECIO);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_PRECIO);
    });

    document.getElementById("sortByRelevancia").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_RELEVANCIA);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductsList();
    });

    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;

        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }

        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }

        showProductsList();
    });
});