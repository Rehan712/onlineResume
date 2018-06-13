const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(require('body-parser').json());

require('./passport')();

app.use('/api/user', require('./routes/api/users.js'));
app.use('/api/profile', require('./routes/api/profiles.js'));
app.use('/api/post', require('./routes/api/posts.js'));

mongoose
	.connect('mongodb://rehan007:rehan6300487@ds233320.mlab.com:33320/school')
	.then(() => console.log('connection successfull'))
	.catch(e => {
		throw e;
	});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('node is listening on port', port));
