Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.        ,  0.53652239,  0.19863291,        0.09706783,  0.        ,  0.07973482,  0.90256023,  1.69969893,        0.        ,  1.08010554,  0.        ,  0.72943699,  0.        ,        1.01019466,  0.34474581,  0.        ,  0.60758781,  0.6543203 ,        0.19626865,  0.        ,  0.32098305,  0.        ,  0.        ,        0.8724249 ,  0.43436718,  0.        ,  0.68092757,  0.10391536,        0.26687261,  0.        ,  0.93968999,  0.        ,  0.3245708 ,        0.31775635,  0.48039088,  0.        ,  0.        ,  0.97703159,        0.95410347,  0.        ,  0.31346953,  1.10213816,  0.78304917,        0.        ,  0.20532122,  0.        ]
FluxHistoryError = [[ 0.        ,  1.44239807],       [ 0.        ,  1.26638758],       [ 0.        ,  1.30864966],       [ 0.16575721,  1.16676748],       [ 0.        ,  2.07120152],       [ 0.        ,  1.71730018],       [ 0.        ,  1.84417057],       [ 0.        ,  1.96145178],       [ 0.25272119,  1.77032745],       [ 0.92876136,  2.64128709],       [ 0.        ,  1.28021526],       [ 0.51397538,  1.80974555],       [ 0.        ,  1.25797069],       [ 0.10399896,  1.5012064 ],       [ 0.        ,  0.8192668 ],       [ 0.52007782,  1.63900888],       [ 0.        ,  1.77174014],       [ 0.        ,  1.0425117 ],       [ 0.13782212,  1.31338406],       [ 0.14699543,  1.30209959],       [ 0.        ,  1.24225625],       [ 0.        ,  1.39496315],       [ 0.        ,  1.58415961],       [ 0.        ,  1.57521069],       [ 0.        ,  0.87608331],       [ 0.35963804,  1.56435394],       [ 0.        ,  1.8460573 ],       [ 0.        ,  1.38873661],       [ 0.28762674,  1.21235037],       [ 0.        ,  1.17986967],       [ 0.        ,  1.6405668 ],       [ 0.        ,  1.40501058],       [ 0.21306235,  1.80911827],       [ 0.        ,  0.97306377],       [ 0.        ,  1.49901965],       [ 0.        ,  2.01389235],       [ 0.        ,  2.07981989],       [ 0.        ,  1.06748962],       [ 0.        ,  1.2501905 ],       [ 0.48312235,  1.62346554],       [ 0.5312776 ,  1.50791407],       [ 0.        ,  1.45946908],       [ 0.03715813,  0.76752079],       [ 0.51318377,  1.84389877],       [ 0.34047487,  1.3878932 ],       [ 0.        ,  1.35204542],       [ 0.        ,  1.71853998],       [ 0.        ,  1.37296808]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.62583981e+01],       [  5.47000000e+02,   1.03871241e+01],       [  1.73200000e+03,   1.73491538e+00],       [  5.47700000e+03,   9.42587793e-01],       [  3.16220000e+04,   6.72322631e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   8.01755238e+01],       [  5.47000000e+02,   5.46461916e+00,   1.54165688e+01],       [  1.73200000e+03,   9.43433523e-01,   2.63902140e+00],       [  5.47700000e+03,   5.97205162e-01,   1.37013388e+00],       [  3.16220000e+04,   4.61612523e-01,   9.38913584e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]