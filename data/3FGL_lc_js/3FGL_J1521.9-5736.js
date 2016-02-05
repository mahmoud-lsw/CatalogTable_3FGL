Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  9.18623352,  10.46907902,  12.53913498,  13.12178326,        10.82866383,   8.06626892,   8.0301857 ,  10.9799366 ,        12.3819418 ,  17.0409565 ,   6.81972265,   7.07165813,         6.4712615 ,  12.27616596,  12.01528168,   6.95340538,         9.60037994,  11.19257259,  13.23364925,  10.83111   ,        10.17031193,   7.0591197 ,  11.07165527,   8.48262978,         8.18491364,   9.48763847,  12.82508945,  10.6634264 ,        12.59965229,   9.17036819,   9.64741611,   5.20439959,         8.96731758,  12.67710304,  10.3326931 ,   9.20404243,        10.08208752,  13.68446922,  12.95677376,  14.40557289,        13.34514904,   9.84308338,  15.63775921,  12.29466438,         5.79742146,   5.41158056,  14.27126122,  13.12389755]
FluxHistoryError = [[  6.18386555,  12.41596031],       [  7.40384197,  13.75820637],       [  9.56352043,  15.69524765],       [  9.89279556,  16.42734337],       [  8.06837654,  13.7805481 ],       [  5.05520821,  11.28786469],       [  5.12965727,  11.09873962],       [  7.66544294,  14.47235107],       [  9.52172089,  15.40738392],       [ 13.99019814,  20.31694031],       [  4.01883698,   9.80265617],       [  4.5860939 ,   9.7163105 ],       [  3.61260939,   9.50537395],       [  9.62304688,  15.04696941],       [  9.21047878,  15.01204681],       [  4.50634336,   9.58922577],       [  7.15797472,  12.19641399],       [  8.20546913,  14.33764458],       [ 10.75764275,  15.8425045 ],       [  8.01143551,  13.83974457],       [  7.65183592,  12.84430695],       [  4.43811226,   9.86713791],       [  8.3985157 ,  13.89198112],       [  6.07414913,  11.03014278],       [  5.50849247,  11.04664993],       [  6.95269871,  12.173419  ],       [  9.77708817,  16.06403351],       [  8.23415184,  13.21786118],       [  9.90320873,  15.44018936],       [  6.73645115,  11.73747158],       [  7.3849597 ,  12.05893898],       [  2.6835227 ,   8.05378723],       [  6.36276484,  11.71804333],       [  9.87898064,  15.63274288],       [  7.83945847,  12.9326849 ],       [  6.54260349,  12.02272797],       [  7.5632143 ,  12.73930168],       [ 10.89179134,  16.62538338],       [  9.96167183,  16.12999535],       [ 11.8534584 ,  17.06661606],       [ 10.10797119,  16.75126839],       [  7.41256666,  12.40779018],       [ 12.84926796,  18.56227493],       [  9.43278694,  15.32546329],       [  3.44656682,   8.30342197],       [  2.6132443 ,   8.38053131],       [ 11.78184795,  16.87239838],       [ 10.06223106,  16.37018204]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.01692078e+02],       [  5.47000000e+02,   3.03104858e+02],       [  1.73200000e+03,   8.65822449e+01],       [  5.47700000e+03,   1.15114985e+01],       [  3.16220000e+04,   5.40771663e-01]]
SpectrumError = [[  1.73000000e+02,   3.71123383e+02,   6.31256226e+02],       [  5.47000000e+02,   2.82085327e+02,   3.24124390e+02],       [  1.73200000e+03,   8.14364929e+01,   9.17279968e+01],       [  5.47700000e+03,   1.01238203e+01,   1.29608269e+01],       [  3.16220000e+04,   2.84021169e-01,   8.62648726e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]