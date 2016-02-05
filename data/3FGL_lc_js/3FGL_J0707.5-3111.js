Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.17295051,  3.47972012,  0.42532715,  1.6691494 ,  6.57979345,        1.5528512 ,  0.        ,  0.        ,  2.52965665,  0.        ,        2.76550651,  0.        ,  2.8724997 ,  1.15814698,  1.27568245,        0.        ,  1.66310811,  2.52346969,  3.46020412,  0.        ,        0.        ,  1.80371988,  5.60787916,  2.12504029,  2.07327199,        0.        ,  1.01559651,  0.93424147,  0.53982651,  2.06264687,        4.59756565,  3.53445673,  2.13548207,  1.91746426,  3.19644403,        0.        ,  0.        ,  0.        ,  0.56452036,  0.        ,        0.83840358,  4.10063219,  0.        ,  3.1021862 ,  3.28912783,        1.36779499,  0.33975923,  0.225411  ]
FluxHistoryError = [[ 0.        ,  5.51618695],       [ 1.84920967,  5.32363033],       [ 0.        ,  4.56887802],       [ 0.        ,  5.10537887],       [ 4.36808872,  8.86938572],       [ 0.        ,  5.13331199],       [ 0.        ,  2.73163176],       [ 0.        ,  4.24907303],       [ 0.82592797,  4.3148613 ],       [ 0.        ,  4.08887625],       [ 1.16339433,  4.5650239 ],       [ 0.        ,  3.40691352],       [ 0.92572117,  4.99344683],       [ 0.        ,  4.77579439],       [ 0.        ,  5.81767225],       [ 0.        ,  3.51120353],       [ 0.        ,  6.61163068],       [ 1.08734179,  4.13345718],       [ 1.20986819,  5.90018225],       [ 0.        ,  3.57963037],       [ 0.        ,  3.26625013],       [ 0.        ,  5.71712434],       [ 3.87488222,  7.35376978],       [ 0.        ,  6.8289907 ],       [ 0.29091549,  3.78002691],       [ 0.        ,  3.82381868],       [ 0.        ,  4.61055768],       [ 0.        ,  4.47413439],       [ 0.        ,  5.36459982],       [ 0.36567342,  3.76039529],       [ 2.34222031,  7.29163504],       [ 1.71184564,  5.51861572],       [ 0.        ,  6.47288489],       [ 0.        ,  5.74915338],       [ 1.43114293,  5.10771942],       [ 0.        ,  3.71859479],       [ 0.        ,  3.39424133],       [ 0.        ,  3.14986086],       [ 0.        ,  3.91042304],       [ 0.        ,  3.65019584],       [ 0.        ,  4.65226471],       [ 2.39914536,  6.08099842],       [ 0.        ,  4.03398848],       [ 1.49452126,  4.86978722],       [ 0.60295343,  6.19623232],       [ 0.        ,  4.74875975],       [ 0.        ,  5.12629259],       [ 0.        ,  4.4429279 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.21347412e+02],       [  5.47000000e+02,   2.13639889e+01],       [  1.73200000e+03,   2.42009974e+00],       [  5.47700000e+03,   3.62060457e-01],       [  3.16220000e+04,   1.49556965e-01]]
SpectrumError = [[  1.73000000e+02,   8.72727203e+01,   1.56082748e+02],       [  5.47000000e+02,   1.50927906e+01,   2.77809467e+01],       [  1.73200000e+03,   1.26112115e+00,   3.67249966e+00],       [  5.47700000e+03,   5.78566790e-02,   7.37314105e-01],       [  3.16220000e+04,   5.64270765e-02,   2.97570527e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]