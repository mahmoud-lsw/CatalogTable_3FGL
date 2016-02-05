Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 4.38648891,  3.12094951,  2.49259257,  1.50848913,  3.09862828,        1.33724952,  4.25038767,  5.71058989,  3.11798763,  1.48198855,        0.77109599,  2.39022517,  1.15632439,  3.42997766,  3.64945078,        0.90542942,  0.93210673,  0.15513133,  2.27941251,  1.52556157,        2.45047903,  3.34109569,  3.69526744,  0.        ,  0.75653481,        5.05422974,  4.99727345,  2.80305147,  4.38415241,  0.        ,        3.48193479,  3.77083707,  4.30072927,  3.67487335,  5.77604151,        2.28085065,  2.44055223,  0.81553769,  1.78014195,  5.92652988,        5.79067278,  4.7985363 ,  0.        ,  2.77453041,  0.18392017,        0.48614627,  4.80460072,  0.92634231]
FluxHistoryError = [[ 2.47379255,  6.40961552],       [ 1.67850482,  4.65069962],       [ 0.87297416,  4.23234272],       [ 0.10363293,  2.98089409],       [ 1.48786771,  4.85147762],       [ 0.        ,  4.0160203 ],       [ 2.77757692,  5.82061052],       [ 4.00080061,  7.54023647],       [ 1.71823573,  4.60483408],       [ 0.03926206,  3.01932621],       [ 0.        ,  3.57161999],       [ 0.76275384,  4.11818981],       [ 0.        ,  4.14116669],       [ 1.7622534 ,  5.2619319 ],       [ 1.87621212,  5.61227036],       [ 0.        ,  4.27743798],       [ 0.        ,  4.48291683],       [ 0.        ,  3.8138666 ],       [ 0.64574969,  4.02259064],       [ 0.        ,  4.74006057],       [ 0.72792089,  4.31771851],       [ 1.73968959,  5.06280088],       [ 1.84905338,  5.66986561],       [ 0.        ,  3.64071202],       [ 0.        ,  4.04578567],       [ 3.47214365,  6.72362423],       [ 3.23399782,  6.90035629],       [ 1.09985721,  4.63875103],       [ 2.59249544,  6.31314611],       [ 0.        ,  3.01442599],       [ 1.84297132,  5.22372723],       [ 1.98142183,  5.71026039],       [ 2.5646143 ,  6.15351248],       [ 1.90062273,  5.51563883],       [ 3.82413864,  7.81713676],       [ 0.60304999,  4.08659983],       [ 0.89931846,  4.10006142],       [ 0.        ,  3.78935027],       [ 0.15213752,  3.54200983],       [ 4.17763376,  7.78766775],       [ 3.81940651,  7.87215757],       [ 3.03209305,  6.74201107],       [ 0.        ,  2.95743918],       [ 1.158162  ,  4.53311729],       [ 0.        ,  3.59421805],       [ 0.        ,  4.00784403],       [ 2.91379404,  6.7807498 ],       [ 0.        ,  3.87851912]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.60365891e+02],       [  5.47000000e+02,   9.77164230e+01],       [  1.73200000e+03,   1.21232691e+01],       [  5.47700000e+03,   8.41498196e-01],       [  3.16220000e+04,   2.12527737e-01]]
SpectrumError = [[  1.73000000e+02,   1.17410843e+02,   2.04434387e+02],       [  5.47000000e+02,   8.39999084e+01,   1.11612808e+02],       [  1.73200000e+03,   9.21602535e+00,   1.51296692e+01],       [  5.47700000e+03,   3.09383690e-01,   1.46010542e+00],       [  3.16220000e+04,   7.69597739e-02,   4.10626233e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]