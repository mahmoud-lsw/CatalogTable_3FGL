Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.14877307,  0.86886132,  0.94347125,  0.        ,  0.        ,        1.0038445 ,  1.04912138,  0.        ,  0.67972893,  0.22000839,        0.        ,  0.23211801,  0.        ,  0.        ,  2.54511118,        0.05186294,  0.        ,  0.        ,  0.        ,  0.7306267 ,        0.        ,  0.        ,  2.26823092,  0.7084958 ,  1.19063556,        1.94257903,  0.71240473,  0.        ,  0.        ,  2.40745687,        0.33109075,  0.64848506,  0.        ,  1.492576  ,  0.        ,        0.0929907 ,  0.        ,  0.16234291,  0.7831462 ,  0.71715307,        1.24050498,  0.73855686,  0.        ,  0.46926489,  0.17812599,        0.        ,  2.12998343,  0.        ]
FluxHistoryError = [[ 0.16162521,  2.30674195],       [ 0.33337021,  1.58049548],       [ 0.37352556,  1.7393446 ],       [ 0.        ,  1.59872401],       [ 0.        ,  1.21436954],       [ 0.07652271,  2.12685061],       [ 0.44374669,  1.83385634],       [ 0.        ,  1.91522598],       [ 0.20128316,  1.34189594],       [ 0.        ,  2.07311024],       [ 0.        ,  1.57297146],       [ 0.        ,  2.36426795],       [ 0.        ,  1.7852186 ],       [ 0.        ,  1.85947967],       [ 1.32832587,  3.92729068],       [ 0.        ,  2.45283435],       [ 0.        ,  1.24819863],       [ 0.        ,  2.06109285],       [ 0.        ,  1.40318382],       [ 0.24904189,  1.44858575],       [ 0.        ,  1.29531896],       [ 0.        ,  1.30319738],       [ 1.25292587,  3.49218035],       [ 0.        ,  3.15995091],       [ 0.21527052,  2.44062662],       [ 0.95700181,  3.12348604],       [ 0.        ,  2.82814622],       [ 0.        ,  1.87858367],       [ 0.        ,  2.23413563],       [ 1.24696374,  3.74744081],       [ 0.        ,  2.21031839],       [ 0.14802003,  1.39255035],       [ 0.        ,  2.00395727],       [ 0.58700651,  2.61554027],       [ 0.        ,  1.57739985],       [ 0.        ,  2.58650857],       [ 0.        ,  1.97643161],       [ 0.        ,  1.87153733],       [ 0.        ,  2.97195584],       [ 0.06019717,  1.56835938],       [ 0.20644629,  2.49207497],       [ 0.        ,  3.30701375],       [ 0.        ,  2.33480024],       [ 0.00925463,  1.19815516],       [ 0.        ,  1.77086832],       [ 0.        ,  2.10768056],       [ 1.1509912 ,  3.27189493],       [ 0.        ,  1.77185488]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.47202349e+00],       [  5.47000000e+02,   1.09044065e+01],       [  1.73200000e+03,   1.71523428e+00],       [  5.47700000e+03,   9.54017520e-01],       [  3.16220000e+04,   7.57980049e-02]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   7.83395467e+01],       [  5.47000000e+02,   6.35433435e+00,   1.57177553e+01],       [  1.73200000e+03,   9.34200585e-01,   2.60015392e+00],       [  5.47700000e+03,   6.25046015e-01,   1.34544861e+00],       [  3.16220000e+04,   1.89718194e-02,   1.85977846e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]