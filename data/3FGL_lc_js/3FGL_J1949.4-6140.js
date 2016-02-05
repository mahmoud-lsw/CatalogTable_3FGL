Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  3.38607693,  3.78848839,  2.14484048,        0.        ,  3.6651535 ,  0.88695675,  0.        ,  0.        ,        1.91668952,  0.64076561,  1.49620152,  0.        ,  0.28521162,        0.        ,  0.34474951,  0.        ,  0.        ,  0.3145752 ,        0.        ,  1.00875103,  0.51469946,  0.91511965,  0.95813555,        0.        ,  1.16199124,  0.        ,  0.10010935,  1.02943921,        0.28581655,  0.        ,  0.        ,  0.34486917,  2.66951966,        0.        ,  3.1123414 ,  0.        ,  0.        ,  0.89261299,        2.89627409,  0.        ,  0.        ,  0.70692962,  0.        ,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  2.74127984],       [ 0.        ,  2.06158876],       [ 2.20884871,  4.74462271],       [ 2.48127317,  5.27005386],       [ 0.87970674,  3.57268238],       [ 0.        ,  2.04676676],       [ 2.25029182,  5.23605108],       [ 0.11760229,  1.9839704 ],       [ 0.        ,  3.3585887 ],       [ 0.        ,  2.40049481],       [ 0.61838186,  3.35808825],       [ 0.        ,  3.48329896],       [ 0.44444525,  2.68697858],       [ 0.        ,  2.50178313],       [ 0.        ,  1.83538669],       [ 0.        ,  2.00085473],       [ 0.        ,  2.20261091],       [ 0.        ,  1.91810989],       [ 0.        ,  1.16474652],       [ 0.        ,  1.98307252],       [ 0.        ,  1.86068618],       [ 0.33502579,  1.94149065],       [ 0.        ,  3.01551032],       [ 0.20071042,  1.88510633],       [ 0.        ,  3.92310566],       [ 0.        ,  2.20058489],       [ 0.3512333 ,  2.23136663],       [ 0.        ,  2.34685063],       [ 0.        ,  1.81608868],       [ 0.01506078,  2.32208347],       [ 0.        ,  1.73322237],       [ 0.        ,  2.62627149],       [ 0.        ,  2.90145421],       [ 0.        ,  2.63088563],       [ 1.28413987,  4.21226788],       [ 0.        ,  1.83625662],       [ 1.59411883,  4.8124094 ],       [ 0.        ,  1.82223713],       [ 0.        ,  2.02233052],       [ 0.08276534,  1.86925185],       [ 1.75287867,  4.20599413],       [ 0.        ,  1.89475358],       [ 0.        ,  1.39632511],       [ 0.        ,  4.02281135],       [ 0.        ,  1.86160469],       [ 0.        ,  3.05661273],       [ 0.        ,  1.5432843 ],       [ 0.        ,  2.64283967]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.46133896e+02],       [  5.47000000e+02,   6.66352844e+00],       [  1.73200000e+03,   1.90548205e+00],       [  5.47700000e+03,   8.94440114e-01],       [  3.16220000e+04,   7.73750767e-02]]
SpectrumError = [[  1.73000000e+02,   1.02844864e+02,   1.89896133e+02],       [  5.47000000e+02,   1.85005522e+00,   1.15039568e+01],       [  1.73200000e+03,   1.07679367e+00,   2.81789708e+00],       [  5.47700000e+03,   5.91561675e-01,   1.26260746e+00],       [  3.16220000e+04,   2.97702849e-04,   2.04340428e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]