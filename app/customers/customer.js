nihol.factory("Customer", function(){
    function User(tmpObject)
      {
        this.name = tmpObject.name;
        this.address = tmpObject.address;
        this.telephone = tmpObject.telephone;
      };

    return Customer;
});