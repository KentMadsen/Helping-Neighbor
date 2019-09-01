function log_message( message )
{
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

var application = new Vue
(
    {
        el: '#web-application',
        
        data:
        {
            products:null

        },
        
        watch:
        {
            
        },

        methods:
        {

        },

        // Executes on startup
        mounted: function()
        {
            log_message('process started');
            
            axios.get('./data/products.json').then( response => ( this.info = response ) )
            console.log(this.info);

            log_message('process ended');
        }
    }
);