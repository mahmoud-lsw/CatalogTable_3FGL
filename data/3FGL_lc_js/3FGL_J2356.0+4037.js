Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.38400772,  0.37116981,  0.        ,  0.42394185,  0.07422343,        0.45882267,  0.09155346,  0.52413756,  0.        ,  0.52507991,        0.28053769,  1.08064473,  0.01887434,  0.45930716,  0.        ,        0.1169429 ,  0.        ,  0.32820249,  0.53204376,  0.        ,        0.05650735,  0.        ,  0.272349  ,  0.36703223,  0.17414774,        0.        ,  0.89081961,  0.06692385,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.39368016,  0.37465626,        0.        ,  0.34563512,  0.        ,  0.59587878,  0.25598872,        0.        ,  0.25169563,  0.        ,  0.28452179,  0.13235289,        0.        ,  0.59926409,  0.        ]
FluxHistoryError = [[ 0.0472413 ,  0.84030604],       [ 0.1151312 ,  0.7614854 ],       [ 0.        ,  0.8508777 ],       [ 0.09871921,  0.86423802],       [ 0.        ,  1.08533445],       [ 0.23914854,  0.76746303],       [ 0.        ,  1.00121499],       [ 0.18813655,  1.01456988],       [ 0.        ,  0.87935609],       [ 0.21869525,  0.9567709 ],       [ 0.03367911,  0.63676703],       [ 0.68397141,  1.58435225],       [ 0.        ,  0.99711763],       [ 0.11814725,  0.9051193 ],       [ 0.        ,  0.62236357],       [ 0.        ,  1.10291572],       [ 0.        ,  0.58143759],       [ 0.06732562,  0.722296  ],       [ 0.26365459,  0.90472186],       [ 0.        ,  1.14829683],       [ 0.        ,  0.93847412],       [ 0.        ,  0.62914127],       [ 0.06393997,  0.6242193 ],       [ 0.12596986,  0.74184805],       [ 0.        ,  1.28129305],       [ 0.        ,  1.01456046],       [ 0.43606347,  1.47831941],       [ 0.        ,  0.79776262],       [ 0.        ,  0.73958403],       [ 0.        ,  0.56182408],       [ 0.        ,  0.99692476],       [ 0.        ,  1.19192946],       [ 0.        ,  0.66486418],       [ 0.15731911,  0.75258452],       [ 0.11627421,  0.78079093],       [ 0.        ,  0.97840303],       [ 0.02502227,  0.79601264],       [ 0.        ,  0.86868709],       [ 0.23153198,  1.09661365],       [ 0.06440899,  0.57202798],       [ 0.        ,  0.77445781],       [ 0.07371227,  0.55643594],       [ 0.        ,  0.92055315],       [ 0.05785474,  0.62146831],       [ 0.        ,  1.23663884],       [ 0.        ,  0.72124547],       [ 0.21391115,  1.10038161],       [ 0.        ,  0.57806093]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.10659237e+01],       [  5.47000000e+02,   1.04136562e+01],       [  1.73200000e+03,   7.94299185e-01],       [  5.47700000e+03,   1.38421059e+00],       [  3.16220000e+04,   6.36084557e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   7.77498913e+01],       [  5.47000000e+02,   6.10593414e+00,   1.47562799e+01],       [  1.73200000e+03,   8.89752507e-02,   1.60358310e+00],       [  5.47700000e+03,   1.01204062e+00,   1.81173682e+00],       [  3.16220000e+04,   4.33022231e-01,   8.86388421e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]