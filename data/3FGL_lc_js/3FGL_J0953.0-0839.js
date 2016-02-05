Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.81267834,  2.3316164 ,  2.1465075 ,  5.98013926,  0.43564129,        1.67019105,  0.44258246,  2.3576479 ,  0.34145388,  0.47523868,        0.99044961,  1.28690112,  1.12752128,  1.05036914,  1.62103081,        2.49890161,  0.85854542,  1.42751336,  0.20949705,  0.89394873,        0.90317959,  1.19893587,  1.1951046 ,  1.4373014 ,  0.        ,        0.9100253 ,  1.45517683,  0.60743809,  1.75371611,  1.02335918,        1.88376176,  1.578246  ,  0.97652698,  1.3884629 ,  2.50574756,        2.27690363,  1.81202853,  0.24634144,  2.98705912,  1.46130943,        2.89484692,  1.96158099,  2.88990307,  2.04558992,  2.35022569,        2.19796634,  0.30055588,  0.64120203]
FluxHistoryError = [[ 1.16439104,  2.58398938],       [ 1.72996235,  3.01577973],       [ 1.56006908,  2.82948923],       [ 5.05684137,  6.97288799],       [ 0.07673806,  0.92329937],       [ 1.14109957,  2.29992747],       [ 0.16787544,  0.83300024],       [ 1.62850106,  3.20834398],       [ 0.09155019,  0.72513831],       [ 0.15202126,  0.96667558],       [ 0.52736688,  1.56606889],       [ 0.8021183 ,  1.86447453],       [ 0.61511678,  1.76323724],       [ 0.59894478,  1.62650573],       [ 1.00811207,  2.38449287],       [ 1.83247483,  3.26115608],       [ 0.31757861,  1.60683703],       [ 0.8459    ,  2.13029528],       [ 0.        ,  1.78265996],       [ 0.37398905,  1.58006191],       [ 0.33537436,  1.60058951],       [ 0.71483594,  1.8072319 ],       [ 0.75433713,  1.73113656],       [ 0.75841236,  2.26644063],       [ 0.        ,  1.09124684],       [ 0.37302434,  1.64781618],       [ 0.87638634,  2.1758337 ],       [ 0.25600234,  1.09026217],       [ 1.06715989,  2.59756279],       [ 0.53750539,  1.64213085],       [ 1.22603583,  2.68389559],       [ 0.96024024,  2.31772017],       [ 0.37731445,  1.75576997],       [ 0.83694494,  2.07926559],       [ 1.7567699 ,  3.35697079],       [ 1.5550797 ,  3.14198422],       [ 1.21781826,  2.51921821],       [ 0.        ,  1.50545058],       [ 2.28741288,  3.77305412],       [ 0.88036186,  2.1587851 ],       [ 2.13512516,  3.75655293],       [ 1.37840545,  2.6480372 ],       [ 2.06494498,  3.84637833],       [ 1.39806414,  2.79780102],       [ 1.61351395,  3.22105026],       [ 1.53940117,  2.96455956],       [ 0.        ,  1.91647643],       [ 0.23019654,  1.25406218]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.16579170e+01],       [  5.47000000e+02,   3.40371971e+01],       [  1.73200000e+03,   1.67801189e+01],       [  5.47700000e+03,   5.93499851e+00],       [  3.16220000e+04,   2.85187387e+00]]
SpectrumError = [[  1.73000000e+02,   2.80441170e+01,   7.55262070e+01],       [  5.47000000e+02,   2.92222595e+01,   3.90249290e+01],       [  1.73200000e+03,   1.51974297e+01,   1.83628082e+01],       [  5.47700000e+03,   5.22369623e+00,   6.70125628e+00],       [  3.16220000e+04,   2.37101912e+00,   3.38954973e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]