//require our dependencies
var path = require('path')
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
    //the base directory (absolute path) for resolving the entry option
    context: __dirname,
    //the entry point we created earlier. Note that './' means 
    //your current directory. You don't have to specify the extension  now,
    //because you will specify extensions later in the `resolve` section
    entry: {
        //sell1: './assets/js/dms',
        home: './assets/js/index',
        blog: './assets/js/blog',
        login: './assets/js/login',
        dms: './assets/js/dms',
        detail: './assets/js/detail',
        buy: './assets/js/buy',
        about: './assets/js/about'
    },
    
    output: {
        //where you want your compiled bundle to be stored
        path: path.resolve('./assets/bundles/'), 
        //naming convention webpack should use for your files
        filename: '[name]-[hash].js', 
        publicPath: './static/bundles/'
    },
    
    plugins: [
        //tells webpack where to store data about your bundles.
        new BundleTracker({filename: './webpack-stats.json'}), 
        //makes jQuery available in every module
        new webpack.ProvidePlugin({ 
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery' 
        })
    ],
    
    module: {
        loaders: [
            //a regexp that tells webpack use the following loaders on all 
            //.js and .jsx files
            {   
                test: /\.jsx?$/, 
                //we definitely don't want babel to transpile all the files in 
                //node_modules. That would take a long time.
                exclude: /node_modules/, 
                //use the babel loader 
                loader: 'babel-loader', 
                query: {
                    //specify that we will be dealing with React code
                    presets: ['react'] 
                }
            },
            {
              test: /\.scss$/,
              loader: 'style!css!sass!resolve-url!sass?sourceMap'
            },
            {
              test: /\.css$/,
              loader: "style-loader!css-loader"
            },
            {
              test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
              loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },
            {
              test: /\.(png|jpg)$/, 
              loader: 'file-loader'
            }
        ]
    },
    
    resolve: {
        modulesDirectories: ['node_modules'],
        //tells webpack where to look for modules
        //extensions that should be used to resolve modules
        extensions: ['', '.js', '.jsx',]
    }   
}