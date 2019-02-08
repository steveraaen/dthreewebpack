import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const MajorSchema = new Schema({
    _id: Schema.Types.ObjectId,
	 league: {
        type: String
    },
    team: {
        type: String,
        unique: true,
        dropDups: true
    },
    picurl: {
        type: String
    },
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    minors: [{ type: Schema.Types.ObjectId, ref: 'Minor' }]
});
export default mongoose.model('major', MajorSchema);







