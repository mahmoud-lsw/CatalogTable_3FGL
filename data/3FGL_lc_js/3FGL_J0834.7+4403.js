Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.52816564,  0.8225159 ,  0.        ,  0.        ,  1.69855094,        0.38070396,  0.        ,  0.        ,  1.69737935,  0.        ,        1.02280259,  0.        ,  1.59406853,  0.46113363,  2.2072022 ,        0.42187548,  1.18696404,  0.        ,  2.44973874,  1.06444883,        0.48918572,  0.        ,  0.93078417,  0.59529215,  0.        ,        0.15769407,  0.49452212,  1.34759259,  1.01071286,  0.19442508,        0.5288763 ,  0.08392647,  0.3614113 ,  0.        ,  0.        ,        0.64082831,  0.        ,  2.0910995 ,  1.22217667,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  0.28719476,  1.40242708]
FluxHistoryError = [[ 0.12043124,  1.22472274],       [ 0.12444144,  1.7535224 ],       [ 0.        ,  1.48353064],       [ 0.        ,  1.67381895],       [ 0.78047055,  2.78594232],       [ 0.        ,  2.37077036],       [ 0.        ,  1.3618114 ],       [ 0.        ,  1.82491767],       [ 0.98003531,  2.56981015],       [ 0.        ,  1.22159934],       [ 0.29860973,  1.95110798],       [ 0.        ,  1.27052879],       [ 0.78877741,  2.56404662],       [ 0.        ,  2.14079276],       [ 1.41370034,  3.13100052],       [ 0.        ,  2.40162551],       [ 0.39058954,  2.14389801],       [ 0.        ,  1.28169703],       [ 1.45351315,  3.61067152],       [ 0.36301923,  1.94446158],       [ 0.        ,  2.18485883],       [ 0.        ,  1.3477658 ],       [ 0.32713264,  1.74322557],       [ 0.05209357,  1.31829762],       [ 0.        ,  1.45449913],       [ 0.        ,  1.75605819],       [ 0.        ,  2.22853795],       [ 0.51779455,  2.35367084],       [ 0.38948852,  1.77453458],       [ 0.        ,  2.26451632],       [ 0.        ,  2.11250925],       [ 0.        ,  1.35963193],       [ 0.        ,  2.38678142],       [ 0.        ,  1.22476578],       [ 0.        ,  1.46045208],       [ 0.        ,  2.34004539],       [ 0.        ,  1.55783045],       [ 1.14705753,  3.2042141 ],       [ 0.43428558,  2.18467903],       [ 0.        ,  1.37649882],       [ 0.        ,  1.62608838],       [ 0.        ,  1.539361  ],       [ 0.        ,  0.8206141 ],       [ 0.        ,  1.73645246],       [ 0.        ,  1.53122365],       [ 0.        ,  1.67475283],       [ 0.        ,  2.08415464],       [ 0.7050041 ,  2.25346017]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.47164268e+01],       [  5.47000000e+02,   4.50789213e+00],       [  1.73200000e+03,   2.73159289e+00],       [  5.47700000e+03,   6.20707273e-01],       [  3.16220000e+04,   1.70352310e-01]]
SpectrumError = [[  1.73000000e+02,   1.81183338e+01,   7.16321259e+01],       [  5.47000000e+02,   1.08220792e+00,   8.10123730e+00],       [  1.73200000e+03,   1.98364925e+00,   3.55655479e+00],       [  5.47700000e+03,   3.69954467e-01,   9.32579875e-01],       [  3.16220000e+04,   7.61594921e-02,   3.15155149e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]