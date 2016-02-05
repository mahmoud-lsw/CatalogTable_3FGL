Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 65.94881439,  60.15761948,  57.65042496,  52.20420074,        62.80715942,  64.07875824,  58.90493774,  70.46994019,        66.75792694,  59.77788544,  51.72402573,  60.16921234,        57.62727737,  62.23637772,  67.6427002 ,  56.46672821,        65.07556915,  66.13204956,  60.62860107,  66.31355286,        56.6994133 ,  66.05925751,  59.5408783 ,  65.50786591,        71.20308685,  60.03057098,  62.27262115,  52.64487839,        68.34480286,  78.28250885,  53.8854866 ,  63.1397438 ,        58.70124817,  50.51540375,  51.12568283,  71.21115875,        58.06450653,  56.59614563,  64.32001495,  57.73412323,        60.93787766,  64.76222229,  57.44886017,  74.65837097,        58.82727814,  53.85128403,  69.54699707,  64.51569366]
FluxHistoryError = [[ 60.14855194,  71.74907684],       [ 54.35601425,  65.95922089],       [ 52.38833237,  62.91251755],       [ 46.59242249,  57.96093369],       [ 56.96868515,  68.64563751],       [ 58.29083252,  69.86668396],       [ 53.12861252,  64.68126678],       [ 64.34298706,  76.59689331],       [ 60.83516693,  72.68068695],       [ 54.2094574 ,  65.34631348],       [ 45.99492645,  57.57307053],       [ 54.74347305,  65.59495544],       [ 51.86805725,  63.3864975 ],       [ 55.812397  ,  68.78432465],       [ 61.98705673,  73.29834747],       [ 49.26255417,  63.83537674],       [ 58.8881073 ,  71.26303101],       [ 58.93808746,  73.53121948],       [ 54.8891716 ,  66.36803436],       [ 59.38471222,  73.42907715],       [ 50.18722534,  63.34166718],       [ 60.20407867,  71.91443634],       [ 52.27494812,  67.09581757],       [ 59.65532684,  71.36040497],       [ 64.11893463,  78.28723907],       [ 54.19668961,  65.86444855],       [ 55.84182739,  68.82272339],       [ 46.54210281,  58.87411118],       [ 62.50048828,  74.18911743],       [ 71.24351501,  85.32150269],       [ 48.44842529,  59.41472244],       [ 56.54871368,  69.992836  ],       [ 52.8940239 ,  64.50846863],       [ 44.16581726,  57.02510071],       [ 44.99947739,  57.42641449],       [ 65.24186707,  77.18045044],       [ 50.95007324,  65.37088776],       [ 50.77116394,  62.53725433],       [ 56.29299164,  72.54439545],       [ 52.30525208,  63.16299438],       [ 54.39421082,  67.69129181],       [ 58.79924011,  70.72520447],       [ 51.84315491,  63.05456543],       [ 67.39019775,  81.92654419],       [ 53.44040298,  64.2141571 ],       [ 47.29431152,  60.70598602],       [ 63.52492142,  75.56907654],       [ 57.60772705,  71.58144379]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.43061621e+03],       [  5.47000000e+02,   1.70971313e+03],       [  1.73200000e+03,   4.52682190e+02],       [  5.47700000e+03,   7.50606842e+01],       [  3.16220000e+04,   1.90647495e+00]]
SpectrumError = [[  1.73000000e+02,   3.22995850e+03,   3.63127393e+03],       [  5.47000000e+02,   1.66457422e+03,   1.75485205e+03],       [  1.73200000e+03,   4.41987946e+02,   4.63376434e+02],       [  5.47700000e+03,   7.17977982e+01,   7.83235703e+01],       [  3.16220000e+04,   1.37264597e+00,   2.51304054e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]