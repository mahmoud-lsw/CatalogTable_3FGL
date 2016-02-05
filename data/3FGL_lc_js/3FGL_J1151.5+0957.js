Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.09571149,  2.1292274 ,  0.19219755,  1.96759415,        0.        ,  0.19285904,  0.57939529,  0.1668444 ,  0.40374067,        0.88458139,  1.70804703,  0.        ,  1.49812961,  0.        ,        0.46533126,  0.39054111,  0.        ,  1.44671082,  0.        ,        1.4046309 ,  1.62902653,  1.0543474 ,  0.24701829,  0.15466177,        0.99025172,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  1.05309188,  0.26311132,  0.        ,  1.62426078,        1.46171522,  0.33779269,  1.49346721,  0.        ,  0.80830729,        0.        ,  1.02549803,  0.46948037,  0.59331143,  1.35823321,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  2.24436498],       [ 0.        ,  1.84278264],       [ 1.24415302,  3.15673876],       [ 0.        ,  2.23554181],       [ 1.11617768,  2.94004345],       [ 0.        ,  1.49449217],       [ 0.        ,  1.68951057],       [ 0.03597242,  1.33094525],       [ 0.        ,  2.12752977],       [ 0.        ,  1.97866037],       [ 0.16951215,  1.71383476],       [ 0.80435407,  2.758641  ],       [ 0.        ,  1.24245811],       [ 0.63305128,  2.61278629],       [ 0.        ,  2.01758313],       [ 0.        ,  2.75242275],       [ 0.01191494,  1.03646588],       [ 0.        ,  2.30199909],       [ 0.6546911 ,  2.51254225],       [ 0.        ,  1.92726099],       [ 0.57740551,  2.44607806],       [ 0.79820603,  2.68129349],       [ 0.        ,  3.72919571],       [ 0.        ,  2.60654517],       [ 0.        ,  2.14085841],       [ 0.22621477,  2.1560483 ],       [ 0.        ,  1.39609921],       [ 0.        ,  2.00523591],       [ 0.        ,  1.33733845],       [ 0.        ,  1.39452398],       [ 0.        ,  1.35474825],       [ 0.28313625,  2.13846731],       [ 0.        ,  2.88789961],       [ 0.        ,  1.60272276],       [ 0.69458097,  2.72371006],       [ 0.34474528,  2.79261112],       [ 0.        ,  3.24239045],       [ 0.53009474,  2.73285103],       [ 0.        ,  1.32338417],       [ 0.12247258,  1.76453114],       [ 0.        ,  1.94841588],       [ 0.28932357,  1.97110558],       [ 0.        ,  3.096212  ],       [ 0.1384649 ,  1.37832093],       [ 0.37801933,  2.61306071],       [ 0.        ,  2.05201674],       [ 0.        ,  1.85868263],       [ 0.        ,  2.09365225]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.00581284e+01],       [  5.47000000e+02,   1.00788670e+01],       [  1.73200000e+03,   1.83077526e+00],       [  5.47700000e+03,   6.98991835e-01],       [  3.16220000e+04,   9.97147337e-02]]
SpectrumError = [[  1.73000000e+02,   3.00292969e-02,   5.97483215e+01],       [  5.47000000e+02,   5.97346449e+00,   1.44285336e+01],       [  1.73200000e+03,   1.11870074e+00,   2.65295148e+00],       [  5.47700000e+03,   4.20394599e-01,   1.04612422e+00],       [  3.16220000e+04,   6.78651780e-03,   2.57941902e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]