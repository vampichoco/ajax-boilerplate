$(document).ready(function(){
    boot();
})

function boot(){
    loadContent();
} 

function loadContent(){

    var web = {
                id: "web",
                name: "Web", 
                description: "dise&ntilde;o e implementaci&oacute;n de aplicaciones web y apps para mobiles", 
                url: "http://victorhugo.biz",
                style: {color: "#00DFFC", bgcolor: "#343838"}
             }

    var _3d = {
                id: "3d", 
                name: "Manufacturing", 
                description: "Dise&ntilde;o y venta de impresoras 3D y servicio de impresi&oacute;n 3D", 
                url: "http://www.sadzee.cloud/blog.html",
                style: {color: "#BF4D28", bgcolor: "#F6F7BD"}
         }

    renderService(web)
    renderStyle(web)

    renderService(_3d)
    renderStyle(_3d)

    

    
}

function renderService(service){
    var template = $('#service-template').html(); 
    Mustache.parse(template) 
    var rendered = Mustache.render(template, service) 
    $('#services').append(rendered)

} 

function renderStyle(service){
    var template = $('#style-template').html(); 
    
    Mustache.parse(template) 
    var rendered = Mustache.render(template, service) 
    console.log(rendered)

    $(rendered).appendTo('head')
}