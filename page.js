$(document).ready(function(){
    var page = getQueryVariable("page")
    
    if (page){
        drawPage(page, '#services');
    }else{
        homepage()
    }
    
    
})

function drawContent(key, template, target){
    if (template){
        var c = content[key];

        var templ = templates[template]

        Mustache.parse(templ) 
        
        var rendered = Mustache.render(templ, c) 

        $(target).append(rendered);
    }

}

function homepage(){
    drawContent('web', 'service', '#services')
    drawContent('web', 'service-style', 'head')

    drawContent('manufactury', 'service', '#services')
    drawContent('manufactury', 'service-style', 'head')
} 

function drawPage(page, target){
    var template = templates['details']

    var content = details[page]

    Mustache.parse(template) 
    var rendered = Mustache.render(template, content) 
    
    $(target).append(rendered)





    var styleTemplate = templates['det-style']

    Mustache.parse(styleTemplate) 
    var renderedStyle = Mustache.render(styleTemplate, content) 

    $('head').append(renderedStyle)

    $.each(content.menu, function(index, val){
        var li = $('<li></li>');
        li.html($('<a></a>').html(val.text).attr("href", val.url));
        $('#nav-mobile').append(li);
    })


    
}

function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}