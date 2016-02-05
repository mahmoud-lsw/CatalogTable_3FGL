Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  2.36055064,  1.06317139,  2.23378086,  0.        ,        0.        ,  2.07572365,  1.71073878,  3.0903585 ,  3.48425865,        0.67369908,  5.98584795,  5.19013596,  2.47785807,  4.98108006,        0.78849548,  2.65418839,  2.93840694,  3.2796905 ,  0.19138135,        2.68771696,  4.0069952 ,  1.47485507,  2.85515356,  3.33894825,        1.1498338 ,  4.94092751,  1.29257047,  2.21678519,  4.10651064,        1.22770679,  2.62892437,  4.99937296,  1.31830931,  0.        ,        3.81489253,  3.57463527,  0.        ,  0.        ,  3.05102921,        0.56011051,  2.47236466,  2.59305096,  1.44687343,  3.31089354,        0.9494614 ,  1.19476008,  1.53045809]
FluxHistoryError = [[ 0.        ,  4.43641615],       [ 0.49465835,  4.21682167],       [ 0.        ,  5.29107428],       [ 0.32127821,  4.42847729],       [ 0.        ,  3.71365595],       [ 0.        ,  3.29643297],       [ 0.09118724,  4.17841005],       [ 0.        ,  6.10416329],       [ 1.0783565 ,  5.25292206],       [ 1.54711699,  5.59192181],       [ 0.        ,  4.68155164],       [ 3.81973767,  8.05082226],       [ 3.26837111,  7.26683998],       [ 0.912251  ,  4.15326881],       [ 2.87949753,  7.2362833 ],       [ 0.        ,  3.847161  ],       [ 0.9179548 ,  4.59051037],       [ 1.3137691 ,  4.70086098],       [ 1.56269491,  5.08935928],       [ 0.        ,  4.05161656],       [ 1.03165233,  4.45969296],       [ 2.16558671,  6.07628345],       [ 0.05657351,  3.15085864],       [ 0.89220762,  4.97195339],       [ 1.58286142,  5.22275639],       [ 0.        ,  4.50527418],       [ 2.84290218,  7.17869329],       [ 0.        ,  4.16246474],       [ 0.28766906,  4.30980492],       [ 2.4669795 ,  5.80505037],       [ 0.        ,  4.75943816],       [ 0.80484605,  4.56867647],       [ 3.12356234,  7.20916271],       [ 0.        ,  4.87046742],       [ 0.        ,  2.91093063],       [ 1.77280617,  5.93533325],       [ 1.79591334,  5.45310402],       [ 0.        ,  2.97345781],       [ 0.        ,  3.39881539],       [ 1.29651928,  4.96878624],       [ 0.        ,  4.22937673],       [ 0.91564906,  4.20798397],       [ 0.66443443,  4.59597778],       [ 0.        ,  4.52729225],       [ 1.38001943,  5.36147356],       [ 0.        ,  4.35134643],       [ 0.        ,  4.23331618],       [ 0.        ,  5.682634  ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.49660751e+02],       [  5.47000000e+02,   4.25143814e+01],       [  1.73200000e+03,   3.47195363e+00],       [  5.47700000e+03,   8.31540860e-03],       [  3.16220000e+04,   3.15599900e-05]]
SpectrumError = [[  1.73000000e+02,   1.14974930e+02,   1.85295837e+02],       [  5.47000000e+02,   3.45392342e+01,   5.06566582e+01],       [  1.73200000e+03,   2.17144012e+00,   4.87104034e+00],       [  5.47700000e+03,   0.00000000e+00,   6.86758066e-01],       [  3.16220000e+04,   0.00000000e+00,   2.53141134e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]