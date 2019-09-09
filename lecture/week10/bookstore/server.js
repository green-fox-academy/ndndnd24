'use strict';

const app = require('./app')
const PORT = 3005;

app.listen(PORT, _ => console.log(`App is listening on port ${PORT}`));