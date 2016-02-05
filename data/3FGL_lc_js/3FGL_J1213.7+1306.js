Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.75490308,  1.5394932 ,  0.        ,  0.90983415,  0.98801476,        1.23330343,  0.17283589,  3.23927021,  2.54838991,  1.84058368,        0.90262204,  0.71940678,  3.30213833,  4.06214523,  1.43134785,        1.95276308,  0.50783128,  2.83445644,  0.        ,  1.28018022,        0.        ,  4.95239067,  2.3352437 ,  3.96568871,  1.46681142,        1.37608099,  2.6315763 ,  2.71261692,  2.08888125,  1.92391121,        0.71644539,  1.08964336,  0.        ,  2.8237381 ,  0.        ,        0.49956971,  0.        ,  1.37712264,  2.30356216,  2.46324611,        0.30982301,  2.27800179,  3.55202699,  0.        ,  2.14678621,        2.58383751,  0.        ,  1.68131125]
FluxHistoryError = [[  1.47634733e+00,   4.18749428e+00],       [  6.65135205e-01,   2.62618899e+00],       [  0.00000000e+00,   2.39823627e+00],       [  0.00000000e+00,   3.49771118e+00],       [  1.20784402e-01,   2.01231575e+00],       [  5.87297678e-02,   2.60259867e+00],       [  0.00000000e+00,   2.23164731e+00],       [  1.91939092e+00,   4.74261761e+00],       [  1.27381706e+00,   3.92371035e+00],       [  8.42524648e-01,   3.01187634e+00],       [  2.76941061e-03,   1.97415972e+00],       [  0.00000000e+00,   2.97734421e+00],       [  2.02605796e+00,   4.72484922e+00],       [  2.21068525e+00,   6.11154747e+00],       [  0.00000000e+00,   4.68786621e+00],       [  5.65851688e-01,   3.59247971e+00],       [  0.00000000e+00,   3.43503731e+00],       [  1.48312998e+00,   4.41618824e+00],       [  0.00000000e+00,   2.14579892e+00],       [  0.00000000e+00,   4.35944891e+00],       [  0.00000000e+00,   2.16029286e+00],       [  3.32977772e+00,   6.71676922e+00],       [  9.14969206e-01,   3.91366863e+00],       [  2.40386200e+00,   5.66212845e+00],       [  4.90885079e-01,   2.86938286e+00],       [  1.98430419e-01,   2.95093274e+00],       [  1.35165799e+00,   4.13144684e+00],       [  1.28780532e+00,   4.40378046e+00],       [  8.31148982e-01,   3.51191998e+00],       [  7.71615982e-01,   3.29992914e+00],       [  0.00000000e+00,   3.65915054e+00],       [  1.09198391e-01,   2.44539666e+00],       [  0.00000000e+00,   2.89535689e+00],       [  1.40440440e+00,   4.38947964e+00],       [  0.00000000e+00,   3.28370643e+00],       [  0.00000000e+00,   3.13571674e+00],       [  0.00000000e+00,   2.95028758e+00],       [  0.00000000e+00,   4.73498821e+00],       [  1.03113008e+00,   3.79903555e+00],       [  1.15720117e+00,   3.93120861e+00],       [  0.00000000e+00,   2.85847875e+00],       [  7.94823170e-01,   3.83796024e+00],       [  2.14312840e+00,   5.18331671e+00],       [  0.00000000e+00,   3.17230940e+00],       [  7.17260838e-01,   3.78128672e+00],       [  1.35650992e+00,   4.03421879e+00],       [  0.00000000e+00,   3.53402495e+00],       [  1.93780780e-01,   3.24327517e+00]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.10775177e+02],       [  5.47000000e+02,   2.65851421e+01],       [  1.73200000e+03,   5.00177336e+00],       [  5.47700000e+03,   4.22878325e-01],       [  3.16220000e+04,   2.22377421e-04]]
SpectrumError = [[  1.73000000e+02,   7.76043701e+01,   1.44459976e+02],       [  5.47000000e+02,   2.16285210e+01,   3.14852581e+01],       [  1.73200000e+03,   3.97299290e+00,   6.09571886e+00],       [  5.47700000e+03,   1.96293667e-01,   7.19147563e-01],       [  3.16220000e+04,   0.00000000e+00,   3.45374517e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]