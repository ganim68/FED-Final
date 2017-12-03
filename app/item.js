nihol.factory("Item", function(){
    function Item(tmpObject) 
        {
            this.name = tmpObject.mame;
            this.code = tmpObject.code;
            this.price = tmpObject.price;
        };

    return Item;
});