// const collection = require('../utilities/connection');

// const userDB = [{
//         userId : 10001,
//         uCredentials: {
//             uEmail : "john@gmail.com",
//             uPass : "John@1234"
//         },
//         uName : "John",
//         uDOB: "2018-06-08",
//         uPhone: 8265839081,
//         uDateJoined : "2018-06-07T04:21:00.760Z",
//         uLastLogin : "2018-06-12T11:30:28.340Z",
//         uCart: [{
//             cartProdIds: 1001,
//             pName: "Asus Zenfone Max Pro M2",
//             pPrice: 15000,
//             pAvailability: 400
//         }]
//     }
// ]

// const productDB = [{
//     "p_id": "1001",
//     "pRating": 3.5,
//     "pAvailability":400,
//     "pDetails": {
//         "s_Id":"Asus@Seller",
//         "pCategory":"Electronics",
//         "pName": "Asus Zenfone Max Pro M2",
//         "pDescription":"an economical phone by Asus",
//         "price":15000,
//         "pQuantity":400,
//         "pDiscount":0.2,
//         "pShippingCharges":150,
//         "pImage": "Zenfone Max Pro M2.png",
//         "specification":{ Electronics: {
//             color: "Black",
//             os: "Android",    
//             ram: "3 GB RAM",
//             rom: "32 GB ROM",
//             rearCamera: "12MP",
//             frontCamera: "5MP",
//             }
//         }
//     },
//     "dateFirstAvailable": {
//       "date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1002",
//     "pRating": 4,
//     "pAvailability":665,
//     "pDetails":{
//         "s_Id": "Xiaomi@Seller",
//         "pName": "Redmi Note 6 Pro",
//         "pDescription": "an economical phone by Xiaomi",
//         "pCategory": "Electronics",
//         "price": 13999,
//         "pDiscount": 0.2,
//         "pQuantity": 665,
//         "pShippingCharges": 150,
//         "pImage": "Redmi note 6 Pro.jpg",
//         "specification": {"Electronics": {
//             "color": "Black",
//             "os": "Android",    
//             "ram": "3 GB RAM",
//             "rearCamera": "12MP",
//             "frontCamera": "5MP"
//             }}
//     },
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
  
//   {
//     "p_id": "1003",
//     "pRating": 4,
//     "pAvailability":666,
//     "pDetails":{
//         "pName": "Moto G7 Plus",
//         "pDescription": "a prime phone by Moto",
//         "pCategory": "Electronics",
//         "price": 23599,
//         "pImage": "moto-g7.jpg",
//         "s_Id": "Moto@Seller",
//         "pDiscount": 0.2,
//         "pQuantity": 666,
//         "pShippingCharges": 150,
//         "specification": { "Electronics": {
//             "color": "Silver",
//             "os": "Android",    
//             "ram": "3 GB RAM",
//             "rearCamera": "12MP",
//             "frontCamera": "5MP"
//             }}
//     },
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
  
//   {
//     "p_id": "1004",
//     "pRating": 4.5,
//     "pAvailability":666,
//     "pDetails":
//     {
//         "s_Id": "Lenovo@Seller",
//         "pName": "Lenovo Tab 2 A8-50",
//         "pDiscount": 0.2,
//         "pQuantity": 666,
//         "pShippingCharges": 150,
//         "pDescription": "a high end phone by Lenovo",
//         "pCategory": "Electronics",
//         "price": 19999,
//         "pImage": "lenovoTab.png",
//         "specification": {"Electronics":{
//           "color": "blue",
//           "os": "Android",    
//           "ram": "3 GB RAM",
//           "rearCamera": "12MP",
//           "frontCamera": "5MP"
//         }}
//     },
   
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1005",
//     "pRating": 4.9,
//     "pAvailability":666,
//     "pDetails":{
//         "pName": "iphone 8 plus",
//         "pDescription": "a high end phone by apple",
//         "pCategory": "Electronics",
//         "price": 79999,
//         "s_Id": "Apple@Seller",
//         "pDiscount": 0.2,
//         "pQuantity": 666,
//         "pShippingCharges": 150,
//         "pImage": "Iphone 8 plus-1.jpg",
//         "specification": { "Electronics": {
//             "color": "Rose Gold",
//             "os": "Android",    
//             "ram": "3 GB RAM",
//             "rearCamera": "12MP",
//             "frontCamera": "5MP"
//             }}
//     },
   
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1006",
//     "pRating": 4,
//     "pAvailability":666,
//     "pDetails":
//     {
//     "pName": "Adidas Running Men Lite",
//     "pDescription": "a pair of light weight running Shoes by adidas",
//     "pCategory": "Shoes",
//     "price": 2599,
//     "s_Id": "Adidas@Seller",
//     "pDiscount": 0.2,
//     "pQuantity": 666,
//     "pShippingCharges": 150,
//     "pImage": "adidas.jpeg",
//     "specification":{"Shoes":{
//         "color": "Grey blue",
//         "outerMaterial": "Synthetic",
//         "idealFor": "men/women",
//         "soleMaterial": "Rubber/synthetic",
//         "warranty":"1 year"}}
    
//     },
    
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
  
//   },
//   {
//     "p_id": "1007",
//     "pRating": 4,
//     "pAvailability":666,
//     "pDetails":{
//         "pName": "Adidas Running Women Lite",
//         "pDescription": "a pair of light weight running Shoes by adidas",
//         "pCategory": "Shoes",
//         "price": 2599,
//         "s_Id": "Adidas@Seller",
//         "pDiscount": 0.2,
//         "pQuantity": 666,
//         "pShippingCharges": 150,
//         "pImage": "Shoes.jpg",
//         "specification":{"Shoes":{
//             "color": "pink",
//             "outerMaterial": "Synthetic",
//             "idealFor": "women",
//             "soleMaterial": "Rubber/synthetic",
//            " warranty":"1 year"}}
        
//     },
   
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
    
//   },
//   {
//     "p_id": "1008",
//     "pRating": 4,
//     "pAvailability":666,
//     "pDetails":{
//         "pName": "Adidas Running Men robust",
//         "pDescription": "A pair of robust running Shoes by adidas",
//         "pCategory": "Shoes",
//         "price": 3599,
//         "s_Id": "Adidas@Seller",
//         "pDiscount": 0.2,
//         "pQuantity": 666,
//         "pShippingCharges": 150,
//         "pImage": "adidas 1.jpg",
//         "specification":{"Shoes":{
//             "color": "black",
//             "outerMaterial": "Synthetic",
//             "idealFor": "men",
//             "soleMaterial": "Rubber/synthetic",
//            " warranty":"1 year"}}
//     },
   
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1009",
//     "pRating": 3,
//     "pAvailability":666,
//     "pDetails":{
//         "pName": "Reebok training Shoes",
//         "pDescription": "A pair of light weight training Shoes by Reebok",
//         "pCategory": "Shoes",
//         "price": 1599,
//         "s_Id": "Reebok@Seller",
//         "pDiscount": 0.2,
//         "pQuantity": 666,
//         "pShippingCharges": 150,
//         "pImage": "Reebok 1.jpg",
//         "specification": {"Shoes":{"color": "black",
//             "outerMaterial": "Synthetic",
//             "idealFor": "men/women",
//             "soleMaterial": "Rubber/synthetic",
//            " warranty":"1 year"}}
        
//     },
   
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1010",
//     "pRating": 4.6,
//     "pAvailability":666,
//     "pDetails":{
//         "pName": "Nike Running Men Lite",
//         "pDescription": "a pair of light weight running Shoes by Nike",
//         "pCategory": "Shoes",
//         "price": 6599,
//         "s_Id": "Nike@Seller",
//         "pDiscount": 0.2,
//         "pQuantity": 666,
//         "pShippingCharges": 150,
//         "pImage": "nike max air.jpg",
//         "specification": {"Shoes":{"color": "green",
//             "outerMaterial": "Synthetic",
//             "idealFor": "men",
//             "soleMaterial": "Rubber/synthetic",
//            " warranty":"1 year"}}
        
//     },
   
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
  
//   },
//   {
//     "p_id": "1011",
//     "pRating": 4,
//     "pAvailability":666,
//     "pDetails":{
  
//         "pName": "Luxury Bed by Zuari",
//         "pDescription": "sunmica finished zuari luxury bed",
//         "pCategory": "Furniture",
//         "price": 8999,
//         "s_Id": "Zuari@Seller",
//         "pDiscount": 0.2,
//         "pQuantity": 666,
//         "pShippingCharges": 150,
//         "pImage": "Zuari furnitures.jpg",
//         "specification":{ "Furniture": {
//             " color": "Beige",
//              "size": "40*20",
//             " type": "Table",
//              "warranty": "1 Year"
//              }}
//     },
    
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1012",
//     "pRating": 4.3,
//     "pAvailability":666,
//     "pDetails":{
//     "pName": "Organised Cupboards by Zuari",
//     "pDescription": "sunmica finished zuari cupboards",
//     "pCategory": "Furniture",
//     "price": 6999,
//     "s_Id": "Zuari@Seller",
//     "pDiscount": 0.2,
//     "pQuantity": 666,
//     "pShippingCharges": 150,
//     "pImage": "Zuari furnitures 1.jpg",
//     "specification": { "Furniture": {
//         " color": "Coffee Brown",
//          "size": "40*20",
//         " type": "Table",
//          "warranty": "1 Year"
//          }}
//     },
    
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1013",
//     "pRating": 4,
//     "pAvailability":666,
//     "pDetails":{
//     "pName": "Dressing Table by Zuari",
//     "pDescription": "sunmica finished zuari Dressing table",
//     "pCategory": "Furniture",
//     "price": 8599,
//     "s_Id": "Zuari@Seller",
//     "pDiscount": 0.2,
//     "pQuantity": 666,
//     "pShippingCharges": 150,
//     "pImage": "Swann-Dressing-1.jpg",
//     "specification": {"Furniture": {
//         " color": "Beige",
//          "size": "40*20",
//         " type": "Table",
//          "warranty": "1 Year"
//          }}
  
//     },
    
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1014",
//     "pRating": 4.8,
//     "pAvailability":666,
//     "pDetails":{
//         "pName": "Recliner sofa set by Grihshobha",
//         "pDescription": "A luxurious and comfortable sofa set by Grihshobha Furniture makers",
//         "pCategory": "Furniture",
//         "price": 12500,
//         "s_Id": "Grihshobha@Seller",
//         "pDiscount": 0.2,
//         "pQuantity": 666,
//         "pShippingCharges": 150,
//         "pImage": "Recliner furniture 1.jpg",
//         "specification":{ "Furniture": {
//             " color": "Dark grey",
//              "size": "40*20",
//             " type": "Table",
//              "warranty": "1 Year"
//              }}
//     },
   
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1015",
//     "pRating": 4.4,
//     "pAvailability":666,
//     "pDetails":{
//     "pName": "Dining table by @HOME",
//     "pDescription": "Teak wood dining table with glass top",
//     "pCategory": "Furniture",
//     "price": 18999,
//     "s_Id": "HOME@Seller",
//     "pDiscount": 0.2,
//     "pQuantity": 666,
//     "pShippingCharges": 150,
//     "pImage": "Dining-Table.jpg",
//     "specification": {"Furniture": {
//        " color": "brown",
//         "size": "40*20",
//        " type": "Table",
//         "warranty": "1 Year"
//         }}
//     },
    
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1016",
//     "pRating": 4,
//     "pAvailability":666,
//     "pDetails":{
//     "pName": "Kurta Plazzo set ethnic for women",
//     "pDescription": "embroidery work kurta plazzo set for women",
//     "pCategory": "Clothing",
//     "price": 1499,
//     "s_Id": "Ethnic@Seller",
//     "pDiscount": 0.2,
//     "pQuantity": 666,
//     "pShippingCharges": 150,
//     "pImage": "Women Ethnic Kurta 1.jpg",
//     "specification":{"Clothing": {"color": "orange",
//         "fabric":"Cotton-ambroidary",
//         "idealFor": "Women",
//         "warranty": "1 year"}}
        
//     },
    
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1017",
//     "pRating": 4.8,
//     "pAvailability":666,
//     "pDetails":
//     {
//     "pName": "Cotton silk saree by FabIndia",
//     "pDescription": "cotton silk hand woven sarees by Fabindia",
//     "pCategory": "Clothing",
//     "price": 5900,
//     "s_Id": "FabIndia@Seller",
//     "pDiscount": 0.2,
//     "pQuantity": 666,
//     "pShippingCharges": 150,
//     "pImage": "Saree.jpg",
//     "specification": {"Clothing": {"color": "red",
//         "fabric":"Cotton-Silk",
//         "idealFor": "Women",
//         "warranty": "1 year"}}
        
//     },
    
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1018",
//     "pRating": 4.8,
//     "pAvailability":666,
//     "pDetails":{
//     "pName": "Virat's Special for men ethnic",
//     "pDescription": "Festive season special woven black woollen coat for men",
//     "pCategory": "Clothing",
//     "price": 1900,
//     "s_Id": "Ethnic@Seller",
//     "pDiscount": 0.2,
//     "pQuantity": 666,
//     "pShippingCharges": 150,
//     "pImage": "Men ethnic.jpg",
//     "specification":{"Clothing": {"color": "black",
//         "fabric":"Cotton",
//         "idealFor": "Men",
//         "warranty": "1 year"}}
        
//     },
    
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1019",
//     "pRating": 4.8,
//     "pAvailability":666,
//     "pDetails":{
//         "pName": "US Polo T-shirt",
//         "pDescription": "100 % pure cotton t shirt by US polo",
//         "pCategory": "Clothing",
//         "price": 3299,
//         "s_Id": "USPolo@Seller",
//         "pDiscount": 0.2,
//         "pQuantity": 666,
//         "pShippingCharges": 150,
//         "pImage": "US -Polo 1.jpeg",
//         "specification": {"Clothing": {"color": "orange",
//             "fabric":"Cotton",
//             "idealFor": "Men",
//             "warranty": "1 year"}}
            
//     },
   
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   },
//   {
//     "p_id": "1020",
//     "pRating": 4.2,
//     "pAvailability":666,
//     "pDetails":{
//         "pName": "UCB T-shirt",
//         "pDescription": "100 % pure cotton t shirt by UCB",
//         "pCategory": "Clothing",
//         "price": 1900,
//         "s_Id": "UCB@Seller",
//         "pDiscount": 0.2,
//         "pQuantity": 666,
//         "pShippingCharges": 150,
//         "pImage": "UCB tshirt.jpg",
//         "specification": {"Clothing": {"color": "blue",
//             "fabric":"Cotton",
//             "idealFor": "Men",
//             "warranty": "1 year"}}
            
//     },
   
//     "dateFirstAvailable": {
//       "$date": "2012-09-17T00:00:00.000Z"
//     },
//     "dateLastAvailable": {
//       "$date": "2017-09-17T00:00:00.000Z"
//     }
//   }
// ]


// const orderDB = [{
//     orderId: 100000001,
//     userId: 10001,
//     order:[{
//       prodIds:1001,
//       pPrice: 15000,
//       quantity: 1,
//       orderDate: "2012-09-17T00:00:00.000Z"},
//       {prodIds:1002,pPrice: 22000,quantity: 2,orderDate: "2013-09-19T00:00:00.000Z"}]
// }]

// const sellerDB = [{
//     sCredentials: {
//         sEmail : "john@gmail.com",
//         sPass : "John@1234"
//     },
//     s_Id : 10001,
//     sEmail : "john@gmail.com",
//     sPass : "John@1234",
//     sName : "John",
//     sTan : "AAAA12345A",
//     sGst : "12ABCDE1234A1Z1",
//     sAccountNo : "1234567890",
//     sPhone: 8265839081,
//     sDateJoined : "2018-06-07T04:21:00.760Z",
//     sLastLogin : "2018-06-12T11:30:28.340Z"
// }]

// exports.setupDb = () => {
//     return collection.getUserCollection().then((users) => {
//         return users.deleteMany().then(() => {
//             return users.insertMany(userDB).then(() => {
//                 return collection.getProductCollection().then((products) => {
//                     return products.deleteMany().then(() => {
//                         return products.insertMany(productDB).then(() => {
//                             return collection.getSellerCollection().then((sellers) => {
//                                 return sellers.deleteMany().then(() => {
//                                     return sellers.insertMany(sellerDB).then(() => {
//                                         return collection.getOrderCollection().then((orders) => {
//                                             return orders.deleteMany().then(() => {
//                                                 return orders.insertMany(orderDB).then((data) => {
//                                                     if (data) return "Insertion Successfull"
//                                                     else {
//                                                         let err = new Error("Insertion failed");
//                                                         err.status = 400;
//                                                         throw err;
//                                                     }
//                                                 })
//                                             })
//                                         })
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// }
// *******************************************************
const collection = require( '../utilities/connection' );

const userDB = [{
        userId: 10001,
        uCredentials: {
            uEmail: "john@gmail.com",
            uPass: "John@1234"
        },
        uName: "John",
        uDOB: "2018-06-08",
        uPhone: 8265839081,
        uDateJoined: "2018-06-07T04:21:00.760Z",
        uLastLogin: "2018-06-12T11:30:28.340Z",
       
        uCart: [{
          cartProdIds: 1001,
          pName: "Asus Zenfone Max Pro M2",
          pPrice: 15000,
          pAvailability: 400,
          pDiscount: 0.2,
          pShippingCharges: 150,
          pQuantity: 1
      }],
        myOrders: [{
          orderId: 100000001,
          billAmount: 22500,
          orderDate: "2013-09-19T00:00:00.000Z",
          order: [{prodIds: 1001,pName: "Asus Zenfone Max Pro M2",pPrice: 15000,quantity: 1,discount: 0.2},
         ]
      } ]
    }
]


const orderDB = [{
  orderId: 100000001,
  userId: 10001,
  billAmount: 22500,
  orderDate: "2012-09-17T00:00:00.000Z",
  order: [{
    pName: "Asus Zenfone Max Pro M2",
    prodIds: 1001,
    pPrice: 15000,
    quantity: 1,
    discount: 0.2
  }]
}]

const productDB = [{
    "p_id": "1001",
    "pRating": 3.5,
    "pAvailability": 400,
    "pDetails": {
        "s_Id": "Asus@Seller",
        "pCategory": "Electronics",
        "pName": "Asus Zenfone Max Pro M2",
        "pDescription": "an economical phone by Asus",
        "price": 15000,
        "pQuantity": 400,
        "pDiscount": 0.2,
        "pShippingCharges": 150,
        "pImage": "Zenfone Max Pro M2.png",
        "specification": { Electronics: {
            color: "Black",
            os: "Android",    
            ram: "3 GB RAM",
            rom: "32 GB ROM",
            rearCamera: "12MP",
            frontCamera: "5MP",
            }
        }
    },
    "dateFirstAvailable": {
      "date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1002",
    "pRating": 4,
    "pAvailability": 665,
    "pDetails": {
        "s_Id": "Xiaomi@Seller",
        "pName": "Redmi Note 6 Pro",
        "pDescription": "an economical phone by Xiaomi",
        "pCategory": "Electronics",
        "price": 13999,
        "pDiscount": 0.23,
        "pQuantity": 665,
        "pShippingCharges": 150,
        "pImage": "Redmi note 6 Pro.jpg",
        "specification": {"Electronics": {
            "color": "Black",
            "os": "Android",    
            "ram": "3 GB RAM",
            "rearCamera": "12MP",
            "frontCamera": "5MP"
            }}
    },
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  
  {
    "p_id": "1003",
    "pRating": 4,
    "pAvailability": 666,
    "pDetails": {
        "pName": "Moto G7 Plus",
        "pDescription": "a prime phone by Moto",
        "pCategory": "Electronics",
        "price": 23599,
        "pImage": "moto-g7.jpg",
        "s_Id": "Moto@Seller",
        "pDiscount": 0.15,
        "pQuantity": 666,
        "pShippingCharges": 150,
        "specification": { "Electronics": {
            "color": "Silver",
            "os": "Android",    
            "ram": "3 GB RAM",
            "rearCamera": "12MP",
            "frontCamera": "5MP"
            }}
    },
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  
  {
    "p_id": "1004",
    "pRating": 4.5,
    "pAvailability": 666,
    "pDetails":
    {
        "s_Id": "Lenovo@Seller",
        "pName": "Lenovo Tab 2 A8-50",
        "pDiscount": 0.12,
        "pQuantity": 666,
        "pShippingCharges": 150,
        "pDescription": "a high end phone by Lenovo",
        "pCategory": "Electronics",
        "price": 19999,
        "pImage": "lenovoTab.png",
        "specification": {"Electronics": {
          "color": "blue",
          "os": "Android",    
          "ram": "3 GB RAM",
          "rearCamera": "12MP",
          "frontCamera": "5MP"
        }}
    },
   
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1005",
    "pRating": 4.9,
    "pAvailability": 666,
    "pDetails": {
        "pName": "iphone 8 plus",
        "pDescription": "a high end phone by apple",
        "pCategory": "Electronics",
        "price": 79999,
        "s_Id": "Apple@Seller",
        "pDiscount": 0.13,
        "pQuantity": 666,
        "pShippingCharges": 150,
        "pImage": "Iphone 8 plus-1.jpg",
        "specification": { "Electronics": {
            "color": "Rose Gold",
            "os": "Android",    
            "ram": "3 GB RAM",
            "rearCamera": "12MP",
            "frontCamera": "5MP"
            }}
    },
   
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1006",
    "pRating": 4,
    "pAvailability": 666,
    "pDetails":
    {
    "pName": "Adidas Running Men Lite",
    "pDescription": "a pair of light weight running Shoes by adidas",
    "pCategory": "Shoes",
    "price": 2599,
    "s_Id": "Adidas@Seller",
    "pDiscount": 0.05,
    "pQuantity": 666,
    "pShippingCharges": 150,
    "pImage": "adidas.jpeg",
    "specification": {"Shoes": {
        "color": "Grey blue",
        "outerMaterial": "Synthetic",
        "idealFor": "men/women",
        "soleMaterial": "Rubber/synthetic",
        "warranty": "1 year"}}
    
    },
    
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  
  },
  {
    "p_id": "1007",
    "pRating": 4,
    "pAvailability": 666,
    "pDetails": {
        "pName": "Adidas Running Women Lite",
        "pDescription": "a pair of light weight running Shoes by adidas",
        "pCategory": "Shoes",
        "price": 2599,
        "s_Id": "Adidas@Seller",
        "pDiscount": 0.25,
        "pQuantity": 666,
        "pShippingCharges": 150,
        "pImage": "Shoes.jpg",
        "specification": {"Shoes": {
            "color": "pink",
            "outerMaterial": "Synthetic",
            "idealFor": "women",
            "soleMaterial": "Rubber/synthetic",
           " warranty": "1 year"}}
        
    },
   
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
    
  },
  {
    "p_id": "1008",
    "pRating": 4,
    "pAvailability": 666,
    "pDetails": {
        "pName": "Adidas Running Men robust",
        "pDescription": "A pair of robust running Shoes by adidas",
        "pCategory": "Shoes",
        "price": 3599,
        "s_Id": "Adidas@Seller",
        "pDiscount": 0.22,
        "pQuantity": 666,
        "pShippingCharges": 150,
        "pImage": "adidas 1.jpg",
        "specification": {"Shoes": {
            "color": "black",
            "outerMaterial": "Synthetic",
            "idealFor": "men",
            "soleMaterial": "Rubber/synthetic",
           " warranty": "1 year"}}
    },
   
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1009",
    "pRating": 3,
    "pAvailability": 666,
    "pDetails": {
        "pName": "Reebok training Shoes",
        "pDescription": "A pair of light weight training Shoes by Reebok",
        "pCategory": "Shoes",
        "price": 1599,
        "s_Id": "Reebok@Seller",
        "pDiscount": 0.13,
        "pQuantity": 666,
        "pShippingCharges": 150,
        "pImage": "Reebok 1.jpg",
        "specification": {"Shoes": {"color": "black",
            "outerMaterial": "Synthetic",
            "idealFor": "men/women",
            "soleMaterial": "Rubber/synthetic",
           " warranty": "1 year"}}
        
    },
   
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1010",
    "pRating": 4.6,
    "pAvailability": 666,
    "pDetails": {
        "pName": "Nike Running Men Lite",
        "pDescription": "a pair of light weight running Shoes by Nike",
        "pCategory": "Shoes",
        "price": 6599,
        "s_Id": "Nike@Seller",
        "pDiscount": 0.15,
        "pQuantity": 666,
        "pShippingCharges": 150,
        "pImage": "nike max air.jpg",
        "specification": {"Shoes": {"color": "green",
            "outerMaterial": "Synthetic",
            "idealFor": "men",
            "soleMaterial": "Rubber/synthetic",
           " warranty": "1 year"}}
        
    },
   
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  
  },
  {
    "p_id": "1011",
    "pRating": 4,
    "pAvailability": 666,
    "pDetails": {
  
        "pName": "Luxury Bed by Zuari",
        "pDescription": "sunmica finished zuari luxury bed",
        "pCategory": "Furniture",
        "price": 8999,
        "s_Id": "Zuari@Seller",
        "pDiscount": 0.10,
        "pQuantity": 666,
        "pShippingCharges": 150,
        "pImage": "Zuari Furnitures.jpg",
        "specification": { "Furniture": {
            " color": "Beige",
             "size": "40*20",
            " type": "Table",
             "warranty": "1 Year"
             }}
    },
    
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1012",
    "pRating": 4.3,
    "pAvailability": 666,
    "pDetails": {
    "pName": "Organised Cupboards by Zuari",
    "pDescription": "sunmica finished zuari cupboards",
    "pCategory": "Furniture",
    "price": 6999,
    "s_Id": "Zuari@Seller",
    "pDiscount": 0.11,
    "pQuantity": 666,
    "pShippingCharges": 150,
    "pImage": "Zuari Furnitures 1.jpg",
    "specification": { "Furniture": {
        " color": "Coffee Brown",
         "size": "40*20",
        " type": "Table",
         "warranty": "1 Year"
         }}
    },
    
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1013",
    "pRating": 4,
    "pAvailability": 666,
    "pDetails": {
    "pName": "Dressing Table by Zuari",
    "pDescription": "sunmica finished zuari Dressing table",
    "pCategory": "Furniture",
    "price": 8599,
    "s_Id": "Zuari@Seller",
    "pDiscount": 0.14,
    "pQuantity": 666,
    "pShippingCharges": 150,
    "pImage": "Swann-Dressing-1.jpg",
    "specification": {"Furniture": {
        " color": "Beige",
         "size": "40*20",
        " type": "Table",
         "warranty": "1 Year"
         }}
  
    },
    
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1014",
    "pRating": 4.8,
    "pAvailability": 666,
    "pDetails": {
        "pName": "Recliner sofa set by Grihshobha",
        "pDescription": "A luxurious and comfortable sofa set by Grihshobha Furniture makers",
        "pCategory": "Furniture",
        "price": 12500,
        "s_Id": "Grihshobha@Seller",
        "pDiscount": 0.07,
        "pQuantity": 666,
        "pShippingCharges": 150,
        "pImage": "Recliner Furniture 1.jpg",
        "specification": { "Furniture": {
            " color": "Dark grey",
             "size": "40*20",
            " type": "Table",
             "warranty": "1 Year"
             }}
    },
   
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1015",
    "pRating": 4.4,
    "pAvailability": 666,
    "pDetails": {
    "pName": "Dining table by @HOME",
    "pDescription": "Teak wood dining table with glass top",
    "pCategory": "Furniture",
    "price": 18999,
    "s_Id": "HOME@Seller",
    "pDiscount": 0.18,
    "pQuantity": 666,
    "pShippingCharges": 150,
    "pImage": "Dining-Table.jpg",
    "specification": {"Furniture": {
       " color": "brown",
        "size": "40*20",
       " type": "Table",
        "warranty": "1 Year"
        }}
    },
    
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1016",
    "pRating": 4,
    "pAvailability": 666,
    "pDetails": {
    "pName": "Kurta Plazzo set ethnic for women",
    "pDescription": "embroidery work kurta plazzo set for women",
    "pCategory": "Clothing",
    "price": 1499,
    "s_Id": "Ethnic@Seller",
    "pDiscount": 0.2,
    "pQuantity": 666,
    "pShippingCharges": 150,
    "pImage": "Women Ethnic Kurta 1.jpg",
    "specification": {"Clothing": {"color": "orange",
        "fabric": "Cotton-ambroidary",
        "idealFor": "Women",
        "warranty": "1 year"}}
        
    },
    
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1017",
    "pRating": 4.8,
    "pAvailability": 666,
    "pDetails":
    {
    "pName": "Cotton silk saree by FabIndia",
    "pDescription": "cotton silk hand woven sarees by Fabindia",
    "pCategory": "Clothing",
    "price": 5900,
    "s_Id": "FabIndia@Seller",
    "pDiscount": 0.2,
    "pQuantity": 666,
    "pShippingCharges": 150,
    "pImage": "Saree.jpg",
    "specification": {"Clothing": {"color": "red",
        "fabric": "Cotton-Silk",
        "idealFor": "Women",
        "warranty": "1 year"}}
        
    },
    
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1018",
    "pRating": 4.8,
    "pAvailability": 666,
    "pDetails": {
    "pName": "Virat's Special for men ethnic",
    "pDescription": "Festive season special woven black woollen coat for men",
    "pCategory": "Clothing",
    "price": 1900,
    "s_Id": "Ethnic@Seller",
    "pDiscount": 0.2,
    "pQuantity": 666,
    "pShippingCharges": 150,
    "pImage": "Men ethnic.jpg",
    "specification": {"Clothing": {"color": "black",
        "fabric": "Cotton",
        "idealFor": "Men",
        "warranty": "1 year"}}
        
    },
    
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1019",
    "pRating": 4.8,
    "pAvailability": 666,
    "pDetails": {
        "pName": "US Polo T-shirt",
        "pDescription": "100 % pure cotton t shirt by US polo",
        "pCategory": "Clothing",
        "price": 3299,
        "s_Id": "USPolo@Seller",
        "pDiscount": 0.2,
        "pQuantity": 666,
        "pShippingCharges": 150,
        "pImage": "US -Polo 1.jpeg",
        "specification": {"Clothing": {"color": "orange",
            "fabric": "Cotton",
            "idealFor": "Men",
            "warranty": "1 year"}}
            
    },
   
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  },
  {
    "p_id": "1020",
    "pRating": 4.2,
    "pAvailability": 666,
    "pDetails": {
        "pName": "UCB T-shirt",
        "pDescription": "100 % pure cotton t shirt by UCB",
        "pCategory": "Clothing",
        "price": 1900,
        "s_Id": "UCB@Seller",
        "pDiscount": 0.32,
        "pQuantity": 666,
        "pShippingCharges": 150,
        "pImage": "UCB tshirt.jpg",
        "specification": {"Clothing": {"color": "blue",
            "fabric": "Cotton",
            "idealFor": "Men",
            "warranty": "1 year"}}
            
    },
   
    "dateFirstAvailable": {
      "$date": "2012-09-17T00:00:00.000Z"
    },
    "dateLastAvailable": {
      "$date": "2017-09-17T00:00:00.000Z"
    }
  }
]




const sellerDB = [{
    sCredentials: {
        sEmail: "john@gmail.com",
        sPass: "John@1234"
    },
    sId: 10001,
    sName: "John",
    sTan: "AAAA12345A",
    sGst: "12ABCDE1234A1Z1",
    sAccountNo: "1234567890",
    sPhone: 8265839081,
    sDateJoined: "2018-06-07T04:21:00.760Z",
    sLastLogin: "2018-06-12T11:30:28.340Z"
}]

exports.setupDb = () => {
    return collection.getUserCollection().then( ( users ) => {
        return users.deleteMany().then( () => {
            return users.insertMany( userDB ).then( () => {
                return collection.getProductCollection().then( ( products ) => {
                    return products.deleteMany().then( () => {
                        return products.insertMany( productDB ).then( () => {
                            return collection.getSellerCollection().then( ( sellers ) => {
                                return sellers.deleteMany().then( () => {
                                    return sellers.insertMany( sellerDB ).then( () => {
                                        return collection.getOrderCollection().then( ( orders ) => {
                                            return orders.deleteMany().then( () => {
                                                return orders.insertMany( orderDB ).then( ( data ) => {
                                                    if( data ) return"Insertion Successfull"
                                                    else{
                                                        let err = new Error( "Insertion failed" );
                                                        err.status = 400;
                                                        throw err;
                                                    }
                                                } )
                                            } )
                                        } )
                                    } )
                                } )
                            } )
                        } )
                    } )
                } )
            } )
        } )
    } )
}
