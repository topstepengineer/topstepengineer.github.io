	var sessionLaps = [];
	var sessionNames = [];

function doIt(results) {
	
	convertTimes(results)

	// Create a chart for each one in the chart settings .js file
	for(i = 0; i < channels.length;i++){
		var chart = am4core.create("chartdiv"+(i+1), am4charts.XYChart);
		chart.data = results.data;
		plot_graphs(chart, avgLaptime)
	}
}

function convertTimes(results) {
	
	var unix_times = [];
	var myDates = [];
	
	z = 0;

	// console.log("convertTimes Started");

	// Loop thru each lap and convert unix time to datetime format
	for (k = 0; k < results.data.length-1; k++) {
	//console.log("k is = ",k);
		
		// unix_times[k] = results.data[k].tToD;
		// myDates[k] = new Date(unix_times[k] * 1000 + timeZoneOffset*1000*60*60);
		// results.data[k].ToD = myDates[k];
		
		// get the session names and total lap count when the sessions start
		if(k>0) {
			if(results.data[k].Nsession != results.data[k-1].Nsession) {
				sessionNames[z] = results.data[k].Nsession;
				// sessionLaps[z] = k +1;
				sessionLaps[z] = results.data[k+1].Total_Laps*1;
				z = z + 1;
				//console.log(sessionLaps);
			}
		}else{
			sessionNames[z] = results.data[k].Nsession;
			sessionLaps[z] = k +1;
			z = z + 1;
		}
		
		
	//console.log(results.data[k].sLap_End);
		
		// Filter out laptimes that are not plausble

			if(results.data[k].sLap_End < minDistance) {
				results.data[k].tLap_End = null;
				//console.log("null",k);
			} else if(results.data[k].tLap_End < 1) {
				results.data[k].tLap_End = results.data[k].tLap_End; //use the estimated laptime if real one not available
				//console.log("estimated",k);
			}

		// convert them to lapspeeds
		
			// if(results.data[k].Laptime > 0 ) {
			
				// results.data[k].Laptime = lapDistance/(results.data[k].Laptime/60/60);
			
			// }
			
		// get the last 10 laps of rideheights
		if(k < results.data.length - 11){
			results.data[k].myFRH_gate1 = 0;
			results.data[k].myRRH_gate1 = 0;
			results.data[k].myFRH_gate2 = 0;
			results.data[k].myRRH_gate2 = 0;
			results.data[k].myFRH_gate3 = 0;
			results.data[k].myRRH_gate3 = 0;
			results.data[k].myFRH_gate4 = 0;
			results.data[k].myRRH_gate4 = 0;
		} else if(k >= results.data.length - 11){
			results.data[k].myFRH_gate1 = results.data[k].hRideF_Gate1;
			results.data[k].myRRH_gate1 = results.data[k].hRideR_Gate1;
			results.data[k].myFRH_gate2 = results.data[k].hRideF_Gate2;
			results.data[k].myRRH_gate2 = results.data[k].hRideR_Gate2;
			results.data[k].myFRH_gate3 = results.data[k].hRideF_Gate3;
			results.data[k].myRRH_gate3 = results.data[k].hRideR_Gate3;
			results.data[k].myFRH_gate4 = results.data[k].hRideF_Gate4;
			results.data[k].myRRH_gate4 = results.data[k].hRideR_Gate4;
		}
	}
			// console.log(sessionNames);
			// console.log(sessionLaps);
}


function plot_graphs(chart, avgLaptime) {
		
	var seriesID = i*10;
	//console.log("seriesID ",seriesID)
		

	// Give the chart a title
	var title = chart.titles.create();
	title.text = dia_title[i];
	title.fontSize = 18;

	// Define the x-axis
	var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
	//categoryAxis.baseInterval = {count:avgLaptime, timeUnit: "second"}
	categoryAxis.dataFields.category = "Total_Laps";
	categoryAxis.title.text = "Lap Number";
	categoryAxis.title.fontSize = 12;
	categoryAxis.title.fontColor = "White";
	categoryAxis.renderer.labels.template.fontSize = 12;

	//define the y=axis axis
	var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
	valueAxis.strictMinMax = true;
	valueAxis.renderer.labels.template.fontSize = 12;
	
	//decide if a secondary y-axis is needed
	var need2ndAxis = pos_axis[i].includes("right")
	if (need2ndAxis > 0) {
		var valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
		valueAxis2.strictMinMax = true;
		valueAxis2.renderer.opposite = true;
		valueAxis2.renderer.labels.template.fontSize = 12;		
	}

	// Add simple vertical scrollbar
		chart.scrollbarY = new am4core.Scrollbar();
		
	//Create the line series for each channel in the page's .js file
	for(j = 0; j < channels[i].length;j++){
		var series = new am4charts.LineSeries();

		//define which values to use for the x and y axes.
		series.dataFields.valueY = channels[i][j];
		
		series.dataFields.categoryX = "Total_Laps";
		series.name = channels[i][j];
		
		//setup the y-axis labels and min/max
		if (pos_axis[i][j] == "right") {
			valueAxis2.title.text = unit[i][j];
			valueAxis2.title.fontSize = 12;
			valueAxis2.min = min_max[i][j*2];
			valueAxis2.max = min_max[i][j*2+1];
			valueAxis2.keepSelection = true;
			valueAxis2.extraTooltipPrecision = 1;
			var myAxes = valueAxis2;
		}else{
			valueAxis.title.text = unit[i][j];
			valueAxis.title.fontSize = 12;
			valueAxis.min = min_max[i][j*2];
			valueAxis.max = min_max[i][j*2+1];	
			valueAxis.keepSelection = true;
			valueAxis.extraTooltipPrecision = 1;
			var myAxes = valueAxis;
		}
		
		//format the line series
		series.stroke = am4core.color(color_channels[i][j]); //color of line
		series.strokeWidth = 1; //line width
		series.strokeDasharray = "5," + 3* dash_channels[i][j];	//dashed?	

		//add tooltip text differently depending on the chart
		if (i == 0) {	
			series.tooltipText = "Out:{Runs}\nDriver:{NDriver}\n{name}: [bold]{valueY.formatNumber('###.000')}[/]";
		}else{
			series.tooltipText = "{name}: [bold]{valueY.formatNumber('###.000')}[/]";	
		}
		
		//add points
		var bullet = series.bullets.push(new am4charts.CircleBullet());
		bullet.stroke = am4core.color(color_channels[i][j]); //color of dot
		bullet.fill = am4core.color(color_channels[i][j]); //color of dot
		bullet.circle.radius = 1.5;
		series.yAxis = myAxes;
		series.connect = false;
		series = chart.series.push(series);	
		
		//format the tooltips
		series.tooltip.getFillFromObject = false;
		series.tooltip.background.fill = am4core.color(color_channels[i][j]); //color of tooltip
		series.tooltip.background.fillOpacity = 0.5;
		// series.tooltip.label.fill = "grey";
		
		//add a range
		// console.log("Try to add a range")
		for (k = 0; k < sessionLaps.length; k++) {
			let range = categoryAxis.axisRanges.create();
			range.category = sessionLaps[k];
			range.grid.stroke = am4core.color("grey");
			range.grid.strokeWidth = 1;
			range.grid.strokeOpacity = 1;
			range.label.text = sessionNames[k];
			range.label.inside = true;
			range.label.horizontalCenter = "left";
			range.label.valign = "top";
			// range.label.rotation = -90;
		// console.log("Ok, added")
		}
	}
	
	for(m = 0; m < trend_line[i].length;m++){

		// Add a trendline if necessary
		if (trend_line[i][m] !== "" & trend_line[i][m] !== undefined) {
			seriesID = seriesID + 1;			
			addTrendline(chart, seriesID, i, m)
		}				
	}
	
		
	

	
	// Add a legend
	chart.legend = new am4charts.Legend();
	chart.legend.position = "bottom";
	chart.legend.fontSize = 10; 
  
	//insert a cursor
	chart.cursor = new am4charts.XYCursor()

//background image 	//insert a watermark
	var watermark = new am4core.Label();
	watermark.text = "© 2020 Justin Taylor | Top Step Engineering";
	chart.plotContainer.children.push(watermark);
	watermark.align = "right";
	watermark.valign = "bottom";
	watermark.opacity = 0.2;

}


function addTrendline(chart, seriesID, i, m) {

	// Update data
	for(var x = 0; x < chart.data.length; x++) {
	chart.data[x]["value" + seriesID] = trend_line[i][m];
	}

	// console.log(chart.data)

	// Create series
	var series = new am4charts.LineSeries();  
	series.data = chart.data;  
	series.dataFields.valueY = "value" + seriesID;
	series.dataFields.categoryX = "Total_Laps";
	// series.name = channels[i][j] + "_lim";
	series.strokeWidth = 3;
	series.strokeDasharray = "5,3";
	series.strokeOpacity = 0.5;
	series.stroke = am4core.color(trendline_color[i][m]);
	series = chart.series.push(series);
}

function plot_stats(results) {
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////Make some statistics/////////////////////////////////////////


mintime1 = [];
oldValue = maxLaptime;


	// Count the number of laps under the threshold laptime
	const count1 = results.data.reduce((counter, obj)=> {
		obj.sLap_End = obj.sLap_End * 1; //multiplying by 1 converts to a number instead of a string, somehow...
		obj.tLap_End = obj.tLap_End * 1;
		if (obj.NDriver == Drv1 & obj.sLap_End > minDistance & obj.tLap_End > minLaptime) {
			counter += 1
			// Get the minimum laptime for each driver
			if (obj.tLap_End < oldValue) {
				mintime1 = obj.tLap_End;
				oldValue = mintime1;
			}
		}		
	  return counter;
	}, 0);

mintime2 = [];
oldValue = maxLaptime;

	const count2 = results.data.reduce((counter, obj)=> {
		obj.sLap_End = obj.sLap_End * 1; //multiplying by 1 converts to a number instead of a string, somehow...
		obj.tLap_End = obj.tLap_End * 1;
		if (obj.NDriver == Drv2 & obj.sLap_End > minDistance & obj.tLap_End > minLaptime) {
			counter += 1
			// Get the minimum laptime for each driver
			if (obj.tLap_End < oldValue) {
				mintime2 = obj.tLap_End;
				oldValue = mintime2;
			}
		}	  
	  return counter;
	}, 0);
	
mintime3 = [];	
oldValue = maxLaptime;
	const count3 = results.data.reduce((counter, obj)=> {
		obj.sLap_End = obj.sLap_End * 1; //multiplying by 1 converts to a number instead of a string, somehow...
		obj.tLap_End = obj.tLap_End * 1;
		if (obj.NDriver == Drv3 & obj.sLap_End > minDistance & obj.tLap_End > minLaptime) {
			counter += 1
			// Get the minimum laptime for each driver
			if (obj.tLap_End < oldValue) {
				mintime3 = obj.tLap_End;
				oldValue = mintime3;
			}
		}
	  return counter;
	}, 0);

	const countAll = results.data.reduce((counter, obj)=> {
		obj.sLap_End = obj.sLap_End * 1; //multiplying by 1 converts to a number instead of a string, somehow...
		obj.tLap_End = obj.tLap_End * 1;
	  if (obj.sLap_End > minDistance & obj.tLap_End > 0) counter += 1
	  return counter;
	}, 0);

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////
///////////////////Make a driving time chart & fuel cons vs. laptime///////////////////////

// Create chart for lap count
var chart1 = am4core.create("chartDriveTime", am4charts.XYChart);
	var title = chart1.titles.create();
	//title.text = countAll + " Laps Driven";
	title.text = "Timed Laps";

// Create chart for laptime
var chart2 = am4core.create("chartLapTime", am4charts.XYChart);
	var title = chart2.titles.create();
	title.text = "Best Lap Time (sec)";
	
// Create chart for laptime vs. fuelcons
var chart3 = am4core.create("chartLTvsFuelCons", am4charts.XYChart);
	var title = chart3.titles.create();
	title.text = "Laptime vs. Fuel Cons";
	
// Create and Aeromap chart
var chart4 = am4core.create("chartAeroCz1", am4charts.XYChart);
	var title = chart4.titles.create();
	title.text = "FRH vs. RRH vs. Cz at Gate 1";
	
// Create and Aeromap chart
var chart5 = am4core.create("chartAeroCz2", am4charts.XYChart);
	var title = chart5.titles.create();
	title.text = "FRH vs. RRH vs. Cz at Gate 2";

	// Create and Aeromap chart
var chart6 = am4core.create("chartAeroCz3", am4charts.XYChart);
	var title = chart6.titles.create();
	title.text = "FRH vs. RRH vs. Cz at Gate 3";
	
// Create and Aeromap chart
var chart7 = am4core.create("chartAeroCz4", am4charts.XYChart);
	var title = chart7.titles.create();
	title.text = "FRH vs. RRH vs. Cz at Gate 4";

// Add data
chart1.data = [{
  "driverName": Drv1,
  "laps": count1,
  "bestLT": mintime1
}, {
  "driverName": Drv2,
  "laps": count2,
  "bestLT": mintime2
}, {
  "driverName": Drv3,
  "laps": count3,
  "bestLT": mintime3

}];

chart2.data = chart1.data;
chart3.data = results.data;
chart4.data = results.data;
chart5.data = results.data;
chart6.data = results.data;
chart7.data = results.data;

// Create axes

var categoryAxis1 = chart1.xAxes.push(new am4charts.CategoryAxis());
categoryAxis1.dataFields.category = "driverName";

var categoryAxis2 = chart2.xAxes.push(new am4charts.CategoryAxis());
categoryAxis2.dataFields.category = "driverName";

var valueAxisX3 = chart3.xAxes.push(new am4charts.ValueAxis());
valueAxisX3.max = maxLaptime;
valueAxisX3.min = minLaptime;
valueAxisX3.strictMinMax = true;
valueAxisX3.title.text = "Laptime (sec)";

var valueAxisX4 = chart4.xAxes.push(new am4charts.ValueAxis());
valueAxisX4.min = 0;
valueAxisX4.max = 46;
valueAxisX4.strictMinMax = true;
valueAxisX4.title.text = "RRH (mm)";

var valueAxisX5 = chart5.xAxes.push(new am4charts.ValueAxis());
valueAxisX5.min = 0;
valueAxisX5.max = 46;
valueAxisX5.strictMinMax = true;
valueAxisX5.title.text = "RRH (mm)";

var valueAxisX6 = chart6.xAxes.push(new am4charts.ValueAxis());
valueAxisX6.min = 0;
valueAxisX6.max = 46;
valueAxisX6.strictMinMax = true;
valueAxisX6.title.text = "RRH (mm)";

var valueAxisX7 = chart7.xAxes.push(new am4charts.ValueAxis());
valueAxisX7.min = 0;
valueAxisX7.max = 46;
valueAxisX7.strictMinMax = true;
valueAxisX7.title.text = "RRH (mm)";


var valueAxis1 = chart1.yAxes.push(new am4charts.ValueAxis());
valueAxis1.renderer.labels.template.fontSize = 12;
valueAxis1.min = 0;

var valueAxis2 = chart2.yAxes.push(new am4charts.ValueAxis());
valueAxis2.renderer.labels.template.fontSize = 12;
valueAxis2.min = minLaptime;

var valueAxis3 = chart3.yAxes.push(new am4charts.ValueAxis());
valueAxis3.renderer.labels.template.fontSize = 12;
valueAxis3.min = 1;
valueAxis3.title.text = "Cons/Lap (kg)";

var valueAxis4 = chart4.yAxes.push(new am4charts.ValueAxis());
valueAxis4.renderer.labels.template.fontSize = 12;
valueAxis4.min = 0;
valueAxis4.max = 46;
valueAxis4.strictMinMax = true;
valueAxis4.title.text = "FRH (mm)";

var valueAxis5 = chart5.yAxes.push(new am4charts.ValueAxis());
valueAxis5.renderer.labels.template.fontSize = 12;
valueAxis5.min = 0;
valueAxis5.max = 46;
valueAxis5.strictMinMax = true;
valueAxis5.title.text = "FRH (mm)";

var valueAxis6 = chart6.yAxes.push(new am4charts.ValueAxis());
valueAxis6.renderer.labels.template.fontSize = 12;
valueAxis6.min = 0;
valueAxis6.max = 46;
valueAxis6.strictMinMax = true;
valueAxis6.title.text = "FRH (mm)";

var valueAxis7 = chart7.yAxes.push(new am4charts.ValueAxis());
valueAxis7.renderer.labels.template.fontSize = 12;
valueAxis7.min = 0;
valueAxis7.max = 46;
valueAxis7.strictMinMax = true;
valueAxis7.title.text = "FRH (mm)";

// Create series
var series1 = chart1.series.push(new am4charts.ColumnSeries());
series1.dataFields.valueY = "laps";
series1.dataFields.categoryX = "driverName";
series1.name = "laps";
series1.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/] Laps";
series1.columns.template.column.cornerRadiusTopLeft = 10;
series1.columns.template.column.cornerRadiusTopRight = 10;
series1.columns.template.fillOpacity = 0.8;

series1.columns.template.adapter.add("fill", function(fill, target) {
  return chart1.colors.getIndex(target.dataItem.index);
});

var columnTemplate1 = series1.columns.template;
columnTemplate1.strokeWidth = 2;
columnTemplate1.strokeOpacity = 1;
// columnTemplate1.fill = am4core.color("#5a5");

//add a data label
var valueLabel1 = series1.bullets.push(new am4charts.LabelBullet());
valueLabel1.label.text = "{valueY}";
valueLabel1.label.fontSize = 20;
valueLabel1.label.verticalCenter = "top";

// Cursor
chart1.cursor = new am4charts.XYCursor();

<!-- // Create series -->
var series2 = chart2.series.push(new am4charts.ColumnSeries());
series2.dataFields.valueY = "bestLT";
series2.dataFields.categoryX = "driverName";
series2.name = "laps";
series2.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]sec";
series2.columns.template.column.cornerRadiusTopLeft = 10;
series2.columns.template.column.cornerRadiusTopRight = 10;
series2.columns.template.fillOpacity = 0.8;

series2.columns.template.adapter.add("fill", function(fill, target) {
  return chart2.colors.getIndex(target.dataItem.index);
});

var columnTemplate2 = series2.columns.template;
columnTemplate2.strokeWidth = 2;
columnTemplate2.strokeOpacity = 1;

//add a data label
var valueLabel2 = series2.bullets.push(new am4charts.LabelBullet());
valueLabel2.label.text = "{valueY}";
valueLabel2.label.fontSize = 20;
valueLabel2.label.verticalCenter = "top";

// Cursor
chart2.cursor = new am4charts.XYCursor();

<!-- // Create series -->
var series3 = chart3.series.push(new am4charts.LineSeries());
series3.dataFields.valueY = "mFuelUsed_End";
series3.dataFields.valueX = "tLap_End";
//series3.name = "laps";
series3.strokeWidth = 0;
series3.tooltipText = "X: {valueX} / Y: {valueY}";

//add points
		var bullet = series3.bullets.push(new am4charts.CircleBullet());
		bullet.stroke = am4core.color("white"); //color of dot
		bullet.fill = am4core.color("red"); //color of dot
		bullet.circle.radius = 2;

// Cursor & scrollbar
chart3.scrollbarY = new am4core.Scrollbar();
chart3.scrollbarX = new am4core.Scrollbar();
chart3.cursor = new am4charts.XYCursor();

valueAxisX3.extraTooltipPrecision = 2;
valueAxis3.extraTooltipPrecision = 2;

<!-- // Create series -->
var series4 = chart4.series.push(new am4charts.LineSeries());
series4.dataFields.valueY = "hRideF_Gate1";
series4.dataFields.valueX = "hRideR_Gate1";
//series3.name = "laps";
series4.strokeWidth = 0;
series4.tooltipText = "X: {valueX} / Y: {valueY}";

//add points
		var bullet = series4.bullets.push(new am4charts.CircleBullet());
		bullet.stroke = am4core.color("white"); //color of dot
		bullet.fill = am4core.color("red"); //color of dot
		bullet.circle.radius = 3;

// Cursor & scrollbar
//chart4.scrollbarY = new am4core.Scrollbar();
//chart4.scrollbarX = new am4core.Scrollbar();
chart4.cursor = new am4charts.XYCursor();

valueAxisX4.extraTooltipPrecision = 2;
valueAxis4.extraTooltipPrecision = 2;

<!-- // Create series -->
var series5 = chart5.series.push(new am4charts.LineSeries());
series5.dataFields.valueY = "hRideF_Gate2";
series5.dataFields.valueX = "hRideR_Gate2";
//series3.name = "laps";
series5.strokeWidth = 0;
series5.tooltipText = "X: {valueX} / Y: {valueY}";

//add points
		var bullet = series5.bullets.push(new am4charts.CircleBullet());
		bullet.stroke = am4core.color("white"); //color of dot
		bullet.fill = am4core.color("red"); //color of dot
		bullet.circle.radius = 3;

// Cursor & scrollbar
//chart5.scrollbarY = new am4core.Scrollbar();
//chart5.scrollbarX = new am4core.Scrollbar();
chart5.cursor = new am4charts.XYCursor();

valueAxisX5.extraTooltipPrecision = 2;
valueAxis5.extraTooltipPrecision = 2;

<!-- // Create series -->
var series6 = chart6.series.push(new am4charts.LineSeries());
series6.dataFields.valueY = "hRideF_Gate3";
series6.dataFields.valueX = "hRideR_Gate3";
//series3.name = "laps";
series6.strokeWidth = 0;
series6.tooltipText = "X: {valueX} / Y: {valueY}";

//add points
		var bullet = series6.bullets.push(new am4charts.CircleBullet());
		bullet.stroke = am4core.color("white"); //color of dot
		bullet.fill = am4core.color("red"); //color of dot
		bullet.circle.radius = 3;

// Cursor & scrollbar
//chart6.scrollbarY = new am4core.Scrollbar();
//chart6.scrollbarX = new am4core.Scrollbar();
chart6.cursor = new am4charts.XYCursor();

valueAxisX4.extraTooltipPrecision = 2;
valueAxis4.extraTooltipPrecision = 2;

<!-- // Create series -->
var series7 = chart7.series.push(new am4charts.LineSeries());
series7.dataFields.valueY = "hRideF_Gate4";
series7.dataFields.valueX = "hRideR_Gate4";
//series3.name = "laps";
series7.strokeWidth = 0;
series7.tooltipText = "X: {valueX} / Y: {valueY}";

//add points
		var bullet = series7.bullets.push(new am4charts.CircleBullet());
		bullet.stroke = am4core.color("white"); //color of dot
		bullet.fill = am4core.color("red"); //color of dot
		bullet.circle.radius = 3;

// Cursor & scrollbar
//chart7.scrollbarY = new am4core.Scrollbar();
//chart7.scrollbarX = new am4core.Scrollbar();
chart7.cursor = new am4charts.XYCursor();

valueAxisX5.extraTooltipPrecision = 2;
valueAxis5.extraTooltipPrecision = 2;

///add the last few laps to the RH plots////
var series40 = chart4.series.push(new am4charts.LineSeries());
series40.dataFields.valueY = "myFRH_gate1";
series40.dataFields.valueX = "myRRH_gate1";
//series3.name = "laps";
series40.strokeWidth = 0;
series40.tooltipText = "X: {valueX} / Y: {valueY}";

//add points
		var bullet = series40.bullets.push(new am4charts.CircleBullet());
		bullet.stroke = am4core.color("black"); //color of dot
		bullet.fill = am4core.color("yellow"); //color of dot
		bullet.circle.radius = 4;

var series50 = chart5.series.push(new am4charts.LineSeries());
series50.dataFields.valueY = "myFRH_gate2";
series50.dataFields.valueX = "myRRH_gate2";
//series3.name = "laps";
series50.strokeWidth = 0;
series50.tooltipText = "X: {valueX} / Y: {valueY}";

//add points
		var bullet = series50.bullets.push(new am4charts.CircleBullet());
		bullet.stroke = am4core.color("black"); //color of dot
		bullet.fill = am4core.color("yellow"); //color of dot
		bullet.circle.radius = 4;
		
var series60 = chart6.series.push(new am4charts.LineSeries());
series60.dataFields.valueY = "myFRH_gate3";
series60.dataFields.valueX = "myRRH_gate3";
//series3.name = "laps";
series60.strokeWidth = 0;
series60.tooltipText = "X: {valueX} / Y: {valueY}";

//add points
		var bullet = series60.bullets.push(new am4charts.CircleBullet());
		bullet.stroke = am4core.color("black"); //color of dot
		bullet.fill = am4core.color("yellow"); //color of dot
		bullet.circle.radius = 4;
		
var series70 = chart7.series.push(new am4charts.LineSeries());
series70.dataFields.valueY = "myFRH_gate4";
series70.dataFields.valueX = "myRRH_gate4";
//series3.name = "laps";
series70.strokeWidth = 0;
series70.tooltipText = "X: {valueX} / Y: {valueY}";

//add points
		var bullet = series70.bullets.push(new am4charts.CircleBullet());
		bullet.stroke = am4core.color("black"); //color of dot
		bullet.fill = am4core.color("yellow"); //color of dot
		bullet.circle.radius = 4;

///end adding the last few laps to the RH plots///
}