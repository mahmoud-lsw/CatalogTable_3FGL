Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.72157925,  1.4904027 ,  0.79374534,  0.        ,  0.48904964,        0.        ,  0.        ,  0.        ,  0.1351316 ,  0.58499068,        0.74853492,  1.65685296,  0.        ,  0.97413403,  0.80486953,        0.        ,  0.3475365 ,  0.        ,  0.        ,  0.35710523,        0.        ,  0.        ,  0.44447798,  0.75970846,  0.43649879,        1.50322711,  0.        ,  0.89170361,  0.16919559,  0.        ,        0.27230644,  0.        ,  0.        ,  0.        ,  0.37982297,        0.82095432,  0.39704192,  0.        ,  0.64213872,  0.2973915 ,        0.30394691,  0.5830515 ,  0.33860564,  0.        ,  0.        ,        0.60960156,  0.        ,  0.        ]
FluxHistoryError = [[ 0.19569474,  1.5674696 ],       [ 0.7283141 ,  2.45012951],       [ 0.20141274,  1.63639069],       [ 0.        ,  1.39290166],       [ 0.        ,  3.1959953 ],       [ 0.        ,  2.16854477],       [ 0.        ,  1.78055596],       [ 0.        ,  1.97752285],       [ 0.        ,  1.70444143],       [ 0.        ,  2.74593347],       [ 0.23867047,  1.42788363],       [ 0.83068806,  2.6875    ],       [ 0.        ,  1.37026906],       [ 0.44498426,  1.68163621],       [ 0.31913355,  1.46285081],       [ 0.        ,  1.32773435],       [ 0.        ,  2.00694543],       [ 0.        ,  1.29025459],       [ 0.        ,  0.985632  ],       [ 0.        ,  2.07192966],       [ 0.        ,  1.68415165],       [ 0.        ,  0.96351308],       [ 0.        ,  2.26263374],       [ 0.25219995,  1.45775676],       [ 0.        ,  1.84052756],       [ 0.83101314,  2.36350584],       [ 0.        ,  1.36567831],       [ 0.43814251,  1.51548386],       [ 0.        ,  1.50058824],       [ 0.        ,  1.18818641],       [ 0.        ,  1.67681634],       [ 0.        ,  1.80980802],       [ 0.        ,  1.42524755],       [ 0.        ,  1.14555037],       [ 0.        ,  1.95703411],       [ 0.33565995,  1.48557997],       [ 0.11538276,  0.89278853],       [ 0.        ,  1.99100435],       [ 0.00703889,  1.46694136],       [ 0.        ,  1.73354611],       [ 0.        ,  1.64717442],       [ 0.06669635,  1.34139252],       [ 0.        ,  1.85973108],       [ 0.        ,  1.04167354],       [ 0.        ,  1.48393142],       [ 0.01840121,  1.5442853 ],       [ 0.        ,  1.80827212],       [ 0.        ,  1.13839805]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.41221866e-01],       [  5.47000000e+02,   4.70243168e+00],       [  1.73200000e+03,   3.10984421e+00],       [  5.47700000e+03,   1.39409053e+00],       [  3.16220000e+04,   3.66196156e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.19775858e+02],       [  5.47000000e+02,   0.00000000e+00,   1.69177694e+01],       [  1.73200000e+03,   1.93657863e+00,   4.39003372e+00],       [  5.47700000e+03,   9.82887864e-01,   1.86988056e+00],       [  3.16220000e+04,   2.19008014e-01,   5.63243270e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]