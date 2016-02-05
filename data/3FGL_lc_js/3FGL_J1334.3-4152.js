Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.61122149,  0.        ,  0.        ,  0.74132454,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        1.21124411,  0.        ,  1.75433195,  1.50882041,  0.52670157,        0.        ,  0.        ,  0.        ,  0.2815747 ,  0.17078143,        0.2436499 ,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  0.92133129,  0.67727065,  0.        ,  1.14713514,        0.        ,  0.75300848,  0.        ,  0.        ,  0.33540699,        1.26805902,  0.48877299,  0.07726681,  0.        ,  0.        ,        1.62865937,  0.76918656,  0.62234908,  0.        ,  0.59318626,        0.67500532,  1.50027657,  0.        ]
FluxHistoryError = [[ 0.        ,  1.18931234],       [ 0.        ,  2.79839486],       [ 0.        ,  1.54593766],       [ 0.        ,  1.62328339],       [ 0.05930805,  1.63181448],       [ 0.        ,  1.63751817],       [ 0.        ,  1.55478942],       [ 0.        ,  1.69480646],       [ 0.        ,  1.27294135],       [ 0.        ,  1.40785813],       [ 0.4102751 ,  2.32220554],       [ 0.        ,  1.5447824 ],       [ 0.88216829,  2.87947488],       [ 0.68936223,  2.46154141],       [ 0.        ,  2.95883548],       [ 0.        ,  1.97479939],       [ 0.        ,  1.22086585],       [ 0.        ,  1.79088092],       [ 0.        ,  1.7854968 ],       [ 0.        ,  2.41225845],       [ 0.        ,  1.69295651],       [ 0.        ,  1.83373427],       [ 0.        ,  1.43674517],       [ 0.        ,  1.64394224],       [ 0.        ,  1.86183608],       [ 0.        ,  1.5838238 ],       [ 0.        ,  3.53866041],       [ 0.        ,  2.36831081],       [ 0.        ,  1.69224262],       [ 0.37944371,  2.17709255],       [ 0.        ,  1.45345712],       [ 0.23503727,  1.64610362],       [ 0.        ,  1.58652771],       [ 0.        ,  2.88542867],       [ 0.06626457,  0.80441058],       [ 0.4522934 ,  2.38668251],       [ 0.        ,  2.68515623],       [ 0.        ,  2.33616889],       [ 0.        ,  2.02052307],       [ 0.        ,  1.07244134],       [ 0.63004237,  2.84864092],       [ 0.28050351,  1.50049686],       [ 0.0327248 ,  1.4905659 ],       [ 0.        ,  1.21147394],       [ 0.        ,  2.49523294],       [ 0.0181433 ,  1.60573542],       [ 0.73256904,  2.46579313],       [ 0.        ,  2.01832008]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.08029747e+01],       [  5.47000000e+02,   1.53611898e+01],       [  1.73200000e+03,   1.23248331e-03],       [  5.47700000e+03,   8.75490844e-01],       [  3.16220000e+04,   2.03488022e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.37882839e+02],       [  5.47000000e+02,   8.97431183e+00,   2.19026852e+01],       [  1.73200000e+03,   0.00000000e+00,   2.16367445e+00],       [  5.47700000e+03,   5.50723791e-01,   1.26735973e+00],       [  3.16220000e+04,   9.17128921e-02,   3.74388695e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]