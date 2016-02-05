Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 5.73993921,  4.54662943,  7.1667304 ,  5.37030792,  3.24212456,        0.87483799,  2.28685999,  3.87934637,  4.64580822,  4.36569405,        2.10765052,  2.06296635,  4.11843061,  3.02416515,  3.88785648,        3.61017108,  1.62898493,  3.15002108,  8.058321  ,  7.59387302,        2.82134342,  3.73591542,  4.44747543,  4.52235794,  4.19162035,        3.51677513,  2.74213672,  1.83092356,  3.73911715,  0.67080438,        4.65037155,  2.01819563,  2.55572605,  3.90938735,  2.58678007,        2.39597297,  4.8402276 ,  4.58338976,  1.40439022,  3.12510133,        6.71263218,  2.26790309,  3.76771069,  4.93114614,  4.58320284,        6.65133381,  2.17112947,  2.46866584]
FluxHistoryError = [[ 3.96042967,  7.6391778 ],       [ 2.80473471,  6.4211235 ],       [ 5.51132298,  8.93218803],       [ 3.64291072,  7.27382755],       [ 1.68435407,  4.92050552],       [ 0.        ,  3.89799726],       [ 0.83939564,  3.88697433],       [ 2.27946329,  5.63650608],       [ 3.04373646,  6.3903985 ],       [ 2.81183958,  6.06348991],       [ 0.38437188,  3.97612476],       [ 0.78385758,  3.51130366],       [ 2.4660182 ,  5.92876148],       [ 1.49262238,  4.71821594],       [ 2.48910785,  5.41845226],       [ 1.64626276,  5.73888969],       [ 0.18166411,  3.20764947],       [ 1.27399302,  5.25364017],       [ 6.45477343,  9.76449585],       [ 5.62793493,  9.69768524],       [ 1.22685778,  4.57004976],       [ 2.23420763,  5.36140966],       [ 2.61838675,  6.44842482],       [ 3.13290215,  6.02157974],       [ 2.39926934,  6.17144346],       [ 1.96147966,  5.22125435],       [ 1.05555797,  4.60408401],       [ 0.47128952,  3.3524251 ],       [ 2.27424955,  5.32994127],       [ 0.        ,  4.15531623],       [ 3.1903224 ,  6.20626545],       [ 0.10864222,  4.20744896],       [ 0.93573034,  4.32278776],       [ 2.05383825,  5.91329384],       [ 1.10445154,  4.23083639],       [ 0.99990809,  3.9579854 ],       [ 3.06466532,  6.77141476],       [ 2.98544741,  6.30615807],       [ 0.        ,  5.29311025],       [ 1.72536099,  4.66085243],       [ 4.70028353,  8.89580536],       [ 0.88509643,  3.84601545],       [ 2.28318644,  5.39097309],       [ 2.88368058,  7.14670277],       [ 3.09759402,  6.17875528],       [ 4.49066734,  8.99823284],       [ 0.87916458,  3.61538315],       [ 0.68764806,  4.46042871]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   9.21419296e+01],       [  5.47000000e+02,   1.43196991e+02],       [  1.73200000e+03,   4.18444176e+01],       [  5.47700000e+03,   4.24815655e+00],       [  3.16220000e+04,   1.40256569e-01]]
SpectrumError = [[  1.73000000e+02,   9.20486450e-02,   1.86193542e+02],       [  5.47000000e+02,   1.24460693e+02,   1.62175598e+02],       [  1.73200000e+03,   3.74880867e+01,   4.62127113e+01],       [  5.47700000e+03,   3.24684286e+00,   5.32700634e+00],       [  3.16220000e+04,   0.00000000e+00,   7.21551284e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]