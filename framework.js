var Framework = function (custom_view_tag) {
    //there goes framework
    let that = this;

    this.hash = '';

    that.template =
        {
            view: 'New text!'
        }

    this.rendered = {
        view: ''
    }

    this.propChangeHandler = {

        set: function (obj,prop,value) {
            obj[prop] = value;
            console.log('new value ' + value);
            that.setDOM();
            return true;
        }
    }
    
    this.controllerLiteral = {
        
                obj_name: 'controller',
                defaultRoute: {route: '/', controller: 'defaultController'},
                getControllerName: function () {
                    // console.log('controller name: ' + this.obj_name);
                },
        
                register : function (name, func) {
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
  
    // console.log('literal' + JSON.stringify(this.controllerLiteral,null,2));
    this.controller = new Proxy (this.controllerLiteral,this.propChangeHandler);
   
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
        
        var tag_arr = document.getElementsByTagName('my-app');
        
        for (tag of tag_arr) {
            // console.log(tag_arr);
            var regex = new RegExp(/\{([^}]+)\}\}/, 'g');
            that.rendered.view  = that.template.view.replace(regex,(matched)=>{
                console.log('matched ' + matched.replace(/[\}\{]/g, "") );
                console.log('controler' + JSON.stringify(that.controller,null,2));
                console.log(that.controller);
                console.log(that.controller[matched.replace(/[\}\{]/g, "")]);
                 return that.controller[matched.replace(/[\}\{]/g, "")];
                //  return that.controller.DEFAULT;
            });
            // console.log('view ' + that.template.view );
            console.log('consistent control');
            console.log(that.controller.LOGIN);
            tag.innerHTML = that.rendered.view;
        };
        console.log('set dom cal end');
    };




    this.render = function () {
        that.getHash().getRouteController();
        // that.getHash().getRouteController();
    }
}

Framework.prototype.checkFramework = function () {
    console.log('framework imported');
}


