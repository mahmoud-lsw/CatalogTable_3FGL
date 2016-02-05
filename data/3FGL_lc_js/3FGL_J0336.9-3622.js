Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.40921199,  0.        ,  0.        ,  1.31165946,  1.45597589,        0.        ,  0.43342242,  0.        ,  0.79103923,  1.93332601,        0.93965954,  0.54951102,  0.70763171,  1.88132322,  2.20322347,        0.        ,  1.80104649,  0.52676678,  0.        ,  0.38663325,        1.6122005 ,  0.92192602,  0.74921286,  0.        ,  0.        ,        1.15279794,  0.53194588,  0.        ,  1.77328157,  0.41746718,        2.05815005,  1.68517733,  3.1093998 ,  0.        ,  0.99785495,        0.        ,  0.43704861,  2.18655491,  1.67651939,  0.17729478,        0.36383462,  0.        ,  0.        ,  1.72480905,  0.        ,        1.31753862,  0.44195202,  0.        ]
FluxHistoryError = [[ 0.32014918,  2.75925446],       [ 0.        ,  2.20774627],       [ 0.        ,  2.30278587],       [ 0.47140449,  2.41217518],       [ 0.39274216,  2.69826126],       [ 0.        ,  2.39065075],       [ 0.05210027,  1.13992298],       [ 0.        ,  2.05690813],       [ 0.        ,  3.02710724],       [ 0.65683961,  3.35385323],       [ 0.        ,  3.21398371],       [ 0.        ,  3.58840352],       [ 0.        ,  2.72764456],       [ 0.75020349,  3.19442344],       [ 1.27053642,  3.30169821],       [ 0.        ,  2.38458562],       [ 0.4480195 ,  3.3655777 ],       [ 0.        ,  2.23532271],       [ 0.        ,  2.37378573],       [ 0.        ,  1.98593435],       [ 0.47870719,  3.01843309],       [ 0.        ,  3.5359633 ],       [ 0.        ,  3.04104817],       [ 0.        ,  2.39051461],       [ 0.        ,  2.68634725],       [ 0.2024371 ,  2.50440621],       [ 0.        ,  2.38838714],       [ 0.        ,  2.25288939],       [ 0.70454001,  2.96170759],       [ 0.        ,  2.77962619],       [ 0.83883965,  3.43804646],       [ 0.65597451,  2.87803149],       [ 1.62795901,  4.82315636],       [ 0.        ,  1.90050268],       [ 0.        ,  3.84056401],       [ 0.        ,  2.29077077],       [ 0.        ,  2.60964435],       [ 0.80272198,  3.72265077],       [ 0.72018713,  2.78681946],       [ 0.        ,  2.76569729],       [ 0.        ,  2.39529276],       [ 0.        ,  2.0196557 ],       [ 0.        ,  1.51502895],       [ 0.67651796,  2.94453478],       [ 0.        ,  2.22454953],       [ 0.42656696,  2.44555616],       [ 0.        ,  2.60363367],       [ 0.        ,  2.10488582]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.21888084e+01],       [  5.47000000e+02,   1.48998203e+01],       [  1.73200000e+03,   3.33288860e+00],       [  5.47700000e+03,   1.52660295e-01],       [  3.16220000e+04,   3.04053401e-06]]
SpectrumError = [[  1.73000000e+02,   2.78670654e+01,   9.68276672e+01],       [  5.47000000e+02,   1.05430927e+01,   1.93802509e+01],       [  1.73200000e+03,   2.49970627e+00,   4.25137377e+00],       [  5.47700000e+03,   1.67373121e-02,   3.52651358e-01],       [  3.16220000e+04,   0.00000000e+00,   2.47115225e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]