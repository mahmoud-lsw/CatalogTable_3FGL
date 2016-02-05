Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  0.18008645,   0.        ,   1.44564188,   7.39855671,         3.17720795,   2.36165118,   5.38116598,   8.29328251,         4.90433502,   7.03839111,   2.42767763,   4.84947729,         6.84590387,   3.44044161,   7.04891014,  10.97631741,        32.53010178,   7.03914499,   2.37438655,   2.04909468,         9.52924538,   9.80257225,   3.01626205,  10.23690605,        13.55690098,   3.50388908,   3.04839396,  10.48080444,         9.5225296 ,   5.63468981,   9.60924244,   9.60871601,         5.78542233,   4.63989258,   6.95561886,   4.48192167,        10.47106838,   8.13620281,   5.98465204,   8.02818203,         0.        ,   1.13439739,   4.3574667 ,   9.13748837,         5.80129242,   7.23349619,   3.19407582,   2.1632452 ]
FluxHistoryError = [[  0.00000000e+00,   3.72056992e+00],       [  0.00000000e+00,   2.56878066e+00],       [  2.65336037e-02,   2.99365044e+00],       [  5.76378250e+00,   9.14015675e+00],       [  1.32758176e+00,   5.11676455e+00],       [  9.25440311e-01,   3.94752550e+00],       [  3.53985167e+00,   7.25933552e+00],       [  6.23509836e+00,   1.04985256e+01],       [  3.28559494e+00,   6.67355585e+00],       [  4.93238068e+00,   9.29478455e+00],       [  9.26275373e-01,   4.04374123e+00],       [  3.07798529e+00,   6.73477411e+00],       [  4.99986601e+00,   8.81166649e+00],       [  1.86027169e+00,   5.20739460e+00],       [  4.74206018e+00,   9.48330116e+00],       [  8.36842346e+00,   1.37006073e+01],       [  2.95906372e+01,   3.54695663e+01],       [  5.04507208e+00,   9.17451096e+00],       [  7.91465163e-01,   4.11970854e+00],       [  5.25447845e-01,   3.80231524e+00],       [  7.41113186e+00,   1.17990999e+01],       [  7.52035141e+00,   1.22201138e+01],       [  1.16157830e+00,   5.04735613e+00],       [  8.14859009e+00,   1.24525328e+01],       [  1.09684038e+01,   1.62970924e+01],       [  1.86794066e+00,   5.26574707e+00],       [  1.12816572e+00,   5.20200062e+00],       [  8.37568283e+00,   1.27127457e+01],       [  7.30261850e+00,   1.18814678e+01],       [  3.67541552e+00,   7.68736362e+00],       [  7.56219673e+00,   1.17827358e+01],       [  7.32523537e+00,   1.20617628e+01],       [  3.88268280e+00,   7.80963707e+00],       [  2.58477116e+00,   7.03776407e+00],       [  5.02382660e+00,   9.01505947e+00],       [  2.71189451e+00,   6.37779379e+00],       [  8.44452763e+00,   1.25852337e+01],       [  6.09021378e+00,   1.03497009e+01],       [  3.87429714e+00,   8.25890732e+00],       [  6.08809566e+00,   1.00914536e+01],       [  0.00000000e+00,   3.72459126e+00],       [  0.00000000e+00,   3.94097030e+00],       [  2.49357653e+00,   6.42615509e+00],       [  6.89553928e+00,   1.15062056e+01],       [  3.85095024e+00,   7.89691925e+00],       [  4.76871252e+00,   9.89865017e+00],       [  1.36287808e+00,   5.18478298e+00],       [  5.57203174e-01,   3.92775774e+00]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.93740234e+02],       [  5.47000000e+02,   1.06013176e+02],       [  1.73200000e+03,   1.26193514e+01],       [  5.47700000e+03,   1.79582524e+00],       [  3.16220000e+04,   8.24156523e-05]]
SpectrumError = [[  1.73000000e+02,   4.42316742e+02,   5.45675049e+02],       [  5.47000000e+02,   9.79700012e+01,   1.14056351e+02],       [  1.73200000e+03,   1.10608549e+01,   1.42542915e+01],       [  5.47700000e+03,   1.35880589e+00,   2.29204750e+00],       [  3.16220000e+04,   0.00000000e+00,   2.43971420e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]