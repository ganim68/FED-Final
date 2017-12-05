nihol.factory("Store", function(){
    function Store(tmpObject) 
        {
            this.code = tmpObject.code;
            this.quantity = tmpObject.quantity;
        };

    return Store;
});