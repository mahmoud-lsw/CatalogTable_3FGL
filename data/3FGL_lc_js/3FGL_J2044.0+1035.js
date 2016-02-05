Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  1.37152863,  0.71702754,  3.22471213,  0.68093085,        0.        ,  0.        ,  0.93923473,  0.        ,  0.        ,        1.18157566,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.5076614 ,  0.92302477,  0.21714805,        0.25925449,  0.        ,  0.        ,  1.56180799,  1.55103469,        0.        ,  1.13933611,  1.44783676,  3.47781682,  1.11603761,        2.44643736,  2.1699276 ,  1.83215594,  4.66649914,  3.78153586,        3.0534246 ,  1.84323812,  0.        ,  0.33980662,  0.        ,        0.03584   ,  0.        ,  1.14557123,  1.66975713,  0.        ,        0.        ,  0.2471447 ,  0.45032081]
FluxHistoryError = [[ 0.        ,  1.74927294],       [ 0.46002334,  2.59687567],       [ 0.        ,  3.23351228],       [ 1.61158383,  4.94241238],       [ 0.        ,  2.83208418],       [ 0.        ,  1.97246063],       [ 0.        ,  2.80048728],       [ 0.18514454,  2.10305166],       [ 0.        ,  3.25420165],       [ 0.        ,  1.89992392],       [ 0.21927333,  2.42892718],       [ 0.        ,  1.93157792],       [ 0.        ,  2.39497304],       [ 0.        ,  2.91535425],       [ 0.        ,  1.83149266],       [ 0.        ,  2.14750504],       [ 0.        ,  2.3532393 ],       [ 0.        ,  3.63512522],       [ 0.18761802,  2.02966976],       [ 0.        ,  3.96704052],       [ 0.        ,  2.49557856],       [ 0.        ,  2.79044104],       [ 0.        ,  3.22243667],       [ 0.35982502,  3.14110827],       [ 0.13276052,  3.15537596],       [ 0.        ,  2.02831507],       [ 0.24596941,  2.25167561],       [ 0.23838186,  2.90461159],       [ 2.19062185,  4.96878481],       [ 0.        ,  4.76245522],       [ 1.28944278,  3.87283754],       [ 0.88963878,  3.6947279 ],       [ 0.56013727,  3.42234063],       [ 3.20753932,  6.28235531],       [ 2.38580084,  5.34520531],       [ 1.50732994,  4.85305882],       [ 0.60117221,  3.27132416],       [ 0.        ,  2.34634686],       [ 0.        ,  3.66219813],       [ 0.        ,  3.24877381],       [ 0.        ,  3.11057206],       [ 0.        ,  2.87693548],       [ 0.        ,  3.91445231],       [ 0.53152859,  3.08748198],       [ 0.        ,  1.80648971],       [ 0.        ,  2.41511559],       [ 0.        ,  2.48419356],       [ 0.        ,  2.74247369]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.40402260e+01],       [  5.47000000e+02,   1.69734173e+01],       [  1.73200000e+03,   3.25070643e+00],       [  5.47700000e+03,   1.40905631e+00],       [  3.16220000e+04,   1.59083629e-06]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.20800350e+02],       [  5.47000000e+02,   1.05922155e+01,   2.36282806e+01],       [  1.73200000e+03,   2.12496638e+00,   4.43513870e+00],       [  5.47700000e+03,   1.01231647e+00,   1.86756742e+00],       [  3.16220000e+04,   0.00000000e+00,   3.22638612e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]