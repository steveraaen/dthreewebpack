import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const MinorSchema = new Schema({
    _id: Schema.Types.ObjectId,
	 ID: {
        type: Number,
        required: true,
        dropDups: true
    },
    parent: {
        type: String,
        required: true
    },
    teamName: {
        type: String,
        required: true,
        unique: true
    },
     league: {
        type: String
    },
    level: {
        type: String
    },
    avgAge: {
        type: Number
    },
    players: [{ type: Schema.Types.ObjectId, ref: 'Player' }],
    majors: [{ type: Schema.Types.ObjectId, ref: 'Major' }]
});
export default mongoose.model('minor', MinorSchema);







