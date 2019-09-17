// Application
var application = new Vue
(
    {
        el: '#web-application',
        
        data:
        {
            selection:'alle produkter',

            primary:
            [
                {
                    title:'Hulprofiler'
                },

                {
                    title:'Rundstål'
                },
                
                {
                    title:'Firkantstål'
                },
                
                {
                    title: 'Valsede Profiler'
                },
                
                {
                    title: 'Plader'
                },

                {
                    title: 'Aluminium'
                }

            ],

            pages:
            {
                secondary:
                [
                    {
                        title : 'Copyright 2019',
                        content_type : 'text',
                        order: 0
                    } /*,

                    {
                        title   : 'Terms of service',
                        content_type : 'page',
                        order   : 1
                    },*/

                    /*{
                        title   : 'Privacy Policies',
                        content_type : 'page',
                        order   : 1
                    },*/

                ],

                about: 'No content'
            },
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

        mounted : function()
        {
            
        } 
    }
);
