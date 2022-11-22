// ------------------------------------------------
// channels ----------------------------------------
// ------------------------------------------------

// define the titles
dia_title[1] = ["Zeroing Loads"];
dia_title[2] = ["Zeroing Dampers"];
dia_title[3] = ["Pit Rideheights"];
dia_title[4] = ["Pitot Calibration"];
dia_title[5] = ["Steering on Straight"];


// define the channels for the diagrams
channels[1] = ["FPushrodFL_Pit", "FPushrodFR_Pit", "FPushrodRL_Pit", "FPushrodRR_Pit" ];
channels[2] = ["xDamperFL_Pit", "xDamperFR_Pit", "xDamperRL_Pit", "xDamperRR_Pit" ];
channels[3] = ["hRideF_Pit", "hRideR_Pit"];
channels[4] = ["rvPitotvCarLin_Mean"];
channels[5] = ["aSteerSTR"];


// define the min/max for the diagram y-axis
min_max[1] = ["", "", "", "", "", "", "", ""];
min_max[2] = ["", "", "", "", "", "", "", ""];
min_max[3] = [20, 80, 20, 80];
min_max[4] = [0.8, 1.2];
min_max[5] = [-10, 10];


// define preset zoom value for y-axis
// pre_zoom[1] = ["", "", "", "", "", "", "", ""];
// pre_zoom[2] = ["", "", "", "", "", "", "", ""];
// pre_zoom[3] = ["", "", "", "", "", "", "", ""];

// define the units
unit[1] = [" N", " N", " N", " N"];
unit[2] = [" mm", " mm", " mm", " mm"];
unit[3] = [" mm", " mm"];
unit[4] = [" "];
unit[5] = ["deg"];



// colors for channels ("" = standard color)
color_channels[1] = [colFL, colFR, colRL, colRR];
color_channels[2] = [colFL, colFR, colRL, colRR];
color_channels[3] = [colFR, colRR];
color_channels[4] = ["yellow"];
color_channels[5] = ["green"];


// define position for y-axis (0 = left, 1 = right)
pos_axis[1] = [""];
pos_axis[2] = [""];
pos_axis[3] = [""];
pos_axis[4] = [""];
pos_axis[5] = [""];



// dash for channels (0 = no dash)
dash_channels[1] = [0, 0, 0, 0];
dash_channels[2] = [0, 0, 0, 0];
dash_channels[3] = [0, 0];
dash_channels[4] = [0];
dash_channels[5] = [0];



// define values for trend lines

trend_line[1] = [];
trend_line[2] = [];
trend_line[3] = [];
trend_line[4] = [1];
trend_line[5] = [0];


// Define colors for trend lines

trendline_color[1] = [];
trendline_color[2] = [];
trendline_color[3] = [];
trendline_color[4] = ["gray"];
trendline_color[5] = ["gray"];


// define number of decimal places for y-axis
precision[1] = [2,2,2,2];
precision[2] = [2,2,2,2];
precision[3] = [2,2,2,2];
precision[4] = [2,2,2,2];
precision[5] = [2,2,2,2];


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
