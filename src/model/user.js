// const collection = require('../utilities/connection');
// const userProfile = require('./User.json');
const dbModel = require( '../utilities/connection' );

let user = {}



user.generateId = () => {
    return dbModel.getUserCollection().then( ( users ) => {
        return users.distinct( "userId" ).then( ( ids ) => {
            let uId = Math.max( ...ids );
            return uId + 1;
        } )
    } )
}
user.generateId1 = () => {
    return dbModel.getProductCollection().then( ( pros ) => {
        return pros.distinct( "p_id" ).then( ( ids ) => {
            let uId = Math.max( ...ids );
            return uId + 1;
        } )
    } )
}
user.generateOrderId = () => {
    return dbModel.getUserCollection().then( ( users ) => {
        return users.distinct( "myOrders.orderId" ).then( ( ids ) => {
            let uId = Math.max( ...ids );
            return uId + 1;
        } )
    } )
}
user.generateSellerId = () => {
    return dbModel.getSellerCollection().then( ( sellers ) => {
        return sellers.distinct( "sId" ).then( ( ids ) => {
            let uId = Math.max( ...ids );
            return uId + 1;
        } )
    } )
}

//Verify the user credentials and modify the last logout
user.userLogin = ( uEmail,uPass ) => {
    return dbModel.getUserCollection().then( userColl => {
        return userColl.findOne( {"uCredentials.uEmail": uEmail} ).then( data => {
            console.log( "loginData", data );
            
            if( data ){
                if( uPass == data['uCredentials']['uPass'] ){
                    return userColl.updateOne( {"uCredentials.uEmail": uEmail},{$set: {"uProfile.uLastLogin": new Date().toISOString()}} ).then( res => {
                        if( res.nModified === 1 ){
                            return data
                        }
                    } )
                } else{
                    throw new Error( "The password entered is incorrect!!" )
                }
            } else{
                throw new Error( "You are not registered.Please register to login" ); 
            }
        } )
    } ) 
    
}

user.sellerLogin = ( sEmail,sPass ) => {
    return dbModel.getSellerCollection().then( userColl => {
        return userColl.findOne( {"sCredentials.sEmail": sEmail} ).then( data => {
            console.log( "loginData", data );
            
            if( data ){
                if( sPass == data['sCredentials']['sPass'] ){
                  
                    return data

                } else{
                    throw new Error( "The password entered is incorrect!!" )
                }
            } else{
                throw new Error( "You are not registered.Please register to login" ); 
            }
        } )
    } ) 
    
}
user.AddProducts=( productProfile )=>{
    return dbModel.getProductCollection().then( ( model )=>{
        return user.generateId1().then( ( newp_id )=>{
            productProfile.p_id=newp_id
            return model.insertMany( [productProfile] ).then( ( data )=>{
                console.log( "prod details",data )

                if( data.length!=0 ){
                    return"Successfully Inserted"
                }
                else{
                    return null
                }
            } )

        } )
    } )
}
user.getUserDetails = ( uEmail, uPass ) => {
    return dbModel.getUserCollection().then( ( model ) => {        
        return model.find( { $and: [ { "uCredentials.uEmail": uEmail }, { "uCredentials.uPass": uPass } ] }, { _id: 0 } ).then( ( userData ) => {
            console.log( "user Daetails", userData );
            if( !userData || userData.length == 0 ) return null;
            else return userData;
        } )
    } )
}
user.userRegister = ( userProfile ) => {
    return dbModel.getUserCollection().then( ( model ) => {
            let uEmail = userProfile.uCredentials.uEmail
                console.log( "email", uEmail )
            return model.findOne( {"uCredentials.uEmail": uEmail} ).collation( { locale: 'en', strength: 1 } ).then( ( data ) => {
                console.log( "userRegisterData", data );
                if( data ){
                    throw new Error( "This email Id is already registered" )
                }
                else{
                    return user.generateId().then( ( newUserId ) => {
                    userProfile.userId = newUserId;       
                    userProfile.uDateJoined = new Date();
                    return model.insertMany( [userProfile] ).then( ( data ) => {
                        console.log( "usmodel", data );
                        if( data.length != 0 ) {
                            return userProfile
                        } else{
                            return null
                        }
                    } )
                } )
            }
        } )
    } )
}
user.SellerRegister = ( SellerProfile ) => {
    return dbModel.getSellerCollection().then( ( model ) => {
        return user.generateSellerId().then( ( newSellerId ) => {
            SellerProfile.sId = newSellerId;
            console.log( "sData", SellerProfile );
            
            // userProfile.uCredentials.uEmail = userProfile.uProfile.uEmail;
            // userProfile.uCredentials.uPass = userProfile.uProfile.uPass;            
            SellerProfile.uDateJoined = new Date();
            return model.insertMany( [SellerProfile] ).then( ( data ) => {
                console.log( "smodel", data );

                if( data.length != 0 ) {
                    return"Successfully Inserted, Welcome to Hoopla"
                } else{
                    return null
                }
            } )
        } )
    } )
}

user.getProducts = ( pCategory ) => {
    return dbModel.getProductCollection().then( ( model ) => {
        console.log( "products" );
        
        return model.find( { "pDetails.pCategory": pCategory}, { _id: 0 } ).then( ( products ) => {
            console.log( products );
            
            if( !products || products.length == 0 ) return null;
            else return products;
        } )
    } )
}

user.getOrders = ( userid ) => {
    return dbModel.getUserCollection().then( ( model ) => {
        console.log( "orders" );
        
        return model.findOne( { userId: userid},{ _id: 0 ,myOrders: 1,userId: 1} ).then( ( orders ) => {
            console.log( orders );
            
            if( !orders || orders.length == 0 ) return null;
            else return orders;
        } )
    } )
}

user.getProductDetails = ( p_id ) => {
    return dbModel.getProductCollection().then( ( model ) => {
        console.log( "productDetails" );
        
        return model.find( { "p_id": p_id}, { _id: 0 } ).then( ( Details ) => {
            console.log( Details );
            
            if( !Details || Details.length == 0 ) return null;
            else return Details;
        } )
    } )
}
user.getProducts1 = ( key ) => {
        return dbModel.getProductCollection().then( ( model ) => {
            console.log( "products",key );
            
            
            return model.find( { "pDetails.pCategory": {$regex: new RegExp( key,"i" )}}, { _id: 0 } ).then( ( products ) => {
                // return model.find($or[{"pDetails.pDescription":{$regex:new RegExp(key,"i")}},{"pDetails.pName":{$regex:new RegExp(key,"i")}}],{_id:0}).then((products)=>{
                console.log( products );
                
                if( !products || products.length == 0 ) {
                    return model.find( { "pDetails.pName": {$regex: new RegExp( key,"i" )}}, { _id: 0 } ).then( ( products ) => {
                        console.log( products );
                        
                        if( !products || products.length == 0 ) return null;
                        else return products;
                    } )
                }
                else return products;
            } )
        } )
    }
 
    user.getCustomerCart = ( userId ) => {
        return dbModel.getUserCollection().then( ( model ) => {
            console.log( "userId", userId );
            return model.find( { "userId": userId},{ _id: 0, uCart: 1 } ).then( ( data ) => {
                console.log( "uCart",data[0] );
                if( !data || data.length == 0 ) return null;
                else return data[0].uCart;
            } )
        } )
    }
    
    // user.addCustomerCart = (userId, cartData) => {
    //     return dbModel.getUserCollection().then((model) => {
    //         console.log("userId", userId );
    //         console.log("cartData", cartData );
    //         return model.updateOne({ "userId": userId},{ $push: { "uCart":  cartData} }).then((data) => {
    //             console.log("afterUpdating",data);
    //             if (!data || data.length == 0) return null;
    //             else return data;
    //         })
    //     })
    // }

    user.addCustomerCart = ( userId, cartData ) => {
        return dbModel.getUserCollection().then( ( model ) => {
            let cartProdIds = cartData.cartProdIds;
            console.log( "inside add cart", cartProdIds, "quantity", cartData.pQuantity );
            // cartData.map((item, index) => {

            // })
            return model.updateOne( { $and: [ { "userId": userId }, { "uCart.cartProdIds": cartProdIds } ] }, { $inc: { "uCart[pQuantity]": 1 } } ).then( ( data ) => {
               console.log( "add cart data", data );
                if( data.nModified == 0 ){
                    return model.updateOne( { "userId": userId},{ $push: { "uCart": cartData} } ).then( ( data ) => {
                        console.log( "afterUpdating cart",data );
                        if( !data || data.length == 0 ) return null;
                        else return data;
                    } )
                } else{
                    return data
                }
            } )
        } )
    }
    
    user.deleteCartProduct = ( userId, cartProdIds ) => {
        return dbModel.getUserCollection().then( ( model ) => {
            console.log( "userId", userId );
            console.log( "cartProdIds", cartProdIds );
            return model.updateOne( { "userId": userId }, { $pull: { "uCart": { "cartProdIds": cartProdIds } } } ).then( ( data ) => {
                console.log( "afterUpdating delete cart",data );
                if( !data || data.length == 0 ) return null;
                else{ return data}            
            } )
        } )
    }
    
   user.updateAvailability=( products )=>{
    return dbModel.getProductCollection().then( ( model ) => {
        return products.map( ( p )=>{
           var val=-p.quantity;
            return model.updateOne( { "p_id": p.cartProdIds},{ $inc: {"pAvailability": Number( val )} } )
            .then( ( dd )=>{
                console.log( "after updating availability ",dd );
                        if( dd.nModified==0 ) return null;
                         else{ console.log( "in model your updated availability ",dd ); return dd}  

                    } )
                 } )    
        } ) 

   }

    user.updatecartProds=( userId,cartProds )=>{
        return dbModel.getUserCollection().then( ( model ) => {
            return user.generateOrderId().then( ( orderId ) => {
          cartProds.orderId=orderId;
            return model.updateOne( { "userId": userId },{$push: { "myOrders": cartProds},$set: {"uCart": []}} ).then( ( d )=>{
                    console.log( "afterUpdating and delete cart in the model file function ",d );
                        return model.findOne( {"userId": userId},{_id: 0,myOrders: 1} )
                        .then( ( dd )=>{
                            if( !dd || dd.length == 0 ) return null;
                             else{ console.log( "in model your order data is ",dd ); return dd}  

                        } )
                     } )
                  
                   
                    } )
                } )
    }

// ***********************************************************************************************************************
user.updateCartQuantity=( userId,cartQuantity )=>{
    return dbModel.getUserCollection().then( ( model ) => {
        let p_Id = cartQuantity.p_Id;
        let index = cartQuantity.index;
        return model.updateOne( { $and: [{"userId": userId}, {"uCart[cartProdIds]": p_Id}]  }, { $pop: { "uCart": index} } ).then( ( data )=>{
            if( !data || data.length == 0 ) return null;
             else{ console.log( "in model your quantity updated data is ",data ); return data}
        } )
    } )
}
// ***********************************************************************************************************************

    user.getOrder = ( userId ) => {
        return dbModel.getOrderCollection().then( ( model ) => {
            console.log( "userId", userId );
            
            return model.find( { "userId": userId},{ _id: 0 } ).then( ( data ) => {
                console.log( "order",data );
                
                if( !data || data.length == 0 ) return null;
                else return data;
            } )
        } )
    }

module.exports = user