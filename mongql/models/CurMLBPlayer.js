

import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const CurMLBPlayerSchema = new Schema({
    _id: Schema.Types.ObjectId,
	 ID: {
        type: Number,
        required: true,
        dropDups: true
    },
    team: {
        type: String,
        required: true
    },
    playerCode: {
        type: String,
        required: true,
      
    },
    minors: [{ type: Schema.Types.ObjectId, ref: 'Minor' }],
    majors: [{ type: Schema.Types.ObjectId, ref: 'Major' }]
});
export default mongoose.model('curMLBPlayer', CurMLBPlayerSchema);







