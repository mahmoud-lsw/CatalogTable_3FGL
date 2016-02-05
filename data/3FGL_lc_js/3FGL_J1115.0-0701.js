Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.        ,  0.73808122,  0.27786714,        0.        ,  0.74676585,  0.        ,  0.58188337,  0.        ,        0.        ,  0.75942069,  0.99211866,  2.24378705,  0.        ,        0.        ,  0.        ,  0.89019549,  1.58275616,  0.66845804,        0.52794749,  1.02185059,  0.13940868,  0.04913673,  0.06520167,        0.77529377,  0.26278877,  0.        ,  4.92558432,  4.10228586,        3.29533243,  1.53511965,  0.75617212,  0.63779801,  0.70342296,        2.68387747,  1.66412306,  0.        ,  1.10301757,  1.97719347,        1.75719047,  0.        ,  0.        ,  3.09823537,  0.        ,        3.0875833 ,  0.33391169,  0.        ]
FluxHistoryError = [[ 0.        ,  1.87576866],       [ 0.        ,  1.6352793 ],       [ 0.        ,  1.63619256],       [ 0.27726889,  1.40511799],       [ 0.        ,  2.00998884],       [ 0.        ,  2.07839584],       [ 0.20815241,  1.47832084],       [ 0.        ,  2.15559721],       [ 0.18382448,  1.18885076],       [ 0.        ,  1.41098702],       [ 0.        ,  1.43150747],       [ 0.14028949,  1.54183483],       [ 0.12537116,  1.98765159],       [ 1.31654406,  3.35346961],       [ 0.        ,  1.82641339],       [ 0.        ,  1.11510324],       [ 0.        ,  2.56411362],       [ 0.25323147,  1.74650073],       [ 0.87538004,  2.49442339],       [ 0.        ,  2.82903033],       [ 0.18325782,  1.08013797],       [ 0.39062625,  1.92765403],       [ 0.        ,  1.83874163],       [ 0.        ,  2.13826689],       [ 0.        ,  2.31008855],       [ 0.05485773,  1.87477279],       [ 0.        ,  2.48964477],       [ 0.        ,  1.18370342],       [ 3.48446131,  6.53953791],       [ 3.06500244,  5.26936579],       [ 2.16868687,  4.61984873],       [ 0.59499913,  2.63849688],       [ 0.        ,  2.87105626],       [ 0.0776605 ,  1.53227901],       [ 0.        ,  2.81621784],       [ 1.60637844,  3.98977518],       [ 0.79166847,  2.77278781],       [ 0.        ,  2.15512824],       [ 0.33208233,  2.07500601],       [ 1.18743944,  2.88858223],       [ 1.00339532,  2.70651436],       [ 0.        ,  1.56478512],       [ 0.        ,  2.34955692],       [ 1.81848729,  4.5518446 ],       [ 0.        ,  2.54028225],       [ 1.7991277 ,  4.51441765],       [ 0.        ,  2.816829  ],       [ 0.        ,  1.81684458]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.14586182e+01],       [  5.47000000e+02,   1.88380623e+01],       [  1.73200000e+03,   3.99972486e+00],       [  5.47700000e+03,   1.60875797e+00],       [  3.16220000e+04,   4.23832983e-01]]
SpectrumError = [[  1.73000000e+02,   3.80847282e+01,   1.05159729e+02],       [  5.47000000e+02,   1.39008884e+01,   2.40620441e+01],       [  1.73200000e+03,   3.03232527e+00,   5.06309652e+00],       [  5.47700000e+03,   1.21120453e+00,   2.06651688e+00],       [  3.16220000e+04,   2.50025898e-01,   6.52753651e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]