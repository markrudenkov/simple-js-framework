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

// app.setTemplate();
app.getRouteController(app.getHash()).setTemplate();

// app.controller.register('loginController', function(controller, template) {
//     template = `<div>{{LOGIN}}</div>`;
//     controller.LOGIN = 'you have to login';
// });

// alert(
//     document.URL + '\n'+
//     document.location.hash
// );

// app.checkFramework();
// console.log(app.controller);
// app.controller.getControllerName();