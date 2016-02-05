Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.18599987,  1.98015857,  2.23661947,  2.99218965,  2.13394094,        2.34915876,  3.69648814,  1.77099991,  2.80107307,  0.59067917,        1.70700145,  2.92476201,  2.57055998,  1.93460608,  4.3045516 ,        2.34574866,  3.3870492 ,  2.85672808,  2.7013793 ,  4.22184038,        2.10336232,  2.38740373,  2.18234515,  3.40682125,  3.09217334,        3.00811148,  2.11439657,  2.81455064,  3.72203755,  1.50369048,        3.4359901 ,  2.96165848,  2.80517697,  3.74432826,  3.26553464,        3.19690776,  2.43899655,  2.05059505,  3.90092301,  1.90411258,        2.78735995,  2.41714978,  3.18558693,  1.5917815 ,  2.82094049,        4.82902527,  2.20965481,  1.68766248]
FluxHistoryError = [[ 1.3968184 ,  3.08984375],       [ 1.13969064,  2.92557383],       [ 1.43823981,  3.12961578],       [ 2.13294768,  3.94002295],       [ 1.3129499 ,  3.12334204],       [ 1.57794857,  3.22324562],       [ 2.75961518,  4.69804382],       [ 0.99989492,  2.66897702],       [ 1.87259436,  3.86015964],       [ 0.        ,  2.51234198],       [ 0.99719501,  2.52730036],       [ 1.99313748,  3.97289228],       [ 1.77384806,  3.44725323],       [ 1.19496727,  2.77329111],       [ 3.33516121,  5.35731268],       [ 1.54936314,  3.22607017],       [ 2.47759485,  4.39680052],       [ 1.96828747,  3.83593535],       [ 1.85895467,  3.62484336],       [ 3.28258777,  5.24321699],       [ 1.34014821,  2.91802549],       [ 1.53499532,  3.34664464],       [ 1.41975665,  3.04979706],       [ 2.47748733,  4.43150997],       [ 2.2350533 ,  4.03650093],       [ 2.023417  ,  4.11114264],       [ 1.35631514,  2.97131395],       [ 1.93228889,  3.76478362],       [ 2.81677556,  4.71208668],       [ 0.77319342,  2.34617901],       [ 2.43735409,  4.55977011],       [ 2.1045301 ,  3.87983465],       [ 1.83133006,  3.83884096],       [ 2.84119177,  4.72502708],       [ 2.36910224,  4.20456123],       [ 2.18811417,  4.25310659],       [ 1.62931418,  3.33613062],       [ 1.19887757,  3.03597164],       [ 2.98253536,  4.89363098],       [ 1.04410696,  2.88801908],       [ 1.95166206,  3.71131444],       [ 1.59611189,  3.31544805],       [ 2.22981977,  4.2209754 ],       [ 0.88337636,  2.40594673],       [ 2.00798273,  3.72885394],       [ 3.95428753,  5.82556152],       [ 1.47061384,  3.04938173],       [ 0.87726253,  2.62896919]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.01311378e+02],       [  5.47000000e+02,   1.03239258e+02],       [  1.73200000e+03,   3.58568993e+01],       [  5.47700000e+03,   3.88000965e+00],       [  3.16220000e+04,   2.99943895e-05]]
SpectrumError = [[  1.73000000e+02,   6.19316444e+01,   1.41728165e+02],       [  5.47000000e+02,   9.49471970e+01,   1.11531319e+02],       [  1.73200000e+03,   3.33645897e+01,   3.83492088e+01],       [  5.47700000e+03,   3.24642134e+00,   4.56610584e+00],       [  3.16220000e+04,   0.00000000e+00,   4.11371274e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]