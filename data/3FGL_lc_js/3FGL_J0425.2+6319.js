Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.15406942,  0.        ,  1.0625937 ,  0.        ,  0.        ,        1.23363006,  0.11591889,  0.0855072 ,  1.01703322,  1.03174579,        0.        ,  0.93614435,  0.69175488,  0.        ,  0.        ,        1.09411788,  0.96487701,  0.        ,  0.34789053,  1.18341279,        0.        ,  0.1473958 ,  0.39504525,  0.78732193,  0.07165205,        0.57230294,  2.85407066,  0.        ,  1.64907217,  0.        ,        0.42041865,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  1.1009593 ,  0.        ,  1.63586652,  1.24841106,        0.84134555,  0.28275344,  0.55308151,  0.63422203,  0.45707035,        0.        ,  0.7844184 ,  0.        ]
FluxHistoryError = [[ 0.11119771,  2.46016407],       [ 0.        ,  1.61011899],       [ 0.42440081,  1.92064762],       [ 0.        ,  1.63925886],       [ 0.        ,  1.48756862],       [ 0.41832536,  2.19933987],       [ 0.        ,  2.61436321],       [ 0.        ,  2.78618722],       [ 0.08682442,  2.16177845],       [ 0.17708278,  2.24370623],       [ 0.        ,  1.43180192],       [ 0.32243168,  1.85183203],       [ 0.13041955,  1.57066357],       [ 0.        ,  1.08236945],       [ 0.        ,  1.5437063 ],       [ 0.58468407,  1.74858141],       [ 0.36488479,  1.7601943 ],       [ 0.        ,  0.97612178],       [ 0.        ,  1.78298262],       [ 0.48706907,  2.10572791],       [ 0.        ,  1.7951256 ],       [ 0.        ,  1.9712816 ],       [ 0.        ,  1.98600218],       [ 0.22608662,  1.54840326],       [ 0.        ,  2.17348849],       [ 0.17646006,  1.21320987],       [ 1.87539792,  3.89513016],       [ 0.        ,  1.67957342],       [ 0.87228507,  2.59537649],       [ 0.        ,  1.22322011],       [ 0.        ,  1.85032716],       [ 0.        ,  2.14230227],       [ 0.        ,  1.60961235],       [ 0.        ,  1.88846481],       [ 0.        ,  1.52560377],       [ 0.        ,  1.22565353],       [ 0.51375997,  1.90496254],       [ 0.        ,  1.21021533],       [ 0.68603015,  2.78573656],       [ 0.54883939,  2.11799097],       [ 0.39481157,  1.4776423 ],       [ 0.        ,  1.77905676],       [ 0.03259867,  1.26955867],       [ 0.10297036,  1.36202049],       [ 0.        ,  2.23384893],       [ 0.        ,  1.53670788],       [ 0.01770461,  1.72124791],       [ 0.        ,  2.1632998 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.59548035e+01],       [  5.47000000e+02,   1.82679386e+01],       [  1.73200000e+03,   2.27858210e+00],       [  5.47700000e+03,   8.77918839e-01],       [  3.16220000e+04,   8.59334230e-01]]
SpectrumError = [[  1.73000000e+02,   4.11562767e+01,   1.11079308e+02],       [  5.47000000e+02,   1.12620554e+01,   2.54121208e+01],       [  1.73200000e+03,   1.01486886e+00,   3.63329482e+00],       [  5.47700000e+03,   5.15303612e-01,   1.29486632e+00],       [  3.16220000e+04,   6.42110527e-01,   1.11100280e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]