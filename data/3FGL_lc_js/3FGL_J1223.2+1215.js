Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  2.32866502,  0.49322337,  0.        ,  0.        ,        0.        ,  1.29703033,  1.00134182,  0.0594655 ,  0.31787458,        0.11845679,  0.        ,  0.29364809,  0.        ,  0.43247518,        1.26796103,  0.7928499 ,  0.13615343,  2.66312099,  0.32777244,        0.21166356,  0.1071342 ,  1.68965626,  0.84595507,  1.10119081,        1.02227056,  0.        ,  2.30229235,  0.38881981,  0.        ,        0.59163392,  1.78888917,  0.85457367,  0.45409432,  1.9034158 ,        0.        ,  1.2568028 ,  0.        ,  1.35331059,  0.        ,        0.        ,  0.        ,  0.25496697,  0.        ,  0.        ,        0.        ,  0.50430018,  0.        ]
FluxHistoryError = [[ 0.        ,  1.83785331],       [ 1.4352417 ,  3.33559084],       [ 0.03986073,  1.13682842],       [ 0.        ,  1.39348876],       [ 0.        ,  1.30536771],       [ 0.        ,  1.86751664],       [ 0.38830686,  2.3319087 ],       [ 0.24402976,  2.01805305],       [ 0.        ,  1.71682104],       [ 0.        ,  2.04999021],       [ 0.        ,  1.86839993],       [ 0.        ,  1.73392665],       [ 0.        ,  2.10629448],       [ 0.        ,  2.85833073],       [ 0.        ,  2.06983408],       [ 0.23569345,  2.50840187],       [ 0.10229659,  1.76013803],       [ 0.        ,  2.598757  ],       [ 1.37386668,  4.07857466],       [ 0.        ,  2.40522009],       [ 0.        ,  2.40534528],       [ 0.        ,  1.73268423],       [ 0.79329675,  2.7878809 ],       [ 0.15032911,  1.75153673],       [ 0.48695219,  1.9276309 ],       [ 0.02157021,  2.30554914],       [ 0.        ,  2.11833405],       [ 1.02887392,  3.70976138],       [ 0.        ,  2.74449408],       [ 0.        ,  1.78064585],       [ 0.        ,  2.76364505],       [ 0.89504761,  2.94581652],       [ 0.        ,  3.49407929],       [ 0.        ,  2.36319652],       [ 1.00618672,  3.04168534],       [ 0.        ,  1.69187248],       [ 0.25515544,  2.51782084],       [ 0.        ,  2.52292538],       [ 0.57962352,  2.30440903],       [ 0.        ,  1.68734181],       [ 0.        ,  2.24421525],       [ 0.        ,  2.36093307],       [ 0.        ,  2.40881991],       [ 0.        ,  2.52748132],       [ 0.        ,  1.64881742],       [ 0.        ,  1.5567503 ],       [ 0.        ,  2.7130509 ],       [ 0.        ,  2.20179296]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.36816711e+01],       [  5.47000000e+02,   3.84734130e+00],       [  1.73200000e+03,   3.65594864e+00],       [  5.47700000e+03,   8.77128005e-01],       [  3.16220000e+04,   8.38693604e-02]]
SpectrumError = [[  1.73000000e+02,   1.93028946e+01,   8.90838470e+01],       [  5.47000000e+02,   0.00000000e+00,   1.19252832e+01],       [  1.73200000e+03,   2.69189310e+00,   4.71675110e+00],       [  5.47700000e+03,   5.57837725e-01,   1.26288760e+00],       [  3.16220000e+04,   1.27832443e-02,   2.14560270e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]