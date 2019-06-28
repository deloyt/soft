var express = require('express');
var app = express();


app.use(express.static('./UI'));
app.listen(process.env.PORT || 3000, (err, success) => {
    if (err) {
        console.log('Unable to run on port 3000');
    } else {
        console.log('Successfully running on port 3000')
    }
});
