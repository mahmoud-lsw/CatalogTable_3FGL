Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.45651248,  2.69878268,  2.54231763,  1.92314577,  1.83593822,        2.05380893,  1.99715626,  2.32187676,  4.23939085,  0.        ,        0.21222439,  0.99040228,  2.461272  ,  1.57702672,  1.51226246,        0.        ,  0.        ,  0.36650091,  0.12026188,  1.09257436,        0.        ,  0.27576169,  0.90716207,  0.        ,  0.        ,        1.13380492,  1.0876298 ,  0.30816734,  1.47469628,  0.        ,        0.        ,  2.87096906,  0.        ,  0.        ,  0.        ,        1.49805605,  0.        ,  1.59341931,  1.67063701,  0.        ,        0.        ,  0.        ,  0.85596198,  1.42208135,  0.02931684,        2.48680711,  0.        ,  0.04408424]
FluxHistoryError = [[ 0.        ,  2.81993368],       [ 1.13959563,  4.34159613],       [ 1.50844717,  3.70919681],       [ 0.14233732,  4.03397369],       [ 0.62279534,  3.39096522],       [ 0.74843431,  3.77212238],       [ 0.45711708,  3.75097489],       [ 0.92372561,  3.97764874],       [ 2.90354633,  5.6298604 ],       [ 0.        ,  3.02812505],       [ 0.        ,  2.53386393],       [ 0.20983499,  2.11292744],       [ 1.47140217,  3.61120915],       [ 0.39535964,  3.05571198],       [ 0.45877898,  2.78556633],       [ 0.        ,  2.22733808],       [ 0.        ,  3.02230072],       [ 0.        ,  3.40487939],       [ 0.        ,  2.09685299],       [ 0.42191982,  1.91280556],       [ 0.        ,  1.62409735],       [ 0.        ,  1.89426956],       [ 0.08587992,  2.02288008],       [ 0.        ,  2.36880755],       [ 0.        ,  1.69597745],       [ 0.        ,  4.40827978],       [ 0.        ,  4.15294361],       [ 0.        ,  3.77219713],       [ 0.        ,  5.19709885],       [ 0.        ,  2.78300762],       [ 0.        ,  2.73504376],       [ 1.38884413,  4.66580248],       [ 0.        ,  3.13729739],       [ 0.        ,  1.68826449],       [ 0.        ,  2.91621161],       [ 0.6090343 ,  2.60404253],       [ 0.        ,  3.01082015],       [ 0.63192523,  2.83152485],       [ 0.73335558,  2.7342155 ],       [ 0.        ,  2.18010569],       [ 0.        ,  2.0781908 ],       [ 0.        ,  2.01434898],       [ 0.21987796,  1.67070162],       [ 0.61908716,  2.4746449 ],       [ 0.        ,  2.50954908],       [ 1.38737655,  3.78133821],       [ 0.        ,  2.56126475],       [ 0.        ,  2.1252548 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.66946030e+01],       [  5.47000000e+02,   1.24783478e+01],       [  1.73200000e+03,   3.51072121e+00],       [  5.47700000e+03,   6.25640452e-01],       [  3.16220000e+04,   1.80145287e-06]]
SpectrumError = [[  1.73000000e+02,   2.75862503e+01,   1.68028076e+02],       [  5.47000000e+02,   6.96955919e+00,   1.82271423e+01],       [  1.73200000e+03,   2.58075666e+00,   4.53250980e+00],       [  5.47700000e+03,   3.93318325e-01,   9.11967397e-01],       [  3.16220000e+04,   0.00000000e+00,   2.24796443e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]