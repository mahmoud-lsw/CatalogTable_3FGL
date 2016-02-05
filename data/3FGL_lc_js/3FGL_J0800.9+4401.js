Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  1.8377732 ,  0.21391946,  1.77761269,  1.17987168,        1.17561579,  1.95301306,  2.33975959,  1.85220408,  3.26966929,        1.9493767 ,  0.9883796 ,  0.36363098,  3.07699728,  1.32639766,        1.49103451,  1.6010319 ,  0.25336325,  0.        ,  0.        ,        1.37017548,  1.74448621,  0.        ,  0.91745108,  0.        ,        0.38460773,  0.47660276,  0.        ,  0.51158947,  0.        ,        0.        ,  2.34434867,  0.69208944,  0.4284943 ,  0.        ,        1.92701519,  2.12741375,  1.86645007,  0.        ,  1.81933284,        0.        ,  0.94416362,  0.70930833,  0.23111333,  0.        ,        1.16140604,  1.00797009,  0.        ]
FluxHistoryError = [[ 0.        ,  2.45611691],       [ 0.92023015,  2.92654586],       [ 0.        ,  2.33673102],       [ 0.70979416,  2.96729565],       [ 0.44370604,  2.13804507],       [ 0.16330898,  2.34135914],       [ 0.92402375,  3.13027859],       [ 1.15382326,  3.70386314],       [ 0.92169285,  2.91757798],       [ 2.22470999,  4.46183634],       [ 1.03592634,  3.0144186 ],       [ 0.        ,  3.38399875],       [ 0.        ,  2.23978588],       [ 1.90235686,  4.38774443],       [ 0.54741472,  2.29151726],       [ 0.59219652,  2.57002592],       [ 0.61682391,  2.65538836],       [ 0.        ,  2.6240505 ],       [ 0.        ,  1.98005188],       [ 0.        ,  1.85431159],       [ 0.46319062,  2.41425371],       [ 0.76369423,  2.86170816],       [ 0.        ,  1.49288368],       [ 0.30425745,  1.71836853],       [ 0.        ,  1.80992234],       [ 0.        ,  2.35267538],       [ 0.        ,  2.59186146],       [ 0.        ,  1.88366675],       [ 0.        ,  2.75341457],       [ 0.        ,  1.89376497],       [ 0.        ,  1.69762874],       [ 1.21917272,  3.66339397],       [ 0.        ,  3.02620423],       [ 0.        ,  2.32815072],       [ 0.        ,  1.37581968],       [ 0.91423011,  3.08949542],       [ 1.16619873,  3.23093367],       [ 0.94792747,  2.95144415],       [ 0.        ,  1.26526022],       [ 0.93809128,  2.87081432],       [ 0.        ,  2.27189851],       [ 0.06312668,  2.03852296],       [ 0.        ,  2.73748416],       [ 0.        ,  1.88238551],       [ 0.        ,  1.92235541],       [ 0.32521307,  2.21208858],       [ 0.22852415,  2.04955053],       [ 0.        ,  2.15666199]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.99181595e+01],       [  5.47000000e+02,   1.62368507e+01],       [  1.73200000e+03,   3.89472342e+00],       [  5.47700000e+03,   9.37303901e-01],       [  3.16220000e+04,   6.61644340e-02]]
SpectrumError = [[  1.73000000e+02,   2.38905735e+01,   7.66254578e+01],       [  5.47000000e+02,   1.22052774e+01,   2.04218369e+01],       [  1.73200000e+03,   3.01430655e+00,   4.85040569e+00],       [  5.47700000e+03,   6.46898389e-01,   1.27888906e+00],       [  3.16220000e+04,   0.00000000e+00,   3.93750638e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]