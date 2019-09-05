// Application Functions
    // Global Variables
var page_home = "home";
var page_about = "about";
var page_catalog = "catalog";

    // 
var default_page = page_home;

function hasPreview( preview_url )
{
    if( preview_url === null )
    {
        return false;
    }

    if( preview_url === "" )
    {
        return false;
    }

    // Check if it's a url

    return true;
}

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
                        title : 'Copyright 2019',
                        content_type : 'text',
                        order: 0
                    },

                    {
                        title   : 'Terms of service',
                        content_type : 'page',
                        order   : 1
                    },

                    {
                        title   : 'About',
                        content_type : 'page',
                        order   : 2
                    },

                    {
                        title   : 'Contact',
                        content_type : 'page',
                        order   : 3
                    }
                ],

                about: 'No content'

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