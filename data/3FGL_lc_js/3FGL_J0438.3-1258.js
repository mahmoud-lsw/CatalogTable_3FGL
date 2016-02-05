Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.0083611 ,  1.33309829,  0.45928261,  0.77951628,  0.80733865,        0.        ,  0.70341974,  1.00692666,  0.        ,  0.81424344,        0.19612151,  0.        ,  0.        ,  0.5558548 ,  0.68640584,        0.48719785,  0.82942313,  1.05545294,  1.25175059,  0.        ,        0.        ,  0.3608529 ,  1.30809581,  0.83661354,  0.45165664,        2.42618418,  1.204041  ,  0.        ,  0.        ,  0.        ,        1.99187636,  0.        ,  0.        ,  0.        ,  0.59346169,        0.        ,  0.5644632 ,  1.68087518,  0.59926498,  0.        ,        0.        ,  1.00709999,  0.29419664,  0.        ,  0.        ,        0.        ,  0.        ,  1.99512339]
FluxHistoryError = [[ 0.08871549,  2.13063788],       [ 0.69480985,  2.11134338],       [ 0.        ,  2.42816231],       [ 0.24361658,  1.49429131],       [ 0.23552328,  1.6121242 ],       [ 0.        ,  1.70260549],       [ 0.09327197,  1.5001328 ],       [ 0.31650269,  1.92710364],       [ 0.        ,  1.3862803 ],       [ 0.25497252,  1.64372826],       [ 0.        ,  1.72060186],       [ 0.        ,  1.48739052],       [ 0.        ,  1.41866994],       [ 0.        ,  2.67801428],       [ 0.10438621,  1.64349318],       [ 0.        ,  2.36326334],       [ 0.01815277,  2.02178502],       [ 0.19057941,  2.06662512],       [ 0.29112202,  2.48915815],       [ 0.        ,  1.01303375],       [ 0.        ,  2.10371733],       [ 0.        ,  2.30229706],       [ 0.58731049,  2.23646259],       [ 0.26577067,  1.70543504],       [ 0.        ,  2.08055812],       [ 1.14053547,  3.92273855],       [ 0.52126187,  2.10141778],       [ 0.        ,  1.4602536 ],       [ 0.        ,  1.77054501],       [ 0.        ,  1.41927159],       [ 1.16892052,  2.98500991],       [ 0.        ,  1.68921816],       [ 0.        ,  1.66838372],       [ 0.        ,  2.46051359],       [ 0.14041707,  1.39027166],       [ 0.        ,  1.57747579],       [ 0.        ,  2.38770324],       [ 0.88050449,  2.72307301],       [ 0.11030847,  1.33056831],       [ 0.        ,  1.99072564],       [ 0.        ,  1.14900231],       [ 0.        ,  3.5667628 ],       [ 0.        ,  2.3166106 ],       [ 0.        ,  1.39310467],       [ 0.        ,  1.95323551],       [ 0.        ,  1.63908458],       [ 0.        ,  1.48545539],       [ 1.16359413,  2.9832921 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.23880577e+01],       [  5.47000000e+02,   1.16871405e+01],       [  1.73200000e+03,   1.71167004e+00],       [  5.47700000e+03,   1.50510895e+00],       [  3.16220000e+04,   1.18234456e-01]]
SpectrumError = [[  1.73000000e+02,   6.79397583e-02,   6.52597198e+01],       [  5.47000000e+02,   6.78357649e+00,   1.67842693e+01],       [  1.73200000e+03,   8.73576403e-01,   2.65058041e+00],       [  5.47700000e+03,   1.11867523e+00,   1.95294356e+00],       [  3.16220000e+04,   1.93159208e-02,   2.88289338e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]