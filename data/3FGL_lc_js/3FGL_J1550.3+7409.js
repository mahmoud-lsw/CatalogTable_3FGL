Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.12393995,  0.71607673,  0.        ,  0.        ,  0.36699098,        0.        ,  0.45429131,  6.23041582,  0.        ,  2.00985122,        0.16723995,  1.4947691 ,  3.43242478,  2.33739114,  0.        ,        0.        ,  1.50010562,  0.18857826,  0.        ,  0.11111332,        0.        ,  0.        ,  2.42709541,  0.        ,  0.25845191,        0.15763918,  0.        ,  1.18744016,  0.        ,  0.91597146,        0.43157074,  2.71586657,  0.37067512,  1.95615506,  1.84922981,        1.07097065,  0.        ,  0.59404308,  0.99100995,  1.3533951 ,        0.        ,  0.80605531,  1.28932178,  0.        ,  3.5220933 ,        0.61671174,  0.64417887,  0.        ]
FluxHistoryError = [[ 0.        ,  3.12189026],       [ 0.        ,  3.25575578],       [ 0.        ,  1.7266531 ],       [ 0.        ,  2.73147345],       [ 0.        ,  2.52463597],       [ 0.        ,  2.60761094],       [ 0.        ,  2.71589777],       [ 4.4273653 ,  8.15157223],       [ 0.        ,  2.33243847],       [ 0.78788078,  3.34852266],       [ 0.        ,  3.24043398],       [ 0.61644912,  2.54618168],       [ 2.03820729,  4.96211338],       [ 1.23613572,  3.48144054],       [ 0.        ,  1.83726311],       [ 0.        ,  2.33025241],       [ 0.67301565,  2.48648405],       [ 0.        ,  2.63861383],       [ 0.        ,  1.8398447 ],       [ 0.        ,  2.41918135],       [ 0.        ,  1.36604857],       [ 0.        ,  1.18605006],       [ 1.36244726,  3.55801153],       [ 0.        ,  1.87741578],       [ 0.        ,  2.30385181],       [ 0.        ,  2.31450811],       [ 0.        ,  1.54495704],       [ 0.22069907,  2.25811124],       [ 0.        ,  1.14177811],       [ 0.        ,  3.04055947],       [ 0.        ,  2.15910336],       [ 1.66684937,  3.87120152],       [ 0.        ,  2.72416762],       [ 0.92121565,  3.06358624],       [ 0.87241101,  2.93008971],       [ 0.32274866,  2.01468372],       [ 0.        ,  1.61497283],       [ 0.        ,  2.7064057 ],       [ 0.19270718,  2.0420022 ],       [ 0.39448857,  2.44297171],       [ 0.        ,  1.95998895],       [ 0.01273841,  1.80190992],       [ 0.16307485,  2.51171184],       [ 0.        ,  1.74068618],       [ 2.24916649,  4.88147593],       [ 0.        ,  2.80636299],       [ 0.        ,  2.68994713],       [ 0.        ,  2.058393  ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   7.02942963e+01],       [  5.47000000e+02,   1.22865105e+01],       [  1.73200000e+03,   3.57115448e-01],       [  5.47700000e+03,   4.30573672e-01],       [  3.16220000e+04,   1.08559757e-01]]
SpectrumError = [[  1.73000000e+02,   4.87483139e+01,   9.21846619e+01],       [  5.47000000e+02,   8.88062477e+00,   1.57788286e+01],       [  1.73200000e+03,   0.00000000e+00,   1.55435866e+00],       [  5.47700000e+03,   2.49594137e-01,   6.52554870e-01],       [  3.16220000e+04,   4.07577008e-02,   2.15014100e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]