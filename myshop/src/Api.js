// //AdminPage.js
// const getItems = async () => {
//     try {
//         const data = await fetch('/myItems/items/');
//         const items = await data.json();
//         console.log(items);
//         setItems(items);
//     } catch (e) {
//         console.log(`error: ${e}`)
//     }

// };

// //AdminPage.js
// const deleteItem = async (itemID) => {
    
//     if (window.confirm(`Deleting item with id ${itemID}, are you sure?`)) {
//         await fetch(`/myItems/items/${itemID}`, {
//             method: 'DELETE'
//         });
//         window.alert(`Item with id ${itemID} has been deleted`)
//         getItems();
//     }
// }

// //AddItems.js
//  const addItem = async () => {
//     if (window.confirm('Are you sure you want to add a new Item?')) {
//         if (item.itemName === "" || item.itemDescription === "" || item.price === "") {
//             window.alert("Items must not have empty values")
//         } else {
//             await fetch(`/myItems/items/`, {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                     'Content-type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     itemName: item.itemName,
//                     itemDescription: item.itemDescription,
//                     price: Number(item.price).toFixed(2)
//                 })
//             })
//             window.alert(`Item ${item.itemName} has been added`)
//         }

//     }
// }

