// ------------------------------------------------
// channels ----------------------------------------
// ------------------------------------------------
i=0;

i = i + 1;
dia_title		[i] = ["Brake Caliper Temps"];	// define the titles
channels		[i] = ["TCaliperFL_Max", "TCaliperFR_Max", "TCaliperRL_Max", "TCaliperRR_Max"];	// define the channels for the diagrams
min_max			[i] = [50, 200, 50, 200, 50, 200, 50, 200];	// define the min/max for the diagram y-axis
unit			[i] = ["degC", "degC", "degC", "degC"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [160, 180];	// define values for trend lines
trendline_color	[i] = ["orange", "red"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Brake Disc Minimum Temps"];	// define the titles
channels		[i] = ["TBrakeFL_Min", "TBrakeFR_Min", "TBrakeRL_Min", "TBrakeRR_Min"];	// define the channels for the diagrams
min_max			[i] = [150, 600, 150, 600, 150, 600, 150, 600];	// define the min/max for the diagram y-axis
unit			[i] = ["degC", "degC", "degC", "degC"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [350, 500];	// define values for trend lines
trendline_color	[i] = ["white", "red"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Brake Disc Maximum Temps"];	// define the titles
channels		[i] = ["TBrakeFL_Max", "TBrakeFR_Max", "TBrakeRL_Max", "TBrakeRR_Max"];	// define the channels for the diagrams
min_max			[i] = [400, 1000, 400, 1000, 400, 1000, 400, 1000];	// define the min/max for the diagram y-axis
unit			[i] = ["degC", "degC", "degC", "degC"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [900];	// define values for trend lines
trendline_color	[i] = ["red"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Brake Force Balance"];	// define the titles
channels		[i] = ["rBrakeForceBias_Mean", "NBrakeBal_Min"];	// define the channels for the diagrams
min_max			[i] = [0.45, 0.74, 45, 74];	// define the min/max for the diagram y-axis
unit			[i] = [" % front", " % front"];	// define the units
color_channels	[i] = ["green", colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = ["","right"];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 1];	// dash for channels (0 = no dash)
trend_line		[i] = [57.4];	// define values for trend lines
trendline_color	[i] = ["grey"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Brake Pressure Balance"];	// define the titles
channels		[i] = ["rBrakeBias_Mean", "rBrakeBiasSL_Mean"];	// define the channels for the diagrams
min_max			[i] = [52, 64, 52, 64];	// define the min/max for the diagram y-axis
unit			[i] = [" % front", " % front"];	// define the units
color_channels	[i] = ["green", "green"];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 1];	// dash for channels (0 = no dash)
trend_line		[i] = [57.4];	// define values for trend lines
trendline_color	[i] = ["grey"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Max Brake Pressure"];	// define the titles
channels		[i] = ["pBrakeTotal_Max"];	// define the channels for the diagrams
min_max			[i] = [0, 180];	// define the min/max for the diagram y-axis
unit			[i] = [" bar"];	// define the units
color_channels	[i] = [colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = ["grey"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Brake Efficiency"];	// define the titles
channels		[i] = ["rBrakeEfficiency_MaxBrake"];	// define the channels for the diagrams
min_max			[i] = [0.01, 0.03];	// define the min/max for the diagram y-axis
unit			[i] = [" G/bar"];	// define the units
color_channels	[i] = [colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Braking Acceleration"];	// define the titles
channels		[i] = ["gLong_Min"];	// define the channels for the diagrams
min_max			[i] = [-4, -1.5];	// define the min/max for the diagram y-axis
unit			[i] = ["G's"];	// define the units
color_channels	[i] = [colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Brake Slips"];	// define the titles
channels		[i] = ["sBrakeLockFL_End", "sBrakeLockFR_End", "sBrakeLockRL_End", "sBrakeLockRR_End"];	// define the channels for the diagrams
min_max			[i] = [0, 20, 0, 20, 0, 20, 0, 20];	// define the min/max for the diagram y-axis
unit			[i] = ["m", "m", "m", "m"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Brake Energy"];	// define the titles
channels		[i] = ["EBrakeEnergyFL_End", "EBrakeEnergyFR_End", "EBrakeEnergyRL_End", "EBrakeEnergyRR_End"];	// define the channels for the diagrams
min_max			[i] = [-4, 0, -4, 0, -4, 0, -4, 0];	// define the min/max for the diagram y-axis
unit			[i] = [" MJ", " MJ", " MJ", " MJ"];	// define the units
color_channels	[i] = [colDefault, colFL, colFR, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 1, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Brake Wear Inside"];	// define the titles
channels		[i] = ["xBrakepadInboardFL_Max", "xBrakepadInboardFR_Max", "xBrakepadInboardRL_Max", "xBrakepadInboardRR_Max"];	// define the channels for the diagrams
min_max			[i] = [0, 10,0, 10,0, 10,0, 10];	// define the min/max for the diagram y-axis
unit			[i] = [" mm"," mm"," mm"," mm"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Brake Wear Outside"];	// define the titles
channels		[i] = ["xBrakepadOutboardFL_Max", "xBrakepadOutboardFR_Max", "xBrakepadOutboardRL_Max", "xBrakepadOutboardRR_Max"];	// define the channels for the diagrams
min_max			[i] = [0, 10,0, 10,0, 10,0, 10];	// define the min/max for the diagram y-axis
unit			[i] = [" mm"," mm"," mm"," mm"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Brake Knockback"];	// define the titles
channels		[i] = ["xKnockBackFL_End", "xKnockBackFR_End", "xKnockBackRL_End", "xKnockBackRR_End"];	// define the channels for the diagrams
min_max			[i] = [0, 1, 0, 1, 0, 1, 0, 1];	// define the min/max for the diagram y-axis
unit			[i] = [" mm"," mm"," mm"," mm"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Brake Stiffness"];	// define the titles
channels		[i] = ["kBrakeF", "kBrakeR"];	// define the channels for the diagrams
min_max			[i] = [5, 20, 5, 20];	// define the min/max for the diagram y-axis
unit			[i] = ["", ""];	// define the units
color_channels	[i] = [colFR, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis
