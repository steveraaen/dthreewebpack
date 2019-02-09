import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const SuperMasterSchema = new Schema({
    _id: Schema.Types.ObjectId,
    id: {
    		type: Number,
         unique: true,
        	dropDups: true 		
    },
	 player: {
        type: String,
    },
    playerName: {
        type: String,
    },
    year: {
        type: Number,
    },
    franchise: {
        type: String,
    },
    class: {
        type: String,
    },
    age: {
        type: Number,
    },
    grade: {
        type: String,
    },
    minorTeam: {
        type: String,
    },
    currentTeam: {
        type: String,
    },
    league: {
        type: String,
    },
    majteam: {
        type: String,
    },
    picurl: {
        type: String,
    },
});
export default mongoose.model('superMaster', SuperMasterSchema);