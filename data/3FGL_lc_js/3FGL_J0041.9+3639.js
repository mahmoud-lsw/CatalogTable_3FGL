Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.51680589,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  0.86376071,        0.        ,  0.8071723 ,  0.        ,  0.        ,  0.20975897,        0.        ,  0.        ,  0.49177799,  0.        ,  0.        ,        0.        ,  0.19181831,  0.42050451,  0.50486565,  0.36347163,        0.43834078,  0.        ,  0.        ,  0.15188359,  0.        ,        0.63934875,  0.33957595,  0.57353711,  0.        ,  0.50530213,        0.20634359,  0.7960453 ,  0.        ,  0.89859223,  0.        ,        0.        ,  0.59213233,  0.        ,  0.        ,  0.77709013,        0.        ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  1.26757169],       [ 0.16646862,  1.01947379],       [ 0.        ,  1.27522421],       [ 0.        ,  0.99225146],       [ 0.        ,  1.3843565 ],       [ 0.        ,  1.07457602],       [ 0.        ,  1.04656947],       [ 0.        ,  1.33391988],       [ 0.        ,  1.14911413],       [ 0.34912795,  1.55465198],       [ 0.        ,  0.84181923],       [ 0.40704215,  1.35242331],       [ 0.        ,  1.06494975],       [ 0.        ,  1.16068149],       [ 0.        ,  1.8090125 ],       [ 0.        ,  1.50185168],       [ 0.        ,  0.92703605],       [ 0.0373466 ,  1.10203373],       [ 0.        ,  1.12804401],       [ 0.        ,  1.01638734],       [ 0.        ,  0.86270416],       [ 0.        ,  1.59003599],       [ 0.        ,  1.75850481],       [ 0.13866487,  1.05696082],       [ 0.        ,  2.03424025],       [ 0.04859215,  1.03901505],       [ 0.        ,  1.3214798 ],       [ 0.        ,  1.21725667],       [ 0.        ,  1.38903664],       [ 0.        ,  1.51795888],       [ 0.05977833,  1.41615236],       [ 0.        ,  1.89866894],       [ 0.07424784,  1.22425461],       [ 0.        ,  1.12888372],       [ 0.08527473,  1.06800127],       [ 0.        ,  1.5211851 ],       [ 0.30237246,  1.5192163 ],       [ 0.        ,  1.36643577],       [ 0.36464787,  1.57628727],       [ 0.        ,  1.0227685 ],       [ 0.        ,  1.07228577],       [ 0.19500458,  1.11922097],       [ 0.        ,  1.38131309],       [ 0.        ,  0.9585703 ],       [ 0.24868441,  1.45374966],       [ 0.        ,  1.15865672],       [ 0.        ,  1.1501509 ],       [ 0.        ,  1.2060461 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.09636097e-03],       [  5.47000000e+02,   1.44294481e+01],       [  1.73200000e+03,   4.13214624e-01],       [  5.47700000e+03,   2.96073616e-01],       [  3.16220000e+04,   3.21065664e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   2.98974777e+01],       [  5.47000000e+02,   1.04359188e+01,   1.85850086e+01],       [  1.73200000e+03,   0.00000000e+00,   1.84388369e+00],       [  5.47700000e+03,   1.00281864e-01,   5.54427505e-01],       [  3.16220000e+04,   1.78389251e-01,   5.17426312e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]