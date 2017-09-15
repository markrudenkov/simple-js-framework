var Framework = function () {
    //there goes framework
    this.template = "New text!";
    // this.template = `<div> simple framework </div>`;
    
    this.setTemplate = () => {
      
        var arr = document.getElementsByTagName('my-app')
        for(tag of arr){
            tag.innerHTML = this.template;
        };

        console.log(document.getElementsByTagName('my-app')); 
        
    };


    

    this.controller = {

        obj_name: 'controller',
        getControllerName: function () {
            console.log('controller name: ' + this.obj_name);
        },

        register: function (name, func) {
            if (!this[name]) {
                this[name] = func;
                // console.log('register works');
            }

        }
    };

    this.router = function (obj) {
        this.routes = obj.routes;
    }

    this.getHash = function () {
        return document.location.hash.replace(/#/g, '/');
    }

    this.getRouteController = function (hash) {
        
            var route = this.routes.filter((router_obj) => {
                if (router_obj.route === hash) {
                    return router_obj;
                }
            });
            // console.log(route[0].controller);
            // console.log(this.controller);
            // console.log(hash);
            this.controller[route[0].controller](new Object(),this.template);

            return this;
        }
}

Framework.prototype.checkFramework = function () {
    console.log('framewor imported');
}

// Framework.prototype.router = function (obj) {
//     this.routes = obj.routes;
// }


// Framework.prototype.getHash = function () {
//     return document.location.hash.replace(/#/g, '/');
// }

// Framework.prototype.getRouteController = function (hash) {

//     var route = this.routes.filter((router_obj) => {
//         if (router_obj.route === hash) {
//             return router_obj;
//         }
//     });
//     // console.log(route[0].controller);
//     // console.log(this.controller);
//     // console.log(hash);
//     this.controller[route[0].controller](new Object(),template);
// }

