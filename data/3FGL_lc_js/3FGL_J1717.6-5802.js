Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.89563787,  2.46428013,  2.21558261,  3.57063675,  3.99968386,        4.08154583,  0.        ,  0.        ,  0.        ,  2.99308634,        4.02689743,  2.73940659,  1.42706716,  5.15067816,  3.88649106,        2.04674721,  1.65014207,  1.87988234,  0.68586379,  1.8080188 ,        4.02735758,  2.12314534,  1.93523788,  1.75219214,  5.29096508,        1.54375851,  0.        ,  1.78969538,  0.52879775,  5.43029356,        3.55917859,  2.98625231,  0.33585054,  1.18471956,  2.03161192,        0.53096259,  3.91837454,  0.        ,  4.97553205,  1.60126615,        3.29974246,  0.        ,  2.63114572,  1.10075295,  2.37460327,        5.20392275,  2.09386349,  1.80511427]
FluxHistoryError = [[ 0.        ,  5.25322998],       [ 0.42926621,  4.77875233],       [ 0.4249233 ,  4.23306704],       [ 1.64432395,  5.51200676],       [ 2.20949411,  5.99185276],       [ 1.91642308,  6.33276033],       [ 0.        ,  3.89359021],       [ 0.        ,  3.76662874],       [ 0.        ,  3.98779178],       [ 1.19049966,  5.02554321],       [ 1.87181473,  6.35281324],       [ 1.19071424,  4.68654203],       [ 0.22529507,  2.98639727],       [ 3.5309186 ,  6.93015575],       [ 2.36394715,  5.59459782],       [ 0.50453174,  3.87070131],       [ 0.10060775,  3.30931568],       [ 0.47327852,  3.61514831],       [ 0.        ,  3.48481447],       [ 0.29288852,  3.62416363],       [ 2.36591816,  5.86482048],       [ 0.70097721,  3.79351568],       [ 0.3391099 ,  3.81499434],       [ 0.40303695,  3.33409166],       [ 3.41856909,  7.35028648],       [ 0.01970458,  3.32648182],       [ 0.        ,  3.86473036],       [ 0.54223359,  3.2727685 ],       [ 0.        ,  2.61875594],       [ 3.59189081,  7.44817162],       [ 2.0832386 ,  5.17551804],       [ 1.19225252,  4.98117828],       [ 0.        ,  3.54646307],       [ 0.18545842,  2.63900495],       [ 0.44763219,  3.70692539],       [ 0.        ,  3.82401025],       [ 2.36269474,  5.67936993],       [ 0.        ,  2.18933272],       [ 3.08863997,  7.03033447],       [ 0.36751986,  3.02466202],       [ 1.47479796,  5.36260986],       [ 0.        ,  2.53313923],       [ 1.13778424,  4.31166697],       [ 0.        ,  4.73581827],       [ 0.72268045,  4.09420776],       [ 3.08248258,  7.49374342],       [ 0.90682471,  3.42507291],       [ 0.14643681,  3.74168229]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.67977783e+02],       [  5.47000000e+02,   3.83737564e+01],       [  1.73200000e+03,   8.74138451e+00],       [  5.47700000e+03,   1.91040611e+00],       [  3.16220000e+04,   3.82613245e-04]]
SpectrumError = [[  1.73000000e+02,   1.20784180e+02,   2.15204926e+02],       [  5.47000000e+02,   3.12041817e+01,   4.55032921e+01],       [  1.73200000e+03,   7.27796125e+00,   1.02810707e+01],       [  5.47700000e+03,   1.43139398e+00,   2.45031452e+00],       [  3.16220000e+04,   0.00000000e+00,   3.38017087e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]