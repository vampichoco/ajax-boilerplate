var templates = {
    "service": `
        <div class="service service-{{id}}" id="service-{{id}}">
            <div class="service-title service-{{id}}-title">{{&name}}</div> 
            <div class="service-description service-{{id}}-description">{{&description}}</div>
            <div class="service-footer">
                <button id="button-{{id}}"
                class="service-button service-{{id}}-button"
                onclick="window.location = '{{url}}'">Ver m&aacute;s
                </button>
            </div>
        </div>
    `, 
    "service-style": `
    <style>
    .service-{{id}}{
    background-color: {{style.bgcolor}}
    } 

    .service-{{id}}-button{
    background-color: {{style.color}}; 
    color: {{style.bgcolor}};
    border: 2px solid {{style.color}};
    } 

    .service-{{id}}-title{
    background-color: {{style.bgcolor}}; 
    color: {{style.color}};
    top:0px;
    } 

    .service-{{id}}-description{
    color:{{style.color}}
    }
</style>
    `
}