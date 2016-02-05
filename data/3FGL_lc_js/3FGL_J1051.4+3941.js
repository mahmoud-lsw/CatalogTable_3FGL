Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.10611825,  0.        ,  0.        ,  0.49751249,        0.        ,  0.35718578,  0.47312829,  0.        ,  0.21791808,        0.        ,  0.10484368,  0.07793526,  0.        ,  0.        ,        0.01387399,  0.51719999,  0.        ,  0.66536713,  0.20043665,        0.        ,  0.        ,  0.45331618,  0.17250003,  0.        ,        0.41144258,  0.        ,  0.        ,  0.04848341,  0.        ,        0.        ,  0.        ,  0.02174425,  0.10099594,  0.12921761,        0.        ,  0.20263191,  0.        ,  0.28494594,  0.        ,        0.34455553,  0.11124396,  0.        ,  0.25492743,  0.11996082,        0.        ,  0.        ,  0.28840953]
FluxHistoryError = [[ 0.        ,  0.83791286],       [ 0.        ,  0.67508666],       [ 0.        ,  0.44638059],       [ 0.        ,  0.61992693],       [ 0.251614  ,  0.82406628],       [ 0.        ,  0.48166484],       [ 0.15074052,  0.64472711],       [ 0.2014493 ,  0.86259806],       [ 0.        ,  0.38726068],       [ 0.        ,  0.94116734],       [ 0.        ,  0.38812408],       [ 0.        ,  0.68588531],       [ 0.        ,  0.76229302],       [ 0.        ,  0.67123789],       [ 0.        ,  0.78071159],       [ 0.        ,  0.89454501],       [ 0.22285762,  0.91248566],       [ 0.        ,  0.59274381],       [ 0.28922886,  1.13962269],       [ 0.01741344,  0.49569222],       [ 0.        ,  0.54871827],       [ 0.        ,  0.53781509],       [ 0.18584952,  0.83558726],       [ 0.04778372,  0.40035212],       [ 0.        ,  0.60415918],       [ 0.17734911,  0.75510478],       [ 0.        ,  0.60740489],       [ 0.        ,  0.58604586],       [ 0.        ,  0.64486292],       [ 0.        ,  0.62489086],       [ 0.        ,  0.54288054],       [ 0.        ,  0.77142471],       [ 0.        ,  0.86662555],       [ 0.        ,  0.78171663],       [ 0.        ,  1.07419001],       [ 0.        ,  0.39855608],       [ 0.        ,  1.05531527],       [ 0.        ,  0.97918314],       [ 0.08409205,  0.59607053],       [ 0.        ,  0.61790943],       [ 0.15407103,  0.63066304],       [ 0.00866488,  0.30313066],       [ 0.        ,  0.84680909],       [ 0.09913738,  0.49839321],       [ 0.00139302,  0.33097827],       [ 0.        ,  0.69437432],       [ 0.        ,  0.65879661],       [ 0.06141374,  0.63207364]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.87569618e+01],       [  5.47000000e+02,   1.92896128e-04],       [  1.73200000e+03,   1.55830717e+00],       [  5.47700000e+03,   5.93858361e-01],       [  3.16220000e+04,   5.86735725e-01]]
SpectrumError = [[  1.73000000e+02,   1.80564537e+01,   6.00156059e+01],       [  5.47000000e+02,   0.00000000e+00,   4.63203408e+00],       [  1.73200000e+03,   9.54970479e-01,   2.24720001e+00],       [  5.47700000e+03,   3.46065760e-01,   8.98209631e-01],       [  3.16220000e+04,   3.86309594e-01,   8.34618807e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]