// ------------------------------------------------
// channels ----------------------------------------
// ------------------------------------------------
i=0;

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

//i = i + 1;
//dia_title		[i] = ["Gaps Ahead and Behind"];	// define the titles
//channels		[i] = ["MyLaps_GapAhead_mean", "MyLaps_GapBehind_mean", "MyLaps_GapAhead_stddev"];	// define the channels for the diagrams
//min_max			[i] = [0, 10, 0, 10, 0, 2];	// define the min/max for the diagram y-axis
//unit			[i] = [" sec", " sec", " sec"];	// define the units
//color_channels	[i] = ["green", "red", colDefault];	// colors for channels ("" = standard color)
//pos_axis		[i] = [0,0,"right"];	// define position for y-axis (0 = left, 1 = right)
//dash_channels	[i] = [0,0,1];	// dash for channels (0 = no dash)
//trend_line		[i] = [];	// define values for trend lines
//trendline_color	[i] = [""];	// Define colors for trend lines
//precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Fuel Rail Pressure"];	// define the titles
channels		[i] = ["pRailRh_Mean", "pRailLh_Mean"]	// define the channels for the diagrams
min_max			[i] = [300, 400, 300, 400];	// define the min/max for the diagram y-axis
unit			[i] = [" bar", "bar"];	// define the units
color_channels	[i] = [colDefault, "green"];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Lift Pump Currents"];	// define the titles
channels		[i] = ["iPwmLp14_Mean", "iPwmLp25_Mean", "iPwmLp3_Mean", "iPwmLp6_Mean"];	// define the channels for the diagrams
min_max			[i] = [0, ""];	// define the min/max for the diagram y-axis
unit			[i] = [" Amps"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [0.85];	// define values for trend lines
trendline_color	[i] = [colDefault];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["HP Pump Currents"];	// define the titles
channels		[i] = ["IHPFuelPump1_Min", "IHPFuelPump1_Max", "IHPFuelPump2_Min", "IHPFuelPump1_Max"];	// define the channels for the diagrams
min_max			[i] = [0, ""];	// define the min/max for the diagram y-axis
unit			[i] = [" Amps"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [14];	// define values for trend lines
trendline_color	[i] = [colDefault];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Fuel Temperature"];	// define the titles
channels		[i] = ["tfuel_Max", "tfuel_Min",	"tfuel_Mean"];	// define the channels for the diagrams
min_max			[i] = [0, ""];	// define the min/max for the diagram y-axis
unit			[i] = [" degC"];	// define the units
color_channels	[i] = [colFL, colFR, colRL];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [25];	// define values for trend lines
trendline_color	[i] = [colDefault];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

//i = i + 1;
//dia_title		[i] = ["Stint Consumption"];	// define the titles
//channels		[i] = ["AJF_f_cons_AJFs_end"];	// define the channels for the diagrams
//min_max			[i] = [0, ""];	// define the min/max for the diagram y-axis
//unit			[i] = [" Foyts"];	// define the units
//color_channels	[i] = [colDefault];	// colors for channels ("" = standard color)
//pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
//dash_channels	[i] = [0];	// dash for channels (0 = no dash)
//trend_line		[i] = [];	// define values for trend lines
//trendline_color	[i] = [""];	// Define colors for trend lines
//precision		[i] = [];	// define number of decimal places for y-axis
