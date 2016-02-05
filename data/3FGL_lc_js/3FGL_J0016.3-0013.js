Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  4.79230738,   1.29097664,   3.13077855,   1.23529112,         2.41091371,   4.10753345,   1.43324125,   6.95610332,         1.60666537,   1.70376742,   0.        ,   1.31105709,         1.54977703,   0.68784052,   0.        ,   4.07733345,         0.        ,   4.4822402 ,   7.87331676,   2.38993382,         1.86536598,   2.39298797,   1.66171634,   0.97537643,         2.37932205,   0.        ,   1.13174915,   0.        ,         1.6449368 ,   0.        ,   0.39708361,   0.        ,         0.4806422 ,   1.10618436,   1.78325105,   2.46447706,         0.        ,   1.08225608,   1.98684037,   0.18694684,         1.88010848,   6.47850752,   9.54753208,  10.97254086,        13.95953465,   4.46967602,   4.57229757,   6.15111113]
FluxHistoryError = [[  3.34326363e+00,   6.34833670e+00],       [  3.81344199e-01,   2.44465256e+00],       [  1.81574488e+00,   4.57391787e+00],       [  1.16437554e-01,   2.52704096e+00],       [  1.01694715e+00,   3.93139148e+00],       [  2.76769018e+00,   5.55175447e+00],       [  1.14178658e-03,   3.01793814e+00],       [  5.07701015e+00,   8.98643208e+00],       [  3.23028326e-01,   3.08514118e+00],       [  3.97910953e-01,   3.20517683e+00],       [  0.00000000e+00,   2.31089115e+00],       [  9.06697512e-02,   2.76792312e+00],       [  3.51617694e-01,   2.90951252e+00],       [  0.00000000e+00,   4.03754836e+00],       [  0.00000000e+00,   2.68708277e+00],       [  2.36013889e+00,   5.95685434e+00],       [  0.00000000e+00,   2.86666656e+00],       [  2.90918851e+00,   6.17698431e+00],       [  5.70640707e+00,   1.01713905e+01],       [  9.64588761e-01,   4.13888073e+00],       [  4.91060853e-01,   3.49464750e+00],       [  9.96767879e-01,   3.96375442e+00],       [  8.81023407e-02,   3.47292018e+00],       [  0.00000000e+00,   4.12038857e+00],       [  8.11417460e-01,   4.14333820e+00],       [  0.00000000e+00,   2.71158051e+00],       [  0.00000000e+00,   4.08209538e+00],       [  0.00000000e+00,   3.49119306e+00],       [  4.21871662e-01,   3.04172850e+00],       [  0.00000000e+00,   2.99305940e+00],       [  0.00000000e+00,   3.49470863e+00],       [  0.00000000e+00,   4.11608505e+00],       [  0.00000000e+00,   4.37573445e+00],       [  1.47893429e-02,   2.37978506e+00],       [  3.58660340e-01,   3.37750626e+00],       [  1.22002625e+00,   3.90642643e+00],       [  0.00000000e+00,   2.11896133e+00],       [  0.00000000e+00,   4.51387763e+00],       [  7.52302170e-01,   3.49008989e+00],       [  0.00000000e+00,   3.67820069e+00],       [  6.46924734e-01,   3.35836840e+00],       [  4.48416901e+00,   8.68739319e+00],       [  7.65691423e+00,   1.15737114e+01],       [  8.58687496e+00,   1.35505066e+01],       [  1.17025223e+01,   1.63608627e+01],       [  2.89128470e+00,   6.19194937e+00],       [  2.99540091e+00,   6.33525467e+00],       [  4.49868870e+00,   7.95309877e+00]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.91125595e+02],       [  5.47000000e+02,   4.53012466e+01],       [  1.73200000e+03,   5.17114878e+00],       [  5.47700000e+03,   2.47150645e-01],       [  3.16220000e+04,   1.17417447e-01]]
SpectrumError = [[  1.73000000e+02,   1.61287079e+02,   2.22260864e+02],       [  5.47000000e+02,   3.99829292e+01,   5.07684402e+01],       [  1.73200000e+03,   4.15616035e+00,   6.26774979e+00],       [  5.47700000e+03,   3.66162211e-02,   5.30597866e-01],       [  3.16220000e+04,   3.23716179e-02,   2.69318670e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]