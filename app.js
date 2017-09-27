var app = new Framework('my-app');

app.router({
    routes: [
        {route: '/home', controller: 'homeController' },
        {route: '/login', controller: 'loginController'},
        {route: '/about', controller: 'aboutController'}
    ] 
});

app.controller.register('homeController', function(controller, template) {

    template.view = `<div> {{HOME}}</div>`;
    controller.HOME = 'this is home';
});

app.controller.register('loginController', function(controller, template) {

    template.view = `<div> {{LOGIN}}  </div>`;
    controller.LOGIN = 'this is login';

    setTimeout(function() {
        controller.LOGIN = '2222';
        console.log(controller.LOGIN);
    }, 1000);
});

console.log('render is started');

app.render();



