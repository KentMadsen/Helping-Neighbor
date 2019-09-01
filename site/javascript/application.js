// Application Functions
    // Global Variables
var global_debug = true

    // entities
function create_Product()
{

}

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
    console.log( response_body.products );

    var x = null;
    
    for( x = 0; 
         x < response_body.products.length; 
         x ++ )
    {
        console.log( response_body.products[x] );



    }

};

function insert_product( name, description, images, preview)
{
    application.products.push();

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
            products:
            [
                {
                    Preview:"http://localhost/katalog/data/Hulprofiler/info_kvardratisk_profil_large.jpg",
                    Titel:'hul profil 1',
                    Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet bibendum enim, ut sodales nunc. Donec blandit quam nec purus placerat eleifend. Suspendisse ut nulla dui. Integer orci ante, gravida ullamcorper purus id, varius varius libero. Praesent orci lectus, tempus interdum vehicula eu, ullamcorper at magna. Praesent rutrum nulla ut mi hendrerit cursus',

                    Images:
                    [
                        {
                            url:"http://localhost/katalog/data/Hulprofiler/info_kvardratisk_profil_large.jpg",
                            preview:"",
                            alt:""
                        },

                        {
                            url:"",
                            preview:"",
                            alt:""
                        },
                        
                        {
                            url:"",
                            preview:"",
                            alt:""
                        } 
                    ]
                },

                {
                    Preview:"http://localhost/katalog/data/Hulprofiler/info_kvardratisk_profil_large.jpg",
                    Titel:'hul profil 2',
                    Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet bibendum enim, ut sodales nunc. Donec blandit quam nec purus placerat eleifend. Suspendisse ut nulla dui. Integer orci ante, gravida ullamcorper purus id, varius varius libero. Praesent orci lectus, tempus interdum vehicula eu, ullamcorper at magna. Praesent rutrum nulla ut mi hendrerit cursus',

                    Images:
                    [
                        {
                            url:"http://localhost/katalog/data/Hulprofiler/info_kvardratisk_profil_large.jpg",
                            preview:"",
                            alt:""
                        },

                        {
                            url:"",
                            preview:"",
                            alt:""
                        },
                        
                        {
                            url:"",
                            preview:"",
                            alt:""
                        } 
                    ]
                },
                
                {
                    Preview:"http://localhost/katalog/data/Hulprofiler/info_kvardratisk_profil_large.jpg",
                    Titel:'hul profil 3',
                    Description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet bibendum enim, ut sodales nunc. Donec blandit quam nec purus placerat eleifend. Suspendisse ut nulla dui. Integer orci ante, gravida ullamcorper purus id, varius varius libero. Praesent orci lectus, tempus interdum vehicula eu, ullamcorper at magna. Praesent rutrum nulla ut mi hendrerit cursus',

                    Images:
                    [
                        {
                            url:"http://localhost/katalog/data/Hulprofiler/info_kvardratisk_profil_large.jpg",
                            preview:"",
                            alt:""
                        },

                        {
                            url:"",
                            preview:"",
                            alt:""
                        },
                        
                        {
                            url:"",
                            preview:"",
                            alt:""
                        } 
                    ]
                }


            ]

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