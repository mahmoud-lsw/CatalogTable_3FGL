Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  1.12493503,  0.74342531,  0.        ,  0.13086183,        0.95514095,  0.        ,  1.83804369,  1.5856328 ,  3.97040415,        0.453729  ,  2.51383972,  1.84640658,  0.53338176,  0.51933056,        0.        ,  1.23466444,  2.01860356,  0.43166667,  0.44801077,        3.87131953,  0.        ,  0.        ,  1.45937693,  0.        ,        1.09430182,  0.        ,  0.        ,  0.93814015,  0.        ,        2.84704185,  2.06928492,  0.25010228,  1.14787066,  0.        ,        0.26226604,  0.        ,  0.93002617,  1.40592515,  0.10743078,        0.        ,  0.77272892,  0.35824758,  1.01706588,  0.44062129,        1.31530428,  1.96824312,  1.24768066]
FluxHistoryError = [[ 0.        ,  2.55070591],       [ 0.        ,  3.72725666],       [ 0.        ,  3.02448601],       [ 0.        ,  2.51020408],       [ 0.        ,  2.12876947],       [ 0.        ,  3.6240319 ],       [ 0.        ,  2.37188268],       [ 0.49092007,  3.3049612 ],       [ 0.47950494,  2.78092313],       [ 2.70227194,  5.35752773],       [ 0.        ,  3.10109481],       [ 1.38256967,  3.78649235],       [ 0.74601328,  3.10061932],       [ 0.        ,  2.94500214],       [ 0.        ,  2.96077138],       [ 0.        ,  2.15921617],       [ 0.09160757,  2.56448364],       [ 0.89717817,  3.34354305],       [ 0.        ,  3.504695  ],       [ 0.        ,  2.34884688],       [ 2.05222535,  5.80650902],       [ 0.        ,  1.97626364],       [ 0.        ,  2.74673605],       [ 0.61412477,  2.53536701],       [ 0.        ,  2.93374157],       [ 0.        ,  4.86317837],       [ 0.        ,  1.59076464],       [ 0.        ,  2.54072976],       [ 0.09587848,  2.00116062],       [ 0.        ,  2.82921696],       [ 1.360147  ,  4.64847279],       [ 0.3582598 ,  3.84673738],       [ 0.        ,  3.43170977],       [ 0.        ,  3.92117894],       [ 0.        ,  2.65293074],       [ 0.        ,  2.06381166],       [ 0.        ,  2.82154346],       [ 0.        ,  3.89009631],       [ 0.01495671,  3.03941154],       [ 0.        ,  2.25452884],       [ 0.        ,  2.51637578],       [ 0.        ,  3.89651704],       [ 0.        ,  2.84336501],       [ 0.        ,  3.92502224],       [ 0.        ,  3.28726211],       [ 0.28649688,  2.47005796],       [ 0.67215824,  3.46039963],       [ 0.33776152,  2.39978504]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.32245636e+01],       [  5.47000000e+02,   1.02447863e+01],       [  1.73200000e+03,   2.12546563e+00],       [  5.47700000e+03,   5.86247087e-01],       [  3.16220000e+04,   2.99543990e-06]]
SpectrumError = [[  1.73000000e+02,   5.66849327e+01,   1.29967545e+02],       [  5.47000000e+02,   6.24540520e+00,   1.43884506e+01],       [  1.73200000e+03,   1.41185069e+00,   2.93047452e+00],       [  5.47700000e+03,   3.20577681e-01,   9.11661863e-01],       [  3.16220000e+04,   0.00000000e+00,   2.37460956e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]