Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  2.40924215,  1.75159478,  0.        ,  2.9271636 ,        3.41106105,  2.20905852,  0.        ,  0.6415056 ,  2.07067013,        0.63611817,  5.34962463,  1.1898948 ,  0.57596207,  0.        ,        1.19046521,  3.1702075 ,  0.        ,  0.62352401,  3.05782413,        5.00969839,  2.19695401,  0.        ,  6.91542101,  3.68122244,        0.        ,  0.70129532,  0.        ,  0.        ,  4.7827096 ,        0.49985904,  0.36854529,  1.80299354,  0.        ,  1.78057516,        0.865026  ,  1.72656953,  0.        ,  0.40637955,  0.        ,        2.71255732,  2.370965  ,  1.11124039,  1.09621322,  2.96019769,        0.48314327,  0.6130482 ,  0.        ]
FluxHistoryError = [[ 0.        ,  3.69446373],       [ 0.2877202 ,  4.84755659],       [ 0.        ,  6.76296067],       [ 0.        ,  4.40970182],       [ 0.44471049,  5.7228694 ],       [ 1.02947927,  6.10677767],       [ 0.05469251,  4.75085354],       [ 0.        ,  3.92901707],       [ 0.        ,  4.61359084],       [ 0.46434617,  4.2969594 ],       [ 0.        ,  6.11275649],       [ 2.80214787,  8.02990341],       [ 0.        ,  5.20376122],       [ 0.        ,  4.65943909],       [ 0.        ,  5.01423168],       [ 0.        ,  5.19059968],       [ 0.98897028,  5.49000072],       [ 0.        ,  3.51150584],       [ 0.        ,  3.36431462],       [ 0.67151451,  5.51003647],       [ 2.83923101,  7.21339989],       [ 0.80546498,  4.02256393],       [ 0.        ,  3.35699391],       [ 4.48130846,  9.52437305],       [ 1.37081695,  6.02367878],       [ 0.        ,  3.58126712],       [ 0.        ,  5.2403335 ],       [ 0.        ,  3.29390836],       [ 0.        ,  2.15978146],       [ 2.70307207,  7.0037899 ],       [ 0.        ,  5.40641183],       [ 0.        ,  4.47537208],       [ 0.        ,  6.703161  ],       [ 0.        ,  3.48838782],       [ 0.        ,  5.87009799],       [ 0.        ,  5.28496647],       [ 0.18730521,  3.66103458],       [ 0.        ,  2.75101733],       [ 0.        ,  4.72621521],       [ 0.        ,  3.15164471],       [ 0.82017255,  4.89898205],       [ 0.46834826,  4.48855877],       [ 0.        ,  5.59963989],       [ 0.        ,  5.29046476],       [ 0.65058947,  5.57447958],       [ 0.        ,  5.31106657],       [ 0.        ,  4.78872645],       [ 0.        ,  5.2193222 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.67492085e+01],       [  5.47000000e+02,   3.73369560e+01],       [  1.73200000e+03,   3.95581055e+00],       [  5.47700000e+03,   3.34214896e-01],       [  3.16220000e+04,   1.46704674e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.58958864e+02],       [  5.47000000e+02,   2.84892731e+01,   4.63215446e+01],       [  1.73200000e+03,   2.54855728e+00,   5.43204594e+00],       [  5.47700000e+03,   6.90784156e-02,   6.67471409e-01],       [  3.16220000e+04,   5.48964068e-02,   2.81174541e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]