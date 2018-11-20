import summaryb from '../utils/playertab.js'
import * as d3 from 'd3';


      var yrs = [
      {
         yr:2018,
         row: 100
      }, 
      {
         yr:2017,
         row: 140
      }, 
      {
         yr:2016,
         row: 180
      }, 
      {
         yr:2015,
         row: 220
      }, 
      {
         yr:2014,
         row: 260
      }, 
      {
         yr:2013,
         row: 300
      }, 
      {
         yr:2012,
         row: 340
      }]
      summaryb.sort()
      for(let i = 0; i < summaryb.length; i++){
         summaryb[i].year === 2018 ? summaryb[i].splice(1, 1) : null
     }
var levels = [
{
   lev:"AAA",
   row: 100
}, {
   lev:"AA",
   row: 130
}, {
   lev:"A",
   row: 160
}, {
   lev:"A+",
   row: 190
}, {
   lev:"A-",
   row: 220
}, {
   lev:"FRk",
   row:250
}, {
   lev:"Rk",
   row: 280
}
]
var aaa = []
var aa = []
var a = []
var apl = []
var ami = []
var frk = []
var rk = []
var all = [aaa, aa, a, apl, ami, frk, rk]

for(let i = 0; i < summaryb.length; i++) {
   for(let j = 0; j < levels.length; j++) {
      summaryb[i].row = levels[j].row
    
      levels[j].lev === summaryb[i].class ? all[j].push(summaryb[i]) : null
   }
  
}
for(let i = 0; i < all.length; i++) {
         var width = 600;
         var height = 600;
        
         var svg = d3.select("#svgcontainer")
            .append("svg")
            .attr("width", width)
            .attr("height", height);

         
           
           var div = d3.select("body").append("div") 
                .attr("class", "tooltip")          
                .style("opacity", 0);

                svg.selectAll("circle")
              .data(all[i])
               .enter().append("circle")
                .attr("cx", function(d) {return d.row})
                .attr("cy", function(d) {return d.row})
                .attr("r", function(d) { return d.players / 10})
                .style("fill", function(d) { return d.color})
      

//  -------------   tooltip   -----------------------
               .on("mouseover", function(d) {    
               div.transition()     
                .duration(200)      
                .style("opacity", .9);   

               div.html(d.franchise + "<br/>"  + d.players + "<br/>"  + d.class + "<br/>"  + d.year)  
                .style("left", (d3.event.pageX) + "px")     
                .style("top", (d3.event.pageY - 28) + "px");   
            })             
                .on("mouseout", function(d) {     
            div.transition()     
                .duration(500)      
                .style("opacity", 0);  
        });
   
}
  


