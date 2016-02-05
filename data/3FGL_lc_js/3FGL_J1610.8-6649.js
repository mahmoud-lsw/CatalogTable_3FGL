Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.62467343,  0.85577881,  1.61793625,  1.75084317,  2.49660945,        2.49947429,  1.75035119,  0.51256782,  3.8769989 ,  1.78035772,        1.3904146 ,  0.8451407 ,  2.66075587,  1.30603588,  1.29313779,        0.98113626,  0.42302978,  0.98806858,  0.43165955,  0.95996386,        1.01184165,  0.83212119,  1.4573456 ,  0.83039248,  0.64933163,        0.74281681,  0.84309191,  0.90137446,  0.39667189,  1.14686608,        1.02700448,  0.27341226,  1.34287143,  1.19981456,  1.88316441,        0.        ,  1.99183035,  1.26569927,  0.72462744,  0.52925968,        1.58314586,  1.22752583,  0.96414399,  2.16662312,  1.69113076,        0.45804507,  1.36554432,  0.70573699]
FluxHistoryError = [[ 0.04172462,  1.40581489],       [ 0.40635204,  1.45051646],       [ 1.0381608 ,  2.31908035],       [ 1.06344509,  2.57415962],       [ 1.83018672,  3.26553726],       [ 1.75684071,  3.36625433],       [ 1.17822361,  2.43704963],       [ 0.        ,  2.24288517],       [ 3.01148963,  4.85054016],       [ 1.10783851,  2.57046604],       [ 0.81112796,  2.10790372],       [ 0.43262875,  1.38137305],       [ 1.94053411,  3.49211144],       [ 0.82652277,  1.87294054],       [ 0.77154201,  1.93654037],       [ 0.51381922,  1.58152735],       [ 0.09785044,  0.86870909],       [ 0.53729552,  1.59416962],       [ 0.10305443,  0.92195082],       [ 0.49166358,  1.57030082],       [ 0.55306542,  1.58530474],       [ 0.43434823,  1.34199142],       [ 0.84071875,  2.17762899],       [ 0.47018871,  1.29476035],       [ 0.23916054,  1.24459052],       [ 0.28377897,  1.33243942],       [ 0.37319237,  1.44316602],       [ 0.48920256,  1.41241932],       [ 0.03875315,  0.8855052 ],       [ 0.69055718,  1.71821082],       [ 0.58993828,  1.57100821],       [ 0.        ,  1.60531762],       [ 0.8006137 ,  2.01226759],       [ 0.70225656,  1.82285798],       [ 1.34699178,  2.50174761],       [ 0.        ,  1.00733328],       [ 1.35845351,  2.73271823],       [ 0.74065381,  1.90830374],       [ 0.26571578,  1.32138562],       [ 0.17056674,  1.00212216],       [ 1.04523611,  2.23249888],       [ 0.74392772,  1.79956698],       [ 0.51217765,  1.52401149],       [ 1.45413613,  2.99272513],       [ 1.12548184,  2.35242605],       [ 0.        ,  1.88138539],       [ 0.85546362,  1.97276318],       [ 0.29307455,  1.27746367]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.14985199e+01],       [  5.47000000e+02,   2.74708118e+01],       [  1.73200000e+03,   1.41585665e+01],       [  5.47700000e+03,   5.81531048e+00],       [  3.16220000e+04,   3.35133052e+00]]
SpectrumError = [[  1.73000000e+02,   3.94418030e+01,   1.03843552e+02],       [  5.47000000e+02,   2.20856628e+01,   3.30192680e+01],       [  1.73200000e+03,   1.26535234e+01,   1.57439108e+01],       [  5.47700000e+03,   5.12959766e+00,   6.54826832e+00],       [  3.16220000e+04,   2.87511563e+00,   3.86484933e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]