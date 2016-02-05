Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.32973796,  0.9219107 ,  0.36084983,  0.60165262,        0.95665318,  0.54142684,  0.20340237,  0.19926246,  0.18554574,        2.04037714,  0.27810013,  0.        ,  0.55428243,  0.26253355,        0.        ,  0.32411352,  0.94024318,  1.03292716,  0.        ,        1.5617491 ,  1.93543267,  0.1105205 ,  1.74500179,  1.050493  ,        0.        ,  0.7170918 ,  0.50695223,  0.        ,  1.02195907,        0.23117422,  0.59198672,  0.86756462,  1.72437799,  0.94532996,        0.27118716,  2.26518822,  1.31686187,  0.62504601,  0.66011035,        1.74684644,  0.51812851,  0.95422882,  1.25744939,  0.22944766,        0.37185514,  0.69316077,  0.5790059 ]
FluxHistoryError = [[  0.00000000e+00,   1.55476606e+00],       [  0.00000000e+00,   1.62857443e+00],       [  3.15701663e-01,   1.70449269e+00],       [  0.00000000e+00,   1.85407493e+00],       [  2.10869312e-03,   1.39849997e+00],       [  2.96605825e-01,   1.82065916e+00],       [  9.18944776e-02,   1.22678840e+00],       [  0.00000000e+00,   1.51101670e+00],       [  0.00000000e+00,   1.84614809e+00],       [  0.00000000e+00,   1.71766561e+00],       [  1.33058429e+00,   2.88283920e+00],       [  0.00000000e+00,   1.52370310e+00],       [  0.00000000e+00,   1.09417582e+00],       [  1.21712804e-01,   1.16669917e+00],       [  7.68126994e-02,   6.06959045e-01],       [  0.00000000e+00,   1.10960889e+00],       [  0.00000000e+00,   7.93263614e-01],       [  4.48631018e-01,   1.59363008e+00],       [  6.01437867e-01,   1.58401990e+00],       [  0.00000000e+00,   1.39231992e+00],       [  8.50108922e-01,   2.42296886e+00],       [  1.29231966e+00,   2.68054938e+00],       [  0.00000000e+00,   1.45190265e+00],       [  1.16437531e+00,   2.42170238e+00],       [  4.67280924e-01,   1.76171947e+00],       [  0.00000000e+00,   1.36492324e+00],       [  2.65909553e-01,   1.30305958e+00],       [  0.00000000e+00,   1.92005259e+00],       [  0.00000000e+00,   9.30485308e-01],       [  4.28144693e-01,   1.75479448e+00],       [  0.00000000e+00,   1.36153673e+00],       [  2.25023627e-01,   1.13166785e+00],       [  3.79477352e-01,   1.47785115e+00],       [  1.07356381e+00,   2.47896910e+00],       [  4.43024814e-01,   1.60082936e+00],       [  0.00000000e+00,   1.33078632e+00],       [  1.46275651e+00,   3.20366263e+00],       [  7.99369931e-01,   1.93821216e+00],       [  8.21632743e-02,   1.35201025e+00],       [  2.11927623e-01,   1.24305177e+00],       [  1.10255313e+00,   2.49799681e+00],       [  0.00000000e+00,   1.90827346e+00],       [  4.93339926e-01,   1.52887392e+00],       [  5.88559449e-01,   2.07588530e+00],       [  0.00000000e+00,   1.51677316e+00],       [  0.00000000e+00,   1.97548282e+00],       [  2.82560140e-01,   1.26338291e+00],       [  9.05101597e-02,   1.23003650e+00]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   8.46264648e+01],       [  5.47000000e+02,   1.42907581e+01],       [  1.73200000e+03,   6.01931429e+00],       [  5.47700000e+03,   1.65003812e+00],       [  3.16220000e+04,   5.23393571e-01]]
SpectrumError = [[  1.73000000e+02,   5.82181625e+01,   1.10773560e+02],       [  5.47000000e+02,   1.05136967e+01,   1.81382065e+01],       [  1.73200000e+03,   5.05105543e+00,   7.05652094e+00],       [  5.47700000e+03,   1.26846838e+00,   2.08339024e+00],       [  3.16220000e+04,   3.47057402e-01,   7.47737765e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]