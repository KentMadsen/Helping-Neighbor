// Application Functions
    // Global Variables
var page_name_home = "home";
var page_name_about = "about";
var page_name_catalog = "catalog";


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

// Web Application Area
const page_home = 
{
    template: '<h1> home </h1>'
}

const page_search = 
{
    template: '<div> search </h1>'
}

const page_catalog = 
{
    template: '<h1> catalog </h1>'
}

const page_not_found = 
{
    template: '<h1> Page Not Found </h1>'
}

// About, Contact, Privacy, Terms of Service 
const page_page = 
{
    template: '<h1> page </h1>'
}

const Routes =
[
    {
        path: '/',
        name:'home',
        component: page_home
    },

    {
        path: '/page',
        //name:'',
        component: page_page
    },

    {
        path: './search',
      //  name:'',
        component: page_search
    },

    {
        path: './catalog',
        // name:'',
        component: page_catalog
    }
]

var router_component = new VueRouter(
    {
        Routes
    }
)

Vue.use(router_component);

// Application
var application = new Vue
(
    {
        el: '#web-application',
        
        data:
        {
            currentRoute: window.location.pathname,

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
                        title   : 'Privacy Policies',
                        content_type : 'page',
                        order   : 1
                    },

                    {
                        title   : 'Om',
                        content_type : 'page',
                        order   : 2
                    },

                    {
                        title   : 'Kontakt',
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
                    "name" : "Hjem",
                    "alt"  : ""
                },

                {
                    "name" : "Om",
                    "alt"  : ""
                },

                {
                    "name" : "Katalog",
                    "alt"  : ""
                },

                {
                    "name" : "Kontakt",
                    "alt"  : ""
                },

                {
                    "name": "Search",
                    "alt": ""
                }
            ],
        },
        
        watch:
        {
            
        },

        computed:
        {
            /*
            ViewCompunent()
            {
                return Routes[this.currentPage]
            } */
            

        },

        /* 
        render(h)
        {
            return h;
        }

        */
        /*
        methods:
        {
            

        },

        created:
        {

        },
        */
/*
        destroyed:
        {

        },

         Executes on startup
        mounted: function()
        {   
            
        } */
    }
);
