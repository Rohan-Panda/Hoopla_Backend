class UserDetails {
    constructor ( obj ) {
        this.userId = obj.userId;
        this.uCredentials = obj.uCredentials;
        this.uName = obj.uName;
        this.uDOB = obj.uDOB;
        this.uPhone = obj.uPhone;
        this.uDateJoined = obj.uDateJoined;
        this.uLastLogin = obj.uLastLogin;
        this.uCart = obj.uCart,
        this.myOrders = obj.myOrders
    }
}

module.exports = UserDetails;