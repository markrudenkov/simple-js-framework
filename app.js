var app = new Framework();

app.router({
    routes: [
        {route: '/home', controller: 'homeController'},
        {route: '/login', controller: 'loginController'}
    ] 
});

app.controller.register('homeController', function(controller, template) {

    template.view = `<div> HOME</div>`;
    controller.HOME = 'this is home';

});


app.render();



