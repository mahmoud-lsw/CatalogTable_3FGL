Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.05324256,  0.67086422,  0.        ,  0.26203331,  0.        ,        0.        ,  0.        ,  0.11350928,  0.        ,  0.        ,        0.35504523,  0.        ,  0.77918249,  0.        ,  0.        ,        0.        ,  0.11240793,  0.18994479,  0.19682431,  0.        ,        0.74295229,  0.2026457 ,  0.        ,  0.19015183,  0.2598159 ,        0.88185656,  0.        ,  0.43240899,  0.        ,  0.        ,        0.74529558,  0.        ,  1.32544124,  0.        ,  0.        ,        1.61490095,  0.        ,  0.4330326 ,  0.35128534,  0.19508974,        0.44138354,  0.45580891,  0.50763464,  0.396561  ,  0.        ,        1.27953374,  0.22619344,  0.        ]
FluxHistoryError = [[ 0.54727602,  1.67039204],       [ 0.33812553,  1.1271435 ],       [ 0.        ,  0.77734584],       [ 0.        ,  1.21140268],       [ 0.        ,  0.74779606],       [ 0.        ,  1.02109516],       [ 0.        ,  0.85216415],       [ 0.        ,  1.39623891],       [ 0.        ,  0.84063745],       [ 0.        ,  0.94293886],       [ 0.        ,  1.45630303],       [ 0.        ,  1.1750468 ],       [ 0.34693909,  1.35083747],       [ 0.        ,  0.62270796],       [ 0.        ,  0.9330343 ],       [ 0.        ,  0.68517172],       [ 0.        ,  1.8578024 ],       [ 0.        ,  1.2262892 ],       [ 0.        ,  1.185821  ],       [ 0.        ,  0.81253076],       [ 0.27230138,  1.31115031],       [ 0.        ,  1.08254997],       [ 0.        ,  0.90889812],       [ 0.        ,  1.4207622 ],       [ 0.        ,  1.5187864 ],       [ 0.14715415,  1.74418616],       [ 0.        ,  1.16832423],       [ 0.05085284,  1.00090134],       [ 0.        ,  1.39890862],       [ 0.        ,  0.69537568],       [ 0.18534464,  1.44919646],       [ 0.        ,  0.92985106],       [ 0.67480081,  2.15345192],       [ 0.        ,  1.23454952],       [ 0.        ,  1.16048598],       [ 0.72524369,  2.65915966],       [ 0.        ,  0.62019032],       [ 0.        ,  2.00159904],       [ 0.03719237,  0.81511348],       [ 0.        ,  1.29941361],       [ 0.15954307,  0.88578594],       [ 0.19718459,  0.83728665],       [ 0.12938121,  1.10118985],       [ 0.08544353,  0.90675163],       [ 0.        ,  1.36937785],       [ 0.65752017,  1.99587774],       [ 0.        ,  1.43481089],       [ 0.        ,  1.59365499]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.22615623e+00],       [  5.47000000e+02,   5.74558353e+00],       [  1.73200000e+03,   1.90665448e+00],       [  5.47700000e+03,   8.74642789e-01],       [  3.16220000e+04,   3.41851503e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   5.49706249e+01],       [  5.47000000e+02,   1.82943010e+00,   9.80925369e+00],       [  1.73200000e+03,   1.07661319e+00,   2.81868410e+00],       [  5.47700000e+03,   5.70158303e-01,   1.25005388e+00],       [  3.16220000e+04,   1.76841676e-01,   5.66458106e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]