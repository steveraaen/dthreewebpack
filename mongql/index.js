import express from 'express';
import graphlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import Player from './models/Player.js'
import schema from './schema';
import playermaster from './playermaster.js'
require('dotenv').config()

const app = express();
const PORT = 3000;
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_LINK);

app.get('/', (req, res) => {
    res.json({
        msg: 'Welcome to GraphQL'
    })
});
/*app.get('/load', (req, res) => {
	Player.insertMany(playermaster)
})*/

app.use('/graphql', graphlHTTP({
    schema: schema,
    graphiql: true
}));
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});