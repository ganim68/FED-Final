nihol.factory("Customer", function(){
    function Customer(tmpObject)
      {
        this.name = tmpObject.name;
        this.address = tmpObject.address;
        this.telephone = tmpObject.telephone;
      };

    return Customer;
});