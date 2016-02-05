Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.33255506,  2.34707189,  2.54954648,  2.01949191,  3.66566062,        1.7824508 ,  1.56495547,  2.56541657,  3.13552809,  2.79186392,        2.17487311,  0.        ,  2.66931367,  0.9685955 ,  0.        ,        0.39784399,  1.13715637,  0.        ,  2.40511417,  2.11521888,        2.34353471,  1.0106678 ,  1.22209287,  1.87094128,  1.46140563,        0.64040101,  1.18021715,  3.62625051,  0.        ,  3.0812149 ,        0.46146393,  3.27949214,  2.39373779,  2.09088659,  0.        ,        1.61796033,  3.09322095,  0.52943635,  2.15113664,  2.83608413,        5.70401001,  2.48238945,  1.48615587,  1.800349  ,  1.35151231,        1.43575585,  2.58228064,  0.        ]
FluxHistoryError = [[ 1.08762765,  3.78164196],       [ 1.22931242,  3.58103776],       [ 1.39667439,  3.8672204 ],       [ 1.08623838,  3.14373589],       [ 2.42278242,  5.07149839],       [ 0.68157816,  2.97659993],       [ 0.5555892 ,  2.78935313],       [ 1.4368192 ,  3.90583897],       [ 2.0909791 ,  4.32995987],       [ 1.80044329,  4.07600784],       [ 1.03803301,  3.46635008],       [ 0.        ,  1.76418209],       [ 1.48217893,  4.01956367],       [ 0.10893345,  2.04639769],       [ 0.        ,  2.37898421],       [ 0.        ,  2.8964397 ],       [ 0.10180187,  2.33321881],       [ 0.        ,  2.12801695],       [ 1.13429439,  3.83004761],       [ 1.01573336,  3.40808988],       [ 1.07499838,  3.73974895],       [ 0.24577576,  2.03016663],       [ 0.27778065,  2.37278461],       [ 0.9154433 ,  3.00444651],       [ 0.25103235,  2.80470395],       [ 0.        ,  2.7324549 ],       [ 0.29254276,  2.30482078],       [ 2.28545761,  5.08770275],       [ 0.        ,  1.76274264],       [ 1.70661354,  4.64737701],       [ 0.        ,  2.54783607],       [ 2.04096699,  4.66602802],       [ 1.16649985,  3.7968812 ],       [ 1.13681924,  3.21952629],       [ 0.        ,  2.25876594],       [ 0.73885161,  2.68974876],       [ 1.79442143,  4.56781387],       [ 0.        ,  3.12311363],       [ 1.13491154,  3.35977411],       [ 1.72705877,  4.01240635],       [ 4.38375616,  7.11943054],       [ 1.40751338,  3.66287565],       [ 0.61272991,  2.56635952],       [ 0.74689853,  3.04787207],       [ 0.49950922,  2.38703442],       [ 0.28895235,  2.69279051],       [ 1.54761958,  3.80162525],       [ 0.        ,  2.00249648]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.50353119e+02],       [  5.47000000e+02,   2.89405384e+01],       [  1.73200000e+03,   4.33454227e+00],       [  5.47700000e+03,   1.61022675e+00],       [  3.16220000e+04,   1.77765712e-01]]
SpectrumError = [[  1.73000000e+02,   1.19007324e+02,   1.82084396e+02],       [  5.47000000e+02,   2.45824661e+01,   3.34379120e+01],       [  1.73200000e+03,   3.45749974e+00,   5.28123045e+00],       [  5.47700000e+03,   1.24790418e+00,   2.02332067e+00],       [  3.16220000e+04,   7.11508766e-02,   3.36908489e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]