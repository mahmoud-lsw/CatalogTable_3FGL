Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.7684145 ,  0.        ,  0.43645647,  0.        ,        0.        ,  0.26291192,  1.19783318,  0.24548708,  0.        ,        0.35570255,  0.        ,  1.00481844,  0.        ,  0.18869296,        0.        ,  0.02601646,  0.        ,  0.07737999,  0.22760536,        0.72407877,  0.        ,  0.        ,  0.19444633,  0.        ,        0.55123359,  0.23014259,  0.45446438,  0.        ,  0.44945776,        0.        ,  0.7525605 ,  0.        ,  0.59650618,  1.49474478,        0.17575917,  0.7751745 ,  1.02058554,  1.05153406,  0.        ,        0.17696413,  0.44600984,  0.17271855,  0.37869424,  0.        ,        0.44655067,  1.23065841,  0.        ]
FluxHistoryError = [[ 0.        ,  1.06181431],       [ 0.26302159,  1.49303472],       [ 0.        ,  1.77869475],       [ 0.        ,  1.78337315],       [ 0.        ,  1.47345519],       [ 0.        ,  1.07821178],       [ 0.        ,  1.61542892],       [ 0.55067188,  2.07220531],       [ 0.        ,  1.86962138],       [ 0.        ,  1.26948822],       [ 0.        ,  1.73298064],       [ 0.        ,  1.47408593],       [ 0.45442396,  1.74003208],       [ 0.        ,  0.96979457],       [ 0.        ,  1.32597914],       [ 0.        ,  1.11874843],       [ 0.        ,  1.11006688],       [ 0.        ,  0.81963867],       [ 0.        ,  1.73268346],       [ 0.        ,  1.27001573],       [ 0.23916674,  1.38882101],       [ 0.        ,  1.19792879],       [ 0.        ,  0.92289972],       [ 0.        ,  1.41220796],       [ 0.        ,  0.97694796],       [ 0.11475617,  1.21397734],       [ 0.        ,  1.32052422],       [ 0.04586947,  1.10220885],       [ 0.        ,  1.23054254],       [ 0.0219866 ,  1.04235315],       [ 0.        ,  1.45358717],       [ 0.31300756,  1.36603189],       [ 0.        ,  1.30749524],       [ 0.22313192,  1.10297847],       [ 0.91009063,  2.2085495 ],       [ 0.        ,  1.58051786],       [ 0.28534064,  1.42172873],       [ 0.31299728,  1.93227482],       [ 0.52273244,  1.74274254],       [ 0.        ,  1.403736  ],       [ 0.        ,  1.29066059],       [ 0.10054374,  0.98444116],       [ 0.        ,  1.38238671],       [ 0.        ,  1.89459068],       [ 0.        ,  0.94850832],       [ 0.        ,  1.92094904],       [ 0.6012305 ,  1.98918152],       [ 0.        ,  0.98101759]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.24381790e+01],       [  5.47000000e+02,   3.91962433e+00],       [  1.73200000e+03,   1.45815957e+00],       [  5.47700000e+03,   8.46742928e-01],       [  3.16220000e+04,   2.63601154e-01]]
SpectrumError = [[  1.73000000e+02,   3.73637733e+01,   1.08144783e+02],       [  5.47000000e+02,   3.51648808e-01,   7.60920238e+00],       [  1.73200000e+03,   8.41909587e-01,   2.14800024e+00],       [  5.47700000e+03,   5.71620405e-01,   1.16694534e+00],       [  3.16220000e+04,   1.36640415e-01,   4.35761333e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]