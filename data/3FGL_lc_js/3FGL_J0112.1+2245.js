Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  5.96124458,   5.89544964,   8.22071457,   4.99392462,         4.59388161,   5.04805994,   2.94601536,   3.30660653,         4.67064381,   4.31030846,   5.47160292,   7.38333225,         8.93983555,   9.49375534,   6.76500273,   7.11875629,        10.45283127,   6.9205966 ,   4.56394339,   9.44682884,        16.93344116,   7.39057255,   7.16029263,   6.70290232,         9.70714855,   8.68421745,   6.03354788,   2.44981647,         4.03836203,   9.28735352,  21.3705616 ,  16.97372818,         8.3916111 ,   2.52155423,   2.28124213,   3.9814744 ,         5.94637394,   8.27738094,   7.64330387,   8.70240593,        13.76188564,  13.70534039,  14.47845554,   8.7017107 ,        11.07095337,   7.51378202,   7.74854803,   8.02681446]
FluxHistoryError = [[  4.98694468,   7.01308823],       [  4.92000008,   6.94563484],       [  7.12670183,   9.38214302],       [  4.09931755,   5.95704079],       [  3.65767956,   5.60965872],       [  4.19185781,   5.96794271],       [  2.07451701,   3.91007566],       [  2.48139572,   4.21998787],       [  3.74013209,   5.67547798],       [  3.42843819,   5.29173088],       [  4.53773499,   6.47255135],       [  6.26887608,   8.56517792],       [  7.87006807,  10.07134247],       [  8.25016689,  10.80178928],       [  5.60548735,   8.02016258],       [  5.97395468,   8.35373974],       [  9.14942741,  11.83333111],       [  5.84253883,   8.07611084],       [  3.59084535,   5.63216686],       [  8.12071991,  10.86578655],       [ 15.43709278,  18.4297905 ],       [  6.29275703,   8.56757069],       [  6.01596355,   8.39202881],       [  5.55291271,   7.92885923],       [  8.43642521,  11.05961895],       [  7.39667892,  10.05635071],       [  4.92346811,   7.24114418],       [  1.71516061,   3.29234433],       [  3.13414574,   5.02825928],       [  8.06232262,  10.58942413],       [ 19.67908478,  23.06203842],       [ 15.28043365,  18.66702271],       [  7.07121277,   9.80724716],       [  1.74839294,   3.40777636],       [  1.50611973,   3.1634109 ],       [  3.0830431 ,   4.96781254],       [  4.87769651,   7.08992004],       [  7.07674265,   9.5849781 ],       [  6.44079638,   8.94257355],       [  7.55931425,   9.92125893],       [ 12.24673367,  15.35887623],       [ 12.31884575,  15.16355705],       [ 12.97048378,  16.06691933],       [  7.51110268,   9.97664452],       [  9.69961452,  12.49739933],       [  6.39010239,   8.71304512],       [  6.60940456,   8.9690609 ],       [  6.9048543 ,   9.24165726]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.66185791e+02],       [  5.47000000e+02,   2.07239182e+02],       [  1.73200000e+03,   6.40398178e+01],       [  5.47700000e+03,   1.95500317e+01],       [  3.16220000e+04,   4.64835930e+00]]
SpectrumError = [[  1.73000000e+02,   4.36786896e+02,   4.95584686e+02],       [  5.47000000e+02,   2.00073624e+02,   2.14404739e+02],       [  1.73200000e+03,   6.14867783e+01,   6.65928574e+01],       [  5.47700000e+03,   1.83301353e+01,   2.07699280e+01],       [  3.16220000e+04,   4.07059431e+00,   5.27573729e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]