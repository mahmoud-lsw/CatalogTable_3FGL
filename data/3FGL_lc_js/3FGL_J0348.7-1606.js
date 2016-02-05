Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 3.31700468,  2.53314018,  2.34071827,  2.30003953,  0.        ,        0.5240432 ,  2.3836267 ,  0.        ,  0.30947098,  3.29143572,        0.91534364,  0.10573656,  1.27751172,  0.        ,  0.        ,        0.9395113 ,  0.72814304,  0.        ,  0.        ,  1.00033617,        1.44555402,  2.06020641,  1.62865901,  1.1203562 ,  0.5916701 ,        1.46798575,  2.02616644,  3.78449655,  0.        ,  2.88351417,        2.07281852,  0.        ,  3.88259482,  0.67948335,  2.38118291,        3.13694382,  1.28871024,  0.55237961,  4.17849779,  4.15159273,        0.        ,  2.38370061,  1.85386324,  4.98470831,  3.70943022,        2.02160096,  3.47788072,  3.74180365]
FluxHistoryError = [[ 2.05855083,  4.7321558 ],       [ 1.28528416,  3.91250229],       [ 1.03688991,  3.79871559],       [ 1.01941693,  3.70550752],       [ 0.        ,  2.33115292],       [ 0.        ,  2.44452357],       [ 1.28851354,  3.64788198],       [ 0.        ,  2.34760594],       [ 0.        ,  2.08198556],       [ 2.0134418 ,  4.77581072],       [ 0.        ,  2.99591267],       [ 0.        ,  2.87571222],       [ 0.55071789,  2.2205615 ],       [ 0.        ,  2.4139142 ],       [ 0.        ,  2.83534193],       [ 0.        ,  3.91698885],       [ 0.        ,  3.95200616],       [ 0.        ,  1.45600116],       [ 0.        ,  3.11451888],       [ 0.        ,  3.53193593],       [ 0.10256779,  3.1166954 ],       [ 0.99552763,  3.35584068],       [ 0.41150653,  3.10521936],       [ 0.01965082,  2.62393856],       [ 0.        ,  2.72103602],       [ 0.03388512,  3.12090969],       [ 1.08292174,  3.14773798],       [ 2.15759563,  5.59118938],       [ 0.        ,  2.49034882],       [ 1.65050983,  4.25771475],       [ 0.93713164,  3.44859123],       [ 0.        ,  2.18201256],       [ 2.3013835 ,  5.67513704],       [ 0.        ,  3.20436639],       [ 1.23107433,  3.7373395 ],       [ 1.86613452,  4.55996609],       [ 0.21894157,  2.54477501],       [ 0.        ,  4.16137886],       [ 2.85500813,  5.63553905],       [ 2.45328236,  6.07890034],       [ 0.        ,  2.06221151],       [ 1.01351249,  4.02266741],       [ 0.89148432,  3.05754375],       [ 3.50916338,  6.61618614],       [ 2.18908644,  5.43609524],       [ 1.05436862,  3.1585989 ],       [ 1.69723272,  5.4739666 ],       [ 2.53712273,  5.07028532]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.00092148e+02],       [  5.47000000e+02,   3.20710793e+01],       [  1.73200000e+03,   4.90554428e+00],       [  5.47700000e+03,   6.81301475e-01],       [  3.16220000e+04,   1.37046650e-01]]
SpectrumError = [[  1.73000000e+02,   7.06631165e+01,   1.26718857e+02],       [  5.47000000e+02,   2.71232738e+01,   3.71751595e+01],       [  1.73200000e+03,   3.89547896e+00,   5.99499226e+00],       [  5.47700000e+03,   4.15649772e-01,   1.01586902e+00],       [  3.16220000e+04,   4.56461683e-02,   2.83736050e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]