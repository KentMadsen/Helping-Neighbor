// Application
function parse_data( data )
{
    var i = 0;

    for( i = 0; 
         i < data.products.length; 
         i++)
    {
        console.log(data.products[i])

    }
}


var application = new Vue
(
    {
        el: '#web-application',
        
        data:
        {
            selection:'standardlager',

            products:
            [
                
            ],

            categories:
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
                    } 

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
            console.log('Mounted')

            axios.get('./data/products.json').then(resp => {
                var i = 0;

                for(i = 0; i < resp.data.products.length; i++)
                {
                    this.products.push(resp.data.products[i])
                }

                
                console.log(this.products);
            });
        } 
    }
);

console.log(application)