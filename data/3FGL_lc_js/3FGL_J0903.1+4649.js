Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.61208332,  1.18024909,  0.        ,  0.        ,  1.07015991,        1.01368511,  1.06492424,  0.        ,  1.3720125 ,  0.        ,        1.51525366,  5.98843241,  3.11923051,  2.92608523,  0.716106  ,        1.85068762,  0.69290936,  0.14340267,  0.        ,  1.91409469,        0.        ,  1.55195141,  2.61853695,  1.71517825,  1.20437264,        1.8216573 ,  0.77153254,  1.49167752,  0.        ,  0.85053438,        1.64684796,  2.0009923 ,  2.00508714,  1.11399758,  0.07716682,        1.06902313,  1.32699358,  2.64832926,  1.43733859,  2.4163003 ,        1.96885335,  0.        ,  1.04031003,  0.39692041,  0.88173336,        0.45557263,  0.        ,  0.98334032]
FluxHistoryError = [[  3.55889082e-01,   3.04620981e+00],       [  1.63989186e-01,   2.42739391e+00],       [  0.00000000e+00,   1.50808883e+00],       [  0.00000000e+00,   2.04730582e+00],       [  1.73836708e-01,   2.22168040e+00],       [  4.08339500e-03,   2.25524473e+00],       [  0.00000000e+00,   3.58090401e+00],       [  0.00000000e+00,   2.71795559e+00],       [  1.64821148e-01,   2.73026085e+00],       [  0.00000000e+00,   2.56319547e+00],       [  2.96978354e-01,   2.87292099e+00],       [  4.45099306e+00,   7.64550304e+00],       [  1.77739322e+00,   4.59298086e+00],       [  1.71116102e+00,   4.31403303e+00],       [  0.00000000e+00,   3.06687099e+00],       [  7.68944860e-01,   3.05549288e+00],       [  0.00000000e+00,   2.86349976e+00],       [  0.00000000e+00,   2.18334302e+00],       [  0.00000000e+00,   2.68576407e+00],       [  8.73896718e-01,   3.12858534e+00],       [  0.00000000e+00,   2.17375398e+00],       [  6.23221219e-01,   2.63456059e+00],       [  1.28520739e+00,   4.07145357e+00],       [  6.51003838e-01,   2.89761972e+00],       [  2.72058308e-01,   2.44236755e+00],       [  5.21746635e-01,   3.24673319e+00],       [  0.00000000e+00,   3.02214718e+00],       [  4.24874306e-01,   2.74598122e+00],       [  0.00000000e+00,   2.36175013e+00],       [  0.00000000e+00,   3.46172112e+00],       [  7.13320911e-01,   2.70199251e+00],       [  8.13445568e-01,   3.29548430e+00],       [  6.89090490e-01,   3.49146748e+00],       [  2.93752015e-01,   2.16029239e+00],       [  0.00000000e+00,   2.69859817e+00],       [  0.00000000e+00,   3.49546242e+00],       [  4.34192538e-01,   2.47263384e+00],       [  1.42941844e+00,   4.03935385e+00],       [  5.50127685e-01,   2.60398269e+00],       [  1.17097950e+00,   3.76674461e+00],       [  9.37601447e-01,   3.18203545e+00],       [  0.00000000e+00,   2.47874856e+00],       [  7.77096152e-02,   2.18582392e+00],       [  0.00000000e+00,   3.09885785e+00],       [  6.19300008e-02,   1.86599517e+00],       [  0.00000000e+00,   3.03541639e+00],       [  0.00000000e+00,   1.68222821e+00],       [  0.00000000e+00,   3.31035286e+00]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.94128494e+01],       [  5.47000000e+02,   1.88489513e+01],       [  1.73200000e+03,   1.71820807e+00],       [  5.47700000e+03,   7.86421418e-01],       [  3.16220000e+04,   2.54145678e-04]]
SpectrumError = [[  1.73000000e+02,   7.44511185e+01,   1.24487869e+02],       [  5.47000000e+02,   1.50020294e+01,   2.28317394e+01],       [  1.73200000e+03,   1.06036222e+00,   2.44359732e+00],       [  5.47700000e+03,   5.17382562e-01,   1.11185169e+00],       [  3.16220000e+04,   0.00000000e+00,   2.79314748e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]