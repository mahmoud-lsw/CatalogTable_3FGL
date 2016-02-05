Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.04223323,  2.37402749,  1.85211515,  1.3283608 ,  1.26392901,        0.        ,  0.        ,  0.        ,  1.25689542,  0.73226076,        2.35278296,  0.        ,  0.        ,  0.73260862,  0.        ,        4.21161222,  2.63212824,  1.44456756,  0.        ,  0.        ,        2.27788925,  1.05065143,  0.        ,  0.        ,  5.26812649,        6.93581295,  0.26684716,  0.        ,  0.        ,  0.        ,        0.        ,  0.85443032,  3.36419368,  0.        ,  0.60170031,        1.20792162,  0.        ,  0.        ,  5.03805733,  0.        ,        1.54479933,  0.        ,  0.49193695,  4.33727551,  0.70865494,        0.50006694,  1.23924518,  0.        ]
FluxHistoryError = [[ 0.9334476 ,  3.48013592],       [ 0.35157537,  4.55544376],       [ 0.56054771,  3.42247391],       [ 0.        ,  5.26730824],       [ 0.        ,  4.48792255],       [ 0.        ,  2.00418139],       [ 0.        ,  3.78039408],       [ 0.        ,  3.7493329 ],       [ 0.03340852,  2.75516748],       [ 0.        ,  3.80026776],       [ 0.69963849,  4.24884129],       [ 0.        ,  2.88529134],       [ 0.        ,  3.05761528],       [ 0.        ,  3.9536925 ],       [ 0.        ,  2.5977025 ],       [ 2.40540314,  6.33141899],       [ 0.70701075,  4.75126839],       [ 0.        ,  6.39398992],       [ 0.        ,  3.41398335],       [ 0.        ,  3.64847398],       [ 0.4608649 ,  4.4775095 ],       [ 0.        ,  4.13481987],       [ 0.        ,  4.86597252],       [ 0.        ,  2.58480072],       [ 2.87131715,  7.88320827],       [ 4.89227962,  9.14669704],       [ 0.        ,  3.67771485],       [ 0.        ,  2.957829  ],       [ 0.        ,  3.70106339],       [ 0.        ,  2.87814236],       [ 0.        ,  1.85666132],       [ 0.        ,  4.66762483],       [ 1.81405532,  5.17384148],       [ 0.        ,  3.45740247],       [ 0.        ,  5.5225482 ],       [ 0.        ,  4.62239349],       [ 0.        ,  3.74502802],       [ 0.        ,  3.7795167 ],       [ 2.4056468 ,  7.91936493],       [ 0.        ,  2.91320586],       [ 0.21919525,  3.32089138],       [ 0.        ,  3.79088736],       [ 0.        ,  3.52766874],       [ 2.19189906,  6.74103832],       [ 0.        ,  3.69644743],       [ 0.        ,  4.00089043],       [ 0.25276601,  2.6798048 ],       [ 0.        ,  4.08306932]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.11611259e+02],       [  5.47000000e+02,   1.86376495e+01],       [  1.73200000e+03,   1.22319198e+00],       [  5.47700000e+03,   2.18878791e-01],       [  3.16220000e+04,   5.83190441e-01]]
SpectrumError = [[  1.73000000e+02,   6.37806549e+01,   1.60622498e+02],       [  5.47000000e+02,   1.07403889e+01,   2.67407951e+01],       [  1.73200000e+03,   0.00000000e+00,   3.83138728e+00],       [  5.47700000e+03,   0.00000000e+00,   1.01271622e+00],       [  3.16220000e+04,   3.63072395e-01,   8.61755729e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]