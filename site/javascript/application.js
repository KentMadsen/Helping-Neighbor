// Application Functions
    // Global Variables
var global_debug = true

    // Parsing of content
function parse_products( response_body )
{
    console.log( response_body );

};

    // Debug
function log_message( message )
{
    if (global_debug === false)
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
            titel:'Standardlager af stål'

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