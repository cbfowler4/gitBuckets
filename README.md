# gitBuckets
An NBA win loss data visualization tool built using React and D3. It uses the D3 library to create an interactive data visualization of NBA franchise wins and losses each year since the creation of the NBA. Teams are represented by colored circles. The circles colors correspond to the primary and secondary colors of the team. On hover of the circle the team logo appears at the center of the circle. An info window appears on the left hand side of the screen displaying the team win loss info used to create the visualization. The wins and losses translate to the corresponding size and location of the circles. The more wins, the larger the circle. The visualization uses an element of gravity, larger circles will push their way into the center of the screen. Smaller circles will be pushed outward onto the edges.

The user will be able to click through each year and see how the circles change and fight for space at the center of the screen. I will also implement a demo feature in which will automatically move across the timeline.


## MVPs
	• Graphical representation of wins and losses of teams that changes when user changes year
	• Gravity element that allows elements to collide and interact with each other
	• Movement dynamics that allow elements to shuffle between year changes

## Technologies
This uses the D3 library. Data is gathered from Basketball Reference.
D3 inspiration/reference
	· https://bost.ocks.org/mike/nations/
	· https://bl.ocks.org/mbostock/4062045


## Architecture

Data will be hosted locally.

slider.js -  script will handle the user interaction of switching the current year being displayed.
circles.js - will handle the circles displayed on screen, their formatting
teamInfo.jsx - will handle rendering of DOM content (React)
index.html - will render canvas area, load JS

## Wireframe
![wireframe](https://github.com/cbfowler4/gitBuckets/blob/master/assests/images/Screen%20Shot%202018-01-17%20at%203.17.46%20PM.png)
