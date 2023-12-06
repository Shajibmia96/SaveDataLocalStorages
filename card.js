const addProducts =()=>{
      const products = inputFieldData("products-name");
      const quantity = inputFieldData("products-Quantity")
      console.log(products ,quantity);
      addProductsList(products , quantity)
}

// input field data 
   const inputFieldData =(id) =>{
       const inputData = document.getElementById(id);
       const inputValue = inputData.value;
       inputData.value = "";
       return inputValue;
   };

//    Products list

  const addProductsList = (products , quantity) =>{
      
     const productsField = document.getElementById("products-list");
     const count = productsField.childElementCount
      const p = document.createElement ('p');
      
       p.innerText = `${count + 1}.  ${products} : ${quantity}`;
       productsField.appendChild(p)
       setDataLocalStorages(products , quantity)
  }

//   Check previous object data
 const getStoredShoppingCard = () => {
        let cart = {};
        const storedCart = localStorage.getItem("cart");  

        if(storedCart){
           cart = JSON.parse(storedCart);
        }
        return cart;
 }
//  getStoredShoppingCard()

// SetDataTo LocalStorages 

const setDataLocalStorages =(products , quantity) =>{
    const cart = getStoredShoppingCard();
    cart[products] = quantity;
    console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem("cart" , cartStringified)
};

// displayProductsLocalStorages
const displayProductsLocalStorages=() =>{
    const savedCart = getStoredShoppingCard();
    // console.log(savedCart)
    for(const product in savedCart){
         const quantity = savedCart[product]
        console.log(product , quantity)
        addProductsList(product , quantity)
    }
};
displayProductsLocalStorages()
