Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.20326102,  1.08703279,  1.52124619,  1.40304482,  1.45474994,        0.64246851,  1.10283184,  0.95147002,  1.32541895,  0.31645277,        0.        ,  0.08438789,  0.10516481,  0.        ,  0.22429694,        0.        ,  0.36003792,  0.07639119,  0.38306731,  0.16619985,        0.        ,  0.        ,  0.00859836,  0.48901686,  0.44942898,        0.78540701,  0.        ,  0.16427228,  1.22630286,  0.        ,        0.        ,  0.58519298,  0.        ,  0.46534976,  0.05005382,        0.77090031,  0.        ,  0.26516184,  0.81372184,  1.17159104,        0.        ,  0.52660692,  0.79124254,  0.13597545,  0.50225222,        0.16894008,  0.38290176,  0.        ]
FluxHistoryError = [[ 0.52320415,  2.04254842],       [ 0.48375386,  1.83842206],       [ 0.75488436,  2.34284782],       [ 0.69600099,  2.24847722],       [ 0.70871717,  2.28007674],       [ 0.00283474,  1.42536187],       [ 0.44945037,  1.92096686],       [ 0.3292498 ,  1.74183095],       [ 0.66246563,  2.15954566],       [ 0.        ,  1.64724556],       [ 0.        ,  1.25737298],       [ 0.        ,  1.47086441],       [ 0.        ,  1.77503853],       [ 0.        ,  1.32914305],       [ 0.        ,  1.54394902],       [ 0.        ,  1.20715201],       [ 0.        ,  1.86032617],       [ 0.        ,  1.4587023 ],       [ 0.10391235,  0.85815477],       [ 0.        ,  1.16539554],       [ 0.        ,  1.12121284],       [ 0.        ,  1.44353354],       [ 0.        ,  0.99602238],       [ 0.        ,  2.04265758],       [ 0.07242304,  0.95896322],       [ 0.16127032,  1.56978726],       [ 0.        ,  1.02665508],       [ 0.        ,  1.28169581],       [ 0.5156666 ,  2.06203723],       [ 0.        ,  0.69425613],       [ 0.        ,  1.41848445],       [ 0.07259202,  1.23192251],       [ 0.        ,  1.38982451],       [ 0.15291914,  0.96282744],       [ 0.        ,  1.67093978],       [ 0.38752228,  1.28100729],       [ 0.        ,  0.86674803],       [ 0.        ,  1.58163938],       [ 0.30491316,  1.47562575],       [ 0.38903087,  2.06853628],       [ 0.        ,  0.64553308],       [ 0.18584284,  1.05079365],       [ 0.31488189,  1.39963126],       [ 0.        ,  1.29900083],       [ 0.10651904,  1.11759067],       [ 0.        ,  1.25655295],       [ 0.04150802,  0.92635918],       [ 0.        ,  1.10018349]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.54205933e+01],       [  5.47000000e+02,   4.60149384e+00],       [  1.73200000e+03,   2.23267269e+00],       [  5.47700000e+03,   4.58576500e-01],       [  3.16220000e+04,   2.38141060e-01]]
SpectrumError = [[  1.73000000e+02,   4.93529358e+01,   1.01847084e+02],       [  5.47000000e+02,   1.95840311e+00,   7.41477203e+00],       [  1.73200000e+03,   1.59067369e+00,   2.94644356e+00],       [  5.47700000e+03,   2.58532465e-01,   7.05676496e-01],       [  3.16220000e+04,   1.28387049e-01,   3.90980929e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]