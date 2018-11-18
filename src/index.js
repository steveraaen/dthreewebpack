import * as d3 from 'd3';

         var width = 300;
         var height = 300;
         var svg = d3.select("#svgcontainer")
            .append("svg")
            .attr("width", width)
            .attr("height", height);
         svg.append("line")
            .attr("x1", 100)
            .attr("y1", 100)
            .attr("x2", 200)
            .attr("y2", 200)
            .style("stroke", "rgb(255,0,0)")
            .style("stroke-width", 2);