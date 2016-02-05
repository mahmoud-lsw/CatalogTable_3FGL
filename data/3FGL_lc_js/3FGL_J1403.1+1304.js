Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.16885746,  0.72595727,  0.        ,  0.        ,  0.82304353,        0.        ,  0.51767731,  0.97633058,  0.35781202,  3.03785968,        0.        ,  0.45825011,  0.75968701,  0.        ,  0.        ,        0.        ,  0.        ,  0.29351491,  0.        ,  0.        ,        0.67379361,  0.4288713 ,  0.88230407,  0.64888823,  0.28023285,        1.35921514,  0.69787711,  1.27903974,  3.34666133,  0.6636551 ,        0.        ,  0.91224533,  2.11537981,  0.        ,  2.16750574,        0.31942186,  0.        ,  0.        ,  0.        ,  0.40481344,        1.74989772,  0.        ,  0.1000184 ,  1.75887215,  0.        ,        0.55683988,  0.        ,  0.        ]
FluxHistoryError = [[ 0.3604424 ,  2.23818636],       [ 0.12273645,  1.4853673 ],       [ 0.        ,  2.05267406],       [ 0.        ,  1.91963971],       [ 0.23528683,  1.55689192],       [ 0.        ,  2.3741312 ],       [ 0.        ,  2.15732753],       [ 0.14526629,  2.04726219],       [ 0.        ,  1.89231119],       [ 2.03589916,  4.19317389],       [ 0.        ,  1.61333084],       [ 0.        ,  2.14354414],       [ 0.05087334,  1.65948725],       [ 0.        ,  2.19769764],       [ 0.        ,  2.25756526],       [ 0.        ,  1.18741906],       [ 0.        ,  2.27071929],       [ 0.        ,  3.2019152 ],       [ 0.        ,  1.80500543],       [ 0.        ,  1.74360418],       [ 0.11192656,  1.58668137],       [ 0.        ,  2.47724906],       [ 0.11784571,  1.82495499],       [ 0.        ,  2.93429387],       [ 0.        ,  2.34332246],       [ 0.47069257,  2.44238496],       [ 0.        ,  3.26449889],       [ 0.26458943,  2.5011549 ],       [ 2.15223432,  4.69404221],       [ 0.        ,  2.75170642],       [ 0.        ,  1.21452844],       [ 0.10938579,  2.01867247],       [ 0.98410451,  3.51995134],       [ 0.        ,  1.53164065],       [ 1.10656893,  3.42554474],       [ 0.        ,  1.95028695],       [ 0.        ,  2.13995266],       [ 0.        ,  2.38323045],       [ 0.        ,  2.24141216],       [ 0.03995135,  1.0419184 ],       [ 0.88913637,  2.76895857],       [ 0.        ,  1.26566577],       [ 0.        ,  1.94344857],       [ 0.79761076,  3.0113914 ],       [ 0.        ,  1.76401436],       [ 0.        ,  2.79576653],       [ 0.        ,  2.6108799 ],       [ 0.        ,  2.71557426]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.46896172e+01],       [  5.47000000e+02,   7.35130692e+00],       [  1.73200000e+03,   2.96564555e+00],       [  5.47700000e+03,   3.94578993e-01],       [  3.16220000e+04,   1.01007890e-05]]
SpectrumError = [[  1.73000000e+02,   6.02875710e+00,   6.37007751e+01],       [  5.47000000e+02,   3.36481953e+00,   1.14053917e+01],       [  1.73200000e+03,   2.11883020e+00,   3.90109420e+00],       [  5.47700000e+03,   1.85857385e-01,   6.65995121e-01],       [  3.16220000e+04,   0.00000000e+00,   3.39590428e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]