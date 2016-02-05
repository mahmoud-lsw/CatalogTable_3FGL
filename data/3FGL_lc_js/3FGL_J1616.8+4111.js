Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.25933513,  0.        ,  0.57312506,  0.46452788,  0.14938663,        0.36240742,  1.12649798,  1.73816133,  1.75432396,  1.296579  ,        0.        ,  1.40801597,  2.32968664,  2.42704248,  0.        ,        1.1192584 ,  0.37315992,  0.        ,  0.20218574,  0.36501148,        0.        ,  0.        ,  0.32819867,  0.        ,  0.96491581,        0.        ,  0.        ,  1.47284234,  0.8970834 ,  0.        ,        0.        ,  1.64939761,  0.        ,  0.        ,  0.76909411,        0.        ,  0.11017204,  0.        ,  1.42155886,  1.11624789,        0.        ,  0.61580777,  0.08166876,  0.        ,  0.        ,        0.        ,  1.39080656,  0.92629397]
FluxHistoryError = [[ 0.        ,  1.96657071],       [ 0.        ,  1.2332412 ],       [ 0.19109887,  1.12291527],       [ 0.        ,  2.48485163],       [ 0.        ,  1.65666161],       [ 0.        ,  1.87680241],       [ 0.4347192 ,  2.08530688],       [ 0.66395271,  3.01195097],       [ 0.74365449,  2.93717718],       [ 0.57318211,  2.24125957],       [ 0.        ,  1.75615668],       [ 0.64433718,  2.36949015],       [ 1.29753959,  3.53369093],       [ 1.46592677,  3.58075953],       [ 0.        ,  1.78548217],       [ 0.3431918 ,  2.09436989],       [ 0.        ,  2.2723296 ],       [ 0.        ,  1.3840096 ],       [ 0.        ,  2.13922022],       [ 0.        ,  1.8571631 ],       [ 0.        ,  2.23767757],       [ 0.        ,  2.23293757],       [ 0.        ,  1.7319293 ],       [ 0.        ,  1.78863943],       [ 0.29598874,  1.84794927],       [ 0.        ,  2.08694601],       [ 0.        ,  1.29292285],       [ 0.67586297,  2.40979934],       [ 0.        ,  2.85512972],       [ 0.        ,  1.91343427],       [ 0.        ,  1.20837617],       [ 0.8525697 ,  2.61810565],       [ 0.        ,  1.96416354],       [ 0.        ,  1.57630956],       [ 0.26349437,  1.47197175],       [ 0.        ,  1.52055275],       [ 0.        ,  1.69441307],       [ 0.        ,  1.32737112],       [ 0.5609954 ,  2.42900419],       [ 0.28685385,  2.13039184],       [ 0.        ,  1.65239751],       [ 0.        ,  2.70097136],       [ 0.        ,  1.81387964],       [ 0.        ,  1.82013178],       [ 0.        ,  2.2212007 ],       [ 0.        ,  1.32948589],       [ 0.35642469,  2.59575534],       [ 0.20710212,  1.8029747 ]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.49116402e+01],       [  5.47000000e+02,   8.39770603e+00],       [  1.73200000e+03,   2.34521842e+00],       [  5.47700000e+03,   3.51636142e-01],       [  3.16220000e+04,   1.41392384e-05]]
SpectrumError = [[  1.73000000e+02,   7.31601334e+00,   6.26988678e+01],       [  5.47000000e+02,   5.08248377e+00,   1.18757343e+01],       [  1.73200000e+03,   1.68254280e+00,   3.08131504e+00],       [  5.47700000e+03,   1.74491331e-01,   5.87852001e-01],       [  3.16220000e+04,   0.00000000e+00,   2.18225075e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]