// ------------------------------------------------
// channels ----------------------------------------
// ------------------------------------------------

i=0;

i = i + 1;
dia_title[i] = ["Tools"];
channels[i] = ["farb_median", "rarb_median"];
min_max[i] = [0, 6.5, 0, 6.5];
unit[i] = [" ", "<--soft---ARB---stiff-->"];
color_channels[i] = [colFR, colRR];
pos_axis[i] = ["", ""];
dash_channels[i] = [0, 0, 0, 0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [0, 0, 0];

i = i + 1;
dia_title[i] = ["Switches A"];
channels[i] = ["NBrakeShape_Min", "NEPSMap_Min", "NEngine_Min", "NPedal_Min", "NEngineBrake_Min"];
min_max[i] = [0, 12, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12];
unit[i] = [" Switch Pos", " Switch Pos", " Switch Pos", " Switch Pos", " Switch Pos"];
color_channels[i] = [colFL, colFR, colRL, colRR, colDefault];
pos_axis[i] = [""];
dash_channels[i] = [];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [0, 0];

i = i + 1;
dia_title[i] = ["Switches B"];
channels[i] = ["NSplitFactor_Min"];
min_max[i] = [0, 100];
unit[i] = [" Switch Pos"];
color_channels[i] = ["green"];
pos_axis[i] = [""];
dash_channels[i] = [];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [0, 0];

i = i + 1;
dia_title[i] = ["Cockpit Temp"];
channels[i] = ["TcockpitFED_Mean", "TAirPitot_Mean"];
min_max[i] = [10, 40, 10, 40];
unit[i] = [" degC", " degC"];
color_channels[i] = [colDefault, "orange", "green"];
pos_axis[i] = [""];
dash_channels[i] = [0, 0, 0, 0];
trend_line[i] = [25];
trendline_color[i] = ["green"];
precision[i] = [0, 0, 0, 0];

i = i + 1;
dia_title[i] = ["Average Throttle"];
channels[i] = ["rPedal_Mean"];
min_max[i] = [50, 80];
unit[i] = [" ", " "];
color_channels[i] = ["green"];
pos_axis[i] = [""];
dash_channels[i] = [0, 0, 0, 0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [0, 0, 0, 0];

i = i + 1;
dia_title[i] = ["Cross/Coast Factor"];
channels[i] = ["tCross_End", "tCoast_End"];
min_max[i] = [0, 15, 0, 15];
unit[i] = [" ", " "];
color_channels[i] = ["red", "green"];
pos_axis[i] = ["", "right"];
dash_channels[i] = [0, 0, 0, 0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [0, 0, 0, 0];

i = i + 1;
dia_title[i] = ["Steering Integral"];
channels[i] = ["aSteerIntegral_End"];
min_max[i] = [100000, 200000];
unit[i] = [" "];
color_channels[i] = [colDefault];
pos_axis[i] = [""];
dash_channels[i] = [0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [0, 0, 0, 0];

i = i + 1;
dia_title[i] = ["Steering Torque"];
channels[i] = ["AJF_t_steering_mean"];
min_max[i] = [""];
unit[i] = [" "];
color_channels[i] = [colRR];
pos_axis[i] = [""];
dash_channels[i] = [0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [0];

i = i + 1;
dia_title[i] = ["Slope of Slip Angle Ratio"];
channels[i] = ["raSlipBalanceSOG_Mean"];
min_max[i] = [""];
unit[i] = [" "];
color_channels[i] = [colRL];
pos_axis[i] = [""];
dash_channels[i] = [0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [0];


// i = i + 1;
// dia_title[i] = ["Slope Yaw Velocity vs. Steering Angle (higher = more rotation)"];
// channels[i] = ["slope_v_yaw_a_steer_median"];
// min_max[i] = [""];
// unit[i] = [" "];
// color_channels[i] = [colDefault];
// pos_axis[i] = [""];
// dash_channels[i] = [0];
// trend_line[i] = [];
// trendline_color[i] = [];
// precision[i] = [0];

i = i + 1;
dia_title[i] = ["USOS 1"];
channels[i] = ["aUsos_Mean", "aUsosHS_Mean", "aUsosLS_Mean"];
min_max[i] = ["", "", "", "", "", ""];
unit[i] = [" ", " ", " "];
color_channels[i] = [colRR, "orange", "green"];
pos_axis[i] = ["", "", ""];
dash_channels[i] = [0, 0, 0, 0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [0, 0, 0, 0];

i = i + 1;
dia_title[i] = ["USOS 2"];
channels[i] = ["aUsosBRK_Mean", "aUsosTHRB_Mean", "aUsosMC_Mean"];
min_max[i] = ["", "", "", ""];
unit[i] = [" ", " "];
color_channels[i] = [colRR, "green", "orange"];
pos_axis[i] = ["", ""];
dash_channels[i] = [0, 0, 0, 0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [0, 0, 0, 0];

i = i + 1;
dia_title[i] = ["OS Index"];
channels[i] = ["OS_index", "OS_index_HS", "OS_index_LS"];
min_max[i] = ["", "", "", "", "", ""];
unit[i] = [" ", " ", " "];
color_channels[i] = [colRR, "orange", "green"];
pos_axis[i] = ["", "", ""];
dash_channels[i] = [0, 0, 0, 0];
trend_line[i] = [];
trendline_color[i] = [];
precision[i] = [0, 0, 0, 0];
