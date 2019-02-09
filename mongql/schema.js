import { makeExecutableSchema} from 'graphql-tools';
import {resolvers} from './resolvers';

const typeDefs = `
 type Minor {
  _id: ID!
  ID: Int
  parent: String
  teamName: String
  league: String
  level: String
  avgAge: Float
  childOf: [Major]
  almaMatar: [Player]


 }
type Player {
  _id: ID!
  playerName: String!
  playerCode: String
  year: Int
  age: Int
  franchise: String
  classes: String
  teams: String
 }

  type CurMLBPlayer {
    _id: ID!
    ID: Int
    team: String
    playerCode: String
  }
  type Major {
    _id: ID!
  league: String!
  team: String
  picurl: String
  children: [Minor]
 }
type SuperMaster {
    _id: ID!
    player: String
    playerName: String
    year: Int
    franchise: String
    class: String
    age: Int
    grade: String
    minorTeam: String
    currentTeam: String
    league: String
    majteam: String
    picurl: String
}
type Query {
  allPlayers: [Player]
  allMinors: [Minor]
  allMajors: [Major]
  allCurMLBPlayers: [CurMLBPlayer]
  allSuperMasters: [SuperMaster]
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



    
	