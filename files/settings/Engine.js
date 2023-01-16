// ------------------------------------------------
// channels ----------------------------------------
// ------------------------------------------------
i=0;

i = i + 1;
dia_title		[i] = ["Min/Max RPM"];	// define the titles
channels		[i] = ["FCT_nEngineOnThrottle_Max", "FCT_nEngineOnThrottle_Min"];	// define the channels for the diagrams
min_max			[i] = [7000, 8500, 3000, 6000];	// define the min/max for the diagram y-axis
unit			[i] = [" rpm", " rpm"];	// define the units
color_channels	[i] = ["red", "green"];	// colors for channels ("" = standard color)
pos_axis		[i] = ["", "right"];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["HV Battery SoC"];	// define the titles
channels		[i] = ["rSOC_HVB_Max", "rSOC_HVB_Min"];	// define the channels for the diagrams
min_max			[i] = [10, 90, 10, 90];	// define the min/max for the diagram y-axis
unit			[i] = [" %", " %"];	// define the units
color_channels	[i] = ["red", "green"];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["PPU Illegal Integral"];	// define the titles
channels		[i] = ["FIA_PPUIllegal_Max"];	// define the channels for the diagrams
min_max			[i] = [0, 60];	// define the min/max for the diagram y-axis
unit			[i] = [" Too much power! (kW*sec)"];	// define the units
color_channels	[i] = [colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis


i = i + 1;
dia_title		[i] = ["TC Switches"];	// define the titles
channels		[i] = ["NTcStage1_Min", "NTcStage2_Min", "NTcStage3_Min"];	// define the channels for the diagrams
min_max			[i] = [0, 12, 0, 12, 0, 12];	// define the min/max for the diagram y-axis
unit			[i] = [" sec", " sec"];	// define the units
color_channels	[i] = ["blue", "green", "red"];	// colors for channels ("" = standard color)
pos_axis		[i] = ["", ""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Wheelspin & TC Interventions"];	// define the titles
channels		[i] = ["tSpin_End", "tTcIntervention_End"];	// define the channels for the diagrams
min_max			[i] = [0, avgLaptime/3, 0, avgLaptime/3];	// define the min/max for the diagram y-axis
unit			[i] = [" sec", " sec"];	// define the units
color_channels	[i] = [colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = ["", ""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Turbo Speeds"];	// define the titles
channels		[i] = ["nTurboRh_Max", "nTurboLh_Max"];	// define the channels for the diagrams
min_max			[i] = [150000, 180000, 150000, 180000];	// define the min/max for the diagram y-axis
unit			[i] = ["rpm", "rpm"];	// define the units
color_channels	[i] = [colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Boost"];	// define the titles
channels		[i] = ["p22Rh_Mean", "p22Lh_Mean", "p22Target_Mean"];	// define the channels for the diagrams
min_max			[i] = [2500, 3300, 2500, 3300, 2500, 3300];	// define the min/max for the diagram y-axis
unit			[i] = ["mBar", "mBar", "mBar"];	// define the units
color_channels	[i] = [colRL, colRR, colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0,0,1];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Exhaust Temps"];	// define the titles
channels		[i] = ["TExhaustRh_Max", "TExhaustLh_Max"];	// define the channels for the diagrams
min_max			[i] = [800, 1100, 800, 1100];	// define the min/max for the diagram y-axis
unit			[i] = ["degC", "degC"];	// define the units
color_channels	[i] = [colFL, colFR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0,0];	// dash for channels (0 = no dash)
trend_line		[i] = [1050];	// define values for trend lines
trendline_color	[i] = ["red"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Water Temp"];	// define the titles
channels		[i] = ["TWater_Mean"];	// define the channels for the diagrams
min_max			[i] = [65, 120];	// define the min/max for the diagram y-axis
unit			[i] = [" degC"];	// define the units
color_channels	[i] = [colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [70, 95, 100];	// define values for trend lines
trendline_color	[i] = ["blue", "orange", "red"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Oil Temp"];	// define the titles
channels		[i] = ["TOil_Mean"];	// define the channels for the diagrams
min_max			[i] = [65, 130];	// define the min/max for the diagram y-axis
unit			[i] = [" degC"];	// define the units
color_channels	[i] = [colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [70, 105, 110];	// define values for trend lines
trendline_color	[i] = ["blue", "orange", "red"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Gearbox Temp"];	// define the titles
channels		[i] = ["TOilGbx_Min", "TOilGbx_Max"];	// define the channels for the diagrams
min_max			[i] = [40, 150, 40, 150];	// define the min/max for the diagram y-axis
unit			[i] = [" degC"];	// define the units
color_channels	[i] = ["green", "red"];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [55, 100, 120];	// define values for trend lines
trendline_color	[i] = ["blue", "green", "red"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Water Pressure"];	// define the titles
channels		[i] = ["pWater_Min", "pWater_Max"];	// define the channels for the diagrams
min_max			[i] = [1, 4.5, 1, 4.5];	// define the min/max for the diagram y-axis
unit			[i] = [" bar", " bar"];	// define the units
color_channels	[i] = ["green", "red"];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [1.85];	// define values for trend lines
trendline_color	[i] = ["grey"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Oil Pressure"];	// define the titles
channels		[i] = ["pOil_Mean"];	// define the channels for the diagrams
min_max			[i] = [2, 7];	// define the min/max for the diagram y-axis
unit			[i] = ["bar"];	// define the units
color_channels	[i] = [colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [3, 6];	// define values for trend lines
trendline_color	[i] = ["red", "red"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Crankcase Pressure"];	// define the titles
channels		[i] = ["pCrank_Mean"];	// define the channels for the diagrams
min_max			[i] = [500, 1000];	// define the min/max for the diagram y-axis
unit			[i] = ["bar"];	// define the units
color_channels	[i] = [colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

//i = i + 1;
//dia_title		[i] = ["Limiters"];	// define the titles
//channels		[i] = ["CAN_SoftLimiter_Counter_end", "CAN_HardLimiter_LapHits_end"];	// define the channels for the diagrams
//min_max			[i] = [0, 5, 0, 40];	// define the min/max for the diagram y-axis
//unit			[i] = ["sec/hits", "sec/hits"];	// define the units
//color_channels	[i] = ["green", "red"];	// colors for channels ("" = standard color)
//pos_axis		[i] = [0, "right"];	// define position for y-axis (0 = left, 1 = right)
//dash_channels	[i] = [0];	// dash for channels (0 = no dash)
//trend_line		[i] = [];	// define values for trend lines
//trendline_color	[i] = [""];	// Define colors for trend lines
//precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Delta to Ambient"];	// define the titles
channels		[i] = ["TWaterAmbientDelta_Mean", "TOilAmbientDelta_Mean", "TOilGbxAmbientDelta_Mean"];	// define the channels for the diagrams
min_max			[i] = [40, 80, 40, 80, 40, 80];	// define the min/max for the diagram y-axis
unit			[i] = ["degC", "degC", "degC"];	// define the units
color_channels	[i] = ["green", "lightblue", "orange"];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Ambient Temperature"];	// define the titles
channels		[i] = ["TAirPitot_Mean"];	// define the channels for the diagrams
min_max			[i] = [10, 35];	// define the min/max for the diagram y-axis
unit			[i] = ["degC"];	// define the units
color_channels	[i] = [colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [15];	// define values for trend lines
trendline_color	[i] = ["green"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis
