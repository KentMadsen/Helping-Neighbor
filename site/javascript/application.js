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
                        title   : 'Privacy Policies',
                        content_type : 'page',
                        order   : 1
                    },

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
