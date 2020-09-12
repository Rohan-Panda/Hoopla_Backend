class ProductDetails {
    constructor ( obj ) {


        this.s_Id = obj.s_Id;
        this.pCategory = obj.pCategory
        this.pName = obj.pName
        this.pDescription = obj.pDescription
        this.price = obj.price
        this.pQuantity = obj.pQuantity
        this.pDiscount = obj.pDiscount
        this.pShippingCharges = obj.pShippingCharges
        this.pImage = obj.pImage
        this.specification = obj.specification
    }
}

module.exports = ProductDetails;




