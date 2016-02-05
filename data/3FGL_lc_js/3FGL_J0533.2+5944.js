Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  1.17912436,  1.06131983,  0.14018808,  0.5465436 ,        0.        ,  1.57791114,  3.65459371,  0.        ,  1.26833427,        0.        ,  0.        ,  0.35284552,  2.48481917,  3.6130445 ,        1.76055312,  1.04896498,  1.03764129,  1.41760325,  1.60333574,        1.24164832,  1.86975551,  0.        ,  3.9526701 ,  2.5107677 ,        0.68944526,  0.        ,  1.41083479,  0.        ,  0.22220547,        4.18842173,  0.30970749,  2.39275312,  3.15390921,  2.66279507,        0.        ,  0.71840167,  3.36711812,  1.24252987,  0.8509832 ,        3.41625261,  2.16410232,  0.24138626,  0.        ,  0.32313198,        7.51397896,  1.56879914,  1.65999413]
FluxHistoryError = [[ 0.        ,  2.10465503],       [ 0.        ,  4.22215724],       [ 0.        ,  5.35648108],       [ 0.        ,  3.60862528],       [ 0.        ,  4.57255316],       [ 0.        ,  3.35444379],       [ 0.        ,  5.23409224],       [ 1.48038793,  5.99728155],       [ 0.        ,  2.37233353],       [ 0.        ,  5.20670116],       [ 0.        ,  1.90944135],       [ 0.        ,  2.77877259],       [ 0.        ,  3.82994494],       [ 0.92737699,  4.19133091],       [ 1.87453306,  5.46208191],       [ 0.10183263,  3.56422901],       [ 0.        ,  4.55540109],       [ 0.        ,  4.1987114 ],       [ 0.        ,  4.52648354],       [ 0.        ,  4.80999696],       [ 0.        ,  4.27920759],       [ 0.28663135,  3.56798935],       [ 0.        ,  2.82131982],       [ 2.23339796,  5.76950216],       [ 0.79761875,  4.32908773],       [ 0.        ,  3.46752858],       [ 0.        ,  2.36972356],       [ 0.        ,  4.43492818],       [ 0.        ,  3.16559267],       [ 0.        ,  3.79680641],       [ 2.39189482,  6.08776283],       [ 0.        ,  3.87469801],       [ 0.88405275,  4.06241131],       [ 1.65887821,  4.81810713],       [ 1.13233018,  4.32419634],       [ 0.        ,  2.94063807],       [ 0.        ,  3.63479424],       [ 1.66754127,  5.18870354],       [ 0.        ,  4.54887891],       [ 0.        ,  3.99083453],       [ 1.49998772,  5.41736889],       [ 0.49218905,  3.92800474],       [ 0.        ,  3.46411833],       [ 0.        ,  3.03226423],       [ 0.        ,  3.31366152],       [ 5.46602535,  9.64259529],       [ 0.12091911,  3.14083624],       [ 0.        ,  5.02182508]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.33714485e+01],       [  5.47000000e+02,   3.29322205e+01],       [  1.73200000e+03,   4.67697906e+00],       [  5.47700000e+03,   1.20032768e-04],       [  3.16220000e+04,   2.74009708e-05]]
SpectrumError = [[  1.73000000e+02,   2.56629868e+01,   1.04741081e+02],       [  5.47000000e+02,   2.65737591e+01,   3.94119720e+01],       [  1.73200000e+03,   3.48133063e+00,   5.93523073e+00],       [  5.47700000e+03,   0.00000000e+00,   5.07638682e-01],       [  3.16220000e+04,   0.00000000e+00,   1.82896791e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]