var Framework = function () {
    //there goes framework

}

Framework.prototype.checkFramework = function () {
    console.log('framewor imported');
}

Framework.prototype.router = function (obj) {
    this.router = obj.router;
}





console.log(`page loaded in ${document.location.hash.replace(/#/g, '')}`);