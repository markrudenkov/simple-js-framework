var Framework = function (custom_view_tag) {
    //there goes framework
    let that = this;

    this.hash = '';

    that.template =
        {
            view: "New text!"
        }

    this.propChangeHandler = {

        set: function (obj,prop,value) {
            obj[prop] = value;
            that.setDOM();
            return true;
        }
    }
    
    this.controllerLiteral = {
        
                obj_name: 'controller',
                defaultRoute: {route: '/', controller: 'defaultController'},
                getControllerName: function () {
                    console.log('controller name: ' + this.obj_name);
                },
        
                register: function (name, func) {
                    if (!this[name]) {
                        this[name] = func;
                    }
                },
        
                defaultController: function (controller, template) {
                    template.view = `<div> {{DEFAULT}} </div>`;
                    controller.DEFAULT = 'Default view';
                },
                obj_footer: 'footer'
            };

    console.log('literal' + JSON.stringify(this.controllerLiteral,null,2));
    // this.controller = new Proxy (this.controllerLiteral,this.propChangeHandler);
    // console.log('controler' + JSON.stringify(that.controller,null,2));

    this.controller = {
        
                obj_name: 'controller',
                defaultRoute: {route: '/', controller: 'defaultController'},
                getControllerName: function () {
                    console.log('controller name: ' + this.obj_name);
                },
        
                register: function (name, func) {
                    if (!this[name]) {
                        this[name] = func;
                    }
                },
        
                defaultController: function (controller, template) {
                    template.view = `<div> {{DEFAULT}} </div>`;
                    controller.DEFAULT = 'Default view';
                },
                obj_footer: 'footer'
            };





    this.router = function (obj) {
        this.routes = obj.routes;
    }

    this.getHash = function () {
        that.hash = document.location.hash.replace(/#/g, '/');
        return that;
    }

    this.getRouteController = () => {
        var route = this.routes.filter((router_obj) => {
            if (router_obj.route === that.hash) {
                return router_obj;
            }
        });

        if(route[0] === undefined){
            route = [that.controller.defaultRoute];
        }

        that.controller[route[0].controller](this.controller, this.template);
        // that.controller.defaultController(this.controller, this.template);
        return this;
    }

    this.setDOM = () => {
        console.log('set dom called');
        var tag_arr = document.getElementsByTagName(custom_view_tag);
        for (tag of tag_arr) {
            var regex = new RegExp(/\{([^}]+)\}\}/, 'g');
            that.template.view  = that.template.view.replace(regex,(matched)=>{
                // console.log('matched ' + matched.replace(/[\}\{]/g, "") );
                // console.log('controler' + JSON.stringify(that.controller,null,2));

                 return that.controller[matched.replace(/[\}\{]/g, "")];
                //  return that.controller.DEFAULT;
            });
            console.log('view ' + that.template.view );
            tag.innerHTML = that.template.view;
        };
    };




    this.render = function () {
        that.getHash().getRouteController();
        that.getHash().getRouteController().setDOM();
    }
}

Framework.prototype.checkFramework = function () {
    console.log('framework imported');
}


