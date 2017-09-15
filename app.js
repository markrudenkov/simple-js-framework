var app = new Framework();

app.router({
    routes: [
        {route: '/home', controller: 'homeController'},
        {route: '/login', controller: 'loginController'}
    ] 
});

app.controller.register('homeController', function(controller, template) {
    console.log('template' + template);

    template = `<div> home</div>`;
    controller.HOME = 'this is home';

    console.log('routercontroller works');
    console.log('template' + template);

});

app.getRouteController(app.getHash()).setTemplate();

