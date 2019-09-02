// Application Functions
    // Global Variables
var global_debug = true

    // Parsing of content
function parse_products( response_body )
{
    var x = 0;

    arr = []

    // Retrieve individual products, in the katalogs
    for( x = 0; 
         x < response_body.products_list.length; 
         x ++ )
    {    
        console.log( response_body.products_list[x] );

        var newArr = null;

        axios.get( response_body.products_list[x].url ).then( response => ( newArr = parse_product( response.data ) ) );

        var y = null;

        for( y = 0; 
             y < newArr.length; 
             y++)
        {
            arr.push[ newArr[y] ];
        }

    }

    return arr;
};

function parse_product( response_body )
{
    console.log( response_body.products );

    var arr = [];

    var x = null;
    
    for( x = 0; 
         x < response_body.products.length; 
         x ++ )
    {
        var current = response_body.products[x];
        arr.push( current );
    }

    return arr;
};

// Application
var application = new Vue
(
    {
        el: '#web-application',
        
        data:
        {
            titel:'Standardlager af stål',
            

        },
        
        watch:
        {
            
        },

        methods:
        {

        },

        // Executes on startup
        mounted: function()
        {   
            axios.get('./data/products.json')
                 .then( response => ( this.products.push( parse_products( response.data ) ) ) )
        }
    }
);