Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  5.25097561,  3.87257767,  0.        ,        2.14284301,  0.        ,  5.67151451,  0.        ,  0.        ,        0.66527563,  0.94959241,  3.23360085,  4.12039423,  6.68766928,        0.        ,  0.        ,  8.86414337,  0.        ,  0.        ,        5.85831308,  0.36679912,  1.91701639,  2.83749056,  0.        ,        4.73701572,  7.78491449,  2.2200675 ,  5.95388508,  0.        ,        3.39810848,  1.36298347,  1.79483879,  3.06207442,  2.85931873,        0.        ,  5.64857244,  8.02834511,  0.        ,  0.        ,        8.28389645,  3.124259  ,  2.91883135,  1.27036917,  0.        ,        0.16586746,  9.92695904,  0.        ]
FluxHistoryError = [[  0.        ,   6.53013372],       [  0.        ,   7.65808964],       [  2.02085471,   8.77898693],       [  0.73573112,   7.36346149],       [  0.        ,   7.0140028 ],       [  0.        ,   9.30484319],       [  0.        ,   5.19064951],       [  1.94978929,   9.66435909],       [  0.        ,   6.75873375],       [  0.        ,   6.06021214],       [  0.        ,   7.75390917],       [  0.        ,   7.32022268],       [  0.        ,  10.47772956],       [  1.6194036 ,   6.891222  ],       [  3.6647203 ,   9.95553493],       [  0.        ,   4.84871578],       [  0.        ,   4.10612583],       [  5.51787758,  12.4211483 ],       [  0.        ,   3.59525251],       [  0.        ,   4.09883642],       [  2.91112328,   8.95020866],       [  0.        ,   6.9742043 ],       [  0.        ,   7.41861475],       [  0.        ,   8.20866299],       [  0.        ,   3.58478379],       [  1.76219344,   7.88575363],       [  3.97613478,  11.75436592],       [  0.        ,   6.7928834 ],       [  2.82973886,   9.26020336],       [  0.        ,   5.23039103],       [  0.92642927,   6.07622528],       [  0.        ,   8.62383151],       [  0.        ,   7.99723327],       [  0.24963188,   6.2294569 ],       [  0.12155557,   5.71616268],       [  0.        ,   5.7221632 ],       [  2.76661468,   8.69248104],       [  4.74416113,  11.50922394],       [  0.        ,   6.22901535],       [  0.        ,   4.2351675 ],       [  5.28669834,  11.56494904],       [  0.31102777,   6.07819271],       [  0.        ,   8.42039871],       [  0.        ,   6.86170447],       [  0.        ,   2.80049944],       [  0.        ,   6.65527977],       [  7.23591137,  12.78390408],       [  0.        ,   6.44247675]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.99827515e+02],       [  5.47000000e+02,   5.32759857e+01],       [  1.73200000e+03,   5.02132893e+00],       [  5.47700000e+03,   1.18833590e+00],       [  3.16220000e+04,   1.00216012e-05]]
SpectrumError = [[  1.73000000e+02,   2.21927155e+02,   3.74874603e+02],       [  5.47000000e+02,   4.16872711e+01,   6.49127655e+01],       [  1.73200000e+03,   3.10752845e+00,   7.04075527e+00],       [  5.47700000e+03,   6.86819196e-01,   1.75981903e+00],       [  3.16220000e+04,   0.00000000e+00,   3.79509934e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]