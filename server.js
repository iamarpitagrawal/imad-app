var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articalOne = { 
   title:'Artical one| Arpit Agrawal',
    heading:'Artical one',
    date: 'sep 5,2016',
    content:`<p>
                this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.
            </p>
            <p>
                this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.
            </p>
            <p>
                this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.this is the content for my first artical.
            </p>`
    };
function createTemplate(data)
{var titledata.title
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate =
    <html>
    <head>
            <title>
              ${title}
            </title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="/ui/style.css" rel="stylesheet" />
            
   </head>
    
    <body>
        <div class="container">
          <div>
                <a href="/">Home</a>
            
             </div>
            <hr/>
            <h3>
            ${heading}
            </h3>
            <div>
            ${date}
            </div>
            <div>
            ${content}
            </div>
        </div>
    </body>
    
    
</html>

};
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/artical-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'artical-one.html'));
});

app.get('/artical-two', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'Artical-two.html'));
});

app.get('/artical-three', function (req, res) {
   res.sendFile(path.join(__dirname, 'ui', 'Artical-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
