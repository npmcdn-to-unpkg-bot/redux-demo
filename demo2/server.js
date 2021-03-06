import express from 'express';
import webpack from 'webpack'
import webpackConfig from './webpack.config'

const app = express();
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
// app.use('/',require('./index.html'));
app.use(express.static('public'));


// app.get("/", function(req, res) {
//     res.sendFile(__dirname + '/index.html')
// })

app.listen(8080, function() {
    console.log("server started at http://localhost:8080");
});