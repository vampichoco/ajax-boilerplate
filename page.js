var templates


function drawContent(key, template, target){
    if (template){
        var c = content[key];

        var templ = templates[template]

        Mustache.parse(templ) 
        
        var rendered = Mustache.render(templ, c) 

        $(target).append(rendered);
    }

}