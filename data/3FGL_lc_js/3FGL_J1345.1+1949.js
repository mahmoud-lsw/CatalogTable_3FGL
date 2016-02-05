Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.83153325,  1.85841691,  1.26437533,  1.16746283,  0.        ,        1.19554257,  0.        ,  2.20721602,  0.        ,  1.89380145,        0.        ,  0.99058086,  2.52368569,  1.18448091,  0.        ,        4.76570082,  0.        ,  0.43008322,  0.        ,  0.        ,        0.        ,  0.        ,  1.19254029,  1.20234513,  2.49059415,        1.89478946,  0.        ,  0.        ,  0.84979099,  0.12848046,        2.71726036,  4.65666389,  2.43376684,  0.48779851,  0.33672646,        0.        ,  3.12501216,  0.48914221,  1.65741825,  0.22146358,        2.18047976,  0.87222034,  0.        ,  1.79434001,  1.0237627 ,        0.65537959,  0.        ,  0.60879081]
FluxHistoryError = [[ 0.        ,  3.26182967],       [ 0.80204535,  3.08200788],       [ 0.01438487,  2.60565424],       [ 0.23856997,  2.32833052],       [ 0.        ,  2.32138586],       [ 0.        ,  3.89298534],       [ 0.        ,  2.24238801],       [ 0.78114498,  3.85353041],       [ 0.        ,  2.38246393],       [ 0.66567624,  3.28532553],       [ 0.        ,  2.5296886 ],       [ 0.        ,  3.5648604 ],       [ 1.17927027,  4.06181192],       [ 0.        ,  4.74064612],       [ 0.        ,  3.1179812 ],       [ 3.12253928,  6.60910225],       [ 0.        ,  2.4663167 ],       [ 0.        ,  2.94447106],       [ 0.        ,  3.06294274],       [ 0.        ,  2.66899586],       [ 0.        ,  3.71309066],       [ 0.        ,  3.08637977],       [ 0.        ,  4.21543324],       [ 0.        ,  3.96950793],       [ 1.25104403,  3.9917407 ],       [ 0.22355068,  3.8053174 ],       [ 0.        ,  2.2810657 ],       [ 0.        ,  3.11096144],       [ 0.        ,  3.68234652],       [ 0.        ,  3.37060884],       [ 1.09754395,  4.51191568],       [ 3.0991025 ,  6.41894531],       [ 0.871297  ,  4.21358204],       [ 0.        ,  3.37946826],       [ 0.        ,  3.04448727],       [ 0.        ,  1.49205232],       [ 1.21776497,  5.22336912],       [ 0.        ,  3.91883495],       [ 0.42788005,  3.25868845],       [ 0.        ,  3.63609256],       [ 0.89855742,  3.66989303],       [ 0.        ,  3.64410096],       [ 0.        ,  2.39237928],       [ 0.61949468,  3.24677229],       [ 0.18817663,  2.24279118],       [ 0.        ,  3.68962103],       [ 0.        ,  3.2464478 ],       [ 0.        ,  3.3581664 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   8.26861496e+01],       [  5.47000000e+02,   9.31558609e+00],       [  1.73200000e+03,   1.64801848e+00],       [  5.47700000e+03,   5.19675851e-01],       [  3.16220000e+04,   9.71114933e-02]]
SpectrumError = [[  1.73000000e+02,   5.48084373e+01,   1.11552063e+02],       [  5.47000000e+02,   4.89791822e+00,   1.38485575e+01],       [  1.73200000e+03,   8.48794043e-01,   2.55021930e+00],       [  5.47700000e+03,   2.90955901e-01,   8.07480574e-01],       [  3.16220000e+04,   1.93989202e-02,   2.39794865e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]