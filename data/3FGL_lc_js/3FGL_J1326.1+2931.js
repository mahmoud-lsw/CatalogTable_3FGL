Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.07393802,  0.71275115,  0.        ,  0.        ,  0.        ,        0.09612675,  1.58393419,  0.        ,  0.07857369,  0.        ,        0.17389517,  0.        ,  0.        ,  0.721075  ,  0.30162784,        0.        ,  0.        ,  0.        ,  0.11501539,  0.        ,        0.3318823 ,  0.        ,  0.75487149,  0.423612  ,  1.46021163,        3.72961998,  0.        ,  0.26518229,  0.        ,  0.51254332,        0.8423956 ,  0.6690051 ,  1.0955193 ,  1.49186695,  2.18432522,        0.        ,  0.        ,  0.        ,  0.69501865,  0.        ,        0.66167891,  2.07670212,  1.2352922 ,  0.        ,  0.        ,        0.83994359,  1.12795234,  0.28036305]
FluxHistoryError = [[ 0.        ,  2.24421347],       [ 0.16459316,  1.47165585],       [ 0.        ,  0.79610044],       [ 0.        ,  1.19944537],       [ 0.        ,  1.08069682],       [ 0.        ,  2.17179723],       [ 0.90973842,  2.41146612],       [ 0.        ,  1.054299  ],       [ 0.        ,  1.58533691],       [ 0.        ,  0.9296186 ],       [ 0.        ,  1.75211899],       [ 0.        ,  1.09374654],       [ 0.        ,  1.46335411],       [ 0.11026883,  1.57728934],       [ 0.        ,  2.1350368 ],       [ 0.        ,  1.78147829],       [ 0.        ,  1.70624781],       [ 0.        ,  1.8241446 ],       [ 0.        ,  1.97250044],       [ 0.        ,  1.5568254 ],       [ 0.        ,  2.81039196],       [ 0.        ,  1.20836759],       [ 0.07014859,  1.69167376],       [ 0.10459054,  0.91217786],       [ 0.67931628,  2.42985868],       [ 2.40185642,  5.21776533],       [ 0.        ,  1.131531  ],       [ 0.        ,  2.47239402],       [ 0.        ,  0.74225229],       [ 0.        ,  2.23064005],       [ 0.        ,  2.98180491],       [ 0.10515815,  1.57258582],       [ 0.46070659,  1.98485184],       [ 0.68062395,  2.54841256],       [ 1.20830059,  3.35162711],       [ 0.        ,  1.52294624],       [ 0.        ,  2.14202833],       [ 0.        ,  1.52964485],       [ 0.        ,  2.93217409],       [ 0.        ,  1.14959669],       [ 0.20799217,  1.41555989],       [ 1.05187333,  3.22799635],       [ 0.63903618,  2.00726247],       [ 0.        ,  1.39013314],       [ 0.        ,  1.71260071],       [ 0.11094928,  1.72621107],       [ 0.26691931,  2.24611521],       [ 0.        ,  2.19548318]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.01491013e+01],       [  5.47000000e+02,   1.24481010e+01],       [  1.73200000e+03,   1.34787285e+00],       [  5.47700000e+03,   2.05122724e-01],       [  3.16220000e+04,   3.11431974e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.43651535e+02],       [  5.47000000e+02,   7.42397976e+00,   1.77441826e+01],       [  1.73200000e+03,   6.24345422e-01,   2.19678807e+00],       [  5.47700000e+03,   4.91638929e-02,   4.42020655e-01],       [  3.16220000e+04,   1.63640574e-01,   4.96940911e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]