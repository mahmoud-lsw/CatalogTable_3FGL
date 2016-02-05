Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 11.25683403,  12.97373486,  12.91501236,  11.4001379 ,        11.99708176,  12.09053707,  12.39253616,   8.56074047,        15.8997736 ,  10.52554131,  16.20534325,  10.78760529,        10.31727219,  19.74685287,  13.78350639,  16.0032692 ,        16.55916023,  16.47693825,  17.30786705,  15.22802067,        11.35407352,  17.3239975 ,   9.58901024,  15.69399452,        14.0559988 ,  18.25289726,  15.70532799,  18.89047241,        16.4272995 ,  13.2068491 ,  12.03736305,  17.84172058,        18.24174309,  14.67657757,  12.60910797,  13.59987354,        14.44434071,  12.28610134,  11.2099762 ,  15.85882664,        12.67133045,   9.34461975,  13.12915993,  15.33802128,        14.05681515,  14.00985336,  16.89302444,  19.31501961]
FluxHistoryError = [[  8.34427166,  14.22245693],       [  9.80061817,  16.19847488],       [ 10.21162701,  15.67703438],       [  8.48698902,  14.40011787],       [  9.33865738,  14.73630047],       [  9.47076797,  14.78298187],       [  9.66655922,  15.19507313],       [  5.54962444,  11.58777618],       [ 13.11496544,  18.76633453],       [  7.65689373,  13.46169281],       [ 13.48407459,  19.01159859],       [  7.94899654,  13.61867523],       [  7.73134756,  12.96615791],       [ 17.07061386,  22.47195816],       [ 11.18569946,  16.49298286],       [ 13.52391529,  18.53270721],       [ 13.64604282,  19.55051041],       [ 13.92432976,  19.0963707 ],       [ 14.67622566,  19.99148178],       [ 12.29609013,  18.21899033],       [  8.61649799,  14.13178349],       [ 14.36720562,  20.35206223],       [  6.89580965,  12.34337807],       [ 12.60463238,  18.79560852],       [ 11.3618269 ,  16.80016899],       [ 15.07282257,  21.53944588],       [ 12.83625603,  18.61429977],       [ 16.00135803,  21.85216141],       [ 13.41215229,  19.53982353],       [ 10.34613609,  16.09731102],       [  9.11352253,  15.04484177],       [ 15.0735054 ,  20.63299179],       [ 15.20991039,  21.37964249],       [ 11.87773323,  17.54959488],       [  9.84614372,  15.44528008],       [ 10.73459053,  16.55687714],       [ 11.62223244,  17.34768486],       [  9.16156197,  15.50852966],       [  8.47110367,  14.03732491],       [ 12.96912766,  18.8531723 ],       [  9.92541122,  15.48214912],       [  6.67671728,  12.13849831],       [ 10.54244041,  15.77477455],       [ 12.61319065,  18.1561985 ],       [ 11.17929077,  17.04368973],       [ 11.26775742,  16.7718029 ],       [ 14.21379662,  19.59046173],       [ 16.132967  ,  22.66550636]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.38903137e+02],       [  5.47000000e+02,   4.45858215e+02],       [  1.73200000e+03,   9.27947006e+01],       [  5.47700000e+03,   1.18066406e+01],       [  3.16220000e+04,   6.29123330e-01]]
SpectrumError = [[  1.73000000e+02,   6.63155212e+02,   8.14683716e+02],       [  5.47000000e+02,   4.24585724e+02,   4.67130707e+02],       [  1.73200000e+03,   8.68990555e+01,   9.86903458e+01],       [  5.47700000e+03,   9.82727242e+00,   1.38308058e+01],       [  3.16220000e+04,   1.00389779e-01,   1.20555377e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]