var Framework = function () {
    //there goes framework
    let that = this;

    this.hash = '';

    that.template =
        {
            view: "New text!"
        }

    this.setTemplate = () => {
        var arr = document.getElementsByTagName('my-app')
        for (tag of arr) {
            tag.innerHTML = that.template.view;
        };
        console.log(document.getElementsByTagName('my-app'));
    };

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
            template.view = `<div> Default Home view</div>`;
            controller.HOME = 'Default Home view';
        }
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
        return this;
    }

    this.render = function () {
        that.getHash().getRouteController().setTemplate();
    }
}

Framework.prototype.checkFramework = function () {
    console.log('framewor imported');
}


