Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 19.91394997,  19.52571487,  11.98706532,  16.24186325,        15.4842329 ,  18.19111061,   9.62479973,  31.19477272,        17.36002922,  14.09235287,  14.21260834,  20.61986732,        27.21788597,  24.3771019 ,  19.10301781,  14.8563261 ,        14.80311203,  21.17079353,  14.0234375 ,  18.23822784,        17.52653885,   3.37423635,  23.26390648,  20.75086594,        23.99777412,  17.35849762,  20.24484634,  11.17171383,         1.62859488,   9.31183624,  23.70108986,   6.09923935,        13.61035061,  14.93410015,  22.81460381,  24.05212784,        17.40478516,  25.42397308,  10.8084898 ,  24.83150673,        14.62621403,  16.13759041,  14.34654999,  24.51146698,        19.12400246,   9.32115269,  30.80241966,  10.37210655]
FluxHistoryError = [[ 14.478652  ,  25.57332802],       [ 13.38278103,  25.81975555],       [  6.64421701,  17.302845  ],       [ 10.45126343,  22.33065796],       [  9.97058296,  21.16207314],       [ 12.45990276,  24.00494766],       [  3.71714306,  15.91304779],       [ 24.67020607,  37.90304565],       [ 11.0845747 ,  23.6746769 ],       [  8.48901939,  19.85389328],       [  7.65022182,  21.02638245],       [ 15.36923409,  26.09584808],       [ 21.11607742,  33.54259491],       [ 18.07416153,  30.93821144],       [ 13.1888361 ,  25.32441902],       [  8.40334606,  21.94485092],       [  8.28441238,  21.66042328],       [ 12.91925335,  29.78682709],       [  7.98030281,  20.4368    ],       [ 11.08333969,  25.58959389],       [ 10.58328629,  24.7813015 ],       [  0.        ,  14.60896611],       [ 15.8416481 ,  31.18162537],       [ 14.63389397,  27.0776577 ],       [ 17.08051109,  31.26365662],       [ 12.00454903,  23.15852928],       [ 13.75619793,  27.05090714],       [  5.04761219,  17.57701492],       [  0.        ,  12.35880804],       [  2.59357214,  16.43354797],       [ 17.54898453,  30.07205772],       [  0.34682226,  12.45338345],       [  8.07798481,  19.52911377],       [  7.92662907,  22.19337654],       [ 15.83063793,  30.08224106],       [ 17.89877701,  30.47885704],       [ 10.9555912 ,  24.59062195],       [ 18.71249962,  32.43169785],       [  3.87286854,  18.31500816],       [ 18.67336464,  31.25204277],       [  8.34000778,  21.34606171],       [  9.94878387,  22.67608643],       [  8.85966778,  20.17671204],       [ 17.42226028,  31.8780632 ],       [ 13.5933485 ,  24.96918106],       [  2.10026217,  16.96670151],       [ 24.15496063,  37.66389465],       [  3.46935225,  17.92887306]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.47375354e+03],       [  5.47000000e+02,   2.56919128e+02],       [  1.73200000e+03,   6.46304932e+01],       [  5.47700000e+03,   1.02447472e+01],       [  3.16220000e+04,   1.44918823e+00]]
SpectrumError = [[  1.73000000e+02,   1.26640112e+03,   1.68594482e+03],       [  5.47000000e+02,   2.25756683e+02,   2.88498413e+02],       [  1.73200000e+03,   5.83188057e+01,   7.09421844e+01],       [  5.47700000e+03,   8.67114067e+00,   1.19151201e+01],       [  3.16220000e+04,   9.95962381e-01,   1.97569942e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]