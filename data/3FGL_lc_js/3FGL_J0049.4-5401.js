Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.21996036,  0.33163613,  0.        ,  0.37150562,        0.65579695,  0.        ,  0.        ,  0.        ,  0.        ,        0.15396889,  0.57520938,  0.56521803,  1.73747075,  0.26288697,        0.        ,  0.97512633,  0.76902831,  0.46446273,  0.        ,        0.46785572,  0.        ,  1.3606956 ,  0.        ,  0.48231885,        0.602139  ,  0.11021106,  0.44881389,  0.        ,  0.        ,        0.        ,  0.28120998,  0.        ,  1.84376049,  0.        ,        0.        ,  0.        ,  0.33277798,  1.23162818,  0.        ,        0.49143663,  0.79055494,  0.04223144,  1.51120996,  1.13893139,        1.01321554,  0.        ,  0.57742536]
FluxHistoryError = [[ 0.        ,  1.17747676],       [ 0.        ,  1.98388699],       [ 0.        ,  1.88320154],       [ 0.        ,  0.8084392 ],       [ 0.        ,  2.4678067 ],       [ 0.03341091,  1.41480446],       [ 0.        ,  1.73996973],       [ 0.        ,  1.3259325 ],       [ 0.        ,  1.258026  ],       [ 0.        ,  1.15123117],       [ 0.        ,  1.12526192],       [ 0.        ,  2.338076  ],       [ 0.02782154,  1.25236654],       [ 0.90342617,  2.73055744],       [ 0.0072059 ,  0.67876196],       [ 0.        ,  1.30760992],       [ 0.33003169,  1.75777113],       [ 0.20611423,  1.47442067],       [ 0.12140533,  0.99514186],       [ 0.        ,  1.11197555],       [ 0.        ,  2.77299765],       [ 0.        ,  1.24280369],       [ 0.72591025,  2.15141487],       [ 0.        ,  1.82125711],       [ 0.1370649 ,  1.06502748],       [ 0.        ,  2.38070905],       [ 0.        ,  1.31779902],       [ 0.10018307,  0.9980607 ],       [ 0.        ,  0.86317247],       [ 0.        ,  1.16709101],       [ 0.        ,  1.07866466],       [ 0.        ,  1.94294086],       [ 0.        ,  1.62471366],       [ 1.10497856,  2.68311977],       [ 0.        ,  1.57006991],       [ 0.        ,  1.28141689],       [ 0.        ,  1.39756119],       [ 0.08708011,  0.77471793],       [ 0.54234064,  2.03444481],       [ 0.        ,  1.8325659 ],       [ 0.        ,  1.89391032],       [ 0.26864225,  1.50834513],       [ 0.        ,  1.32437336],       [ 0.76630592,  2.4096694 ],       [ 0.46716851,  1.95821619],       [ 0.53884006,  1.64154625],       [ 0.        ,  1.37964046],       [ 0.21871287,  1.09469366]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.28785324e+01],       [  5.47000000e+02,   7.65945911e+00],       [  1.73200000e+03,   1.69768989e+00],       [  5.47700000e+03,   5.66375256e-01],       [  3.16220000e+04,   2.75369227e-01]]
SpectrumError = [[  1.73000000e+02,   2.10911217e+01,   6.50991135e+01],       [  5.47000000e+02,   4.43783951e+00,   1.10287056e+01],       [  1.73200000e+03,   1.03341579e+00,   2.44572830e+00],       [  5.47700000e+03,   3.29042196e-01,   8.61365438e-01],       [  3.16220000e+04,   1.47307158e-01,   4.59800661e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]