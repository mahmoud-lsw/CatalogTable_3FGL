Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  1.42107868,   3.71744585,   3.90637851,   2.06045556,         4.70573568,   3.70519161,   1.67322624,   3.95534277,         5.30534315,   2.94896102,   4.07261419,   2.22949386,         1.53687024,   3.14916515,   6.23906851,   6.45032883,         5.65655518,   6.34157181,   6.59016037,   3.78582859,         3.7372086 ,   3.81150866,   6.23005152,   4.44911385,         3.84242868,   4.94023228,   5.57001591,   5.102314  ,         5.59159565,   3.98194361,   6.34109592,   7.18257666,         6.63889551,  10.19521523,   7.82360792,   4.71573305,         6.58184767,   5.39698267,   7.09580374,   4.77958536,         2.47027373,   4.71737671,   4.48232746,   4.93852091,         6.82803774,   3.56172705,   6.96580362,   5.21592712]
FluxHistoryError = [[  0.48436511,   2.53363013],       [  2.71120811,   4.83598995],       [  2.80353546,   5.1366272 ],       [  1.2157371 ,   3.03295684],       [  3.59979582,   5.93394279],       [  2.69443798,   4.83391047],       [  0.78703636,   2.68048549],       [  2.7989552 ,   5.26290512],       [  4.21988964,   6.48450851],       [  1.75854433,   4.30596447],       [  3.13888001,   5.10395432],       [  1.44698811,   3.1568315 ],       [  0.79657179,   2.46031976],       [  2.18698668,   4.22961235],       [  5.03710365,   7.53450489],       [  5.20230722,   7.85099697],       [  4.45631742,   6.93847036],       [  5.02211189,   7.74390268],       [  5.33542585,   7.94885397],       [  2.84801006,   4.82844114],       [  2.59829807,   5.0089016 ],       [  2.81207538,   4.93741465],       [  4.89180756,   7.66781521],       [  3.41101265,   5.59795427],       [  2.77282858,   5.04642868],       [  3.90201116,   6.08935118],       [  4.34498882,   6.89691019],       [  4.01625156,   6.2686801 ],       [  4.38156652,   6.91115713],       [  3.00351095,   5.0884223 ],       [  5.22679758,   7.53007078],       [  5.80815983,   8.67036915],       [  5.4074564 ,   7.98454189],       [  8.70176315,  11.78297424],       [  6.49002361,   9.2501564 ],       [  3.69142532,   5.8452692 ],       [  5.31288671,   7.97337818],       [  4.23136377,   6.67050648],       [  5.79127121,   8.50557899],       [  3.70361924,   5.96031475],       [  1.64454436,   3.42625618],       [  3.60535479,   5.93909359],       [  3.45793796,   5.61026764],       [  3.79742217,   6.22502995],       [  5.64802647,   8.10900688],       [  2.44101071,   4.81060171],       [  5.69809151,   8.33671474],       [  4.12642956,   6.40924549]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   2.60902069e+02],       [  5.47000000e+02,   1.10451424e+02],       [  1.73200000e+03,   3.40022736e+01],       [  5.47700000e+03,   1.11340694e+01],       [  3.16220000e+04,   3.99387455e+00]]
SpectrumError = [[  1.73000000e+02,   2.27134064e+02,   2.96056915e+02],       [  5.47000000e+02,   1.03557594e+02,   1.17345253e+02],       [  1.73200000e+03,   3.19066334e+01,   3.60979156e+01],       [  5.47700000e+03,   1.01782398e+01,   1.20898991e+01],       [  3.16220000e+04,   3.47733521e+00,   4.55802774e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]