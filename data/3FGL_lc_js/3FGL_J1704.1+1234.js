Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 3.32768154,  1.65421593,  0.29108119,  1.05745983,  0.        ,        4.9149313 ,  5.74776077,  1.79694283,  0.        ,  3.58005762,        1.10951662,  1.38026202,  1.65105331,  4.97361422,  3.17057109,        1.15304494,  0.        ,  0.53270352,  2.30305672,  3.15834856,        2.90563536,  4.02040482,  0.71632737,  1.91767919,  2.32673287,        3.31224656,  0.94255811,  3.01839876,  3.26974249,  2.84015846,        3.30105805,  1.60609078,  1.15171361,  3.58999515,  3.59105611,        1.5571723 ,  3.03742886,  0.        ,  0.76360339,  7.24749136,        0.55693388,  2.77909827,  3.16293907,  0.        ,  4.29305506,        6.29370356,  4.04868078,  0.        ]
FluxHistoryError = [[  1.81858873e+00,   4.99502087e+00],       [  2.21461773e-01,   3.35793734e+00],       [  0.00000000e+00,   2.68830323e+00],       [  0.00000000e+00,   4.45942378e+00],       [  0.00000000e+00,   3.31083918e+00],       [  3.07403708e+00,   6.89793539e+00],       [  3.85353112e+00,   7.76442146e+00],       [  2.15418696e-01,   3.61298609e+00],       [  0.00000000e+00,   3.44618583e+00],       [  2.03850889e+00,   5.30556583e+00],       [  0.00000000e+00,   4.42676759e+00],       [  8.64434242e-03,   2.93756247e+00],       [  2.69153237e-01,   3.25237513e+00],       [  3.01836133e+00,   7.09700966e+00],       [  1.37359464e+00,   5.19581890e+00],       [  2.95110226e-01,   2.54820347e+00],       [  0.00000000e+00,   3.47265267e+00],       [  0.00000000e+00,   3.96796477e+00],       [  2.86848068e-01,   4.66335249e+00],       [  1.50238442e+00,   5.01901007e+00],       [  8.11893702e-01,   5.24688339e+00],       [  2.29877043e+00,   5.97801018e+00],       [  0.00000000e+00,   4.52930230e+00],       [  6.67886972e-01,   3.54846978e+00],       [  6.34574413e-01,   4.25493765e+00],       [  1.82759953e+00,   5.13150215e+00],       [  0.00000000e+00,   4.62281853e+00],       [  1.28979039e+00,   4.93930340e+00],       [  1.37375283e+00,   5.40808630e+00],       [  8.99240494e-01,   4.91344070e+00],       [  1.52710712e+00,   5.42805195e+00],       [  0.00000000e+00,   5.40621686e+00],       [  0.00000000e+00,   5.38154054e+00],       [  1.78015399e+00,   5.67116642e+00],       [  1.71137023e+00,   5.68955708e+00],       [  7.99646378e-02,   3.62725449e+00],       [  1.29626608e+00,   5.09513569e+00],       [  0.00000000e+00,   3.45637083e+00],       [  0.00000000e+00,   4.95449275e+00],       [  4.80235481e+00,   9.87388515e+00],       [  0.00000000e+00,   4.75781298e+00],       [  7.69299269e-01,   4.84056568e+00],       [  1.20131671e+00,   5.27814198e+00],       [  0.00000000e+00,   3.97457743e+00],       [  2.29995155e+00,   6.44279766e+00],       [  4.10601234e+00,   8.63751507e+00],       [  1.78511429e+00,   6.49882889e+00],       [  0.00000000e+00,   3.73268843e+00]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.09804169e+02],       [  5.47000000e+02,   3.08405228e+01],       [  1.73200000e+03,   3.85955667e+00],       [  5.47700000e+03,   9.63903487e-01],       [  3.16220000e+04,   2.69413680e-01]]
SpectrumError = [[  1.73000000e+02,   1.69866577e+02,   2.50182755e+02],       [  5.47000000e+02,   2.43347855e+01,   3.74571304e+01],       [  1.73200000e+03,   2.77147508e+00,   5.03630066e+00],       [  5.47700000e+03,   6.12587631e-01,   1.38179278e+00],       [  3.16220000e+04,   1.38039082e-01,   4.58787680e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]