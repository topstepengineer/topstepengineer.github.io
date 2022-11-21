// ------------------------------------------------
// channels ----------------------------------------
// ------------------------------------------------
i=0;

// i = i + 1;
// dia_title		[i] = ["Left Tire Gas Pressures"];	// define the titles
// channels		[i] = ["P_FL_mean"];	// define the channels for the diagrams
// min_max			[i] = [20, 32];	// define the min/max for the diagram y-axis
// unit			[i] = ["psi"];	// define the units
// color_channels	[i] = [colDefault];	// colors for channels ("" = standard color)
// pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
// dash_channels	[i] = [0];	// dash for channels (0 = no dash)
// trend_line		[i] = [];	// define values for trend lines
// trendline_color	[i] = [""];	// Define colors for trend lines
// precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Max Speed"];	// define the titles
channels		[i] = ["vCar_Max"];	// define the channels for the diagrams
min_max			[i] = [maxSpeed - 10, maxSpeed];	// define the min/max for the diagram y-axis
unit			[i] = ["kph"];	// define the units
color_channels	[i] = ["green", colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Tire Gas Pressures"];	// define the titles
channels		[i] = ["pTyreFL_Mean", "pTyreFR_Mean", "pTyreRL_Mean", "pTyreRR_Mean"];	// define the channels for the diagrams
min_max			[i] = [1.5, 2.2, 1.5, 2.2, 1.5, 2.2, 1.5, 2.2];	// define the min/max for the diagram y-axis
unit			[i] = ["bar", "bar", "bar", "bar"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [1.8];	// define values for trend lines
trendline_color	[i] = ["green"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Brake Disc Minimum Temps"];	// define the titles
channels		[i] = ["TBrakeFL_Min", "TBrakeFR_Min", "TBrakeRL_Min", "TBrakeRR_Min"];	// define the channels for the diagrams
min_max			[i] = [150, 600, 150, 600, 150, 600, 150, 600];	// define the min/max for the diagram y-axis
unit			[i] = ["degC"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [350, 500];	// define values for trend lines
trendline_color	[i] = ["white", "red"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title[i] = ["Rideheight at End of Straight"];
channels[i] = ["hRideF_TS", "hRideR_TS"];
min_max[i] = [0, 30, 0, 30];
unit[i] = [" mm", " mm"];
color_channels[i] = [colFR, colRR];
pos_axis[i] = [""];
dash_channels[i] = [0, 0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [2,2];

i = i + 1;
dia_title[i] = ["Minimum Front Rideheights"];
channels[i] = ["hRideF_Gate1", "hRideF_Gate2", "hRideF_Gate3", "hRideF_Gate4"];
min_max[i] = [-5, 30, -5, 30, -5, 30, -5, 30];
unit[i] = [" mm", " mm"];
color_channels[i] = [colFL, colFR, colFL, colFR];
pos_axis[i] = [""];
dash_channels[i] = [0, 0, 1, 1];
trend_line[i] = [0];
trendline_color[i] = ["grey"];
precision[i] = [2,2];

// i = i + 1;
// dia_title[i] = ["Rake"];
// channels[i] = ["s_rake_gate1_mean", "s_rake_gate2_mean", "s_rake_EoS_mean"];
// min_max[i] = [-10, 25, -10, 25, -10, 25];
// unit[i] = [" mm", " mm", " mm"];
// color_channels[i] = ["green", "green", "pink"];
// pos_axis[i] = [""];
// dash_channels[i] = [0, 0, 1];
// trend_line[i] = [];
// trendline_color[i] = [];
// precision[i] = [2,2];

i = i + 1;
dia_title		[i] = ["Lap Consumption"];	// define the titles
channels		[i] = ["mFuelUsed_End"];	// define the channels for the diagrams
min_max			[i] = [1, ""];	// define the min/max for the diagram y-axis
unit			[i] = [" kg"];	// define the units
color_channels	[i] = [colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["PPU Energy"];	// define the titles
channels		[i] = ["EFIAPPUEnergy_End", "EFIAPPUEnergyLap_End"];	// define the channels for the diagrams
min_max			[i] = [0, 1000, 20, 35];	// define the min/max for the diagram y-axis
unit			[i] = [" MJ", " MJ"];	// define the units
color_channels	[i] = [colDefault, "green"];	// colors for channels ("" = standard color)
pos_axis		[i] = ["","right"];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0,0];	// dash for channels (0 = no dash)
trend_line		[i] = [905];	// define values for trend lines
trendline_color	[i] = ["red"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis


