Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.59526294,  1.71998048,  0.        ,        0.        ,  0.26723832,  2.18113112,  1.67025352,  0.87479544,        0.        ,  0.        ,  1.10097146,  0.91634339,  0.40673983,        2.02811098,  0.        ,  1.60730219,  2.77322817,  1.97889686,        0.11843013,  0.61787504,  0.56951779,  0.        ,  0.93103641,        1.52624524,  0.33496085,  0.        ,  0.77076328,  1.86360407,        0.        ,  0.34054071,  0.75330472,  1.65435946,  0.85173494,        1.61590385,  1.32969153,  0.93005258,  0.54738855,  1.79964101,        0.        ,  0.        ,  0.62916136,  0.        ,  0.        ,        0.        ,  0.        ,  1.92899168]
FluxHistoryError = [[ 0.        ,  2.5834012 ],       [ 0.        ,  2.24545264],       [ 0.        ,  2.31163794],       [ 0.67060101,  2.92421508],       [ 0.        ,  0.88597441],       [ 0.        ,  1.4325186 ],       [ 0.        ,  2.92256564],       [ 1.13594556,  3.38653874],       [ 0.85008621,  2.64789057],       [ 0.00622219,  1.93736315],       [ 0.        ,  1.61565495],       [ 0.        ,  1.70166695],       [ 0.33957791,  2.02437568],       [ 0.        ,  3.43870825],       [ 0.        ,  2.41920602],       [ 0.82931972,  3.50030327],       [ 0.        ,  2.47199202],       [ 0.75361991,  2.71638608],       [ 1.46253836,  4.30885124],       [ 0.80217969,  3.2842381 ],       [ 0.        ,  2.39426445],       [ 0.04061097,  1.54017675],       [ 0.        ,  2.55825073],       [ 0.        ,  2.49168468],       [ 0.25680381,  1.82004166],       [ 0.21572638,  3.04222298],       [ 0.        ,  2.56348553],       [ 0.        ,  2.46594667],       [ 0.05563998,  1.75233388],       [ 0.69761992,  3.21781683],       [ 0.        ,  1.53979528],       [ 0.        ,  2.79295784],       [ 0.        ,  3.39139223],       [ 0.59223425,  2.97318554],       [ 0.20473504,  1.77379143],       [ 0.36674476,  3.05460143],       [ 0.48811156,  2.38406086],       [ 0.        ,  4.1517387 ],       [ 0.        ,  3.25953436],       [ 0.48141932,  3.31064463],       [ 0.        ,  1.97380686],       [ 0.        ,  2.64675713],       [ 0.17794135,  1.38548708],       [ 0.        ,  3.04151583],       [ 0.        ,  2.46667337],       [ 0.        ,  1.81341696],       [ 0.        ,  1.74095833],       [ 0.62950552,  3.44579172]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.66090393e+01],       [  5.47000000e+02,   8.63176441e+00],       [  1.73200000e+03,   1.33977795e+00],       [  5.47700000e+03,   7.92275131e-01],       [  3.16220000e+04,   2.80935019e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.12800850e+02],       [  5.47000000e+02,   3.93748474e+00,   1.35957012e+01],       [  1.73200000e+03,   4.81288433e-01,   2.30519223e+00],       [  5.47700000e+03,   5.18514752e-01,   1.12449920e+00],       [  3.16220000e+04,   1.37657568e-01,   4.76072907e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]