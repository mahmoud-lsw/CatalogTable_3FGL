Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 75.71266174,  63.05208969,  79.63277435,  65.14278412,        54.93542862,  66.22577667,  48.28485107,  75.96283722,        92.72661591,  89.53412628,  98.72397614,  91.99498749,        95.14604187,  79.47451782,  97.40203857,  77.12374115,        83.80336761,  97.50874329,  89.46766663,  87.33917236,        89.26332855,  97.64942169,  84.24898529,  84.93669128,        63.71245193,  89.09373474,  73.60443878,  67.53811646,        79.22830963,  95.83188629,  90.24597168,  84.45262909,        73.17864227,  86.04732513,  76.81717682,  78.08984375,        80.63143158,  85.82889557,  78.86186981,  83.90926361,        69.07440948,  70.94473267,  74.30583954,  70.95769501,        81.30343628,  66.95456696,  71.74725342,  63.54666901]
FluxHistoryError = [[  70.96619415,   80.45912933],       [  58.8350029 ,   67.2691803 ],       [  74.84275055,   84.42279816],       [  61.0134964 ,   69.27207184],       [  50.54740524,   59.323452  ],       [  61.96842575,   70.48312378],       [  44.12400818,   52.44569397],       [  71.03460693,   80.8910675 ],       [  88.09719849,   97.35603333],       [  84.78627777,   94.28197479],       [  93.92149353,  103.52645874],       [  87.5790863 ,   96.41088867],       [  90.51478577,   99.77729797],       [  75.43849945,   83.51053619],       [  92.86483765,  101.9392395 ],       [  72.95803833,   81.28944397],       [  79.67675781,   87.92997742],       [  93.00346375,  102.01402283],       [  85.3199234 ,   93.61540985],       [  83.18249512,   91.49584961],       [  84.90379333,   93.62286377],       [  93.07466125,  102.22418213],       [  80.01980591,   88.47816467],       [  80.78388214,   89.08950043],       [  59.83679962,   67.58810425],       [  84.76724243,   93.42022705],       [  69.35554504,   77.85333252],       [  63.786026  ,   71.29020691],       [  74.83648682,   83.62013245],       [  91.3260498 ,  100.33772278],       [  86.05718994,   94.43475342],       [  80.02867126,   88.87658691],       [  69.14437103,   77.21291351],       [  81.58890533,   90.50574493],       [  72.84619141,   80.78816223],       [  73.95327759,   82.22640991],       [  76.64278412,   84.62007904],       [  81.59771729,   90.06007385],       [  74.55561066,   83.16812897],       [  80.03580475,   87.78272247],       [  65.01567078,   73.13314819],       [  67.1472168 ,   74.74224854],       [  70.25968933,   78.35198975],       [  67.19651794,   74.71887207],       [  77.10505676,   85.5018158 ],       [  62.96648026,   70.94264984],       [  67.79148865,   75.70301819],       [  59.61154556,   67.48179626]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.55270166e+03],       [  5.47000000e+02,   1.96272693e+03],       [  1.73200000e+03,   3.87100647e+02],       [  5.47700000e+03,   6.51077881e+01],       [  3.16220000e+04,   5.13048315e+00]]
SpectrumError = [[  1.73000000e+02,   5.42792822e+03,   5.67747510e+03],       [  5.47000000e+02,   1.94176721e+03,   1.98368665e+03],       [  1.73200000e+03,   3.81220825e+02,   3.92980469e+02],       [  5.47700000e+03,   6.30393600e+01,   6.71762161e+01],       [  3.16220000e+04,   4.57383347e+00,   5.72620440e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]