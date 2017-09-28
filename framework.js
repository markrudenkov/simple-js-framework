var Framework = function (custom_view_tag) {
    //there goes framework
    let that = this;
    this.hash = '';
    that.template =
        {
            view: 'New text!'
        }

    this.controllerPropChangeHandler = {
        set: function (obj, prop, value) {
            obj[prop] = value;
            console.log('new value ' + value);
            that.setDOM();
            return true;
        }
    }

    this.target_controller = {
        obj_name: 'controller',
        defaultRoute: { route: '/', controller: 'defaultController' },
        getControllerName: function () {
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

    this.controller = new Proxy(this.target_controller, this.controllerPropChangeHandler);

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

        if (route[0] === undefined) {
            route = [that.controller.defaultRoute];
        }

        that.controller[route[0].controller](this.controller, this.template);
        return this;
    }

    this.setDOM = () => {
        console.log('set dom called');
        var tag_arr = document.getElementsByTagName('my-app');
        for (tag of tag_arr) {
            var regex = new RegExp(/\{([^}]+)\}\}/, 'g');
            tag.innerHTML = that.template.view.replace(regex, (matched) => {
                return that.controller[matched.replace(/[\}\{]/g, "")];
            });
        };
        console.log('set dom cal end');
    };

    this.render = function () {
        that.getHash().getRouteController();
    }

    window.addEventListener("hashchange", that.render);
}

Framework.prototype.checkFramework = function () {
    console.log('framework imported');
}


