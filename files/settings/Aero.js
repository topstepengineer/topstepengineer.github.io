// ------------------------------------------------
// channels ----------------------------------------
// ------------------------------------------------

i=0;

i = i + 1;
dia_title		[i] = ["Downforce at Gate 1"];	// define the titles
channels		[i] = ["SCzFMeasLoad_Gate1", "SCzFFromMap_Gate1", "SCzRMeasLoad_Gate1", "SCzRFromMap_Gate1"];	// define the channels for the diagrams
min_max			[i] = [1, 3, 1, 3, 1, 3, 1, 3];	// define the min/max for the diagram y-axis
unit			[i] = ["Cz", "Cz", "Cz", "Cz"];	// define the units
color_channels	[i] = [colFR, colFR, colRR, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 1, 0, 1];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Downforce at Gate 2"];	// define the titles
channels		[i] = ["SCzFMeasLoad_Gate2", "SCzFFromMap_Gate2", "SCzRMeasLoad_Gate2", "SCzRFromMap_Gate2"];	// define the channels for the diagrams
min_max			[i] = [1, 3, 1, 3, 1, 3, 1, 3];	// define the min/max for the diagram y-axis
unit			[i] = ["Cz", "Cz", "Cz", "Cz"];	// define the units
color_channels	[i] = [colFR, colFR, colRR, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 1, 0, 1];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

// i = i + 1;
// dia_title		[i] = ["Downforce at EoS"];	// define the titles
// channels		[i] = ["Cz_EoS_mean", "Cz_pitot_EoS_mean", "Cz_map_EoS_mean"];	// define the channels for the diagrams
// min_max			[i] = [3.5, 5.5, 3.5, 5.5, 3.5, 5.5];	// define the min/max for the diagram y-axis
// unit			[i] = ["Cz", "Cz", "Cz"];	// define the units
// color_channels	[i] = ["orange", "orange", "gray"];	// colors for channels ("" = standard color)
// pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
// dash_channels	[i] = [0, 1, 1];	// dash for channels (0 = no dash)
// trend_line		[i] = [];	// define values for trend lines
// trendline_color	[i] = [""];	// Define colors for trend lines
// precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Aerobalance Gate 1 vs Map"];	// define the titles
channels		[i] = ["rAeroBalMeasLoad_Gate1", "rAeroBalMap_Gate1"];	// define the channels for the diagrams
min_max			[i] = [0.35, 0.50, 0.35, 0.50];	// define the min/max for the diagram y-axis
unit			[i] = [" % Front", " % Front"];	// define the units
color_channels	[i] = ["green", "gray"];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 1];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Aerobalance Gate 2 vs Map"];	// define the titles
channels		[i] = ["rAeroBalMeasLoad_Gate2", "rAeroBalMap_Gate2"];	// define the channels for the diagrams
min_max			[i] = [0.35, 0.50, 0.35, 0.50];	// define the min/max for the diagram y-axis
unit			[i] = [" % Front", " % Front"];	// define the units
color_channels	[i] = ["green", "gray"];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 1];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Aerobalance Gate 3 vs Map"];	// define the titles
channels		[i] = ["rAeroBalMeasLoad_Gate3", "rAeroBalMap_Gate3"];	// define the channels for the diagrams
min_max			[i] = [0.35, 0.50, 0.35, 0.50];	// define the min/max for the diagram y-axis
unit			[i] = [" % Front", " % Front"];	// define the units
color_channels	[i] = ["green", "gray"];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 1];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Aerobalance Gate 4 vs Map"];	// define the titles
channels		[i] = ["rAeroBalMeasLoad_Gate4", "rAeroBalMap_Gate4"];	// define the channels for the diagrams
min_max			[i] = [0.35, 0.50, 0.35, 0.50];	// define the min/max for the diagram y-axis
unit			[i] = [" % Front", " % Front"];	// define the units
color_channels	[i] = ["green", "gray"];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 1];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title[i] = ["Rideheight at Gate 1"];
channels[i] = ["hRideF_Gate1", "hRideR_Gate1"];
min_max[i] = [-5, 50, -5, 50];
unit[i] = [" mm", " mm"];
color_channels[i] = [colFR, colRR];
pos_axis[i] = [""];
dash_channels[i] = [0, 0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [2,2];

i = i + 1;
dia_title[i] = ["Rideheight at Gate 2"];
channels[i] = ["hRideF_Gate2", "hRideR_Gate2"];
min_max[i] = [-5, 50, -5, 50];
unit[i] = [" mm", " mm"];
color_channels[i] = [colFR, colRR];
pos_axis[i] = [""];
dash_channels[i] = [0, 0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [2,2];

i = i + 1;
dia_title[i] = ["Rideheight at Gate 3"];
channels[i] = ["hRideF_Gate3", "hRideR_Gate3"];
min_max[i] = [-5, 50, -5, 50];
unit[i] = [" mm", " mm"];
color_channels[i] = [colFR, colRR];
pos_axis[i] = [""];
dash_channels[i] = [0, 0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [2,2];

i = i + 1;
dia_title[i] = ["Rideheight at Gate 4"];
channels[i] = ["hRideF_Gate4", "hRideR_Gate4"];
min_max[i] = [-5, 50, -5, 50];
unit[i] = [" mm", " mm"];
color_channels[i] = [colFR, colRR];
pos_axis[i] = [""];
dash_channels[i] = [0, 0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [2,2];

i = i + 1;
dia_title[i] = ["Rideheight at End of Straight"];
channels[i] = ["hRideF_TS", "hRideR_TS"];
min_max[i] = [5, 40, 5, 40];
unit[i] = [" mm", " mm"];
color_channels[i] = [colFR, colRR];
pos_axis[i] = [""];
dash_channels[i] = [0, 0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [2,2];

//i = i + 1;
//dia_title[i] = ["Rake"];
//channels[i] = ["s_rake_gate1_mean", "s_rake_gate2_mean", "s_rake_gate3_mean", "s_rake_gate4_mean", "s_rake_EoS_mean"];
//min_max[i] = [-10, 25, -10, 25, -10, 25, -10, 25, -10, 25];
//unit[i] = [" mm", " mm", " mm", " mm", " mm"];
//color_channels[i] = ["green", "green", "grey", "grey", "pink"];
//pos_axis[i] = [""];
//dash_channels[i] = [0, 1, 0, 1, 0];
//trend_line[i] = [];
//trendline_color[i] = [];
//precision[i] = [2,2];

i = i + 1;
dia_title[i] = ["Wind"];
channels[i] = ["vWind_Gate1", "vWind_Gate2", "vWind_Gate3", "vWind_Gate4"];
min_max[i] = [-25, 25, -25, 25, -25, 25, -25, 25, -25, 25];
unit[i] = ["kph", "kph", "kph", "kph"];
color_channels[i] = ["green", "green", "grey", "grey"];
pos_axis[i] = [""];
dash_channels[i] = [0, 1, 0, 1];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [2,2];