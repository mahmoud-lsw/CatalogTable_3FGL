Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.49897927,  1.54256308,  1.61685824,  0.48389599,  2.50894141,        0.70089591,  1.09546244,  1.59104002,  0.21000819,  0.        ,        0.        ,  0.9394179 ,  0.45272827,  0.        ,  1.83895159,        2.30156565,  0.        ,  0.        ,  0.9767012 ,  0.77956665,        1.71143985,  0.        ,  1.08370101,  0.        ,  0.75745475,        0.        ,  0.21108668,  0.        ,  0.37710252,  0.42859897,        1.66651738,  1.4373765 ,  0.        ,  0.        ,  0.        ,        0.        ,  0.92928118,  0.413946  ,  0.82930499,  0.67244905,        0.        ,  1.10506701,  0.24834828,  0.        ,  0.68360579,        0.29924095,  2.57205987,  0.        ]
FluxHistoryError = [[ 0.        ,  2.21694618],       [ 0.81976515,  2.42483568],       [ 0.56963921,  2.74215841],       [ 0.        ,  2.67711398],       [ 1.56241667,  3.58635926],       [ 0.0761084 ,  1.57354522],       [ 0.33867002,  2.03971434],       [ 0.42256665,  2.95470977],       [ 0.        ,  1.94093494],       [ 0.        ,  0.96843714],       [ 0.        ,  1.19367826],       [ 0.        ,  3.0138374 ],       [ 0.        ,  2.54641294],       [ 0.        ,  2.87011981],       [ 0.86409742,  2.99223137],       [ 1.13613605,  3.68135738],       [ 0.        ,  2.33328104],       [ 0.        ,  1.63208687],       [ 0.27613974,  1.97471023],       [ 0.05367517,  1.75974584],       [ 0.72653371,  2.97202516],       [ 0.        ,  2.0108254 ],       [ 0.24756521,  2.13038349],       [ 0.        ,  1.90864742],       [ 0.        ,  3.60295117],       [ 0.        ,  2.3564024 ],       [ 0.        ,  2.19121115],       [ 0.        ,  1.86266649],       [ 0.0817166 ,  0.91905916],       [ 0.        ,  2.35103485],       [ 0.56257188,  2.92127037],       [ 0.47068363,  2.59213305],       [ 0.        ,  2.81590772],       [ 0.        ,  2.23701334],       [ 0.        ,  2.19324017],       [ 0.        ,  2.1844995 ],       [ 0.08307093,  2.02479243],       [ 0.        ,  2.67065725],       [ 0.2399624 ,  1.69055641],       [ 0.        ,  2.73610681],       [ 0.        ,  1.64645755],       [ 0.19126129,  2.1925559 ],       [ 0.        ,  2.09314601],       [ 0.        ,  1.50818205],       [ 0.11576772,  1.50223541],       [ 0.        ,  2.26690578],       [ 1.43655491,  3.84398675],       [ 0.        ,  2.06230688]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.10713425e+01],       [  5.47000000e+02,   1.07628431e+01],       [  1.73200000e+03,   1.33405113e+00],       [  5.47700000e+03,   7.33931720e-01],       [  3.16220000e+04,   6.83220178e-02]]
SpectrumError = [[  1.73000000e+02,   1.88651085e+01,   8.39272919e+01],       [  5.47000000e+02,   6.58738232e+00,   1.51139641e+01],       [  1.73200000e+03,   6.60880864e-01,   2.10370922e+00],       [  5.47700000e+03,   4.65862662e-01,   1.06256628e+00],       [  3.16220000e+04,   0.00000000e+00,   4.10664812e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]