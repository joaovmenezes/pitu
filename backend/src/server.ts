import app from './app';
import database from './database';

//Database
database.sync();
console.log('Database running at 3306');

// Port which the app will listen to(it will expect commands on port 3000)
app.listen(3001);
console.log('Server running at 3001');