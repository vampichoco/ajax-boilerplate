$(document).ready(function(){
    boot();
})

function boot(){
    $('#preview-btn').click(function(){
        tinyMCE.triggerSave();
        var text = $('#textta').val();
        window.alert(text);

        var id = $('#id').val();
        var title = $('#title').val();
        var style = $('#styletb').val();
        var color = $('#color').val(); 
        var bgcolor = $('#bgcolor').val(); 
        var navbar = $('#navbar').val() 
        var bgimage = $('#bgimage').val();
        var desc = $('#descta').val();
        var borderColor = $('#bordercolor').val();

        var preview = {
            id: id, 
            title: title, 
            content: text, 
            style: {
                color: color, 
                bgcolor: bgcolor, 
                navbar: navbar,
                bgimage: bgimage, 
                border: borderColor
            }
        } 

        var ribbon = {
            id: id,
            name: title, 
            style: {
                color: color, 
                bgcolor: bgcolor
            },
            url: "index.html?page=" + id,
            description: desc
        }

        drawPage(preview, "#preview")
        var data = JSON.stringify(preview) + String.fromCharCode(13) + JSON.stringify(ribbon)
        var blob = new Blob([data], {type: "text/plain"}) 

        var url = window.URL.createObjectURL(blob);

        var win = window.open(url, '_blank');


    }) 


}

function drawPage(page, target){
    var template = templates['details']

    var content = page

    Mustache.parse(template) 
    var rendered = Mustache.render(template, content) 
    
    $(target).append(rendered)





    var styleTemplate = templates['det-style']

    Mustache.parse(styleTemplate) 
    var renderedStyle = Mustache.render(styleTemplate, content) 

    $('head').append(renderedStyle)

    //$.each(content.menu, function(index, val){
    //    var li = $('<li></li>');
    //    li.html($('<a></a>').html(val.text).attr("href", val.url));
    //    $('#nav-mobile').append(li);
    //})


    
}