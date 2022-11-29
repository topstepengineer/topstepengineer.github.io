// ------------------------------------------------
// channels ----------------------------------------
// ------------------------------------------------

// define the titles
// var dia_title = new Array();
// dia_title[0] = ["Laptime"];
dia_title[1] = ["Gearbox Temp"];
dia_title[2] = ["Gearbox Pressure"];
dia_title[3] = ["Shift Count"];
dia_title[4] = ["Shift RPM"];
dia_title[5] = ["AGS Activity"];


// define the channels for the diagrams
// var channels = new Array();
// channels[0] = ["Laptime"];
channels[1] = ["TOilGbx_Min", "TOilGbx_Max"];
channels[2] = ["pOilGearboxIn_Min", "pOilGearboxIn_Max"];
channels[3] = ["nShiftUpCount_End", "nShiftDwnCount_End"];
channels[4] = ["nEngineUpshift12_Mean", "nEngineUpshift23_Mean", "nEngineUpshift34_Mean", "nEngineUpshift45_Mean", "nEngineUpshift56_Mean", "nEngineUpshift67_Mean"];
channels[5] = ["GCU_CUR_COMP_AVG_mean"];

// define the min/max for the diagram y-axis
// var min_max = new Array();
// min_max[0] = [115, 150];
min_max[1] = [40, 150, 40, 150];
min_max[2] = [0, 2.2, 0, 2.2];
min_max[3] = [20, ""];
min_max[4] = [4000, 9000, 4000, 9000, 4000, 9000, 4000, 9000, 4000, 9000, 4000, 9000];
min_max[5] = [0, 7];

// define preset zoom value for y-axis
// pre_zoom[1] = ["", "", "", "", "", "", "", ""];
// pre_zoom[2] = ["", "", "", "", "", "", "", ""];
// pre_zoom[3] = ["", "", "", "", "", "", "", ""];

// define the units
// var unit = new Array();
// unit[0] = [" sec"];
unit[1] = [" degC"];
unit[2] = [" bar", " bar"];
unit[3] = [" # of shifts", " # of shifts"];
unit[4] = [" rpm", " rpm", " rpm", " rpm", " rpm"];
unit[5] = ["Misc"];

// colors for channels ("" = standard color)
// var color_channels = new Array();
// color_channels[0] = [colDefault];
color_channels[1] = ["green", "red"];
color_channels[2] = ["green", "red"];
color_channels[3] = ["green", "red"];
color_channels[4] = [colFL, colFR, colRL, colRR, "green", colDefault];
color_channels[5] = ["red"];

// define position for y-axis (0 = left, 1 = right)
// var pos_axis = new Array();
// pos_axis[0] = [""];
pos_axis[1] = [""];
pos_axis[2] = ["", ""];
pos_axis[3] = [""];
pos_axis[4] = [""];
pos_axis[5] = [""];


// dash for channels (0 = no dash)
dash_channels[1] = [0, 0, 0, 0];
dash_channels[2] = [0, 0, 0, 0];
dash_channels[3] = [0, 0, 0, 0];
dash_channels[4] = [0, 0, 0, 0];
dash_channels[5] = [0, 0, 0, 0];

// define values for trend lines
trend_line[1] = [55, 100, 120];
trend_line[2] = ["", ""];
trend_line[3] = [""];
trend_line[4] = ["", "", "", 7500, ""];
trend_line[5] = [5];


// Define colors for trend lines
trendline_color[1] = ["blue", "green", "red"];
trendline_color[2] = [];
trendline_color[3] = [];
trendline_color[4] = [];
trendline_color[5] = ["grey"];
// trendline_color[6] = [];
// trendline_color[7] = [];
// trendline_color[8] = [];


// define number of decimal places for y-axis
// var precision = new Array();
// precision[0] = [1];
precision[1] = [1];
precision[2] = [2,2];
precision[3] = [2,2,2,2];
precision[4] = [2,2];
precision[5] = [2,2];

dia_title		[6] = ["Diff Activity"];	// define the titles
channels		[6] = ["EDiffEnergyPowerOnF_End", "EDiffEnergyBRKF_End", "EDiffEnergyPowerOnR_End", "EDiffEnergyBRKR_End"];	// define the channels for the diagrams
min_max			[6] = [0, 3500, 0, 3500,0, 3500,0, 3500];	// define the min/max for the diagram y-axis
unit			[6] = ["MJ", "MJ", "MJ", "MJ"];	// define the units
color_channels	[6] = ["blue", "lightblue", "red", colRL];	// colors for channels ("" = standard color)
pos_axis		[6] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[6] = [0];	// dash for channels (0 = no dash)
trend_line		[6] = [];	// define values for trend lines
trendline_color	[6] = [""];	// Define colors for trend lines
precision		[6] = [];	// define number of decimal places for y-axis

dia_title		[7] = ["Average On-Throttle RPM"];	// define the titles
channels		[7] = ["FCT_nEngineOnThrottle_Max"];	// define the channels for the diagrams
min_max			[7] = [""];	// define the min/max for the diagram y-axis
unit			[7] = ["RPM"];	// define the units
color_channels	[7] = ["green"];	// colors for channels ("" = standard color)
pos_axis		[7] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[7] = [0];	// dash for channels (0 = no dash)
trend_line		[7] = [];	// define values for trend lines
trendline_color	[7] = [""];	// Define colors for trend lines
precision		[7] = [];	// define number of decimal places for y-axis

//dia_title		[8] = ["Gearbox Oil Level"];	// define the titles
//channels		[8] = ["AJF_Level_GbxOil_min", "AJF_Level_GbxOil_max"];	// define the channels for the diagrams
//min_max			[8] = [500, 5000];	// define the min/max for the diagram y-axis
//unit			[8] = ["?"];	// define the units
//color_channels	[8] = ["red", "green"];	// colors for channels ("" = standard color)
//pos_axis		[8] = [0];	// define position for y-axis (0 = left, 1 = right)
//dash_channels	[8] = [0];	// dash for channels (0 = no dash)
//trend_line		[8] = [];	// define values for trend lines
//trendline_color	[8] = [""];	// Define colors for trend lines
//precision		[8] = [];	// define number of decimal places for y-axis
