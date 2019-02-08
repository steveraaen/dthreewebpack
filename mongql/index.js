import express from 'express';
import graphlHTTP from 'express-graphql';
import mongoose from 'mongoose';
import Player from './models/Player.js'
import Minor from './models/Minor.js'
import Major from './models/Major.js'
import CurMLBPlayer from './models/CurMLBPlayer.js'
import schema from './schema';
import majors from './majors.js'
import minors from './minors.js'
import playerMaster from './playerMaster.js'
import curMLBPlayers from './curMLBPlayers.js'
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
	Minor.insertMany(minors)
})*/

/*app.get('/api/pop', (req, res) => {
	Major.
	findOne({majteam: "NYM"}).
	populate('players', 'player').
	exec(function(err, tm) {
		console.log(tm)
		res.json(tm)
	})
})*/

app.use('/graphql', graphlHTTP({
    schema: schema,
    graphiql: true
}));
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});