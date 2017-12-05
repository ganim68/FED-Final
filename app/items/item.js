nihol.factory("Item", function(){
    function Item(tmpObject) 
        {
            this.iname = tmpObject.iname;
            this.code = tmpObject.code;
            this.price = tmpObject.price;
        };

    return Item;
});
