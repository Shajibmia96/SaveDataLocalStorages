// // getData from localStorages

// const getDataFromLocalStorages =() =>{
//     let items = {};
//     const savedItems = localStorage.getItem("items");
//       if(savedItems){
//          items = JSON.parse(savedItems)
//       }
//       return items
// };

// // dataSetLocalStorages
// const setStoredData= (product , quantity) =>{
//    const items = getDataFromLocalStorages();
//     items[product] = quantity;
//     const itemsStringified = JSON.stringify(items);
//     console.log(itemsStringified)
//    localStorage.setItem( "items" , itemsStringified)
// };

// // ShowDataUI

// const ShowDataUI = () =>{
//    const showData = getDataFromLocalStorages();
//     for(product in showData){
//         const quantity = showData[product]
//         console.log(product ,quantity);
//         addProductsList(product , quantity)
//     }
// };
// ShowDataUI()