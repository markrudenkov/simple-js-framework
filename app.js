var app = new Framework('my-app');

app.router({
    routes: [
        {route: '/home', controller: 'homeController'},
        {route: '/login', controller: 'loginController'}
    ] 
});

// app.controller.register('homeController', function(controller, template) {
//     template = `<div>{{HOME}}</div>`;
//     controller.HOME = 'this is home';
// });

// app.controller.register('loginController', function(controller, template) {
//     template = `<div>{{LOGIN}}</div>`;
//     controller.LOGIN = 'you have to login';
// });

// alert(
//     document.URL + '\n'+
//     document.location.hash
// );

app.checkFramework();