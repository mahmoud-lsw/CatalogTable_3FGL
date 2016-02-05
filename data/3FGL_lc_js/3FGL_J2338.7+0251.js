Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  1.44450271,  2.05109715,  0.53017557,        0.52050596,  0.        ,  0.        ,  2.02888203,  2.55493832,        0.        ,  1.03559864,  1.69017565,  4.1088748 ,  0.        ,        1.34823465,  0.        ,  0.        ,  0.        ,  1.31012249,        2.02296877,  2.63482189,  0.34301123,  1.10081685,  0.        ,        1.8122071 ,  3.8164742 ,  2.13368058,  3.1622889 ,  3.17752004,        0.26672697,  2.58983707,  0.        ,  0.48451853,  0.        ,        1.98426342,  3.20931196,  4.5280056 ,  1.29793787,  0.        ,        2.3969233 ,  0.        ,  1.57715869,  4.29470348,  0.        ,        0.57269698,  0.66851228,  0.        ]
FluxHistoryError = [[ 0.        ,  2.58018899],       [ 0.        ,  2.55900073],       [ 0.33141935,  2.76664066],       [ 0.71964538,  3.51981831],       [ 0.        ,  3.10270393],       [ 0.        ,  2.99195725],       [ 0.        ,  2.03884029],       [ 0.        ,  1.83284342],       [ 0.76752877,  3.46284008],       [ 1.33025098,  3.94833755],       [ 0.        ,  2.43412161],       [ 0.        ,  3.94608676],       [ 0.46715355,  3.09233212],       [ 2.23281598,  6.16207504],       [ 0.        ,  2.36387658],       [ 0.20631874,  2.77331972],       [ 0.        ,  2.33864713],       [ 0.        ,  2.275841  ],       [ 0.        ,  3.65098357],       [ 0.        ,  4.87029719],       [ 0.66054833,  3.69523525],       [ 1.22580409,  4.1135273 ],       [ 0.        ,  3.14803752],       [ 0.        ,  4.42755735],       [ 0.        ,  2.21841502],       [ 0.        ,  5.80056727],       [ 2.08583808,  5.69736958],       [ 0.79042959,  3.74605656],       [ 1.77740216,  4.70714712],       [ 1.72189558,  4.90243912],       [ 0.        ,  3.73277926],       [ 1.01584351,  4.48919964],       [ 0.        ,  2.31108665],       [ 0.        ,  3.48890686],       [ 0.        ,  3.03314638],       [ 0.6624347 ,  3.51255035],       [ 1.5022943 ,  5.18141651],       [ 2.67752934,  6.59284449],       [ 0.12252712,  2.85900497],       [ 0.        ,  2.99393964],       [ 1.14740801,  3.97319221],       [ 0.        ,  3.69570613],       [ 0.        ,  5.24791598],       [ 2.32114959,  6.47660542],       [ 0.        ,  3.1160295 ],       [ 0.        ,  2.84989029],       [ 0.        ,  3.29064602],       [ 0.        ,  2.47789717]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.41192627e+01],       [  5.47000000e+02,   1.73472500e+01],       [  1.73200000e+03,   2.67170668e+00],       [  5.47700000e+03,   2.26597205e-01],       [  3.16220000e+04,   6.63194852e-03]]
SpectrumError = [[  1.73000000e+02,   4.40675774e+01,   1.04578857e+02],       [  5.47000000e+02,   1.25831833e+01,   2.23275757e+01],       [  1.73200000e+03,   1.78478050e+00,   3.64968920e+00],       [  5.47700000e+03,   2.73683965e-02,   4.93646443e-01],       [  3.16220000e+04,   0.00000000e+00,   3.35800834e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]