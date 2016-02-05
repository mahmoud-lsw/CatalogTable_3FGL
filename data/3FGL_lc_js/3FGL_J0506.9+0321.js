Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.65857673,  0.        ,  0.60166019,        0.        ,  0.14740044,  0.        ,  0.1368705 ,  0.38867256,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.16806668,  0.        ,        0.        ,  0.25495398,  0.86933881,  0.        ,  0.        ,        0.68063247,  0.30113903,  0.        ,  0.34032765,  0.        ,        0.        ,  0.39796576,  0.08175466,  0.31029278,  0.58637261,        0.        ,  0.        ,  0.64848846,  0.61585408,  0.50414777,        0.15415154,  0.33159259,  0.        ,  0.        ,  0.43996793,        0.        ,  0.        ,  0.54890835]
FluxHistoryError = [[ 0.        ,  0.88972819],       [ 0.        ,  0.5515579 ],       [ 0.27432129,  1.17483234],       [ 0.        ,  0.84490317],       [ 0.21984595,  1.15320086],       [ 0.        ,  0.83311379],       [ 0.        ,  1.26832825],       [ 0.        ,  0.80947202],       [ 0.        ,  1.05990356],       [ 0.09532481,  0.89399576],       [ 0.        ,  0.65677303],       [ 0.        ,  0.88237959],       [ 0.        ,  0.83558983],       [ 0.        ,  1.05338943],       [ 0.        ,  1.17777312],       [ 0.        ,  0.82648218],       [ 0.        ,  1.21556556],       [ 0.        ,  0.91864133],       [ 0.        ,  1.79712147],       [ 0.        ,  1.53971684],       [ 0.        ,  1.12587905],       [ 0.        ,  1.46782684],       [ 0.35261244,  1.57431197],       [ 0.        ,  1.48328614],       [ 0.        ,  0.88002414],       [ 0.31362018,  1.17865169],       [ 0.        ,  1.53445485],       [ 0.        ,  1.49083483],       [ 0.04116604,  0.83388466],       [ 0.        ,  0.78446901],       [ 0.        ,  0.64692062],       [ 0.12440595,  0.82050198],       [ 0.        ,  1.61859093],       [ 0.        ,  1.55458063],       [ 0.        ,  2.24561799],       [ 0.        ,  1.23761368],       [ 0.        ,  1.0278995 ],       [ 0.13973182,  1.40547752],       [ 0.22344562,  1.1623565 ],       [ 0.00878525,  1.25850463],       [ 0.        ,  1.49908899],       [ 0.05502778,  0.82356679],       [ 0.        ,  1.49415982],       [ 0.        ,  0.98383802],       [ 0.12236589,  0.97412014],       [ 0.        ,  1.23430312],       [ 0.        ,  1.81022024],       [ 0.2148743 ,  1.04225981]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.99787688e-01],       [  5.47000000e+02,   1.68769789e+00],       [  1.73200000e+03,   2.03956604e+00],       [  5.47700000e+03,   7.01142609e-01],       [  3.16220000e+04,   2.62301594e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   7.34982542e+01],       [  5.47000000e+02,   0.00000000e+00,   1.15562625e+01],       [  1.73200000e+03,   1.20456219e+00,   2.98467469e+00],       [  5.47700000e+03,   3.98853451e-01,   1.07105243e+00],       [  3.16220000e+04,   1.26753941e-01,   4.60660100e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]