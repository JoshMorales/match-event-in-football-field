var types = {
      isAttack: [],
      isCornerGKickTIn: [],
      isGoal: [],
      isDeffence: [],
      isMatchEvent: [],
      isYellow: [],
      isRed: []
    };

     var colors = {
       
        //events attack
        "pass": "#3F51B5",
        "reception": "#2196F3",
        "dribble": "#1A237E",
        "indirect free kick": "#82B1FF",
        "attacking action": "#B0BEC5",
        "direct free kick": "#546E7A",
        "goal attempt": "#18FFFF",
        "penalty": "blue",
        "corner": "#7986CB",
        "goal kick": "#42A5F5",
        "goal attempt": "#26C6DA",
       
        //events deffense
        "pressure": "#FF8A65",
        "interception": "#FF5722",
        "deffending action": "#E64A19",
        "save on goal attempt": "#FFCCBC",
       
        //match events
        "referee ball": "#FFF176",
        "offside": "#FDD835",
        "fault": "#F9A825",
       
       //cards
        "yellow card": "#FFFF00",
        "red card": "#F44336"
      
      }; 

    var events = [{
        
      "name": "pass",
        "type": "isAttack",
        "color": "blue",
        "x": 320,
        "y": 120
      }, {
        "name": "indirect free kick",
        "type": "isAttack",
        "color": "blue",
        "x": 320,
        "y": 140
      }, {
        "name": "dribble",
        "type": "isAttack",
        "color": "blue",
        "x": 320,
        "y": 160
      }, {
        "name": "attacking action",
        "type": "isAttack",
        "color": "blue",
        "x": 320,
        "y": 180
      }, {
      
        "name": "direct free kick",
        "type": "isAttack",
        "color": "blue",
        "x": 320,
        "y": 200
      }, {
      
        "name": "goal attempt",
        "type": "isAttack",
        "color": "blue",
        "x": 320,
        "y": 220
      }, 
                  
      {
        "name": "penalty",
        "type": "isAttack",
        "color": "blue",
        "x": 320,
        "y": 240
      }, {
        "name": "corner",
        "type": "isAttack",
        "color": "blue",
        "x": 320,
        "y": 260
      }, {
        "name": "goal kick",
        "type": "isAttack",
        "color": "blue",
        "x": 320,
        "y": 280
        }, {
        "name": "pressure",
        "type": "isDeffence",
        "color": "blue",
        "x": 220,
        "y": 280
         }, {
        "name": "interception",
        "type": "isDeffence",
        "color": "blue",
        "x": 220,
        "y": 260
         }, {
        "name": "deffending action",
        "type": "isDeffence",
        "color": "blue",
        "x": 220,
        "y": 240
        
         }, {
        "name": "save on goal attempt",
        "type": "isDeffence",
        "color": "blue",
        "x": 220,
        "y": 220
        
      }, {
        "name": "referee ball",
        "type": "isMatchEvent",
        "color": "blue",
        "x": 260,
        "y": 50
      }, {
        "name": "offside",
        "type": "isMatchEvent",
        "color": "blue",
        "x": 260,
        "y": 70
      }, {
        "name": "fault",
        "type": "isMatchEvent",
        "color": "blue",
        "x": 260,
        "y": 90
      }, {
        "name": "yellow car",
        "type": "isMatchEvent",
        "color": "blue",
        "x": 260,
        "y": 110
      }, 
                  

    ];

for (var i = 0; i < events.length; i++) {
        var final = [];      
			
				if(events[i].type == "isAttack") {


					if(events[i].name == "corner" 
             || events[i].name == "goal kick"
             || events[i].name == "throw in"){

							final[0] =  events[i].name;
	          			final[1] =  events[i].type;
	         				final[2] =  events[i].color;
	         			  final[3] =  events[i].x;
	        				final[4] =  events[i].y;
							    types.isCornerGKickTIn.push(final);

					}

					else if(events[i].name == "goal"){

						    final[0] =  events[i].name;
          					final[1] =  events[i].type;
          					final[2] =  events[i].color;
          					final[3] =  events[i].x;
          					final[4] =  events[i].y;
							      types.isGoal.push(final);
					}

					else{
					         final[0] =  events[i].name;
				             final[1] =  events[i].type;
				             final[2] =  events[i].color;
				             final[3] =  events[i].x;
				             final[4] =  events[i].y;
		   				     types.isAttack.push(final);
					}
				}

				else if(events[i].type == "isDeffence") {
							  final[0] =  events[i].name;
							  final[1] =  events[i].type;
					          final[2] =  events[i].color;	 
					          final[3] =  events[i].x;
					          final[4] =  events[i].y;
							  types.isDeffence.push(final);

				}

				else if(events[i].type == "isMatchEvent") {

					if(events[i].name == "red card"){

							final[0] =  events[i].name;
	          				final[1] =  events[i].type;
	         				final[2] =  events[i].color;
	         			    final[3] =  events[i].x;
	        				final[4] =  events[i].y;
							types.isRed.push(final);

					}

					else if(events[i].name == "yellow car"){

							final[0] =  events[i].name;
	          				final[1] =  events[i].type;
	         				final[2] =  events[i].color;
	         			    final[3] =  events[i].x;
	        				final[4] =  events[i].y;
							types.isYellow.push(final);


					}

					else{

				   			final[0] =  events[i].name;
				  			final[1] =  events[i].type;
					        final[2] =  events[i].color;	 
					        final[3] =  events[i].x;
					        final[4] =  events[i].y;
							types.isMatchEvent.push(final);

							}
				}	

				else if(events[i].type == "isGoal") {
          
		          final[0] =  events[i].name;
		          final[1] =  events[i].type;
		          final[2] =  events[i].color;
		          final[3] =  events[i].x;
		          final[4] =  events[i].y;
				   types.isGoal.push(final);
		        }
      
		}

    var canvas = d3.select("#cont")
      .append("svg")
      .attr("width", 375)
      .attr("height", 500)
      .style("fill", "green");


    //Attack Actions Triangle

    canvas.selectAll("triangle")
      .data(types.isAttack)
      .enter()
      .append("polygon")
      .attr("points", function(d) {
	        coordinates = "";
          r = 1.5;
	        a1 = (d[3] + (5/r)).toString();
	        a2 = (d[4] + (30/r)).toString();
	        b1 = (d[3] + (15/r)).toString();
	        b2 = (d[4] + (10/r)).toString();
	        c1 = (d[3] + (25/r)).toString();
	        c2 = (d[4] + (30/r)).toString();
          coordinates = a1 +"," + a2 +" " + b1 + "," + b2 + " " + c1 + "," + c2;
	        //coordinates.concat(a1,",",a2," ",b1,",",b2," ",a1,",",a2);
          //console.log(coordinates);
          return coordinates;
	        
          })
          .style("fill", function(d){
          return colors[d[0]];
        
          })
         .style("stroke-width", 0.5)
         .style("stroke", "#ECEFF1");

    //Deffence Actions Triangle Inverted

    canvas.selectAll("triangleInverted")
      .data(types.isDeffence)
      .enter()
      .append("polygon")
      .attr("points", function(d) {
	        coordinates = "";
          r = 1.5;
	        a1 = (d[3] + (5/r)).toString();
	        a2 = (d[4] + (10/r)).toString();
	        b1 = (d[3] + (15/r)).toString();
	        b2 = (d[4] + (30/r)).toString();
	        c1 = (d[3] + (25/r)).toString();
	        c2 = (d[4] + (10/r)).toString();
          coordinates = a1 +"," + a2 +" " + b1 + "," + b2 + " " + c1 + "," + c2;
          return coordinates;	    
      })

      .style("fill", function(d){
        return colors[d[0]];
      })

      .style("stroke-width", 0.5)
      .style("stroke", "#ECEFF1");
    

 //Match Events Circles

    radiusResizer = 5.5;
    canvas.selectAll("circle")
      .data(types.isMatchEvent)
      .enter()
      .append("circle")
      .attr("r", radiusResizer)
      .attr("cx", function(d) {
        console.log(d);
        return d[3];
      })
      .attr("cy", function(d) {
        return d[4];
      })
    
      .style("fill", function(d){
        console.log(colors[d[0]]);
        return colors[d[0]];
        
      })

      .style("stroke-width", 0.5)
      .style("stroke", "#ECEFF1");

    canvas.selectAll("rect")
      .data(types.isYellow)
      .enter()
      .append("rect")
      .attr("r", 5)
      .attr("cx", function(d) {
        console.log(d);
        return d[3];
      })
      .attr("cy", function(d) {
        return d[4];
      })
      .style("fill", function(d) {
        return d[3];
      });

    canvas.selectAll("rect")
      .data(types.isRed)
      .enter()
      .append("rect")
      .attr("r", 5)
      .attr("cx", function(d) {
        console.log(d);
        return d[3];
      })
      .attr("cy", function(d) {
        return d[4];
      })
      .style("fill", function(d) {
        return d[3];
      });

    canvas.selectAll("ball")
      .data(types.isGoal)
      .enter()
      .append("ball")
      .attr("r", 5)
      .attr("cx", function(d) {
        console.log(d);
        return d[3];
      })
      .attr("cy", function(d) {
        return d[4];
      })
      .style("fill", function(d) {
        return d[3];
      });

    canvas.selectAll("triangle")
      .data(types.isCornerGKickTIn)
      .enter()
      .append("triangle")
      .attr("r", 5)
      .attr("cx", function(d) {
        console.log(d);
        return d[3];
      })
      .attr("cy", function(d) {
        return d[4];
      })
      .style("fill", function(d) {
        return d[3];
      });