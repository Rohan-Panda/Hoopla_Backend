// const { Schema } = require('mongoose');
// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// const url = "mongodb://localhost:27017/Hoopla_DB"


// // User Schema
// const userLoginCredentials = Schema({
//     uEmail : {type : String, required : [true, 'uEMail is required']},
//     uPass  : {type : String, required : [true, 'uPass is required']}
// })

// const cartSchema = Schema({
//     cartProdIds: {type : Number, default: 0},
//     pName: {type : String, default: ""},
//     pPrice: {type : Number, default: 0},
//     pAvailability: {type : Number, default: 0}
// })

// const usersSchema = Schema({
//     userId : {type : String, required : [true, 'userId is required']},
//     uCredentials : { type: userLoginCredentials, default: {} },
//     uName : {type : String, required : [true, 'uName is required']},
//     uDOB : {type : Date, required : [true, 'uDOB is required']},
//     uPhone : {type : Number, required : [true, 'uPhone is required']},
//     uDateJoined : {type : Date, default : new Date().toISOString()},
//     uLastLogin : {type : Date, default : new Date().toISOString()},
//     uCart : { type: [cartSchema], default: {} },
// }, {collection : "Users", timestamps: true })

// // Product Schema

// // const laptop = Schema({
// //     color: { type: String, required : [true, 'color is required'] },
// //     os: { type: String, required : [true, 'os is required'] },    
// //     ram: { type: String, required : [true, 'ram is required'] },
// //     hdd: { type: String, required : [true, 'hdd is required'] },
// //     processor: { type: String, required : [true, 'processor is required'] },
// //     warranty: { type: String, required : [true, 'warranty is required'] }
// // })

// const Electronics = Schema({
//     color: { type: String, required : [true, 'color is required'] },
//     os: { type: String, required : [true, 'os is required'] },    
//     ram: { type: String, required : [true, 'ram is required'] },
//     rom: { type: String, required : [true, 'rom is required'] },
//     rearCamera: { type: String, required : [true, 'rearCamera is required'] },
//     frontCamera: { type: String, required : [true, 'frontCamera is required'] }
// })

// const Shoes = Schema({
//     color: { type: String, required : [true, 'color is required'] },
//     outerMaterial: { type: String, required : [true, 'Outer Material is required'] },
//     idealFor: { type: String, required : [true, 'Ideal for is required'] },
//     soleMaterial: { type: String, required : [true, 'Sole Material is required'] },
//     warranty: { type: String, required : [true, 'Warranty is required'] }
// })

// const Clothing = Schema({
//     color: { type: String, required : [true, 'color is required'] },
//     fabric: { type: String, required : [true, 'fabric is required'] },
//     idealFor: { type: String, required : [true, 'Ideal for is required'] },
//     warranty: { type: String, required : [true, 'Warranty is required'] }
// })

// const Furniture = Schema({
//     color: { type: String, required : [true, 'color is required'] },
//     size: { type: String, required : [true, 'size is required'] },
//     type: { type: String, required : [true, 'type is required'] },
//     warranty: { type: String, required : [true, 'Warranty is required'] }
// })

// const addProductSchema = Schema({
//     s_Id:{type: String,required:[true, "Seller Id is required"]},
//     pCategory: {type:String, required:[true,"Category is required"]},
//     pName:{type:String, required:[true, "Product name is required"]},
//     // sellername:{type:String, required:[true,"Selleranme is required"]},
//     pDescription:{type:String, required:[true,"Product description is required"]},
//     price:{type:Number, required:[true,"Price is required"]},
//     pQuantity:{type:Number, required:[true,"Quantity is required"]},
//     pDiscount:{type:Number, default:0},
//     pShippingCharges:{type:Number, required:[true,"Charges is required"]},
//     pImage:{type:String, required:[true,"Picture is required"]},
//     specification: Electronics | Shoes | Clothing | Furniture
// })

// const productSchema  = Schema({
//     p_id: { type: Number, unique: true, required : [true, 'Product Id is required'] },
//     pRating: {type: Number, required : [true, 'pRating is required']},
//     pAvailability:{type: Number, required : [true, 'pAvailability is required']},
//     pDetails: { type: addProductSchema, default: {}},
//     dateFirstAvailable: {
//         date: {type : Date, default : new Date().toISOString()}
//     },
//     dateLastAvailable: {
//         date: {type : Date, default : new Date().toISOString()}
//     },
// }, {collection : "Products", timestamps: true})

// const order1 = Schema({
//     prodIds: [{type: Number, required : [true, 'Product Id is required']}],
//     pPrice: {type: Number, required : [true, 'Product Price is required']},
//     quantity: {type: Number, required : [true, 'Quantity is required']},
//     orderDate:{type : Date, default : new Date().toISOString()}
// })

// // Order Schema
// const orderSchema = Schema({
//     userId: {type: Number, required : [true, 'User Id is required']},
//     orderId: {type: Number, required : [true, 'Order Id is required']},
//     order:{ type: [order1], default: {} }
// }, {collection: "Order", timestamps: true})

// // Seller Schema

// const sellerLoginCredentials = Schema({
//     sEmail : {type : String, required : [true, 'uMail is required']},
//     sPass  : {type : String, required : [true, 'uPass is required']}
// })

// const sellerSchema = Schema({
//     sCredentials : { type: sellerLoginCredentials, default: {} },
//     s_Id : {type : String, required : [true, 'sellerId is required']},
//     sEmail : {type : String, required : [true, 'sEmail is required']},
//     sPass  : {type : String, required : [true, 'sPass is required']},
//     sName : {type : String, required : [true, 'sName is required']},
//     sTan : {type : String, required : [true, 'sTan is required']},
//     sGst : {type : String, required : [true, 'sGst is required']},
//     sAccountNo : {type : String, required : [true, 'sAccountNo is required']},
//     sPhone : {type : Number, required : [true, 'sPhone is required']},
//     sDateJoined : {type : Date, default : new Date().toISOString()},
//     sLastLogin : {type : Date, default : new Date().toISOString()}
// }, {collection : "Seller", timestamps: true })


// let connection = {}

// //Returns model object of "Users" collection
// connection.getUserCollection = () => {
//     //establish connection and return model as promise
//     return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true}).then( database => {
//         return database.model('Users', usersSchema)
//     }).catch( error => {
//         let err = new Error("Could not connect to the database");
//         err.status = 500;
//         throw err;
//     });
// }

// connection.getProductCollection = () => {
//     //establish connection and return model as promise
//     return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true}).then( database => {
//         return database.model('Products', productSchema)
//     }).catch( error => {
//         let err = new Error("Could not connect to the database");
//         err.status = 500;
//         throw err;
//     });
// }

// connection.getOrderCollection = () => {
//     //establish connection and return model as promise
//     return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true}).then( database => {
//         return database.model('Order', orderSchema)
//     }).catch( error => {
//         let err = new Error("Could not connect to the database");
//         err.status = 500;
//         throw err;
//     });
// }


// connection.getSellerCollection = () => {
//     //establish connection and return model as promise
//     return mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex : true}).then( database => {
//         return database.model('Seller', sellerSchema)
//     }).catch( error => {
//         let err = new Error("Could not connect to the database");
//         err.status = 500;
//         throw err;
//     });
// }


// // {
// //     "uEmail": "jhon@gmail.com",
// //     "uPass": "John@1234"
// // }

// module.exports = connection;
// *********************************

const{ Schema } = require( 'mongoose' );
const mongoose = require( 'mongoose' );
mongoose.Promise = global.Promise;
const url = "mongodb://localhost:27017/Hoopla_DB"

const order1 = Schema( {
    pName: {type: String, default: ""},
    prodIds: {type: Number, required: [true, 'Product Id is required']},
    pPrice: {type: Number, required: [true, 'Product Price is required']},
    quantity: {type: Number, required: [true, 'Quantity is required']},
    discount: {type: Number,default: 0}
} )

// Order Schema
const orderSchema = Schema( {
    billAmount: {type: Number, default: 0},
    orderDate: {type: Date, default: new Date().toISOString()},
    orderId: {type: Number, required: [true, 'Order Id is required']},
    order: { type: [order1], default: {} }
} )

// User Schema
const userLoginCredentials = Schema( {
    uEmail: {type: String, required: [true, 'uEMail is required']},
    uPass: {type: String, required: [true, 'uPass is required']}
} )

const cartSchema = Schema( {
    cartProdIds: {type: Number, default: 0},
    pName: {type: String, default: ""},
    pPrice: {type: Number, default: 0},
    pAvailability: {type: Number, default: 0},
    pDiscount: {type: Number, default: 0},
    pShippingCharges: {type: Number, default: 0},
    pQuantity: {type: Number, default: 0}
} )

const usersSchema = Schema( {
    userId: {type: String, required: [true, 'userId is required']},
    uCredentials: { type: userLoginCredentials, default: {} },
    uName: {type: String, required: [true, 'uName is required']},
    uDOB: {type: Date, required: [true, 'uDOB is required']},
    uPhone: {type: Number, required: [true, 'uPhone is required']},
    uDateJoined: {type: Date, default: new Date().toISOString()},
    uLastLogin: {type: Date, default: new Date().toISOString()},
    uCart: { type: [cartSchema], default: {} },
    myOrders: { type: [orderSchema], default: {} }
   
}, {collection: "Users", timestamps: true } )

// Product Schema

// const laptop = Schema({
//     color: { type: String, required : [true, 'color is required'] },
//     os: { type: String, required : [true, 'os is required'] },    
//     ram: { type: String, required : [true, 'ram is required'] },
//     hdd: { type: String, required : [true, 'hdd is required'] },
//     processor: { type: String, required : [true, 'processor is required'] },
//     warranty: { type: String, required : [true, 'warranty is required'] }
// })

const Electronics = Schema( {
    color: { type: String, required: [true, 'color is required'] },
    os: { type: String, required: [true, 'os is required'] },    
    ram: { type: String, required: [true, 'ram is required'] },
    rom: { type: String, required: [true, 'rom is required'] },
    rearCamera: { type: String, required: [true, 'rearCamera is required'] },
    frontCamera: { type: String, required: [true, 'frontCamera is required'] }
} )

const Shoes = Schema( {
    color: { type: String, required: [true, 'color is required'] },
    outerMaterial: { type: String, required: [true, 'Outer Material is required'] },
    idealFor: { type: String, required: [true, 'Ideal for is required'] },
    soleMaterial: { type: String, required: [true, 'Sole Material is required'] },
    warranty: { type: String, required: [true, 'Warranty is required'] }
} )

const Clothing = Schema( {
    color: { type: String, required: [true, 'color is required'] },
    fabric: { type: String, required: [true, 'fabric is required'] },
    idealFor: { type: String, required: [true, 'Ideal for is required'] },
    warranty: { type: String, required: [true, 'Warranty is required'] }
} )

const Furniture = Schema( {
    color: { type: String, required: [true, 'color is required'] },
    size: { type: String, required: [true, 'size is required'] },
    type: { type: String, required: [true, 'type is required'] },
    warranty: { type: String, required: [true, 'Warranty is required'] }
} )

const addProductSchema = Schema( {
    s_Id: {type: String,required: [true, "Seller Id is required"]},
    pCategory: {type: String, required: [true,"Category is required"]},
    pName: {type: String, required: [true, "Product name is required"]},
    // sellername:{type:String, required:[true,"Selleranme is required"]},
    pDescription: {type: String, required: [true,"Product description is required"]},
    price: {type: Number, required: [true,"Price is required"]},
    pQuantity: {type: Number, required: [true,"Quantity is required"]},
    pDiscount: {type: Number, default: 0},
    pShippingCharges: {type: Number, required: [true,"Charges is required"]},
    pImage: {type: String, required: [true,"Picture is required"]},
    specification: Electronics | Shoes | Clothing | Furniture
} )

const productSchema  = Schema( {
    p_id: { type: Number, unique: true, required: [true, 'Product Id is required'] },
    pRating: {type: Number, required: [true, 'pRating is required']},
    pAvailability: {type: Number, required: [true, 'pAvailability is required']},
    pDetails: { type: addProductSchema, default: {}},
    dateFirstAvailable: {
        date: {type: Date, default: new Date().toISOString()}
    },
    dateLastAvailable: {
        date: {type: Date, default: new Date().toISOString()}
    },
}, {collection: "Products", timestamps: true} )
// Seller Schema

const sellerLoginCredentials = Schema( {
    sEmail: {type: String, required: [true, 'uMail is required']},
    sPass: {type: String, required: [true, 'uPass is required']}
} )

const sellerSchema = Schema( {
    sCredentials: { type: sellerLoginCredentials, default: {} },
    sId: {type: String, required: [true, 'sellerId is required']},
    // sEmail : {type : String, required : [true, 'sEmail is required']},
    // sPass  : {type : String, required : [true, 'sPass is required']},
    sName: {type: String, required: [true, 'sName is required']},
    sTan: {type: String, required: [true, 'sTan is required']},
    sGst: {type: String, required: [true, 'sGst is required']},
    sAccountNo: {type: String, required: [true, 'sAccountNo is required']},
    sPhone: {type: Number, required: [true, 'sPhone is required']},
    sDateJoined: {type: Date, default: new Date().toISOString()},
    sLastLogin: {type: Date, default: new Date().toISOString()}
}, {collection: "Seller", timestamps: true } )


let connection = {}

//Returns model object of "Users" collection
connection.getUserCollection = () => {
    //establish connection and return model as promise
    return mongoose.connect( url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true} ).then( database => {
        return database.model( 'Users', usersSchema )
    } ).catch( () => {
        let err = new Error( "Could not connect to the database" );
        err.status = 500;
        throw err;
    } );
}

connection.getProductCollection = () => {
    //establish connection and return model as promise
    return mongoose.connect( url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true} ).then( database => {
        return database.model( 'Products', productSchema )
    } ).catch( () => {
        let err = new Error( "Could not connect to the database" );
        err.status = 500;
        throw err;
    } );
}

connection.getOrderCollection = () => {
    //establish connection and return model as promise
    return mongoose.connect( url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true} ).then( database => {
        return database.model( 'Order', orderSchema )
    } ).catch( () => {
        let err = new Error( "Could not connect to the database" );
        err.status = 500;
        throw err;
    } );
}


connection.getSellerCollection = () => {
    //establish connection and return model as promise
    return mongoose.connect( url, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true} ).then( database => {
        return database.model( 'Seller', sellerSchema )
    } ).catch( () => {
        let err = new Error( "Could not connect to the database" );
        err.status = 500;
        throw err;
    } );
}


// {
//     "uEmail": "jhon@gmail.com",
//     "uPass": "John@1234"
// }

module.exports = connection;