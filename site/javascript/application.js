// Application Functions
    // Global Variables
var global_debug = true

    // Parsing of content
function parse_products( response_body )
{
    var x = 0;

    // Retrieve individual products, in the katalogs
    for( x = 0; 
         x < response_body.products_list.length; 
         x ++ )
    {    
        console.log( response_body.products_list[x] );

        axios.get( response_body.products_list[x].url ).then( response => ( parse_product( response.data ) ) );
    }

};

function parse_product( response_body )
{
    console.log( response_body );


    var x = 0;
    
    for( x = 0; 
         x < response_body.products.length; 
         x ++ )
    {

    }

};

    // Debug
function log_message( message )
{
    if ( global_debug === false )
    {
        return;
    }

    var today = new Date();

    console.log( today.getMilliseconds() + '.' + 
                 today.getMinutes() + '.' + 
                 today.getHours() + 
                 
                 ' ' + 
                 
                 today.getDate() + '-' +
                 today.getMonth() + '-' +
                 today.getFullYear() + ' : ' + 
                 message );
}

// Application
var application = new Vue
(
    {
        el: '#web-application',
        
        data:
        {
            titel:'Standardlager af stål',
            products:[]

        },
        
        watch:
        {
            
        },

        methods:
        {

        },

        // Executes on startup
        mounted : function()
        {
            log_message( 'bootstrap process started' );
            
            axios.get('./data/products.json')
                 .then( response => ( parse_products( response.data ) ) )

            log_message( 'bootstrap process ended' );
        }
    }
);