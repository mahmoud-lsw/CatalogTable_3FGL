Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.05802512,  0.90576899,  0.3023189 ,  0.30277899,  0.        ,        0.14459349,  0.37914112,  0.49344128,  0.20355108,  0.35147098,        0.        ,  0.08086979,  0.        ,  1.77148497,  0.28751025,        1.2600776 ,  0.37798387,  0.83755147,  0.25234926,  0.56299472,        0.78233153,  1.45944524,  1.45434833,  0.50742728,  0.94585603,        0.        ,  0.30405256,  0.        ,  0.97448146,  1.11863494,        1.52286243,  1.02897704,  0.68814671,  0.60315412,  2.01029992,        1.58288956,  1.5638634 ,  0.52282959,  0.74125671,  0.66564089,        0.62793905,  0.        ,  0.74509704,  1.55817616,  1.31927192,        0.7611419 ,  1.17647099,  0.70909357]
FluxHistoryError = [[ 0.56627703,  1.67363   ],       [ 0.54040658,  1.36926854],       [ 0.08120741,  0.68819374],       [ 0.08520161,  0.63352454],       [ 0.        ,  0.60862821],       [ 0.        ,  0.88414426],       [ 0.10048887,  0.76228988],       [ 0.06129071,  1.05523086],       [ 0.0096615 ,  0.54195881],       [ 0.01245859,  0.85037422],       [ 0.        ,  0.63722622],       [ 0.        ,  1.39559019],       [ 0.        ,  0.60032612],       [ 1.1145041 ,  2.57596254],       [ 0.        ,  1.45144829],       [ 0.71972835,  1.92846894],       [ 0.        ,  1.61893779],       [ 0.43566504,  1.35224164],       [ 0.        ,  1.6785028 ],       [ 0.23748398,  1.00852573],       [ 0.37380546,  1.33297324],       [ 0.92659289,  2.11733246],       [ 0.86938488,  2.14829612],       [ 0.1604113 ,  1.04939413],       [ 0.53274471,  1.46926117],       [ 0.        ,  0.98908561],       [ 0.05171049,  0.67386192],       [ 0.        ,  1.12598968],       [ 0.52204776,  1.53935528],       [ 0.63782609,  1.71157312],       [ 1.02358019,  2.12921906],       [ 0.60228199,  1.58092701],       [ 0.28520533,  1.27224302],       [ 0.2858884 ,  1.05519962],       [ 1.38540411,  2.74407983],       [ 1.03157604,  2.23522282],       [ 0.98168129,  2.25239706],       [ 0.07257798,  1.15957582],       [ 0.28461656,  1.33613646],       [ 0.09595507,  1.48048043],       [ 0.29544204,  1.08407223],       [ 0.        ,  1.63441455],       [ 0.35040286,  1.25605655],       [ 0.82830215,  2.41967201],       [ 0.79489285,  1.96577096],       [ 0.34173462,  1.30608678],       [ 0.55748397,  1.97633648],       [ 0.38882864,  1.12858045]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.46576633e+01],       [  5.47000000e+02,   1.83861256e+01],       [  1.73200000e+03,   6.49173498e+00],       [  5.47700000e+03,   2.72977781e+00],       [  3.16220000e+04,   1.82085109e+00]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   6.36420803e+01],       [  5.47000000e+02,   1.42555676e+01,   2.27007656e+01],       [  1.73200000e+03,   5.43083811e+00,   7.62809229e+00],       [  5.47700000e+03,   2.24272895e+00,   3.27446318e+00],       [  3.16220000e+04,   1.45361435e+00,   2.23925352e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]