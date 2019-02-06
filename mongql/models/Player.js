import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const PlayerSchema = new Schema({
	 id: {
        type: Number,
        required: true
    },
    playername: {
        type: String
    },
    player: {
        type: String
    },
     yr: {
        type: Number
    },
    age: {
        type: Number
    },
    franchise: {
        type: String
    },
    classes: {
        type: String
    },
    teams: {
        type: String
    },
});
export default mongoose.model('player', PlayerSchema);







//mongoimport -h ds131003-a0.mlab.com:31003 -d prodparking -c baseball -u steve -p modernWater360 --file playermaster.js