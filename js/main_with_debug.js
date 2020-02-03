//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        {
            city: 'Madison',
            population: 233209
        },
        {
            city: 'Milwaukee',
            population: 594833
        },
        {
            city: 'Green Bay',
            population: 104057
        },
        {
            city: 'Superior',
            population: 27244
        }
    ];

    //append the table element to the div
    $("#mydiv").append("<table>");

    //append a header row to the table
    $("table").append("<tr>");

    //add the "City" and "Population" columns to the header row
    $("tr").append("<th>City</th><th>Population</th>");

    //loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };
	//Calls the addColumns function to be executed in the table.
	addColumns(cityPop);
	//Calls the addEvents function to be executed in the table. 
    addEvents();
};
//create the function addColumns, have the variable cityPop be the parameter.
function addColumns(cityPop){
    //Part of the function that will dictate on what will be added in the column/rows.
    $('tr').each(function(i){
		//if-statement if there is a blank column, it will add the column header label "City Size"
    	if (i == 0){
			//this will add the column label "City Size" within the table. 
			$(this).append('<th>City Size</th>');
			//else statement will label the category of city size being either small, medium, or large. 
    	} else {
			//variable CitySize is created to determine to classify the size category for each city.
    		var citySize;
			//another if-statement in the else-statement.
			//if the city population is less than 100,000 people, it is classified as small.
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
			//if the city population is less than 500,000 but greater than 100,000 it is classified as medium.
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';
			//if neither of the previous if-statements go through, it means that the city is larger than those population ranges, and is classified as large.
    		} else {
    			citySize = 'Large';
    		};
			//Variable citySize needs to be used in order to excecute within the if-statement
			//Still in the else-statement, where it will append (label) the city sizes for each 
			//Wisconsin city.
			$(this).append('<td>'+ citySize +'</td>');
			
		
    	};
    });
};
//create the function addEvents.
function addEvents(){
	//jquery mouseover is called if the mouse hovers over the table of listed cities,
	//the mouseover function will execute.
	//goal of this jquery function is for the table to change colors every time the 
	//mouse hovers over the table. 
	$('table').mouseover(function(){
		//variable color is formed.
		var color = "rgb(";
		//for loop is called, where i is created as the variable and colors will be
		//randomly generated to create rgb values in the end.
		//i is ranged from 0-3 in order to list out the rgb values in the loop.
		for (var i=0; i<3; i++){
			//random variable will round a random number that was multiplied by 255 (rgb range values)
			var random = Math.round(Math.random() * 255);
			//color = color + random
			//this means color will be assigned to a random number, which will be a rgb value(0-255)
			color += random;
			//if statement to list out the colors, if i is less than 2, add a comma in order to continue making random
			//color values.
			if (i<2){
				color += ",";
			//also helps to list out each rgb value.
			//if i is between the values of 2-3, it will end a parenthesis at the end.
			} else {
				color += ")";
			}
		};
		//css is brought from jquery and will randomly create a color.
		//this is part of the mouseover function.
		$(this).css('color', color);
	});
	//clickme function is created, where every time the table is clicked,
	//a popup will appear.
	function clickme(){
		//alert is where a window/box will appear on your browser with a message you set.
		//in this case, your browser will display the alert message saying:
		//"Hey, you clicked me!"
		alert('Hey, you clicked me!');
	};
	//on is a jquery function, where the table is the event handler to the alert of the click.
	//if the table is clicked on, the alert window will appear.
	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
