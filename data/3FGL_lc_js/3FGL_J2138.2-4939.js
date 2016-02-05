Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  2.83733654,  0.79910254,  0.        ,        0.28910854,  0.        ,  1.61442828,  0.81544912,  0.17186795,        1.51181912,  0.        ,  0.65714192,  2.85553527,  0.        ,        0.59336174,  0.89769137,  0.        ,  0.9482106 ,  2.16290808,        0.        ,  2.75169444,  2.20904016,  0.        ,  0.        ,        1.63589501,  0.        ,  2.12668633,  2.48721266,  0.21623245,        4.94512367,  3.83099246,  0.09933341,  0.        ,  2.15956187,        0.81549168,  0.        ,  1.82512403,  0.        ,  1.02233756,        1.80366623,  0.        ,  1.22167039,  1.71303165,  1.84820521,        1.66146648,  0.        ,  0.        ]
FluxHistoryError = [[ 0.        ,  1.63079369],       [ 0.        ,  2.72821712],       [ 1.54362583,  4.2973423 ],       [ 0.        ,  4.21261024],       [ 0.        ,  2.61242747],       [ 0.        ,  3.83391741],       [ 0.        ,  3.88131094],       [ 0.50783908,  2.92184782],       [ 0.        ,  3.98313367],       [ 0.        ,  2.63264929],       [ 0.09615791,  3.12418985],       [ 0.        ,  2.86841536],       [ 0.        ,  4.13604736],       [ 1.08185554,  4.76075506],       [ 0.        ,  1.90477514],       [ 0.        ,  3.88725746],       [ 0.        ,  3.20012176],       [ 0.        ,  2.60884333],       [ 0.        ,  3.7977432 ],       [ 0.73801386,  3.7796731 ],       [ 0.        ,  4.59063816],       [ 1.85117292,  3.79810429],       [ 0.        ,  6.26067257],       [ 0.        ,  2.65541124],       [ 0.        ,  1.69360137],       [ 0.52883077,  2.89060402],       [ 0.        ,  1.46383703],       [ 0.88420653,  3.59469986],       [ 1.05982101,  4.1213932 ],       [ 0.        ,  2.70775452],       [ 3.7023654 ,  6.28763866],       [ 1.90106428,  5.78873825],       [ 0.        ,  2.69538295],       [ 0.        ,  3.5108397 ],       [ 0.9758594 ,  3.50570202],       [ 0.        ,  3.57332993],       [ 0.        ,  3.76482058],       [ 0.08529246,  3.81020331],       [ 0.        ,  3.26794767],       [ 0.        ,  4.23760021],       [ 0.73638356,  3.06730843],       [ 0.        ,  2.15424418],       [ 0.43685061,  2.15635586],       [ 0.66559839,  3.00992322],       [ 0.62307966,  3.29064417],       [ 0.04992819,  3.61152959],       [ 0.        ,  1.76017606],       [ 0.        ,  2.55098486]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.65885315e+01],       [  5.47000000e+02,   1.74088554e+01],       [  1.73200000e+03,   2.25378656e+00],       [  5.47700000e+03,   4.11441654e-01],       [  3.16220000e+04,   1.54418143e-04]]
SpectrumError = [[  1.73000000e+02,   5.94921112e+00,   1.28155243e+02],       [  5.47000000e+02,   1.14862700e+01,   2.35689545e+01],       [  1.73200000e+03,   1.34025455e+00,   3.25344563e+00],       [  5.47700000e+03,   1.82930559e-01,   7.04039991e-01],       [  3.16220000e+04,   0.00000000e+00,   2.86530120e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]