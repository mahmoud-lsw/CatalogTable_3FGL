Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  1.03071964,  0.93177891,  0.        ,  0.77085173,        0.25657502,  0.        ,  0.2421605 ,  0.        ,  0.        ,        0.        ,  1.39888823,  0.        ,  0.1473074 ,  0.32769772,        2.45443535,  1.09381926,  0.        ,  3.10806704,  0.52066559,        0.68561643,  2.17989206,  1.70837128,  1.63730395,  2.39462614,        1.33274269,  0.        ,  1.25101435,  0.32669124,  0.34649175,        0.        ,  0.        ,  0.        ,  0.        ,  0.39473635,        0.19154732,  0.        ,  0.37727973,  0.2131492 ,  0.36742041,        0.        ,  1.02969384,  0.53615826,  0.        ,  0.        ,        0.        ,  0.68491775,  0.        ]
FluxHistoryError = [[ 0.        ,  1.15315807],       [ 0.45020586,  1.80387318],       [ 0.23127043,  1.77274585],       [ 0.        ,  1.22088933],       [ 0.19205225,  1.56313801],       [ 0.        ,  1.47336927],       [ 0.        ,  1.25835335],       [ 0.        ,  1.80986351],       [ 0.        ,  1.39135468],       [ 0.        ,  1.65927291],       [ 0.        ,  0.77042478],       [ 0.54831064,  2.37394118],       [ 0.        ,  1.06704414],       [ 0.        ,  2.00826275],       [ 0.        ,  1.83012828],       [ 1.54700541,  3.5193212 ],       [ 0.46724337,  1.96196079],       [ 0.        ,  2.22322488],       [ 2.05974674,  4.32034254],       [ 0.        ,  2.32568151],       [ 0.13732213,  1.48339283],       [ 1.33505917,  3.17983317],       [ 0.74623936,  2.78762865],       [ 0.83025491,  2.65526152],       [ 1.42795885,  3.51550722],       [ 0.66872817,  2.18842816],       [ 0.        ,  1.38894594],       [ 0.62530315,  2.10127926],       [ 0.        ,  2.16839692],       [ 0.        ,  2.06293088],       [ 0.        ,  1.38878286],       [ 0.        ,  1.71805751],       [ 0.        ,  1.30605543],       [ 0.        ,  1.76929247],       [ 0.        ,  2.3240158 ],       [ 0.        ,  1.85538654],       [ 0.        ,  1.2166065 ],       [ 0.        ,  2.38064262],       [ 0.        ,  1.62771823],       [ 0.        ,  1.94952211],       [ 0.        ,  1.01938188],       [ 0.33034414,  2.02143884],       [ 0.        ,  2.38971847],       [ 0.        ,  1.44543326],       [ 0.        ,  1.72554862],       [ 0.        ,  1.74808884],       [ 0.0241769 ,  1.51632881],       [ 0.        ,  2.13003278]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.03147488e+01],       [  5.47000000e+02,   9.48349762e+00],       [  1.73200000e+03,   2.61138988e+00],       [  5.47700000e+03,   8.87185037e-01],       [  3.16220000e+04,   3.46651971e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   6.93778172e+01],       [  5.47000000e+02,   5.40988779e+00,   1.37223663e+01],       [  1.73200000e+03,   1.78001761e+00,   3.53335524e+00],       [  5.47700000e+03,   5.84284663e-01,   1.24827838e+00],       [  3.16220000e+04,   1.96854979e-01,   5.49780130e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]