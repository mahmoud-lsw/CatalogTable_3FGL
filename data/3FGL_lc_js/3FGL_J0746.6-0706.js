Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.        ,  1.03079402,  1.96508443,        1.82719374,  0.56253338,  0.45479301,  0.        ,  1.35501897,        2.02333593,  1.92347527,  0.        ,  1.11102426,  4.8319211 ,        0.        ,  0.        ,  0.        ,  0.        ,  2.3618381 ,        0.59903425,  0.        ,  1.90869939,  0.08046426,  0.        ,        0.        ,  3.12859178,  0.55716383,  0.        ,  1.89975452,        0.        ,  0.24121509,  0.        ,  1.39281905,  0.39564747,        1.47480488,  2.23625493,  0.        ,  0.52664459,  0.        ,        0.        ,  1.41352403,  0.61567301,  0.11518107,  4.11024904,        0.        ,  0.05470093,  0.        ]
FluxHistoryError = [[ 0.        ,  2.9320786 ],       [ 0.        ,  2.10820508],       [ 0.        ,  2.16774964],       [ 0.37276036,  1.92814946],       [ 1.00241852,  3.1221118 ],       [ 0.76120567,  3.03363252],       [ 0.        ,  3.09759617],       [ 0.        ,  3.74825338],       [ 0.        ,  2.24410987],       [ 0.4268713 ,  2.49550915],       [ 1.03621554,  3.23128939],       [ 0.82936752,  3.21570206],       [ 0.        ,  1.93783271],       [ 0.        ,  3.88479722],       [ 2.49308586,  7.15789318],       [ 0.        ,  1.79937756],       [ 0.        ,  1.84356511],       [ 0.        ,  1.9471308 ],       [ 0.        ,  2.19499087],       [ 1.17559993,  3.80385733],       [ 0.        ,  3.02350086],       [ 0.        ,  1.4073838 ],       [ 0.91451555,  3.19590282],       [ 0.        ,  3.58472742],       [ 0.        ,  2.56970859],       [ 0.        ,  2.78613734],       [ 1.71137595,  4.72443533],       [ 0.        ,  3.46397698],       [ 0.        ,  3.26038122],       [ 0.85117149,  3.13624191],       [ 0.        ,  1.80569255],       [ 0.        ,  3.18467914],       [ 0.        ,  2.52633214],       [ 0.51044768,  2.56025171],       [ 0.        ,  3.94437855],       [ 0.58760488,  2.70086336],       [ 1.14754498,  3.47356343],       [ 0.        ,  2.31182146],       [ 0.        ,  2.68889606],       [ 0.        ,  2.26861048],       [ 0.        ,  2.42004633],       [ 0.        ,  4.41767418],       [ 0.        ,  4.37867159],       [ 0.        ,  3.06277833],       [ 2.64545369,  5.81225586],       [ 0.        ,  2.48717999],       [ 0.        ,  3.18933685],       [ 0.        ,  1.8175422 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.66059302e-02],       [  5.47000000e+02,   2.22385597e+01],       [  1.73200000e+03,   4.31056976e+00],       [  5.47700000e+03,   1.10228288e+00],       [  3.16220000e+04,   9.39853415e-02]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   9.81729759e+01],       [  5.47000000e+02,   1.36589098e+01,   3.06094513e+01],       [  1.73200000e+03,   3.00202847e+00,   5.72996855e+00],       [  5.47700000e+03,   7.17388511e-01,   1.55596900e+00],       [  3.16220000e+04,   2.14770660e-02,   2.28873640e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]