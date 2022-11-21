// ------------------------------------------------
// channels ----------------------------------------
// ------------------------------------------------

i=0;

i = i + 1;
dia_title		[i] = ["Damper Travel BUMP (actually just max)"];	// define the titles
channels		[i] = ["xDamperFL_Max", "xDamperFR_Max", "xDamperRL_Max", "xDamperRR_Max"];	// define the channels for the diagrams
min_max			[i] = [-25, 25, -25, 25, -25, 25, -25, 25];	// define the min/max for the diagram y-axis
unit			[i] = [" mm", " mm", " mm", " mm"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Damper Travel DROOP (actually just min)"];	// define the titles
channels		[i] = ["xDamperFL_Min", "xDamperFR_Min", "xDamperRL_Min", "xDamperRR_Min"];	// define the channels for the diagrams
min_max			[i] = [-25, 25, -25, 25, -25, 25, -25, 25];	// define the min/max for the diagram y-axis
unit			[i] = [" mm", " mm", " mm", " mm"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Side Bump Rubbers"];	// define the titles
channels		[i] = ["tBumpRubberFL_End", "tBumpRubberFR_End", "tBumpRubberRL_End", "tBumpRubberRR_End"];	// define the channels for the diagrams
min_max			[i] = [0, 20, 0, 20, 0 ,20, 0 ,20];	// define the min/max for the diagram y-axis
unit			[i] = ["mm","mm","mm","mm"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["3rd Element Forces"];	// define the titles
channels		[i] = ["FMonoF_Max", "FMonoR_Max"];	// define the channels for the diagrams
min_max			[i] = [0, 1000, 0, 1000];	// define the min/max for the diagram y-axis
unit			[i] = ["kg", "kg"];	// define the units
color_channels	[i] = [colFR, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["3rd Element Displacements"];	// define the titles
channels		[i] = ["xMonoF_Max", "xMonoR_Max", "xMonoF_TS", "xMonoR_TS"];	// define the channels for the diagrams
min_max			[i] = [0, 30, 0, 30, 0, 30, 0, 30];	// define the min/max for the diagram y-axis
unit			[i] = [" mm", " mm", " mm", " mm"];	// define the units
color_channels	[i] = [colFR, colRR, colFR, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 1, 1];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

//i = i + 1;
//dia_title		[i] = ["Roll Displacements"];	// define the titles
//channels		[i] = ["a_roll_f_KPI_mean", "a_roll_r_KPI_mean", "a_roll_body_KPI_mean"];	// define the channels for the diagrams
//min_max			[i] = [0, 2, 0, 2, 0 ,2];	// define the min/max for the diagram y-axis
//unit			[i] = [" deg", " deg", " deg"];	// define the units
//color_channels	[i] = [colFR, colRR, colDefault];	// colors for channels ("" = standard color)
//pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
//dash_channels	[i] = [0, 0, 0];	// dash for channels (0 = no dash)
//trend_line		[i] = [];	// define values for trend lines
//trendline_color	[i] = [""];	// Define colors for trend lines
//precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Roll and Mechanical Balance"];	// define the titles
channels		[i] = ["r_rollbalance_KPI_mean", "rLatBalCorr"];	// define the channels for the diagrams
min_max			[i] = [0.40, 0.60, 0.40, 0.60];	// define the min/max for the diagram y-axis
unit			[i] = [" ", " "];	// define the units
color_channels	[i] = ["green", colDefault];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 1];	// dash for channels (0 = no dash)
trend_line		[i] = [0.50];	// define values for trend lines
trendline_color	[i] = ["green"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

//i = i + 1;
//dia_title		[i] = ["FRONT Roll Force vs. Displacement Slope"];	// define the titles
//channels		[i] = ["slope_fRollF_sRollF_median", "AJF_d_farb_median"];	// define the channels for the diagrams
//min_max			[i] = [0, 400000, 0, 8];	// define the min/max for the diagram y-axis
//unit			[i] = [" |---Stiffer-->", " position"];	// define the units
//color_channels	[i] = [colFR, colFL];	// colors for channels ("" = standard color)
//pos_axis		[i] = ["", "right"];	// define position for y-axis (0 = left, 1 = right)
//dash_channels	[i] = [0, 1];	// dash for channels (0 = no dash)
//trend_line		[i] = [];	// define values for trend lines
//trendline_color	[i] = [""];	// Define colors for trend lines
//precision		[i] = [];	// define number of decimal places for y-axis

//i = i + 1;
//dia_title		[i] = ["REAR Roll Force vs. Displacement Slope"];	// define the titles
//channels		[i] = ["slope_fRollR_sRollR_median", "AJF_d_rarb_median"];	// define the channels for the diagrams
//min_max			[i] = [0, 200000, 0, 8];	// define the min/max for the diagram y-axis
//unit			[i] = [" |---Stiffer-->", " position"];	// define the units
//color_channels	[i] = [colRR, colRL];	// colors for channels ("" = standard color)
//pos_axis		[i] = ["", "right"];	// define position for y-axis (0 = left, 1 = right)
//dash_channels	[i] = [0, 1];	// dash for channels (0 = no dash)
//trend_line		[i] = [];	// define values for trend lines
//trendline_color	[i] = [""];	// Define colors for trend lines
//precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Roll Gradients"];	// define the titles
channels		[i] = ["aRollF_perG", "aRollR_perG"];	// define the channels for the diagrams
min_max			[i] = [-0.3, -0.1, -0.3, -0.1];	// define the min/max for the diagram y-axis
unit			[i] = [" deg/G", " deg/G"];	// define the units
color_channels	[i] = ["blue", "red"];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Upright Temps"];	// define the titles
channels		[i] = ["TBearingFL_Max", "TBearingFR_Max", "TBearingRL_Max", "TBearingRR_Max"];	// define the channels for the diagrams
min_max			[i] = [20, 120, 20, 120, 20, 120, 20, 120];	// define the min/max for the diagram y-axis
unit			[i] = [" degC", " degC", " degC", " degC"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Grip Limited CPL Variations"];	// define the titles
channels		[i] = ["CPLvariationFL_GL", "CPLvariationFR_GL", "CPLvariationRL_GL", "CPLvariationRR_GL" ];	// define the channels for the diagrams
min_max			[i] = [3000, 6000, 3000, 6000, 3000, 6000, 3000, 6000];	// define the min/max for the diagram y-axis
unit			[i] = [" N", " N", " N", " N"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Damper Velocities HSB"];	// define the titles
channels		[i] = ["vDamperFL_HS_Bump_Mean", "vDamperFR_HS_Bump_Mean", "vDamperRL_HS_Bump_Mean", "vDamperRR_HS_Bump_Mean"];	// define the channels for the diagrams
min_max			[i] = [-50, -20, -50, -20, -50, -20, -50, -20];	// define the min/max for the diagram y-axis
unit			[i] = [" mm/sec", " mm/sec", " mm/sec", " mm/sec"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Damper Velocities lsb"];	// define the titles
channels		[i] = ["vDamperFL_LS_Bump_Mean", "vDamperFR_LS_Bump_Mean", "vDamperRL_LS_Bump_Mean", "vDamperRR_LS_Bump_Mean"];	// define the channels for the diagrams
min_max			[i] = [-10, 0, -10, 0, -10, 0, -10, 0];	// define the min/max for the diagram y-axis
unit			[i] = [" mm/sec", " mm/sec", " mm/sec", " mm/sec"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Damper Velocities HSR"];	// define the titles
channels		[i] = ["vDamperFL_HS_Rebound_Mean", "vDamperFR_HS_Rebound_Mean", "vDamperRL_HS_Rebound_Mean", "vDamperRR_HS_Rebound_Mean"];	// define the channels for the diagrams
min_max			[i] = [20, 50, 20, 50, 20, 50, 20, 50];	// define the min/max for the diagram y-axis
unit			[i] = [" mm/sec", " mm/sec", " mm/sec", " mm/sec"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Damper Velocities lsr"];	// define the titles
channels		[i] = ["vDamperFL_LS_Rebound_Mean", "vDamperFR_LS_Rebound_Mean", "vDamperRL_LS_Rebound_Mean", "vDamperRR_LS_Rebound_Mean"];	// define the channels for the diagrams
min_max			[i] = [0, 10, 0, 10, 0, 10, 0, 10];	// define the min/max for the diagram y-axis
unit			[i] = [" mm/sec", " mm/sec", " mm/sec", " mm/sec"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Pushrod Loads EoS"];	// define the titles
channels		[i] = ["FPushrodFL_TS", "FPushrodFR_TS", "FPushrodRL_TS", "FPushrodRR_TS" ];	// define the channels for the diagrams
min_max			[i] = [4000, 15000, 4000, 15000, 4000, 15000, 4000, 15000];	// define the min/max for the diagram y-axis
unit			[i] = ["N", "N", "N", "N"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [""];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0, 0, 0, 0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis
