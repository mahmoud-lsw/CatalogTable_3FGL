Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.60900468,  1.02543056,  0.21482742,  0.43934754,  0.26794419,        0.1430071 ,  1.32070851,  0.        ,  0.52876908,  1.36961651,        0.53627652,  0.80564052,  1.95841992,  2.43018365,  3.32971191,        1.28958309,  1.71749461,  0.        ,  0.        ,  0.79525524,        0.61870551,  1.13501108,  0.        ,  0.84168005,  0.46971115,        1.47688115,  1.75661767,  0.        ,  0.79746878,  0.        ,        0.5253703 ,  0.92710942,  0.63984197,  0.10117664,  0.        ,        0.26811364,  0.        ,  0.57901978,  0.20870341,  0.2646156 ,        0.        ,  0.        ,  0.        ,  0.39184576,  0.        ,        1.01221013,  0.        ,  0.3781122 ]
FluxHistoryError = [[ 0.03223997,  1.36873603],       [ 0.38795471,  1.85049462],       [ 0.        ,  1.71618021],       [ 0.0858711 ,  0.99395025],       [ 0.        ,  1.82638738],       [ 0.        ,  1.59529406],       [ 0.53497845,  2.26797247],       [ 0.        ,  1.16876149],       [ 0.        ,  2.33547586],       [ 0.65536135,  2.22967148],       [ 0.04192427,  1.24022937],       [ 0.        ,  2.78511971],       [ 1.17693257,  2.85382938],       [ 1.46546865,  3.62407541],       [ 2.39180708,  4.38642216],       [ 0.53129196,  2.29011559],       [ 0.92567122,  2.63687754],       [ 0.        ,  1.3808347 ],       [ 0.        ,  1.83268976],       [ 0.20235568,  1.60794568],       [ 0.        ,  2.79473686],       [ 0.55082035,  1.85493708],       [ 0.        ,  1.78502488],       [ 0.2636233 ,  1.66704905],       [ 0.        ,  2.28485081],       [ 0.59840447,  2.70088673],       [ 0.86018682,  2.78250694],       [ 0.        ,  1.61577165],       [ 0.12955451,  1.62230539],       [ 0.        ,  2.20767093],       [ 0.        ,  2.48325342],       [ 0.19899338,  1.88130784],       [ 0.        ,  3.04152077],       [ 0.        ,  1.58640196],       [ 0.        ,  1.71270537],       [ 0.        ,  1.59490243],       [ 0.        ,  1.85362625],       [ 0.        ,  2.34520698],       [ 0.        ,  1.84998275],       [ 0.        ,  2.18348676],       [ 0.        ,  0.97567695],       [ 0.        ,  2.12587714],       [ 0.        ,  1.17747891],       [ 0.        ,  2.79896575],       [ 0.        ,  1.44134974],       [ 0.40669066,  1.81374443],       [ 0.        ,  1.06777608],       [ 0.        ,  1.87073088]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.13841200e+00],       [  5.47000000e+02,   1.07853813e+01],       [  1.73200000e+03,   3.42821932e+00],       [  5.47700000e+03,   1.20813668e+00],       [  3.16220000e+04,   8.29156139e-04]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   4.79604335e+01],       [  5.47000000e+02,   6.95276070e+00,   1.48021946e+01],       [  1.73200000e+03,   2.54471922e+00,   4.36806059e+00],       [  5.47700000e+03,   8.69497955e-01,   1.60646200e+00],       [  3.16220000e+04,   0.00000000e+00,   3.52020528e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]