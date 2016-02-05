Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.18438119,  1.2786274 ,  1.90019464,  1.03577471,        1.24598551,  1.49753582,  3.64991808,  1.6989367 ,  0.        ,        0.72775215,  0.        ,  3.7310667 ,  1.41313589,  0.        ,        1.49407101,  0.52178013,  1.86334395,  0.64897454,  5.3552537 ,        1.53825557,  2.6904614 ,  2.38546348,  0.        ,  2.90772605,        1.03916168,  4.03477669,  2.4357779 ,  0.79569429,  0.14803237,        0.14475942,  0.        ,  0.93453896,  0.14067686,  0.        ,        0.        ,  0.        ,  0.29326597,  1.99340737,  2.16387749,        2.99848962,  0.        ,  1.55011201,  1.13710415,  0.77062863,        5.82746124,  1.82496619,  0.        ]
FluxHistoryError = [[ 0.        ,  2.95897508],       [ 0.        ,  4.47060078],       [ 0.0389992 ,  2.85448241],       [ 0.        ,  6.22769642],       [ 0.        ,  4.31837559],       [ 0.        ,  5.29911041],       [ 0.        ,  6.1722852 ],       [ 1.94797671,  5.66958189],       [ 0.04513502,  3.81547165],       [ 0.        ,  2.69906163],       [ 0.        ,  4.01487249],       [ 0.        ,  4.03302288],       [ 1.92131007,  5.93537998],       [ 0.        ,  5.58679187],       [ 0.        ,  3.31953549],       [ 0.3713752 ,  3.27645516],       [ 0.        ,  3.95118296],       [ 0.02700472,  4.24955559],       [ 0.        ,  4.50261199],       [ 3.25021267,  7.84272385],       [ 0.2276715 ,  3.34055138],       [ 1.18405533,  4.60309601],       [ 0.30089426,  4.98017645],       [ 0.        ,  2.7675879 ],       [ 0.95828974,  5.33581924],       [ 0.        ,  4.65417075],       [ 2.12329435,  6.45858335],       [ 0.89906013,  4.36814213],       [ 0.        ,  4.26501912],       [ 0.        ,  4.31538934],       [ 0.        ,  3.12471342],       [ 0.        ,  5.91473627],       [ 0.        ,  5.33383143],       [ 0.        ,  5.32310712],       [ 0.        ,  3.29731011],       [ 0.        ,  4.51891804],       [ 0.        ,  5.56154919],       [ 0.        ,  3.52411237],       [ 0.        ,  7.43774998],       [ 0.51937449,  4.2078619 ],       [ 1.33425891,  5.21091557],       [ 0.        ,  2.66259027],       [ 0.05804312,  3.37680244],       [ 0.        ,  5.93234646],       [ 0.        ,  3.9454686 ],       [ 3.52752042,  8.55282116],       [ 0.71690464,  3.21421862],       [ 0.        ,  3.72382951]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.74027451e+02],       [  5.47000000e+02,   1.80265770e+01],       [  1.73200000e+03,   5.72281122e+00],       [  5.47700000e+03,   3.29860234e+00],       [  3.16220000e+04,   5.06924927e-01]]
SpectrumError = [[  1.73000000e+02,   3.15679321e+01,   3.17772614e+02],       [  5.47000000e+02,   3.85465336e+00,   3.26986008e+01],       [  1.73200000e+03,   3.40752077e+00,   8.16136169e+00],       [  5.47700000e+03,   2.54876876e+00,   4.12261724e+00],       [  3.16220000e+04,   2.84282506e-01,   7.94126868e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]