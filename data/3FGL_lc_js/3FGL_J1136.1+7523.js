Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.38863134,  2.30418587,  0.89760548,  0.15313984,        0.        ,  0.80399036,  0.        ,  0.15880072,  1.09375679,        0.        ,  0.        ,  0.        ,  0.83519644,  0.29285556,        0.        ,  1.53897512,  0.        ,  0.40939355,  0.54851967,        0.84760493,  1.19282794,  0.26803625,  0.77849281,  0.97754437,        0.49165708,  1.20804954,  0.        ,  0.        ,  0.        ,        0.4958562 ,  0.        ,  0.11632632,  0.        ,  0.38586324,        0.41900018,  1.28617167,  0.58964503,  0.        ,  0.        ,        0.94253194,  0.        ,  0.        ,  0.55459809,  0.        ,        0.        ,  0.96266705,  0.        ]
FluxHistoryError = [[ 0.        ,  1.59301496],       [ 0.        ,  2.25823462],       [ 1.27278626,  3.47841835],       [ 0.07972479,  1.84221005],       [ 0.        ,  1.7146057 ],       [ 0.        ,  1.71883309],       [ 0.23744726,  1.60453486],       [ 0.        ,  1.93658376],       [ 0.        ,  1.73656464],       [ 0.18010312,  2.1368084 ],       [ 0.        ,  1.84919763],       [ 0.        ,  1.47252083],       [ 0.        ,  1.2445302 ],       [ 0.27057117,  1.56546855],       [ 0.        ,  1.45646745],       [ 0.        ,  1.68884623],       [ 0.69344479,  2.49654412],       [ 0.        ,  1.40020657],       [ 0.04059103,  0.96473694],       [ 0.        ,  2.11681563],       [ 0.04088616,  1.78043735],       [ 0.31489873,  2.16853523],       [ 0.        ,  1.7048527 ],       [ 0.30279803,  1.43815041],       [ 0.38270718,  1.71288633],       [ 0.        ,  2.12091964],       [ 0.49782842,  2.03735638],       [ 0.        ,  1.46015525],       [ 0.        ,  1.22568488],       [ 0.        ,  1.54631805],       [ 0.        ,  1.93423787],       [ 0.        ,  1.60963309],       [ 0.        ,  1.88372503],       [ 0.        ,  1.51068032],       [ 0.        ,  1.98878103],       [ 0.13005164,  0.87003338],       [ 0.50455981,  2.18548131],       [ 0.01572788,  1.27864432],       [ 0.        ,  1.08467853],       [ 0.        ,  1.47716761],       [ 0.36204499,  1.66394734],       [ 0.        ,  0.99745804],       [ 0.        ,  1.32641709],       [ 0.14273596,  1.16790974],       [ 0.        ,  0.94958735],       [ 0.        ,  0.92610514],       [ 0.43659282,  1.62980843],       [ 0.        ,  1.16882908]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.77531509e+01],       [  5.47000000e+02,   2.37778091e+00],       [  1.73200000e+03,   9.07661438e-01],       [  5.47700000e+03,   7.66141176e-01],       [  3.16220000e+04,   2.82387773e-05]]
SpectrumError = [[  1.73000000e+02,   1.63204002e+01,   5.92984467e+01],       [  5.47000000e+02,   0.00000000e+00,   8.14177942e+00],       [  1.73200000e+03,   3.27409446e-01,   1.55678308e+00],       [  5.47700000e+03,   5.35494745e-01,   1.03650904e+00],       [  3.16220000e+04,   0.00000000e+00,   2.17437596e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]