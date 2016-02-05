Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.46071276,  0.48527631,  0.        ,  0.        ,        0.50271147,  0.        ,  0.        ,  0.        ,  0.        ,        0.15903054,  0.        ,  0.        ,  0.        ,  0.02532135,        0.        ,  0.        ,  0.06756981,  0.53564566,  0.        ,        1.02659583,  0.        ,  0.        ,  0.        ,  0.        ,        0.4989678 ,  0.        ,  0.19531649,  1.37598491,  0.40360108,        0.        ,  0.        ,  0.        ,  0.82821423,  0.21021912,        0.        ,  0.44045442,  0.49428576,  0.        ,  1.9186548 ,        0.97106242,  1.34055066,  0.42378497,  0.        ,  0.        ,        0.20080572,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  1.46084285],       [ 0.1456117 ,  0.92492962],       [ 0.        ,  1.92247543],       [ 0.        ,  0.84110481],       [ 0.        ,  0.652852  ],       [ 0.19836783,  0.94328892],       [ 0.        ,  1.04972029],       [ 0.        ,  1.23297644],       [ 0.        ,  0.86253983],       [ 0.        ,  0.91778541],       [ 0.        ,  0.95330517],       [ 0.        ,  0.88793159],       [ 0.        ,  0.97641754],       [ 0.        ,  1.05316198],       [ 0.        ,  1.53319346],       [ 0.        ,  1.27879179],       [ 0.        ,  1.27146435],       [ 0.        ,  1.56507274],       [ 0.04583204,  1.21488607],       [ 0.        ,  1.02125931],       [ 0.49146307,  1.72626877],       [ 0.        ,  1.30757523],       [ 0.        ,  0.92092007],       [ 0.        ,  1.26932931],       [ 0.        ,  1.13460541],       [ 0.14499116,  1.01764417],       [ 0.        ,  1.03041589],       [ 0.        ,  1.67868811],       [ 0.62604958,  2.29223347],       [ 0.        ,  1.7932848 ],       [ 0.        ,  0.92775148],       [ 0.        ,  1.480124  ],       [ 0.        ,  1.18121886],       [ 0.42004091,  1.3787179 ],       [ 0.        ,  1.55562267],       [ 0.        ,  0.87112683],       [ 0.        ,  1.86123031],       [ 0.15013197,  1.02710736],       [ 0.        ,  0.99376088],       [ 1.19905221,  2.77076221],       [ 0.396604  ,  1.68628788],       [ 0.7194373 ,  2.12491751],       [ 0.09570682,  0.90962803],       [ 0.        ,  1.51026249],       [ 0.        ,  0.90953439],       [ 0.        ,  1.8278802 ],       [ 0.        ,  1.18751025],       [ 0.        ,  0.93586659]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.72231216e+01],       [  5.47000000e+02,   6.61501122e+00],       [  1.73200000e+03,   9.39339399e-01],       [  5.47700000e+03,   6.32584929e-01],       [  3.16220000e+04,   5.59668064e-01]]
SpectrumError = [[  1.73000000e+02,   3.11756821e+01,   1.03779602e+02],       [  5.47000000e+02,   1.65445948e+00,   1.17066145e+01],       [  1.73200000e+03,   2.02926576e-01,   1.80492365e+00],       [  5.47700000e+03,   3.59906703e-01,   9.66732144e-01],       [  3.16220000e+04,   3.47140402e-01,   8.27921748e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]