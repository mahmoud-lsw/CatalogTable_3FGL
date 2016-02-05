Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.37147278,  0.        ,  0.60991257,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        0.19948028,  0.51837546,  0.16461749,  0.        ,  0.22853999,        0.        ,  0.47334492,  0.19279684,  0.        ,  0.65552807,        0.07137626,  0.        ,  0.        ,  0.        ,  0.        ,        0.27500132,  0.01917603,  0.        ,  0.50229323,  0.        ,        0.35068786,  0.        ,  0.43585274,  0.67553973,  0.        ,        0.        ,  0.        ,  0.01870928,  0.        ,  0.        ,        0.2530669 ,  0.31969771,  0.        ,  0.36730304,  0.43604526,        0.        ,  0.43041095,  0.        ]
FluxHistoryError = [[ 0.11341602,  0.77496064],       [ 0.        ,  1.25478005],       [ 0.20285174,  1.13816416],       [ 0.        ,  1.12686908],       [ 0.        ,  0.70619774],       [ 0.        ,  0.69947445],       [ 0.        ,  1.17835915],       [ 0.        ,  0.82669723],       [ 0.        ,  0.68985164],       [ 0.        ,  0.68048036],       [ 0.        ,  1.17695712],       [ 0.21553475,  0.95539141],       [ 0.        ,  1.16994043],       [ 0.        ,  0.51805949],       [ 0.        ,  1.42014258],       [ 0.        ,  0.78114229],       [ 0.17317522,  0.91471303],       [ 0.05757369,  0.44715136],       [ 0.        ,  0.61920691],       [ 0.1672596 ,  1.24996638],       [ 0.        ,  1.32866674],       [ 0.        ,  1.20118189],       [ 0.        ,  0.94374108],       [ 0.        ,  0.94339734],       [ 0.        ,  0.65828043],       [ 0.02285191,  0.66267163],       [ 0.        ,  0.9206852 ],       [ 0.        ,  0.57942045],       [ 0.12589431,  1.07598269],       [ 0.        ,  0.85830683],       [ 0.12568329,  0.67620826],       [ 0.        ,  0.77426583],       [ 0.12818336,  0.90743232],       [ 0.30852619,  1.20483208],       [ 0.        ,  0.62843436],       [ 0.        ,  0.87559229],       [ 0.        ,  0.86580199],       [ 0.        ,  0.85366235],       [ 0.        ,  1.03965938],       [ 0.        ,  0.66902202],       [ 0.        ,  1.37873638],       [ 0.0780611 ,  0.68267363],       [ 0.        ,  0.84021157],       [ 0.08368987,  0.80213237],       [ 0.09209445,  0.95098567],       [ 0.        ,  0.91408527],       [ 0.        ,  1.61559328],       [ 0.        ,  0.85427374]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.96119693e-04],       [  5.47000000e+02,   7.95953083e+00],       [  1.73200000e+03,   2.24290252e+00],       [  5.47700000e+03,   2.24735901e-01],       [  3.16220000e+04,   3.64579290e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   4.33768228e+01],       [  5.47000000e+02,   2.58538198e+00,   1.36005726e+01],       [  1.73200000e+03,   1.15806580e+00,   3.45098114e+00],       [  5.47700000e+03,   0.00000000e+00,   8.63425717e-01],       [  3.16220000e+04,   2.18695685e-01,   5.58638513e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]