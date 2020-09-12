let Validator={}

Validator.validateEmailid=function ( email ){
    let pattern = new RegExp( /^[A-z][A-z0-9.]+@[a-z]+\.[a-z]{2,3}$/ )
    if( !( pattern.test( email ) ) ){
    let err = new Error( "Email id format is wrong" );
     err.status = 406
      throw err;
    }


}

Validator.validatePassword=function ( password ){
    let pattern = new RegExp( /^(?=.*[A-Z])(?=.*[!@#$&*%&])(?=.*[0-9])(?=.*[a-z]).{7,20}$/ )
    if( !( pattern.test( password ) ) ){
    let err = new Error( "Password must have minimum 7 characters and maximum 20 characters and should contain  uppercase, lowercase,digits and special characters" );
     err.status = 406
      throw err;
    }

}

Validator.userData= function ( userData ){
    
    if( !( userData.uName.match( /^[A-z]{1}[A-z\s]*[A-z]{1}$/ )||userData.uName.match( /^[A-z]{1}[A-z\s]*[A-z]{1}$/ ) ) ) {
        let err = new Error( "name should contain only alphabets and spaces, name should not start and end with a space" );
        err.status = 406
        throw err;
    }
    else if( !userData.uEmail.match( /^[A-z][A-z0-9.]+@[a-z]+\.[a-z]{2,3}$/ ) )
    { let err = new Error( "Email id format is wrong" );
      err.status = 406
      throw err;

    }
    else if( !userData.uPass.match( /^(?=.*[A-Z])(?=.*[!@#$&*%&])(?=.*[0-9])(?=.*[a-z]).{7,20}$/ ) ){
      let err = new Error( "Password must have minimum 7 characters and maximum 20 characters and should contain  uppercase, lowercase,digits and special characters" );
      err.status = 406
      throw err;
    }
    else if( !userData.uPhone.match( /^\d{10}$/ ) ){
        let err = new Error( "Invalid phoneNo" );
        err.status = 406
        throw err;
    }
    else if( !userData.address.match( /^.{10,}$/ ) ){
        let err = new Error( "address must be minimum of ten characters" );
        err.status = 406
        throw err;
    }
    else if( new Date( userData.uDOB )> new Date() ){
        let err = new Error( "date of birth must be less than today" );
        err.status = 406
        throw err;

    }
    
}

module.exports = Validator;