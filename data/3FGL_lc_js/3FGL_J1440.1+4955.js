Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 3.45248055,  1.72180879,  0.41124108,  2.15534449,  0.        ,        0.        ,  0.73179448,  1.66549873,  1.06899905,  0.6840052 ,        0.        ,  0.16656518,  0.40803725,  0.83046842,  1.20669341,        1.55335939,  1.135993  ,  0.2604109 ,  0.30578348,  1.66178346,        2.23277545,  2.38533163,  0.59303099,  1.75757897,  1.86068439,        0.89243758,  1.65012431,  0.35623586,  1.85525107,  3.52134037,        2.17859912,  0.78514326,  2.07186508,  1.39807272,  1.51405323,        0.20796119,  1.11814153,  0.86837542,  0.10494812,  1.56037891,        3.12413573,  0.99002951,  4.35844946,  3.42276263,  1.93649495,        0.36492902,  2.354177  ,  3.9256897 ]
FluxHistoryError = [[ 2.09881973,  4.9376545 ],       [ 0.38780415,  3.19481087],       [ 0.        ,  2.13366237],       [ 0.76114368,  3.7116704 ],       [ 0.        ,  2.45618343],       [ 0.        ,  2.10989666],       [ 0.        ,  2.79645503],       [ 0.4299469 ,  3.09073639],       [ 0.08876485,  2.26571655],       [ 0.        ,  3.0097124 ],       [ 0.        ,  2.39696288],       [ 0.        ,  2.49981976],       [ 0.        ,  3.19897181],       [ 0.        ,  2.93602061],       [ 0.49312472,  2.15906954],       [ 0.3581928 ,  2.88401747],       [ 0.        ,  3.54179096],       [ 0.        ,  2.61334813],       [ 0.        ,  2.49688408],       [ 0.64283717,  2.80292988],       [ 0.98383856,  3.61269331],       [ 1.27838278,  3.62946129],       [ 0.04194814,  1.43967128],       [ 0.59876144,  3.04366875],       [ 0.70865512,  3.14317799],       [ 0.        ,  3.41572487],       [ 0.53108525,  2.95579004],       [ 0.        ,  2.8763293 ],       [ 0.8778584 ,  2.97645903],       [ 2.32618046,  4.83178997],       [ 1.05749118,  3.42608929],       [ 0.        ,  3.29112184],       [ 0.88349581,  3.42622805],       [ 0.31794453,  2.5935092 ],       [ 0.553967  ,  2.63327765],       [ 0.        ,  2.3361908 ],       [ 0.05496335,  2.31370044],       [ 0.        ,  3.42017901],       [ 0.        ,  2.61168154],       [ 0.44101977,  2.90589333],       [ 1.94571233,  4.412889  ],       [ 0.        ,  3.12224454],       [ 3.15358067,  5.64355755],       [ 2.21652222,  4.74265146],       [ 0.9286437 ,  3.12300777],       [ 0.        ,  2.05211323],       [ 1.19833016,  3.63374376],       [ 2.77977848,  5.18469715]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.41177612e+02],       [  5.47000000e+02,   2.17397785e+01],       [  1.73200000e+03,   2.80689526e+00],       [  5.47700000e+03,   5.43055117e-01],       [  3.16220000e+04,   2.11100176e-01]]
SpectrumError = [[  1.73000000e+02,   1.14944092e+02,   1.67529022e+02],       [  5.47000000e+02,   1.77763824e+01,   2.58308907e+01],       [  1.73200000e+03,   2.06106520e+00,   3.62248635e+00],       [  5.47700000e+03,   3.02177072e-01,   8.39982748e-01],       [  3.16220000e+04,   9.67642069e-02,   3.69845510e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]