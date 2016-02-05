Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.65618491,  0.        ,  0.        ,        1.21417105,  1.91194654,  0.62758839,  1.31429267,  1.69702995,        0.        ,  0.44477203,  1.36912501,  2.96627855,  1.04262388,        0.        ,  0.41502318,  2.04031396,  0.883304  ,  3.41668344,        0.        ,  0.67022324,  0.        ,  1.61679184,  0.        ,        0.        ,  0.        ,  0.        ,  1.58186531,  1.59425914,        1.73792803,  0.        ,  0.        ,  0.        ,  0.        ,        2.66684556,  2.27263641,  2.03856993,  1.63198483,  0.8037923 ,        0.        ,  1.17117202,  2.2534349 ,  0.        ,  1.93273079,        1.60259819,  0.04028736,  0.        ]
FluxHistoryError = [[ 0.        ,  1.70719385],       [ 0.        ,  2.41509032],       [ 0.        ,  2.59852147],       [ 0.        ,  1.51660407],       [ 0.        ,  1.45517683],       [ 0.12224662,  2.54697371],       [ 0.99237031,  2.97328901],       [ 0.        ,  3.16036475],       [ 0.3437832 ,  2.42650986],       [ 0.85410893,  2.69510603],       [ 0.        ,  1.9900769 ],       [ 0.        ,  2.24746445],       [ 0.46385801,  2.54816294],       [ 1.68387914,  4.4781909 ],       [ 0.        ,  4.11788118],       [ 0.        ,  2.52086067],       [ 0.        ,  2.74878821],       [ 0.71790767,  3.58620405],       [ 0.        ,  3.39560711],       [ 1.90383565,  5.16010571],       [ 0.        ,  2.3757019 ],       [ 0.        ,  3.68504906],       [ 0.        ,  1.992396  ],       [ 0.54819548,  2.93937492],       [ 0.        ,  2.09211683],       [ 0.        ,  2.90244055],       [ 0.        ,  3.07004547],       [ 0.        ,  1.98188114],       [ 0.34530401,  3.08583689],       [ 0.73170316,  2.68125176],       [ 0.63044393,  3.04511166],       [ 0.        ,  2.20954347],       [ 0.        ,  2.49893236],       [ 0.        ,  1.67858434],       [ 0.        ,  1.4204433 ],       [ 1.12243664,  4.42892504],       [ 1.25235534,  3.51502347],       [ 0.79947257,  3.54301786],       [ 0.25885308,  3.18987274],       [ 0.2494241 ,  1.66712093],       [ 0.        ,  2.71089506],       [ 0.22131664,  2.35903716],       [ 0.98331785,  3.75442123],       [ 0.        ,  2.04379892],       [ 0.60994184,  3.46562719],       [ 0.68018955,  2.79565239],       [ 0.        ,  2.62044202],       [ 0.        ,  1.76776874]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.45652714e+01],       [  5.47000000e+02,   9.25519753e+00],       [  1.73200000e+03,   2.80668354e+00],       [  5.47700000e+03,   9.61297512e-01],       [  3.16220000e+04,   1.78961813e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   9.35410023e+01],       [  5.47000000e+02,   4.38117361e+00,   1.45370989e+01],       [  1.73200000e+03,   1.88672471e+00,   3.82162762e+00],       [  5.47700000e+03,   6.03916824e-01,   1.38831758e+00],       [  3.16220000e+04,   6.52707070e-02,   3.53854239e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]