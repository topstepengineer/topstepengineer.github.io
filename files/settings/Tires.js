// ------------------------------------------------
// channels ----------------------------------------
// ------------------------------------------------

i=0;

i = i + 1;
dia_title		[i] = ["Tire Gas Pressures"];	// define the titles
channels		[i] = ["pTyreFL_Mean", "pTyreFR_Mean", "pTyreRL_Mean", "pTyreRR_Mean"];	// define the channels for the diagrams
min_max			[i] = [1.5, 2.2, 1.5, 2.2, 1.5, 2.2, 1.5, 2.2];	// define the min/max for the diagram y-axis
unit			[i] = ["bar", "bar", "bar", "bar"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [1.8];	// define values for trend lines
trendline_color	[i] = [colDefault];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Tire Internal IR 'Bulk' Temps"];	// define the titles
channels		[i] = ["TTyreBulkFL_Mean", "TTyreBulkFR_Mean", "TTyreBulkRL_Mean", "TTyreBulkRR_Mean"];	// define the channels for the diagrams
min_max			[i] = [60, 130, 60, 130, 60, 130, 60, 130];	// define the min/max for the diagram y-axis
unit			[i] = [" degC", " degC", " degC", " degC"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [95];	// define values for trend lines
trendline_color	[i] = ["green"];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Tire Surface IR Temps"];	// define the titles
channels		[i] = ["TPMS_Tire_Temp_IR_FL_mean", "TPMS_Tire_Temp_IR_FR_mean", "TPMS_Tire_Temp_IR_RL_mean", "TPMS_Tire_Temp_IR_RR_mean"];	// define the channels for the diagrams
min_max			[i] = [40, 110, 40, 110, 40, 110, 40, 110];	// define the min/max for the diagram y-axis
unit			[i] = [" degC", " degC", " degC", " degC"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Tire IR 'Outer-Inner' Temps"];	// define the titles
channels		[i] = ["TTyreBulkFLInnerOuterDelta_Mean", "TTyreBulkFRInnerOuterDelta_Mean", "TTyreBulkRLInnerOuterDelta_Mean", "TTyreBulkRRInnerOuterDelta_Mean"];	// define the channels for the diagrams
min_max			[i] = [-40,5,-40,5,-40,5,-40,5];	// define the min/max for the diagram y-axis
unit			[i] = [" degC", " degC", " degC", " degC"];	// define the units
color_channels	[i] = [colFL, colFR, colRL, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

i = i + 1;
dia_title		[i] = ["Grip"];	// define the titles
channels		[i] = ["rTyreMuF_Mean", "rTyreMuR_Mean"];	// define the channels for the diagrams
min_max			[i] = [0.8,1.8,0.8,1.8];	// define the min/max for the diagram y-axis
unit			[i] = [" Mu", " Mu"];	// define the units
color_channels	[i] = [colFR, colRR];	// colors for channels ("" = standard color)
pos_axis		[i] = [0];	// define position for y-axis (0 = left, 1 = right)
dash_channels	[i] = [0];	// dash for channels (0 = no dash)
trend_line		[i] = [];	// define values for trend lines
trendline_color	[i] = [""];	// Define colors for trend lines
precision		[i] = [];	// define number of decimal places for y-axis

