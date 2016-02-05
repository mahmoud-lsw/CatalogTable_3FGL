Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.04989114,  0.        ,  0.09080471,        0.        ,  0.        ,  0.2481073 ,  0.        ,  0.58011347,        0.86398977,  0.        ,  0.        ,  0.20286511,  0.27255458,        0.        ,  0.178092  ,  0.15715849,  0.38099283,  0.47426027,        0.        ,  0.16914095,  0.        ,  0.        ,  0.        ,        0.        ,  0.11965872,  0.        ,  0.72125709,  0.6029774 ,        0.77972341,  0.3452346 ,  0.        ,  0.44054654,  0.        ,        0.09742787,  0.        ,  0.        ,  0.58779907,  0.        ,        0.        ,  0.42544195,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  0.62131792],       [ 0.        ,  0.77909386],       [ 0.        ,  0.97743073],       [ 0.        ,  0.8212176 ],       [ 0.        ,  1.03618558],       [ 0.        ,  0.82365936],       [ 0.        ,  1.1870755 ],       [ 0.07475838,  0.58970749],       [ 0.        ,  1.35264814],       [ 0.2296609 ,  1.08500075],       [ 0.4316386 ,  1.42864037],       [ 0.        ,  1.00530136],       [ 0.        ,  0.94701046],       [ 0.        ,  1.53228031],       [ 0.        ,  1.24863416],       [ 0.        ,  1.39140511],       [ 0.        ,  1.53076291],       [ 0.        ,  1.76698422],       [ 0.12172812,  0.82478678],       [ 0.14414248,  0.99105269],       [ 0.        ,  1.64710093],       [ 0.        ,  1.64798822],       [ 0.        ,  1.25803828],       [ 0.        ,  1.11601448],       [ 0.        ,  1.40230322],       [ 0.        ,  0.72823286],       [ 0.        ,  1.13046683],       [ 0.        ,  0.86024022],       [ 0.29818994,  1.28471839],       [ 0.20028153,  1.2035085 ],       [ 0.36744386,  1.3296355 ],       [ 0.04154888,  0.88378465],       [ 0.        ,  1.46528745],       [ 0.1488561 ,  0.90434635],       [ 0.        ,  0.62083304],       [ 0.        ,  1.02997687],       [ 0.        ,  1.16521776],       [ 0.        ,  0.97533983],       [ 0.11322829,  1.26196432],       [ 0.        ,  0.74393153],       [ 0.        ,  0.83497244],       [ 0.        ,  1.90414676],       [ 0.        ,  0.96663302],       [ 0.        ,  0.96291411],       [ 0.        ,  0.84708506],       [ 0.        ,  0.93184227],       [ 0.        ,  1.27135468],       [ 0.        ,  1.43502951]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.72663152e-01],       [  5.47000000e+02,   9.57485080e-01],       [  1.73200000e+03,   1.40896332e+00],       [  5.47700000e+03,   4.99841630e-01],       [  3.16220000e+04,   4.69189376e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   7.57127938e+01],       [  5.47000000e+02,   0.00000000e+00,   1.08234910e+01],       [  1.73200000e+03,   5.40929019e-01,   2.38913417e+00],       [  5.47700000e+03,   2.39116549e-01,   8.39828670e-01],       [  3.16220000e+04,   2.78238803e-01,   7.24093318e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]