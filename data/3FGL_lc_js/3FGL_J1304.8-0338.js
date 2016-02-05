Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.32183585,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  2.95920324,  4.75867605,        0.76855302,  4.63426828,  1.47249472,  0.68516612,  0.86061984,        1.22357976,  0.        ,  0.0528663 ,  0.        ,  0.        ,        0.69255745,  0.        ,  0.        ,  0.        ,  1.27488708,        0.85028964,  1.78942811,  0.43161759,  0.76264203,  0.18631797,        1.03524232,  1.62526333,  2.43574405,  0.22427987,  0.12617782,        0.        ,  0.        ,  0.        ,  1.24024165,  0.        ,        0.        ,  0.04467516,  1.32254791,  0.        ,  1.17208719,        0.94271064,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  2.30127072],       [ 0.        ,  1.07296574],       [ 0.        ,  2.4806076 ],       [ 0.        ,  2.3670547 ],       [ 0.        ,  1.84271801],       [ 0.        ,  1.84280455],       [ 0.        ,  1.15333629],       [ 0.        ,  2.29399157],       [ 1.83674467,  4.23430347],       [ 3.46931553,  6.18186903],       [ 0.11844951,  1.60521865],       [ 3.45498109,  5.93156052],       [ 0.55886614,  2.61087418],       [ 0.        ,  3.19456029],       [ 0.        ,  4.37183458],       [ 0.12300515,  2.58788395],       [ 0.        ,  2.78337574],       [ 0.        ,  3.41105087],       [ 0.        ,  2.08768535],       [ 0.        ,  2.64340878],       [ 0.        ,  2.95596492],       [ 0.        ,  2.27438283],       [ 0.        ,  2.33400059],       [ 0.        ,  2.13423491],       [ 0.28656363,  2.59545994],       [ 0.        ,  4.3411296 ],       [ 0.53540289,  3.3218317 ],       [ 0.        ,  2.85048494],       [ 0.        ,  3.94918668],       [ 0.        ,  2.55425982],       [ 0.25133544,  2.14168406],       [ 0.61614299,  3.01600194],       [ 1.13649392,  3.97456694],       [ 0.        ,  3.08236741],       [ 0.        ,  2.40413049],       [ 0.        ,  2.85303354],       [ 0.        ,  1.66301024],       [ 0.        ,  2.11618352],       [ 0.        ,  4.17716396],       [ 0.        ,  2.18630815],       [ 0.        ,  1.31326902],       [ 0.        ,  1.66472738],       [ 0.41551042,  2.50938153],       [ 0.        ,  1.82397819],       [ 0.18012744,  2.42117906],       [ 0.        ,  3.50483155],       [ 0.        ,  1.96484542],       [ 0.        ,  2.5517056 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.29452133e+01],       [  5.47000000e+02,   6.60119104e+00],       [  1.73200000e+03,   2.61699343e+00],       [  5.47700000e+03,   3.76823753e-01],       [  3.16220000e+04,   2.49348998e-01]]
SpectrumError = [[  1.73000000e+02,   2.36964836e+01,   1.02141220e+02],       [  5.47000000e+02,   1.96958494e+00,   1.14830933e+01],       [  1.73200000e+03,   1.78996122e+00,   3.61752224e+00],       [  5.47700000e+03,   1.30533829e-01,   6.93809628e-01],       [  3.16220000e+04,   1.11134142e-01,   4.52121168e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]