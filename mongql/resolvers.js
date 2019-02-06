import Player from './models/Player';
export const resolvers = {
    Query: {
        async allPlayers() {
            return await Player.find();
        }
    },
    Mutation: {
        async createPlayer(root, {
            input
        }) {
            return await Player.create(input);
        }
    }
}