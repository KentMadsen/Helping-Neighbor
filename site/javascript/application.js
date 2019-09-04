// Application Functions
    // Global Variables
var default_page = "home";

// Application
var application = new Vue
(
    {
        el: '#web-application',
        
        data:
        {
            pages:
            {
                primary:
                [

                ],

                secondary:
                [
                    {
                        title   : 'Terms of service',
                        content : '',
                        order   : 1
                    },

                    {
                        title   : 'Made with',
                        content : '',
                        order   : 2
                    }
                ]

            },

            breadcrumbs:
            [
                {
                    "name" : "Home",
                    "alt"  : ""
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