Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.45973608,  0.3730014 ,  0.26461968,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.20590374,  0.        ,        0.37520579,  0.94280726,  0.21954998,  0.7013948 ,  1.32122326,        0.        ,  0.02947646,  0.02939309,  0.49077636,  0.52898324,        0.        ,  0.        ,  0.39569584,  0.        ,  0.14309248,        0.66239518,  0.44940415,  0.        ,  0.2862992 ,  0.06146827,        0.25870517,  0.        ,  0.19503643,  0.        ,  0.41855142,        0.        ,  0.13631354,  0.        ,  0.4644157 ,  0.        ,        0.30104387,  0.        ,  0.        ,  0.39910084,  0.        ,        0.        ,  0.4649066 ,  0.        ]
FluxHistoryError = [[ 0.21781279,  0.81900418],       [ 0.12486808,  0.77424711],       [ 0.01640137,  0.64158636],       [ 0.        ,  0.74270481],       [ 0.        ,  0.9939056 ],       [ 0.        ,  0.56035954],       [ 0.        ,  0.9267171 ],       [ 0.        ,  0.86531156],       [ 0.        ,  1.09733275],       [ 0.        ,  0.85222763],       [ 0.00226495,  0.8276943 ],       [ 0.52413774,  1.47804856],       [ 0.01410343,  0.5711661 ],       [ 0.34766546,  1.18518472],       [ 0.75081992,  2.02187705],       [ 0.        ,  0.88935298],       [ 0.        ,  0.93516087],       [ 0.        ,  1.05001725],       [ 0.04928944,  1.06680179],       [ 0.11916932,  1.08960795],       [ 0.        ,  1.19880962],       [ 0.        ,  0.97079885],       [ 0.12631214,  0.81339389],       [ 0.        ,  0.64735222],       [ 0.        ,  1.10819957],       [ 0.25742409,  1.19918942],       [ 0.14306551,  0.94974661],       [ 0.        ,  0.87147945],       [ 0.08265783,  0.63197029],       [ 0.        ,  0.93772974],       [ 0.        ,  1.28353503],       [ 0.        ,  0.79778898],       [ 0.        ,  1.45028831],       [ 0.        ,  1.10627401],       [ 0.12464908,  0.89312172],       [ 0.        ,  0.75230879],       [ 0.        ,  1.038725  ],       [ 0.        ,  1.0558629 ],       [ 0.08051699,  0.99951386],       [ 0.        ,  0.86302912],       [ 0.01979098,  0.74179125],       [ 0.        ,  0.74587262],       [ 0.        ,  0.71823674],       [ 0.13376746,  0.80478168],       [ 0.        ,  0.88298213],       [ 0.        ,  0.7917034 ],       [ 0.13576424,  0.92392242],       [ 0.        ,  0.81421614]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.31183090e+01],       [  5.47000000e+02,   4.94268745e-01],       [  1.73200000e+03,   1.74482107e+00],       [  5.47700000e+03,   1.10360098e+00],       [  3.16220000e+04,   5.81464589e-01]]
SpectrumError = [[  1.73000000e+02,   1.31971550e+00,   6.50216599e+01],       [  5.47000000e+02,   0.00000000e+00,   9.85921606e+00],       [  1.73200000e+03,   8.44291687e-01,   2.74999094e+00],       [  5.47700000e+03,   7.43204713e-01,   1.52874565e+00],       [  3.16220000e+04,   3.91164899e-01,   8.25167000e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]