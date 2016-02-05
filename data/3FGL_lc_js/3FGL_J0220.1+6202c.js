Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  1.82603848,   0.7252478 ,   0.98257613,   3.46404862,         1.38767195,   0.        ,   7.61322308,   0.        ,        15.05322266,   0.        ,   2.85930467,   1.87741578,         1.24513137,   4.53988218,   0.        ,   1.52707112,         0.        ,   0.        ,   0.        ,   3.94789195,         0.        ,   5.09768248,   2.1963129 ,   0.        ,         4.28825617,   2.81696582,   4.08152533,   0.5972212 ,         0.        ,   1.58219087,   0.        ,   4.95617342,         2.15927887,   0.55494118,   0.47623646,   3.02171278,         4.44099808,   0.        ,   0.        ,   8.78816414,         5.39665937,   5.30959034,   2.44135141,   3.49737883,         3.45611048,   0.        ,   0.        ,   0.        ]
FluxHistoryError = [[  0.        ,  11.93166745],       [  0.        ,   7.50340933],       [  0.        ,   8.20019889],       [  0.47545743,   7.2996397 ],       [  0.        ,  10.52603102],       [  0.        ,   5.31986952],       [  3.19891834,  13.03174973],       [  0.        ,   7.24946642],       [ 10.30183411,  19.68539047],       [  0.        ,   8.90042496],       [  0.        ,  12.02512097],       [  0.        ,   9.91829979],       [  0.        ,   7.21557605],       [  1.55093837,   8.10735703],       [  0.        ,   7.93406391],       [  0.        ,   8.58181965],       [  0.        ,   4.99476099],       [  0.        ,   6.89297438],       [  0.        ,   5.19787502],       [  0.81440353,   8.03383636],       [  0.        ,   5.52350998],       [  1.05553579,   9.69890594],       [  0.        ,  11.39591312],       [  0.        ,   6.47433662],       [  0.35063624,   8.79368591],       [  0.        ,  10.98752284],       [  1.12385511,   7.95586872],       [  0.        ,   8.63968831],       [  0.        ,   6.68843985],       [  0.        ,   9.66543233],       [  0.        ,   5.39471054],       [  2.03510022,   8.8677578 ],       [  0.        ,  12.04213238],       [  0.        ,   7.21413898],       [  0.        ,   9.09128773],       [  0.50505781,   6.62513256],       [  1.78160882,   7.73507118],       [  0.        ,   7.75734234],       [  0.        ,   8.08810043],       [  5.51360798,  12.5495348 ],       [  2.68163371,   8.89152527],       [  1.76609945,   9.8052845 ],       [  0.26155615,   5.85101318],       [  0.        ,  11.57662153],       [  0.69537544,   6.81950951],       [  0.        ,   7.88343   ],       [  0.        ,   9.0334444 ],       [  0.        ,   5.65537357]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.87571716e+02],       [  5.47000000e+02,   9.69679642e+01],       [  1.73200000e+03,   1.61189289e+01],       [  5.47700000e+03,   2.66831136e+00],       [  3.16220000e+04,   7.28508167e-04]]
SpectrumError = [[  1.73000000e+02,   6.75566254e+01,   5.07586792e+02],       [  5.47000000e+02,   4.73308296e+01,   1.51685822e+02],       [  1.73200000e+03,   1.18450546e+01,   2.05434532e+01],       [  5.47700000e+03,   1.96728146e+00,   3.44024134e+00],       [  3.16220000e+04,   0.00000000e+00,   4.43900427e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]