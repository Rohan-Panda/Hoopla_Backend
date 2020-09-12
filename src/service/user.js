const dbLayer = require( '../model/user' );

let user = {}

// user.setupDB = () => {
//    return dbLayer.setupDB().then( response => {  
//     if(response){
//         return response;
//        }else{
//            let err = new Error('Insertion Failed');
//            err.status = 500;
//           throw err;
//        } 
//    });
// }
//Verfying the credentials of user
user.loginUser = ( uEmail,pass ) => {
    return dbLayer.userLogin( uEmail,pass ).then( response => {
        return response
    } )
}

user.loginSeller = ( sEmail,pass ) => {
    return dbLayer.sellerLogin( sEmail,pass ).then( response => {
        return response;
    } )
}
// user.getUserDetails = (uEmail, uPass) => {
//     return dbLayer.getUserDetails(uEmail, uPass).then( response => {
//         return response
//     })
// }
user.AddProducts=( productProfile )=>{
    return dbLayer.AddProducts( productProfile ).then( ( prodetails )=>{
        console.log( "from service",prodetails )
        if( prodetails==null ){
            let err =new Error ( "Product Insertion failed" )
            err.status=400
            throw err
        } else return prodetails
    } )

}

user.registerUser = ( userProfile ) => {
    return dbLayer.userRegister( userProfile ).then( ( userDetails ) => {
        console.log( "uservice", userDetails );
        
        if( userDetails == null ) {
            let err = new Error( "User Insertion failed" );
            err.status = 400;
            throw err;
        } else return userDetails
    } )
}

user.updateCartProduct=( userId, cartProds )=>
{
    return dbLayer.updatecartProds( userId,cartProds ).then( ( products ) => {
        if( products === null ) {
            let err = new Error( "Unable to check out: " +cartProds );
            err.status = 404;
            throw err;
        } else{
            return products;
        }
    } )
}

// ************************************************************************************************************
user.updateCartQuantity=( userId, cartQuantity )=>
{
    return dbLayer.updateCartQuantity( userId,cartQuantity ).then( ( quantity ) => {
        if( quantity === null ) {
            let err = new Error( "Unable to check out: " +cartQuantity );
            err.status = 404;
            throw err;
        } else{
            return quantity;
        }
    } )
}
// ************************

user.getProducts = ( pCategory ) => {
    return dbLayer.getProducts( pCategory ).then( ( products ) => {
        if( products === null ) {
            let err = new Error( "No Products is found for pCategory: " + pCategory );
            err.status = 404;
            throw err;
        } else{
            return products;
        }
    } )
}

user.updateAvailability = ( products )=>{
    return dbLayer.updateAvailability( products ).then( ( res ) => {
        if( res === null ) {
            let err = new Error( "unable to update the availability " );
            err.status = 404;
            throw err;
        } else{
            return res;
        }
    } )
    

}



user.getProductDetails = ( p_id ) => {
    return dbLayer.getProductDetails( p_id ).then( ( productDetails ) => {
        if( productDetails === null ) {
            let err = new Error( "No Products is found for pCategory: " + p_id );
            err.status = 404;
            throw err;
        } else{
            return productDetails;
        }
    } )
}
user.getProducts1 = ( key ) => {
    return dbLayer.getProducts1( key ).then( ( products ) => {
        if( products === null ) {
            let err = new Error( "No Products is found for key: " + key );
            err.status = 404;
            throw err;
        } else{
            return products;
        }
    } )
}
user.getCustomerCart = ( userId ) => {
    return dbLayer.getCustomerCart( userId ).then( ( data ) => {
        if( data === null ) {
            let err = new Error( "No Cart is found for userId: " + userId );
            err.status = 404;
            throw err;
        } else{
            return data;
        }
    } )
}

user.addCustomerCart = ( userId, cartData ) => {
    return dbLayer.addCustomerCart( userId, cartData ).then( ( data ) => {
        console.log( "addCartData", data );
        
        if( data === null ) {
            let err = new Error( "No Cart is found for userId: " + userId + "Not able to add cartdata" + cartData );
            err.status = 404;
            throw err;
        } else{
            return data;
        }
    } )
}

user.deleteCartProduct = ( userId, cartProdIds ) => {
    return dbLayer.deleteCartProduct( userId, cartProdIds ).then( ( data ) => {
        console.log( "deleteCartData", data );
        if( data === null ) {
            let err = new Error( "No Cart is found for userId: " + userId + "Not able to add delete cart data of id" + cartProdIds );
            err.status = 404;
            throw err;
        } else{
            console.log( "delete service", data );
            
            return data;
        }
    } )
}
// user.updateAvailability=()=>{
//     return dbLayer.updateAvailability(cartProdIds).then((data) => {
//         console.log("updated availability", data);
//         if (data === null) {
//             let err = new Error("Unable to update availability ");
//             err.status = 404;
//             throw err;
//         } else {
//             console.log("update service", data);
            
//             return data;
//         }
//     })
// }

user.getOrder = ( userId ) => {
    return dbLayer.getOrder( userId ).then( ( data ) => {
        if( data === null ) {
            let err = new Error( "No Order is found for userId: " + userId );
            err.status = 404;
            throw err;
        } else{
            return data;
        }
    } )
}
user.registerSeller = ( SellerProfile ) => {
    return dbLayer.SellerRegister( SellerProfile ).then( ( SellerDetails ) => {
        console.log( "sservice", SellerDetails );
        
        if( SellerDetails == null ) {
            let err = new Error( "User Insertion failed" );
            err.status = 400;
            throw err;
        } else return SellerDetails
    } )
}




module.exports = user