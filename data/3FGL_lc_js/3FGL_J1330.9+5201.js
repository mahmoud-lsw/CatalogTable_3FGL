Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.94184351,  0.56941247,  0.        ,  1.49751699,  1.51774633,        0.67828494,  2.57509971,  1.44274366,  0.2495185 ,  0.10850695,        1.51849914,  0.        ,  0.        ,  0.78270078,  0.23493403,        1.27725148,  0.5614782 ,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  1.02074587,  0.        ,        1.57655537,  0.        ,  0.        ,  0.        ,  0.33372298,        1.11917317,  0.878699  ,  0.56044304,  0.        ,  0.42018545,        0.        ,  0.        ,  0.35983446,  0.50526398,  0.74894714,        0.79797804,  2.16446781,  0.        ,  0.        ,  0.        ,        0.14084801,  2.14426494,  0.15994953]
FluxHistoryError = [[ 0.90637052,  3.16255808],       [ 0.17615938,  1.30419421],       [ 0.        ,  1.42305255],       [ 0.44747376,  2.72714686],       [ 0.60846037,  2.60889196],       [ 0.21456286,  1.39413571],       [ 1.40112114,  3.86645126],       [ 0.54102463,  2.49627066],       [ 0.        ,  2.09599422],       [ 0.        ,  1.77037242],       [ 0.82562578,  2.38139987],       [ 0.        ,  1.65805876],       [ 0.        ,  1.47608912],       [ 0.23149753,  1.57081652],       [ 0.        ,  1.40385884],       [ 0.44471133,  2.28868055],       [ 0.        ,  2.19586819],       [ 0.        ,  1.64302886],       [ 0.        ,  1.96827531],       [ 0.        ,  1.29972959],       [ 0.        ,  1.38772225],       [ 0.        ,  1.62594211],       [ 0.        ,  1.77510738],       [ 0.34787983,  1.89219952],       [ 0.        ,  1.17681658],       [ 0.76072532,  2.60251784],       [ 0.        ,  0.99809265],       [ 0.        ,  2.03235316],       [ 0.        ,  1.62756157],       [ 0.        ,  2.07872608],       [ 0.47846454,  1.92039013],       [ 0.21832377,  1.72209787],       [ 0.02040559,  1.34077597],       [ 0.        ,  1.36666596],       [ 0.        ,  2.28228009],       [ 0.        ,  1.48175597],       [ 0.        ,  1.45454371],       [ 0.0289863 ,  0.92014956],       [ 0.        ,  2.17964166],       [ 0.25235602,  1.50088191],       [ 0.27810872,  1.46267843],       [ 1.23763323,  3.22156429],       [ 0.        ,  1.58013332],       [ 0.        ,  1.58063924],       [ 0.        ,  1.63398397],       [ 0.        ,  2.03253195],       [ 1.31956053,  3.12199569],       [ 0.        ,  1.75504743]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.43821030e+01],       [  5.47000000e+02,   7.67255974e+00],       [  1.73200000e+03,   1.85778117e+00],       [  5.47700000e+03,   1.56840995e-01],       [  3.16220000e+04,   3.85200977e-01]]
SpectrumError = [[  1.73000000e+02,   4.27552185e+01,   1.06247971e+02],       [  5.47000000e+02,   4.24119854e+00,   1.12915993e+01],       [  1.73200000e+03,   1.22179186e+00,   2.56860495e+00],       [  5.47700000e+03,   6.41520321e-03,   3.62178236e-01],       [  3.16220000e+04,   2.38818496e-01,   5.76744080e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]