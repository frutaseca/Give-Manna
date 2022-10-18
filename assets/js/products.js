const productsContainer = document.getElementById("products-container")
const productsSections = productsContainer.children
const productPrices = document.querySelectorAll(".product-price")
const productImages = document.querySelectorAll(".product-image") 

/*
    fetch(url)
    .then(function {
        console.log(response)
    .then (function {
        let data = response.json

    })    
    })
*/
async function getProduct(id) {
    let response = await fetch(`https://api.bluecartapi.com/request?api_key=BBC6D0DEE68A4CA9B71D00EA28E05C40&type=product&item_id=${id}`)
    console.log("response", response); 
    let data = await response.json();
    console.log("data", data);
    let image = data.product.main_image.link;
    console.log("image", image);
    let price = data.product.buybox_winner.price;
    return {image, price};
  }

  /*
    doMath() 1 +1 = 2
    doMoreMmath() 2 + 2 = 4
    getProduct => await make a fetch request (three s) =>await wait for response to be JSON (one s) => (do other stuff)
  */

  async function renderProducts() {
    let wonderBread = null;
    let cheese = null;
    let ham = null;
    let pb = null;
    let jelly = null;
    let sjelly = null;
    let productsArray = []
    const cachedProducts = localStorage.getItem("cachedProducts");
    if (cachedProducts) {
        let savedProducts = JSON.parse(cachedProducts);
        productsArray = savedProducts.productsArray;
    }
    else {  
      wonderBread = await getProduct("37858875");
      cheese = await getProduct("10452377");
      ham = await getProduct("10315957");
      pb = await getProduct("10315475");
      jelly = await getProduct("364924551");
      sjelly = await getProduct("10315473");
      productsArray = [wonderBread, cheese, ham, pb, jelly, sjelly]
      let productsObj = {
        productsArray : productsArray
      }
      let productsStringFormat = JSON.stringify(productsObj);
      localStorage.setItem("cachedProducts", productsStringFormat)
    }  
    console.log(productsArray);
    Array.from(productsArray).forEach((element, i) => {
        productPrices[i].textContent = `$${productsArray[i].price}`
        productImages[i].src = productsArray[i].image
    });
  }
  renderProducts()