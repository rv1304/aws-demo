var express=require('express');
var app=express();
var port=80;
app.use(express.static('Frontend'));
app.listen(port,function(){
    console.log('Server is running on http://localhost:'+port);
}
);