var content = {
    "web": {
            id: "web",
            name: "Web", 
            description: "Dise&ntilde;o e implementaci&oacute;n de aplicaciones web y apps para mobiles", 
            url: "index.html?page=web",
            style: {color: "#00DFFC", bgcolor: "#343838"}
        }, 
      "manufactury": {
            id: "3d", 
            name: "Manufacturing", 
            description: "Dise&ntilde;o y venta de impresoras 3D y servicio de impresi&oacute;n 3D", 
            url: "http://www.sadzee.cloud/blog.html",
            style: {color: "white", bgcolor: "#547980"}
        }, 
        "sam":{"id":"sam","name":"Sam","style":{"color":"#33454E","bgcolor":"#2DEBAE"},"url":"index.html?page=sam","description":"Categoria de prueba"},
        "ninegag":{"id":"ninegag","name":"ninegag","style":{"color":"blue","bgcolor":"white"},"url":"index.html?page=ninegag","description":"Pagina de imagenes graciosas"}

        
}

var details = {
    web: {
        id: "web", 
        title: "Desarrollo web",
        style: {
            color: "#00DFFC", 
            bgcolor: "#343838", 
            navbar: "", 
            bgimage: "", 
            border: "#00DFFC"
        }, 
        content: `
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
            <li>Aliquam tincidunt mauris eu risus.</li>
            <li>Vestibulum auctor dapibus neque.</li>
        </ul>
        `, 
        menu: [
            {text: "Catalogo", url: "http://sadzee.cloud"          }, 
            {text: "twitter" , url: "https://twitter.com/quirpie/" }
        ]
    }, 
    sam:{"id":"sam","title":"Sam","content":"<p>Hola, <strong>Sam</strong></p>\n<p>Esto funciona con un pseudo ajax muy extra&ntilde;o pero <em>genial</em></p>","style":{"color":"#33454E","bgcolor":"#2DEBAE","navbar":"white","bgimage":"","border":"white"}},
    ninegag: {"id":"ninegag","title":"ninegag","content":"<p>Aqu&iacute; una foto de <strong>Barbara Palvin</strong>, s&oacute;lo estoy probando insertar imagenes.&nbsp;</p>\n<p><img src=\"https://img-9gag-fun.9cache.com/photo/ad7DrQ9_700b.jpg\" alt=\"\" width=\"700\" height=\"733\" /></p>","style":{"color":"blue","bgcolor":"white","navbar":"white","bgimage":"","border":"white"}}
    
}