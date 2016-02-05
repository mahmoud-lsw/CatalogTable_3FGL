Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.73109818,  0.        ,  1.74983001,  0.        ,  0.23230895,        0.        ,  0.17966609,  0.        ,  1.06776094,  1.86900795,        0.98154169,  0.        ,  0.        ,  0.34252498,  0.85647869,        1.51472771,  0.        ,  1.03234529,  0.1209758 ,  0.92336053,        0.98233598,  0.        ,  0.40715772,  0.16549921,  0.        ,        0.11378381,  0.        ,  0.66753721,  0.        ,  1.09222221,        1.18836784,  0.29303485,  1.76492262,  1.09761715,  0.        ,        0.70366037,  0.55028147,  1.93312144,  0.        ,  0.        ,        0.        ,  2.41153979,  0.90428543,  0.        ,  0.        ,        0.        ,  0.56455714,  0.21745071]
FluxHistoryError = [[ 0.02709454,  1.7061882 ],       [ 0.        ,  1.32331502],       [ 0.69735479,  2.88353682],       [ 0.        ,  1.80568409],       [ 0.        ,  2.27961311],       [ 0.        ,  0.96757591],       [ 0.        ,  2.35679989],       [ 0.        ,  1.75800419],       [ 0.35856879,  1.94691348],       [ 0.78835666,  3.0781033 ],       [ 0.36742681,  1.81292415],       [ 0.        ,  1.89634585],       [ 0.        ,  1.0482471 ],       [ 0.        ,  1.90037104],       [ 0.        ,  3.44593263],       [ 0.65121871,  2.66850853],       [ 0.        ,  2.51380849],       [ 0.40240985,  1.88874125],       [ 0.        ,  2.20353992],       [ 0.        ,  3.48776692],       [ 0.34488577,  1.93351793],       [ 0.        ,  1.50713646],       [ 0.        ,  2.13196617],       [ 0.        ,  2.43981051],       [ 0.        ,  2.11006665],       [ 0.        ,  2.61988089],       [ 0.        ,  2.29311156],       [ 0.19440883,  1.46672153],       [ 0.        ,  1.17969203],       [ 0.46526474,  1.97059751],       [ 0.09259713,  2.47521257],       [ 0.        ,  2.57596046],       [ 0.84125668,  2.87739515],       [ 0.091295  ,  2.27226496],       [ 0.        ,  2.13358736],       [ 0.19764036,  1.40581441],       [ 0.0491817 ,  1.28846717],       [ 0.47128224,  3.51640272],       [ 0.        ,  1.32575881],       [ 0.        ,  1.56197619],       [ 0.        ,  2.00681925],       [ 1.40467453,  3.61211705],       [ 0.        ,  3.17016602],       [ 0.        ,  1.641487  ],       [ 0.        ,  2.24468899],       [ 0.        ,  1.52410471],       [ 0.        ,  2.86543137],       [ 0.        ,  2.09391329]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.31228428e+01],       [  5.47000000e+02,   9.61036777e+00],       [  1.73200000e+03,   2.04833913e+00],       [  5.47700000e+03,   8.61137331e-01],       [  3.16220000e+04,   1.41512483e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   1.11716852e+02],       [  5.47000000e+02,   3.47997713e+00,   1.60446339e+01],       [  1.73200000e+03,   1.05043030e+00,   3.15663457e+00],       [  5.47700000e+03,   5.48371136e-01,   1.25318754e+00],       [  3.16220000e+04,   2.63433754e-02,   3.34268808e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]