Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.98406619,  1.71758783,  2.14601231,  1.2204293 ,  1.87350547,        1.48393297,  2.02739382,  2.70612979,  2.37339067,  1.62846267,        1.75085866,  1.49210227,  2.6129601 ,  1.56208241,  1.104743  ,        2.54486227,  0.79002744,  0.94954532,  0.69924629,  1.27216089,        1.54697371,  1.14342642,  2.0283885 ,  0.69700497,  0.80599946,        0.90857697,  1.88262582,  1.21201479,  2.35887146,  1.36068916,        1.4965961 ,  1.75945008,  1.44503713,  1.62117374,  2.28285861,        2.09697008,  1.89532208,  1.80406594,  2.99311972,  2.09265852,        2.21565723,  2.06715035,  3.86931515,  3.86420918,  2.4613955 ,        4.62830877,  2.92873645,  2.67625165]
FluxHistoryError = [[ 0.59510183,  1.47065449],       [ 1.26021719,  2.20957875],       [ 1.61678052,  2.72708941],       [ 0.83426023,  1.67360795],       [ 1.40286934,  2.42556262],       [ 1.03942192,  1.99333525],       [ 1.53431785,  2.56427479],       [ 2.1086998 ,  3.36549497],       [ 1.8594439 ,  2.95043778],       [ 1.19457936,  2.12942195],       [ 1.2637341 ,  2.3096559 ],       [ 1.05226219,  1.99922132],       [ 2.07829237,  3.2072556 ],       [ 1.1109004 ,  2.08151913],       [ 0.76312172,  1.49522638],       [ 2.04603696,  3.10119534],       [ 0.51012981,  1.12332249],       [ 0.60715902,  1.35658836],       [ 0.395668  ,  1.07799029],       [ 0.92998862,  1.67171347],       [ 1.06368852,  2.08180094],       [ 0.7707687 ,  1.57189989],       [ 1.58295405,  2.52445841],       [ 0.38699505,  1.07129657],       [ 0.51496834,  1.16904736],       [ 0.56893015,  1.3223573 ],       [ 1.44243276,  2.3763442 ],       [ 0.85280073,  1.63604665],       [ 1.89586425,  2.87764215],       [ 0.91739273,  1.88621855],       [ 1.10037267,  1.95758402],       [ 1.2759223 ,  2.31087208],       [ 1.01132357,  1.9631207 ],       [ 1.22235346,  2.07339144],       [ 1.78693485,  2.84024858],       [ 1.66649723,  2.57746458],       [ 1.42870831,  2.40972257],       [ 1.34519839,  2.32640314],       [ 2.48351669,  3.55365753],       [ 1.65142334,  2.57144213],       [ 1.76650023,  2.72070575],       [ 1.5836668 ,  2.61231542],       [ 3.26296186,  4.51928663],       [ 3.25963378,  4.52048349],       [ 1.99239242,  2.98076534],       [ 3.98969412,  5.31453609],       [ 2.41084194,  3.50035119],       [ 2.15452695,  3.25541878]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.11530151e+02],       [  5.47000000e+02,   6.04169731e+01],       [  1.73200000e+03,   2.34840717e+01],       [  5.47700000e+03,   1.01563282e+01],       [  3.16220000e+04,   3.53941035e+00]]
SpectrumError = [[  1.73000000e+02,   9.11928253e+01,   1.32216263e+02],       [  5.47000000e+02,   5.63379974e+01,   6.44959488e+01],       [  1.73200000e+03,   2.20219803e+01,   2.49461632e+01],       [  5.47700000e+03,   9.34774494e+00,   1.09649115e+01],       [  3.16220000e+04,   3.09216404e+00,   4.02564192e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]