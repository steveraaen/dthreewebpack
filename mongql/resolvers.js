import Player from './models/Player';
import Major from './models/Major';
import Minor from './models/Minor';
import CurMLBPlayer from './models/CurMLBPlayer';
import SuperMaster from './models/SuperMaster';
export const resolvers = {
    Query: {
         allPlayers() {
            return  Player.find();
        },
           allMinors() {
            return  Minor.find({parent: 'NYM'});
        },
           allMajors() {
            return  Major.find();
        },
         allCurMLBPlayers() {
        	 return  CurMLBPlayer.find()
        },
         allSuperMasters() {
             return  SuperMaster.find()
        },

    },
    Mutation: {
        async createPlayer(root, {
            input
        }) {
            return await Player.create(input);
        }
    }
}