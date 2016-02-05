Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  1.88205278,  3.03578806,  0.        ,  0.        ,        0.59953374,  0.        ,  1.4519273 ,  1.66339195,  0.        ,        0.        ,  1.42951429,  0.        ,  0.9455846 ,  0.24339153,        0.        ,  0.        ,  1.29962659,  0.99132913,  0.        ,        0.51700515,  1.07015574,  1.2595787 ,  2.21998286,  1.22319913,        4.39931154,  2.06156826,  2.28638411,  0.14423078,  7.60791874,        1.1131531 ,  0.        ,  0.37159434,  1.39106441,  0.        ,        0.        ,  2.24508309,  0.        ,  0.        ,  1.46369183,        0.        ,  0.        ,  1.9125253 ,  1.37034798,  2.01514983,        2.58773971,  3.16583323,  2.86774397]
FluxHistoryError = [[ 0.        ,  3.86504602],       [ 0.        ,  5.7581569 ],       [ 1.48684824,  4.83509922],       [ 0.        ,  3.14331293],       [ 0.        ,  2.81731367],       [ 0.        ,  4.55137318],       [ 0.        ,  2.46738982],       [ 0.        ,  5.18683374],       [ 0.32598388,  3.25564981],       [ 0.        ,  2.90177488],       [ 0.        ,  2.98119998],       [ 0.        ,  5.1440953 ],       [ 0.        ,  3.12838507],       [ 0.        ,  3.35288554],       [ 0.        ,  3.01988699],       [ 0.        ,  1.64255667],       [ 0.        ,  2.05442357],       [ 0.08667171,  2.61310387],       [ 0.        ,  3.45939606],       [ 0.        ,  1.57838476],       [ 0.        ,  3.406115  ],       [ 0.        ,  3.80430305],       [ 0.40715063,  2.2973094 ],       [ 0.9239893 ,  3.67505455],       [ 0.33680373,  2.28321004],       [ 2.72362137,  6.20748711],       [ 0.82976806,  3.38626337],       [ 1.06494939,  3.63949609],       [ 0.        ,  2.78933495],       [ 6.16482782,  9.13209438],       [ 0.        ,  3.85347784],       [ 0.        ,  1.89094675],       [ 0.        ,  2.97550049],       [ 0.        ,  4.1833384 ],       [ 0.        ,  1.75866163],       [ 0.        ,  2.9211781 ],       [ 1.05505073,  3.58923984],       [ 0.        ,  2.02774787],       [ 0.        ,  2.49711728],       [ 0.45482254,  2.65525293],       [ 0.        ,  2.33560419],       [ 0.        ,  1.35634136],       [ 0.71878159,  3.22494698],       [ 0.28763199,  2.57862425],       [ 0.82649267,  3.29077601],       [ 1.34841466,  3.97523332],       [ 1.8434304 ,  4.58047247],       [ 1.51990473,  4.33980274]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.76250458e+01],       [  5.47000000e+02,   1.65700054e+01],       [  1.73200000e+03,   1.80732429e+00],       [  5.47700000e+03,   4.47143078e-01],       [  3.16220000e+04,   1.14827819e-01]]
SpectrumError = [[  1.73000000e+02,   2.62130775e+01,   1.10315674e+02],       [  5.47000000e+02,   1.17869434e+01,   2.14858627e+01],       [  1.73200000e+03,   1.04498267e+00,   2.62690592e+00],       [  5.47700000e+03,   2.28752077e-01,   7.18239248e-01],       [  3.16220000e+04,   2.84302458e-02,   2.45492518e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]