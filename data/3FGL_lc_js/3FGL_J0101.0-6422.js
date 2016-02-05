Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.34966493,  1.44770777,  0.51992953,  0.46998757,  0.71797198,        2.64330888,  1.37317336,  2.28089786,  2.27939391,  1.5964936 ,        1.01583302,  1.78769338,  1.89893138,  1.01810145,  1.15094543,        1.38922501,  0.84644771,  1.28655136,  0.86880141,  1.56223071,        1.89084923,  1.64875495,  0.78591305,  2.45362091,  1.31306529,        0.33927038,  1.8590008 ,  0.36012527,  2.37034845,  0.89466631,        1.58296239,  0.65453357,  2.06391001,  0.66173959,  1.20285332,        1.50438344,  2.40250659,  0.65767264,  1.09526682,  1.35169601,        1.03642738,  1.36740232,  1.54332924,  1.08072507,  1.27546477,        0.62695616,  1.54354751,  1.49074197]
FluxHistoryError = [[ 1.65536284,  3.15068293],       [ 0.88306642,  2.13227892],       [ 0.04811534,  1.11998129],       [ 0.05147478,  1.03741765],       [ 0.30224341,  1.27199268],       [ 2.01605964,  3.35876489],       [ 0.80181903,  2.08268356],       [ 1.63105845,  3.04174399],       [ 1.58027315,  3.09604692],       [ 1.04880023,  2.2432301 ],       [ 0.47292715,  1.64890957],       [ 1.20068836,  2.47556114],       [ 1.3673476 ,  2.50743484],       [ 0.45911646,  1.69221139],       [ 0.71672511,  1.67317283],       [ 0.89267683,  1.98133421],       [ 0.48343444,  1.29123425],       [ 0.81640881,  1.83222413],       [ 0.43299159,  1.4200995 ],       [ 1.09946775,  2.092695  ],       [ 1.24414253,  2.6390543 ],       [ 1.14950788,  2.22109652],       [ 0.35753435,  1.31600559],       [ 1.89928389,  3.06595945],       [ 0.88191235,  1.81818867],       [ 0.06208146,  0.77593219],       [ 1.36291051,  2.41900706],       [ 0.06037763,  0.80410314],       [ 1.84735775,  2.95148969],       [ 0.41596133,  1.47727716],       [ 1.06373942,  2.18909359],       [ 0.16614756,  1.26337266],       [ 1.37418139,  2.86563182],       [ 0.28951636,  1.12613177],       [ 0.73994243,  1.77056623],       [ 1.02153265,  2.06125546],       [ 1.75256681,  3.14520669],       [ 0.22357282,  1.21503627],       [ 0.6063391 ,  1.66380179],       [ 0.81462502,  1.9739821 ],       [ 0.64108098,  1.50540018],       [ 0.87081945,  1.95842338],       [ 1.05413866,  2.10174561],       [ 0.56133854,  1.7353977 ],       [ 0.82888514,  1.79377055],       [ 0.29310426,  1.04797697],       [ 0.99542749,  2.18331933],       [ 1.01318848,  2.04356766]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   8.65101929e+01],       [  5.47000000e+02,   4.29974823e+01],       [  1.73200000e+03,   1.71458206e+01],       [  5.47700000e+03,   2.69640207e+00],       [  3.16220000e+04,   7.94509873e-02]]
SpectrumError = [[  1.73000000e+02,   6.61698303e+01,   1.07365387e+02],       [  5.47000000e+02,   3.88721504e+01,   4.71228142e+01],       [  1.73200000e+03,   1.57584085e+01,   1.85332317e+01],       [  5.47700000e+03,   2.25328398e+00,   3.18648410e+00],       [  3.16220000e+04,   2.25002803e-02,   1.87148049e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]