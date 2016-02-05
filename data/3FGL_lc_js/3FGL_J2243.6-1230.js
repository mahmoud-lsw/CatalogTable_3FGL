Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.60636806,  0.67268634,  0.89025187,  0.2072494 ,  0.52777404,        0.24976954,  0.        ,  1.04974329,  0.        ,  0.29755622,        0.8209461 ,  0.27900815,  0.        ,  0.        ,  0.15173584,        0.        ,  0.        ,  0.3744404 ,  0.        ,  0.        ,        1.04997849,  1.42234266,  0.79227877,  2.43616462,  0.        ,        0.54699302,  0.46838826,  0.        ,  0.        ,  0.        ,        0.34259832,  1.66327095,  1.57130063,  0.11134205,  2.073452  ,        2.0196557 ,  2.34420609,  1.8676728 ,  0.06277031,  0.93971664,        0.62647641,  0.        ,  0.        ,  1.51358056,  0.8699826 ,        0.52651113,  0.        ,  0.        ]
FluxHistoryError = [[ 0.15715292,  1.25576305],       [ 0.        ,  2.75020766],       [ 0.        ,  2.8738271 ],       [ 0.        ,  2.17497528],       [ 0.03985423,  1.21330738],       [ 0.        ,  1.92391381],       [ 0.        ,  1.91962874],       [ 0.11191285,  2.13513422],       [ 0.        ,  1.4818747 ],       [ 0.        ,  2.05781072],       [ 0.25927752,  1.56336701],       [ 0.        ,  1.65213311],       [ 0.        ,  1.9285121 ],       [ 0.        ,  2.04044414],       [ 0.        ,  1.62881702],       [ 0.        ,  1.3777709 ],       [ 0.        ,  1.4736979 ],       [ 0.        ,  2.55841157],       [ 0.        ,  1.98221135],       [ 0.        ,  1.60394859],       [ 0.32185054,  2.10187745],       [ 0.64204937,  2.34342289],       [ 0.        ,  3.293854  ],       [ 1.56462526,  3.4613595 ],       [ 0.        ,  1.48079658],       [ 0.        ,  2.62216783],       [ 0.11248663,  1.07913971],       [ 0.        ,  2.18503451],       [ 0.        ,  1.34224439],       [ 0.        ,  1.580845  ],       [ 0.        ,  2.23918998],       [ 0.82990342,  2.69803023],       [ 0.78626353,  2.53526115],       [ 0.        ,  2.1081563 ],       [ 1.08055389,  3.27246451],       [ 1.19112468,  3.01423478],       [ 1.08517241,  3.86825657],       [ 0.77404785,  3.1228075 ],       [ 0.        ,  2.57693882],       [ 0.        ,  3.49056226],       [ 0.        ,  2.51960492],       [ 0.        ,  2.74588346],       [ 0.        ,  1.80638933],       [ 0.67637485,  2.61348391],       [ 0.35448396,  1.61166489],       [ 0.        ,  2.53534836],       [ 0.        ,  1.65704906],       [ 0.        ,  1.81917238]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.37880096e+01],       [  5.47000000e+02,   1.65449810e+01],       [  1.73200000e+03,   1.10226023e+00],       [  5.47700000e+03,   9.11028385e-01],       [  3.16220000e+04,   4.31052715e-01]]
SpectrumError = [[  1.73000000e+02,   4.13893929e+01,   1.06849976e+02],       [  5.47000000e+02,   1.19496593e+01,   2.13735714e+01],       [  1.73200000e+03,   3.14836144e-01,   1.98366594e+00],       [  5.47700000e+03,   5.97912192e-01,   1.28718710e+00],       [  3.16220000e+04,   2.57991791e-01,   6.73877001e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]