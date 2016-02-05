Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.47919425,  0.4079825 ,  1.2112956 ,  0.57882524,  0.4814519 ,        0.74146646,  0.        ,  0.84183407,  0.76091516,  1.29610288,        1.09632254,  0.28345737,  0.23964424,  0.        ,  0.27335295,        0.47482166,  0.        ,  0.        ,  0.51543766,  0.68897516,        1.39226615,  0.33626816,  0.660945  ,  0.21457367,  0.13837264,        1.05379033,  0.0993856 ,  0.37463123,  0.4120473 ,  0.09406465,        0.63411647,  0.32250372,  0.43374336,  0.53186697,  0.62278503,        0.67856097,  0.11208838,  0.3446427 ,  0.26747692,  0.        ,        1.24019527,  0.1814224 ,  0.45985842,  0.27816179,  0.70485508,        0.73380125,  0.57030028,  0.        ]
FluxHistoryError = [[ 0.09053051,  1.08536065],       [ 0.12168524,  0.88329172],       [ 0.68660051,  1.8486017 ],       [ 0.18271178,  1.11931229],       [ 0.10334256,  1.04440045],       [ 0.26084203,  1.38676775],       [ 0.        ,  0.63664901],       [ 0.38771409,  1.46115518],       [ 0.30823678,  1.35945904],       [ 0.74392056,  1.9574573 ],       [ 0.62289876,  1.69929934],       [ 0.05537935,  0.67124259],       [ 0.        ,  1.21115012],       [ 0.        ,  1.08413017],       [ 0.07906288,  0.60457021],       [ 0.13259959,  0.96435523],       [ 0.        ,  0.62511438],       [ 0.        ,  0.74272275],       [ 0.18690163,  1.00917387],       [ 0.34904155,  1.13905549],       [ 0.73492843,  2.16626167],       [ 0.10320565,  0.70781171],       [ 0.21737963,  1.21217608],       [ 0.        ,  1.17505948],       [ 0.        ,  1.13044946],       [ 0.46760893,  1.76635265],       [ 0.        ,  0.88206355],       [ 0.        ,  1.5018267 ],       [ 0.15308997,  0.79355764],       [ 0.        ,  1.3611223 ],       [ 0.10904491,  1.24636078],       [ 0.03983754,  0.75813365],       [ 0.16175571,  0.84611917],       [ 0.20822549,  0.99962795],       [ 0.21085444,  1.14443898],       [ 0.19818413,  1.27774692],       [ 0.        ,  1.15316421],       [ 0.        ,  1.75156218],       [ 0.        ,  1.30291891],       [ 0.        ,  0.9626106 ],       [ 0.65190816,  1.9340198 ],       [ 0.        ,  1.1827765 ],       [ 0.16868603,  0.88138694],       [ 0.07917921,  0.63003027],       [ 0.3087391 ,  1.24205673],       [ 0.15922821,  1.40274835],       [ 0.14047104,  1.12872744],       [ 0.        ,  1.06634629]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.25329018e+01],       [  5.47000000e+02,   9.81943989e+00],       [  1.73200000e+03,   2.31663370e+00],       [  5.47700000e+03,   1.11532819e+00],       [  3.16220000e+04,   6.40389562e-01]]
SpectrumError = [[  1.73000000e+02,   3.24093399e+01,   7.32950287e+01],       [  5.47000000e+02,   6.81387997e+00,   1.29652109e+01],       [  1.73200000e+03,   1.69376147e+00,   3.00608873e+00],       [  5.47700000e+03,   8.28949213e-01,   1.44940186e+00],       [  3.16220000e+04,   4.53943253e-01,   8.68146598e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]