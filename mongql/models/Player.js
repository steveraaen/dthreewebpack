import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const PlayerSchema = new Schema({
    _id: Schema.Types.ObjectId,
	 id: {
        type: Number,
        required: true,
        unique: true,
        dropDups: true
    },
    playerName: {
        type: String
    },
    playerCode: {
        type: String,
        required: true
    },
     year: {
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
    minors: [{ type: Schema.Types.ObjectId, ref: 'Minor' }],
    majors: [{ type: Schema.Types.ObjectId, ref: 'Major' }]
});
export default mongoose.model('player', PlayerSchema);







//mongoimport -h ds131003-a0.mlab.com:31003 -d prodparking -c baseball -u steve -p modernWater360 --file playermaster.js