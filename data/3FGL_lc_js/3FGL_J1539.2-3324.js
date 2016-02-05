Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.45775449,  0.59180492,  0.59679747,  0.21807562,  0.28213817,        0.21201625,  0.37438336,  0.2651079 ,  0.77252251,  0.52892447,        0.28478307,  0.        ,  0.21666396,  0.20899777,  0.17390059,        0.1366016 ,  0.45498049,  0.32723248,  0.34258524,  0.64833736,        0.08434046,  0.17183876,  0.23952262,  0.29105911,  0.18473567,        0.21480644,  0.00971789,  0.78668767,  0.39638507,  0.18998505,        0.59546036,  0.17824651,  0.23989242,  0.30037656,  0.3308171 ,        0.13049893,  0.11947734,  0.2758134 ,  0.09154853,  0.27781793,        0.41163775,  0.07950961,  0.44574854,  0.38072282,  0.17059065,        0.4774586 ,  0.34213829,  0.86304474]
FluxHistoryError = [[ 0.2815513 ,  0.6728906 ],       [ 0.38862339,  0.83505583],       [ 0.40905517,  0.81754982],       [ 0.08943599,  0.38676593],       [ 0.12981327,  0.47128516],       [ 0.06152791,  0.40263304],       [ 0.22351718,  0.56176341],       [ 0.11195461,  0.46990311],       [ 0.53696358,  1.04624689],       [ 0.3469241 ,  0.7463969 ],       [ 0.1367792 ,  0.47245088],       [ 0.        ,  0.35688752],       [ 0.08666196,  0.39301759],       [ 0.09367248,  0.36484283],       [ 0.03078397,  0.3660872 ],       [ 0.04414754,  0.27323616],       [ 0.29574054,  0.645567  ],       [ 0.1638284 ,  0.54713893],       [ 0.21157008,  0.50205052],       [ 0.40132302,  0.94274026],       [ 0.00892137,  0.20530269],       [ 0.06454975,  0.33060905],       [ 0.08552629,  0.44356647],       [ 0.16475214,  0.45541027],       [ 0.        ,  0.67336263],       [ 0.07362692,  0.39519146],       [ 0.        ,  0.35635314],       [ 0.58052111,  1.02492535],       [ 0.23456952,  0.59667367],       [ 0.08135972,  0.34114349],       [ 0.40769207,  0.81515771],       [ 0.04286976,  0.3635397 ],       [ 0.10401234,  0.42143226],       [ 0.132699  ,  0.52153313],       [ 0.20203079,  0.49059743],       [ 0.02024743,  0.29993701],       [ 0.04195235,  0.24042246],       [ 0.13011165,  0.45520091],       [ 0.        ,  0.5149402 ],       [ 0.14759694,  0.44947451],       [ 0.23037244,  0.64181519],       [ 0.00451459,  0.19316602],       [ 0.27212104,  0.65799117],       [ 0.22392422,  0.57744396],       [ 0.05642525,  0.33140898],       [ 0.28434968,  0.72249824],       [ 0.1990117 ,  0.51795959],       [ 0.59473503,  1.18286967]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.23974411e-04],       [  5.47000000e+02,   2.71568036e+00],       [  1.73200000e+03,   1.80505161e+01],       [  5.47700000e+03,   6.99696350e+00],       [  3.16220000e+04,   2.79884607e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.88488690e+01],       [  5.47000000e+02,   0.00000000e+00,   1.01176245e+01],       [  1.73200000e+03,   1.62146797e+01,   1.99485111e+01],       [  5.47700000e+03,   6.15889692e+00,   7.89299345e+00],       [  3.16220000e+04,   1.22217834e-01,   4.97834086e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]