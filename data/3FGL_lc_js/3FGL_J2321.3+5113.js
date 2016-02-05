Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.87504268,  0.        ,  0.        ,  0.        ,  0.77121866,        0.68313193,  0.        ,  0.        ,  0.45667675,  0.        ,        1.88882267,  0.        ,  1.15990388,  0.27580759,  0.        ,        0.        ,  0.29313102,  0.71088582,  0.62945908,  0.        ,        0.        ,  0.41506904,  0.        ,  0.        ,  0.        ,        0.9953438 ,  1.04935157,  0.        ,  0.        ,  1.09960699,        1.13585413,  0.50003564,  0.        ,  0.        ,  0.        ,        0.        ,  0.62039083,  0.        ,  0.        ,  0.5141179 ,        0.        ,  0.14464639,  0.67790139,  0.42311564,  0.66881734,        0.        ,  0.32978833,  0.81907314]
FluxHistoryError = [[ 0.92883718,  2.9786396 ],       [ 0.        ,  1.95857608],       [ 0.        ,  1.59412718],       [ 0.        ,  1.4478091 ],       [ 0.20859921,  1.51576829],       [ 0.10597259,  1.39399171],       [ 0.        ,  1.64800596],       [ 0.        ,  1.46650851],       [ 0.        ,  2.49810079],       [ 0.        ,  1.93092191],       [ 1.00060558,  2.88364506],       [ 0.        ,  1.25806153],       [ 0.18318701,  2.24671078],       [ 0.02834243,  0.69632787],       [ 0.        ,  1.55041897],       [ 0.        ,  1.61893201],       [ 0.        ,  2.32794777],       [ 0.24513012,  1.359061  ],       [ 0.        ,  2.22220439],       [ 0.        ,  1.91411471],       [ 0.        ,  1.20639956],       [ 0.05297792,  0.97338694],       [ 0.        ,  1.18717563],       [ 0.        ,  1.59190118],       [ 0.        ,  1.77635324],       [ 0.22049177,  1.81993961],       [ 0.29598272,  1.91571546],       [ 0.        ,  1.14827383],       [ 0.        ,  1.1485585 ],       [ 0.50941384,  1.97853327],       [ 0.47740424,  1.9580276 ],       [ 0.        ,  1.98877358],       [ 0.        ,  1.09931099],       [ 0.        ,  0.99703008],       [ 0.        ,  0.85984623],       [ 0.        ,  1.31912863],       [ 0.23545071,  1.24642467],       [ 0.        ,  1.03778744],       [ 0.        ,  1.67149746],       [ 0.        ,  2.17700475],       [ 0.        ,  2.01039553],       [ 0.        ,  1.40586482],       [ 0.10193396,  1.47831416],       [ 0.06130782,  1.04327047],       [ 0.15406495,  1.43883133],       [ 0.        ,  1.07429671],       [ 0.        ,  1.59120679],       [ 0.30606139,  1.68416095]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.48309650e+01],       [  5.47000000e+02,   6.68420124e+00],       [  1.73200000e+03,   1.08515310e+00],       [  5.47700000e+03,   7.44730592e-01],       [  3.16220000e+04,   2.26078480e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   7.28514576e+01],       [  5.47000000e+02,   1.54686737e+00,   1.20732899e+01],       [  1.73200000e+03,   1.83880448e-01,   2.08615017e+00],       [  5.47700000e+03,   4.48161751e-01,   1.09862292e+00],       [  3.16220000e+04,   1.13025159e-01,   3.82467031e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]