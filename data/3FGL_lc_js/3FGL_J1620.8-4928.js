Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 23.52970886,  19.31531334,  22.1390419 ,  15.52860928,        23.71775055,  19.45596695,  25.13332367,  17.16157913,        24.39977264,  20.28441048,  21.36328506,  18.76367569,        21.97745323,  19.49189758,  18.14640808,  28.52921677,        21.82594299,  21.4243412 ,  28.98118782,  14.81994438,        20.48372459,  27.07737732,  20.86125183,  19.02142334,        22.92103386,  20.33729553,  19.42701149,  19.28027534,        23.39125443,  22.03343582,  19.36795616,  23.28439331,        22.70882225,  17.73190498,  25.96430016,  21.96837807,        17.74703217,  20.93013954,  24.03720856,  18.23495483,        21.52598381,  25.49349976,  17.38778114,  17.102911  ,        20.55129051,  18.35043144,  24.07045746,  25.11226654]
FluxHistoryError = [[ 19.48779297,  27.76699638],       [ 15.4408226 ,  23.39993095],       [ 18.45793152,  26.02471733],       [ 11.8500061 ,  19.40827942],       [ 19.90918922,  27.74926376],       [ 15.70940399,  23.43447876],       [ 21.13557625,  29.34034729],       [ 13.49652481,  21.13502121],       [ 20.30294991,  28.68358994],       [ 16.53985405,  24.26638794],       [ 17.38670349,  25.4621563 ],       [ 15.1940012 ,  22.56214714],       [ 18.1566391 ,  26.00721741],       [ 16.14066887,  22.997612  ],       [ 14.46014786,  21.96993637],       [ 24.49189758,  32.73796463],       [ 18.47581291,  25.31494331],       [ 17.47151184,  25.58849525],       [ 25.70041466,  32.3671608 ],       [ 11.40771103,  18.46017456],       [ 16.96471214,  24.19160461],       [ 23.37251282,  30.98788643],       [ 17.14269066,  24.7626915 ],       [ 15.81069946,  22.36922455],       [ 18.97282028,  27.05554962],       [ 16.84852409,  24.01649475],       [ 15.41086197,  23.68040466],       [ 15.82152557,  22.92152596],       [ 19.88482094,  27.09947586],       [ 18.44531822,  25.77600288],       [ 16.13075256,  22.79285812],       [ 19.1482811 ,  27.63953209],       [ 18.9248867 ,  26.73831177],       [ 13.83281898,  21.84385872],       [ 22.35680389,  29.75872231],       [ 18.46986389,  25.53171539],       [ 14.20765781,  21.4503746 ],       [ 17.29171944,  24.92026138],       [ 19.86574554,  28.48118591],       [ 15.28063393,  21.34691429],       [ 17.37774467,  25.94929886],       [ 21.84016037,  29.2586689 ],       [ 13.96222973,  20.87354279],       [ 13.54082298,  20.9154911 ],       [ 17.23367119,  24.02437401],       [ 14.42383003,  22.60278702],       [ 20.64569092,  27.64008713],       [ 21.09212494,  29.38824081]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.17246521e+02],       [  5.47000000e+02,   5.69369202e+02],       [  1.73200000e+03,   1.96021759e+02],       [  5.47700000e+03,   5.10507622e+01],       [  3.16220000e+04,   3.60156083e+00]]
SpectrumError = [[  1.73000000e+02,   6.16100098e+02,   1.22710535e+03],       [  5.47000000e+02,   5.31229187e+02,   6.07509216e+02],       [  1.73200000e+03,   1.88110779e+02,   2.03932739e+02],       [  5.47700000e+03,   4.84177666e+01,   5.36837578e+01],       [  3.16220000e+04,   3.01436377e+00,   4.21388817e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]