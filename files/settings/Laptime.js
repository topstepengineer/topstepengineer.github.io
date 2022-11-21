// ------------------------------------------------
// channels ----------------------------------------
// ------------------------------------------------

// define the titles
var dia_title = new Array();
dia_title[0] = ["Laptimes"];

// define the channels for the diagrams
var channels = new Array();
channels[0] = ["tLap_End"];

// define the min/max for the diagram y-axis
var min_max = new Array();
min_max[0] = [minLaptime, maxLaptime];

// define preset zoom value for y-axis
// var pre_zoom = new Array();
// pre_zoom[0] = [120, 140];

// define the units
var unit = new Array();
unit[0] = [" sec"];


// colors for channels ("" = standard color)
var color_channels = new Array();
color_channels[0] = [colDefault];


// define position for y-axis (0 = left, 1 = right)
var pos_axis = new Array();
pos_axis[0] = [""];



// dash for channels (0 = no dash)
var dash_channels = new Array();
dash_channels[0] = [0];


// define values for trend lines
var trend_line = new Array();
trend_line[0] = [""];


// Define colors for trend lines
var trendline_color = new Array();
trendline_color[0] = [];


// define number of decimal places for y-axis
var precision = new Array();
precision[0] = [1];



// connect data points (1 = connect, 0 = do not connect)
// var connect_lines = new Array();
// connect_lines[0] = [0];
// connect_lines[1] = [0, 0];
// connect_lines[2] = [0];

// Automatically hide lines (0 = hide, 1 = show)
// var hidden_lines = new Array();
// hidden_lines[0] = [1];
// hidden_lines[1] = [1, 1];
// hidden_lines[2] = [1];