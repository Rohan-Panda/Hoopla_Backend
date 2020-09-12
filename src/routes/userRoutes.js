const express = require( "express" );
const userRouting = express.Router();
const userService = require( '../service/user' );
const createDb = require( '../model/dbsetup' );
const UserDetails = require( '../model/userDetails' )
const CartProducts = require( '../model/cartProduct' )
const SellerDetails= require( "../model/sellerDetails" )
const ProductDetails= require( "../model/ProductDetails" )
const Electronics=require( "../model/Electronics" )
const Clothing=require( "../model/Clothing" )
const Shoes=require( "../model/Shoes" )
const Furniture=require( "../model/Furniture" )
//Setup the database
userRouting.get( "/userDBsetup", ( req, res, next ) => {
    createDb.setupDb().then( response =>{
        if( response ) res.json( { message: "Successfully inserted "+ response +" documents into database"} )
    } ).catch( error =>{
       next( error );
    } )
} )

//User LOGIN
userRouting.post( '/login', ( req,res,next )=>{
    var uEmail= req.body.uEmail;
    var uPass=req.body.uPass;
    return userService.loginUser( uEmail, uPass ).then( userData => {
        res.json( userData );
    } ).catch( err => {
        console.log( err.message )
        next( err );
    } );
} );

// userRouting.get('/userDetails/:email/:pass', (req, res, next) => {
//     let uEmail = req.params.email;
//     let uPass = req.params.pass;
//     userService.getUserDetails(uEmail, uPass).then((data) => {
//         res.json(data);
//     }).catch((err) => next(err))
// })


userRouting.post( '/register', ( req,res,next )=>{
    console.log( "body", req.body );
    // console.log("uName", req.body.uName);
    const userProfile = new UserDetails( req.body );
    console.log( "userdata", userProfile );
    return userService.registerUser( userProfile ).then( data => {
        res.json( data );
    } ).catch( err => {
        console.log( err.message )
        next( err );
    } );
} );

userRouting.get( '/getProducts/:pCategory', ( req, res, next ) => {
    let pCategory = req.params.pCategory;
    userService.getProducts( pCategory ).then( ( products ) => {
        res.json( products );
    } ).catch( ( err ) => next( err ) )
} )
userRouting.put( '/updprod',( req,res,next )=>{
    console.log( "product",req.body )
    const product=new ProductDetails( req.body )
    // const productProfile=new compProduct({})
    
    if( product.pCategory=="Electronics" ){
        const electronics=new Electronics( req.body )
        product.specification={"Electronics": electronics}
    }
    else if( product.pCategory=="Clothing" ){
    const clothing=new Clothing( req.body )
    product.specification={"Clothing": clothing}
    }
    else if( product.pCategory == "Shoes" ) {
        const shoes = new Shoes( req.body )
        product.specification = { "Shoes": shoes}
    }
   
    else if( product.pCategory == "Furniture" ) {
        const furniture = new Furniture( req.body )
        product.specification = { "Furniture": furniture }
    }
    let productProfile={
        pRating: 0,
        pAvailability: product.pQuantity,
        pDetails: product
    }
    
    return userService.AddProducts( productProfile ).then( data=>{
        res.json( data )
    } ).catch( err=>{
        console.log( err.message )
        next( err )
    } )

} )
userRouting.get( '/productDetail/:p_id', ( req, res, next ) => {
    let p_id = Number( req.params.p_id );
    userService.getProductDetails( p_id ).then( ( productDetails ) => {
        res.json( productDetails );
    } ).catch( ( err ) => next( err ) )
} )

userRouting.get( '/getOrders/:userid', ( req, res, next ) => {
    let u_id = Number( req.params.userid );
    userService.getOrders( u_id ).then( ( details ) => {
        res.json( details );
    } ).catch( ( err ) => next( err ) )
} )
userRouting.get( '/getProducts1/:key', ( req, res, next ) => {
    let key = req.params.key;
    userService.getProducts1( key ).then( ( products ) => {
        res.json( products );
    } ).catch( ( err ) => next( err ) )
} )
userRouting.get( '/search/:pName', ( req, res, next ) => {
    let pName = req.params.pName;
    userService.getSearchProducts( pName ).then( ( data ) => {
        res.json( data );
    } ).catch( ( err ) => next( err ) )
} )

userRouting.get( '/cart/:userId', ( req, res, next ) => {
    let userId = Number( req.params.userId );
    userService.getCustomerCart( userId ).then( ( data ) => {
        res.json( data );
    } ).catch( ( err ) => next( err ) )
} )

userRouting.post( '/cartData/:userId', ( req, res, next ) => {
    console.log( "bodycartData", req.body );
    const cartData = new CartProducts( req.body );
    console.log( "cartDataAchal", cartData );
    let userId = Number( req.params.userId );
    userService.addCustomerCart( userId, cartData ).then( ( data ) => {
        res.json( data );
    } ).catch( ( err ) => next( err ) )
} )

userRouting.put( '/cart/:userId/:cartProdIds', ( req, res, next ) => {
    console.log( "data in put req " ,req.body )
    let userId = Number( req.params.userId );
    let cartProdIds = Number( req.params.cartProdIds );
    userService.deleteCartProduct( userId, cartProdIds ).then( ( data ) => {
        console.log( "delete routes data", data );
        
        res.json( data );
    } ).catch( ( err ) => next( err ) )
} )


userRouting.put( '/cart1/:userId', ( req, res, next ) => {
    
    console.log( "data in update check out  put req " ,req.body )
    let userId = req.params.userId;
    let cartProds = req.body;
  return userService.updateCartProduct( userId, cartProds ).then( ( data ) => {
        console.log( "delete update ordersss   data", data );
        res.json( data );
    } ).catch( ( err ) => next( err ) )
} )


// inc dec input tag******************************************************************************
userRouting.put( '/updatingCart/inc/:userId', ( req, res, next ) => {
    console.log( "data for quantity update" ,req.body )
    let userId = Number( req.params.userId );
    let cartQuantity = req.body;
    console.log( "userid INC", userId, cartQuantity );
    
  return userService.updateCartQuantity( userId, cartQuantity ).then( ( data ) => {
        console.log( "updated quantity", data );
        res.json( data );
    } ).catch( ( err ) => next( err ) )
} )
// ***************************************

userRouting.put( '/uAvailability', ( req, res, next ) => {
    console.log( "data in update quantity " ,req.body )
    let cartProds = req.body;
 userService.updateAvailability( cartProds ).then( ( data ) => {
        console.log( "update availability in routes", data );
        res.json( data );
    } ).catch( ( err ) => next( err ) )
} )

userRouting.get( '/order/:userId', ( req, res, next ) => {
    let userId = Number( req.params.userId );
    userService.getOrder( userId ).then( ( data ) => {
        res.json( data );
    } ).catch( ( err ) => next( err ) )
} )

userRouting.post( '/sellerlogin',( req,res,next )=>{
    var uEmail= req.body.uEmail;
    var uPass=req.body.uPass;
    return userService.loginSeller( uEmail, uPass ).then( sellerData => {
        res.json( sellerData );
    } ).catch( err => {
        console.log( err.message )
        next( err );
    } );
} )
userRouting.post( '/regSeller', ( req,res,next )=>{
    console.log( "body", req.body );
    // console.log("uName", req.body.uName);
    const SellerProfile = new SellerDetails( req.body );
    console.log( "sellerdata", SellerProfile );
    return userService.registerSeller( SellerProfile ).then( data => {
        res.json( data );
    } ).catch( err => {
        console.log( err.message )
        next( err );
    } );
} );

module.exports = userRouting