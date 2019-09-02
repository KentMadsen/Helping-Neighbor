// Application Functions
    // Global Variables
var global_debug = true;
var default_page = "home";

// Application
var application = new Vue
(
    {
        el: '#web-application',
        
        data:
        {
            titel : 'Standardlager af stål',

            breadcrumbs:[
                {
                    "url"  : "#",
                    "name" : "Test",
                    "alt"  : "nothing"
                },

                {
                    "url"  : "#",
                    "name" : "Test",
                    "alt"  : "nothing"
                }
            ],

            navigation:
            [
                {
                    "name" : "Home",
                    "alt"  : ""
                },

                {
                    "name" : "About",
                    "alt"  : ""
                },

                {
                    "name" : "Katalog",
                    "alt"  : ""
                }
            ],

            currentPage: default_page,
            
        },
        
        watch:
        {
            
        },

        computed:
        {
            

        },

        methods:
        {
            selectPage( page )
            {

            }

        },

        created:
        {

        },

        destroyed:
        {

        },

        // Executes on startup
        mounted: function()
        {   
            
        }
    }
);