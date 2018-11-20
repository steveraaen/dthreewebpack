/*var mysql = require('mysql')
var fs = require('fs')
var dump = require('./results.js')
const connection = mysql.createConnection({
    host: 'steveport.com',
    port: '3306',
    user: 'tranch5_sjr',
    password: 'modernWater360',
    database: 'tranch5_milb'
});
    connection.connect();



dump.map((record, idx) => {
	record.currentteam = record.currentteam.toUpperCase()
	connection.query(`INSERT INTO complete (player, playerName, year, franchise, class, age, grade, minorTeam, currentTeam)
						VALUES ("${record.playerCode}", "${record. playername}", "${record.yr}", "${record.franchise}", "${record.classes}", 
						"${record.age}", "${record.Lev}", "${record.Tm}", "${record.currentteam}")`, function(err, res) {
							if(err) throw err
						})
})


*/