var app = new Framework();

app.router({
    routes: [
        {route: '/home', controller: 'homeController'},
        {route: '/login', controller: 'loginController'}
    ] 
});

app.controller.register('homeController', function(controller, template) {

    template.view = `<div> {{HOME}}</div>`;
    controller.HOME = 'this is home';
});

app.controller.register('loginController', function(controller, template) {

    template.view = `<div> {{LOGIN}}  </div>`;
    controller.LOGIN = 'this is login';
});

console.log('render is started');

app.render();



