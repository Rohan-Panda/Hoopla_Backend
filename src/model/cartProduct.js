class CartProducts {
    constructor ( obj ) {
        this.cartProdIds = obj.cartProdIds,
        this.pName = obj.pName,
        this.pPrice =  obj.pPrice,
        this.pAvailability = obj.pAvailability,
        this.pDiscount= obj.pDiscount,
        this.pShippingCharges = obj.pShippingCharges,
        this.pQuantity = obj.pQuantity
    }
}

module.exports = CartProducts;