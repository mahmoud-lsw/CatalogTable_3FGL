Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.566122  ,  2.08273768,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        2.05089474,  0.        ,  2.01837754,  1.70018721,  0.        ,        1.27745163,  1.34281576,  0.15974478,  2.57620764,  3.6174829 ,        2.21534157,  0.        ,  0.        ,  1.03495133,  0.76308078,        0.47426391,  0.33720863,  0.46994317,  1.02753639,  0.        ,        0.24635322,  0.        ,  0.        ,  0.        ,  0.26528531,        0.3045724 ,  1.70009589,  0.        ,  0.50134236,  0.        ,        1.09553826,  0.18130708,  1.4255203 ,  2.6994679 ,  1.25954235,        2.20223546,  1.38776398,  0.        ]
FluxHistoryError = [[  0.00000000e+00,   2.54802632e+00],       [  0.00000000e+00,   2.91371435e+00],       [  7.49469042e-01,   3.66538715e+00],       [  0.00000000e+00,   2.26015306e+00],       [  0.00000000e+00,   3.52259660e+00],       [  0.00000000e+00,   2.29927826e+00],       [  0.00000000e+00,   2.49222541e+00],       [  0.00000000e+00,   3.11261630e+00],       [  0.00000000e+00,   2.83874035e+00],       [  0.00000000e+00,   2.32163501e+00],       [  6.23590469e-01,   3.70171022e+00],       [  0.00000000e+00,   2.66226125e+00],       [  7.31682301e-01,   3.54530859e+00],       [  3.97037983e-01,   3.25784063e+00],       [  0.00000000e+00,   2.65206265e+00],       [  7.55687952e-02,   2.69436216e+00],       [  9.73232985e-02,   2.67899609e+00],       [  0.00000000e+00,   3.28117280e+00],       [  1.15308285e+00,   4.15588999e+00],       [  2.15212393e+00,   5.21495152e+00],       [  3.96797657e-01,   4.20839214e+00],       [  0.00000000e+00,   2.75779843e+00],       [  0.00000000e+00,   3.06009364e+00],       [  0.00000000e+00,   3.64221251e+00],       [  0.00000000e+00,   3.73103827e+00],       [  0.00000000e+00,   3.01892424e+00],       [  0.00000000e+00,   2.80639446e+00],       [  0.00000000e+00,   3.19422662e+00],       [  7.53839612e-02,   2.17103314e+00],       [  0.00000000e+00,   3.08389616e+00],       [  0.00000000e+00,   3.05854376e+00],       [  0.00000000e+00,   3.42676544e+00],       [  0.00000000e+00,   2.77462053e+00],       [  0.00000000e+00,   2.46420336e+00],       [  0.00000000e+00,   2.97986084e+00],       [  0.00000000e+00,   2.70654374e+00],       [  2.94926286e-01,   3.28421164e+00],       [  0.00000000e+00,   2.17700553e+00],       [  9.24408436e-04,   1.36271715e+00],       [  0.00000000e+00,   2.47161269e+00],       [  0.00000000e+00,   4.33627427e+00],       [  0.00000000e+00,   2.39467955e+00],       [  7.80462027e-02,   2.94927645e+00],       [  1.12692130e+00,   4.44748592e+00],       [  4.44372892e-02,   2.60192823e+00],       [  8.60948086e-01,   3.76102209e+00],       [  2.26507783e-01,   2.73504853e+00],       [  0.00000000e+00,   2.95649791e+00]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.70244293e+01],       [  5.47000000e+02,   1.41178789e+01],       [  1.73200000e+03,   1.85631156e+00],       [  5.47700000e+03,   5.29922485e-01],       [  3.16220000e+04,   1.03806026e-01]]
SpectrumError = [[  1.73000000e+02,   4.64292755e+01,   1.44268127e+02],       [  5.47000000e+02,   8.74201298e+00,   1.97140675e+01],       [  1.73200000e+03,   9.96052563e-01,   2.82703948e+00],       [  5.47700000e+03,   3.06024551e-01,   8.09577584e-01],       [  3.16220000e+04,   2.18163952e-02,   2.35056847e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]