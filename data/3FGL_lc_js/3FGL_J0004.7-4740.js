Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.14958584,  2.09154391,  2.40766287,  4.09647369,  3.21025419,        2.75592613,  1.16949213,  1.97863543,  0.        ,  1.77984893,        1.85872781,  1.74573421,  3.72723603,  0.        ,  3.01796532,        0.        ,  0.        ,  2.64746213,  4.04999018,  4.47902679,        3.06991243,  6.74826956,  1.98824978,  3.39777803,  1.37294781,        0.        ,  1.28201962,  1.21002376,  0.60475987,  0.88234931,        0.88732994,  0.        ,  2.88023996,  1.36814392,  0.        ,        0.80600548,  0.87160397,  0.4271239 ,  0.24917346,  1.278772  ,        1.4185499 ,  0.        ,  1.52760828,  0.        ,  0.52000916,        0.        ,  0.92360175,  1.20825052]
FluxHistoryError = [[  3.91549647e-01,   2.13270235e+00],       [  1.10824680e+00,   3.23238635e+00],       [  1.40073717e+00,   3.45992899e+00],       [  2.94294024e+00,   5.38806581e+00],       [  1.87480044e+00,   4.64704323e+00],       [  1.63084507e+00,   3.96871448e+00],       [  2.11044192e-01,   2.32735610e+00],       [  8.99686217e-01,   3.24416327e+00],       [  0.00000000e+00,   2.44077873e+00],       [  7.21324205e-01,   2.99744606e+00],       [  8.96547318e-01,   2.99834132e+00],       [  6.18311763e-01,   3.06192923e+00],       [  2.67299414e+00,   4.89667463e+00],       [  0.00000000e+00,   1.58283043e+00],       [  2.10039306e+00,   4.04856443e+00],       [  0.00000000e+00,   1.91722906e+00],       [  0.00000000e+00,   1.82974172e+00],       [  1.61867952e+00,   3.81284952e+00],       [  2.74206352e+00,   5.50383282e+00],       [  3.47130108e+00,   5.58059216e+00],       [  1.74308717e+00,   4.60264015e+00],       [  5.55592632e+00,   8.02501011e+00],       [  8.76429677e-01,   3.37683177e+00],       [  2.36307001e+00,   4.50702620e+00],       [  5.55764079e-01,   2.37347603e+00],       [  0.00000000e+00,   2.73610044e+00],       [  5.41809857e-01,   2.17446756e+00],       [  2.82791674e-01,   2.30475092e+00],       [  1.67415619e-01,   1.25119925e+00],       [  1.85054302e-01,   1.84349322e+00],       [  4.23387289e-02,   1.86528969e+00],       [  0.00000000e+00,   2.29141641e+00],       [  1.56177473e+00,   4.40215158e+00],       [  5.51384747e-01,   2.32140970e+00],       [  0.00000000e+00,   2.49273801e+00],       [  0.00000000e+00,   2.80578339e+00],       [  0.00000000e+00,   3.44444609e+00],       [  0.00000000e+00,   2.79566205e+00],       [  0.00000000e+00,   2.04773313e+00],       [  3.33406329e-01,   2.45534086e+00],       [  5.53745210e-01,   2.41806841e+00],       [  0.00000000e+00,   2.03417897e+00],       [  7.23309696e-01,   2.49081612e+00],       [  0.00000000e+00,   2.04287720e+00],       [  0.00000000e+00,   2.39701116e+00],       [  0.00000000e+00,   1.16464639e+00],       [  4.42332029e-03,   2.02756453e+00],       [  4.87639010e-01,   2.11673045e+00]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.10752701e+02],       [  5.47000000e+02,   3.38197250e+01],       [  1.73200000e+03,   6.00690937e+00],       [  5.47700000e+03,   1.33739614e+00],       [  3.16220000e+04,   4.87177294e-06]]
SpectrumError = [[  1.73000000e+02,   8.20561523e+01,   1.40142471e+02],       [  5.47000000e+02,   2.95796719e+01,   3.81895828e+01],       [  1.73200000e+03,   5.05391932e+00,   7.02962923e+00],       [  5.47700000e+03,   9.92434800e-01,   1.73396802e+00],       [  3.16220000e+04,   0.00000000e+00,   3.41029539e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]