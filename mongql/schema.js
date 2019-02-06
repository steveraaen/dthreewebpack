import { makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
type Player {
  _id: ID!
  playername: String!
  player: String
  yr: Int
  age: Int
  franchise: String
  classes: String
  teams: String
 }
type Query {
  allPlayers: [Player]
 }
input PlayerInput {
  title: String!
  qty: Int
 }
type Mutation {
  createPlayer(input: PlayerInput) : Player
 }
`;
const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});
export default schema;

	