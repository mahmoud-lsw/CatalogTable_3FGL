Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 43.82682037,  40.44319153,  50.43991089,  42.43714523,        46.56869888,  51.73164368,  49.76210403,  55.20758057,        48.21239471,  44.96606064,  47.538311  ,  50.8977356 ,        49.38576889,  44.05328369,  48.46851349,  49.95213699,        50.65869522,  48.70287323,  54.17089081,  44.91549683,        47.33295441,  42.93624496,  60.50327682,  41.02354431,        62.39577484,  51.31378937,  49.16325378,  51.02609253,        53.93776703,  52.48953629,  55.88851166,  51.77377701,        46.88611603,  52.49170303,  51.10542297,  50.0378418 ,        57.31069565,  58.20960617,  53.99239731,  47.34021759,        53.526474  ,  50.02976227,  50.17266846,  40.24177551,        45.75875473,  52.56190872,  49.62283707,  56.07812881]
FluxHistoryError = [[ 38.83143234,  48.912117  ],       [ 35.36345291,  45.6737175 ],       [ 45.70894241,  55.17087936],       [ 37.41090393,  47.6495285 ],       [ 41.6914978 ,  51.60338593],       [ 46.34850311,  57.17583466],       [ 44.52338028,  55.08979797],       [ 49.32184219,  61.22704315],       [ 42.5737915 ,  53.88717651],       [ 39.93829346,  50.09102249],       [ 42.2361412 ,  53.03491592],       [ 45.92935181,  55.86611938],       [ 44.15745544,  54.69218063],       [ 38.66314697,  49.79997253],       [ 43.10107803,  54.02638626],       [ 43.09342194,  56.98653412],       [ 45.14530945,  56.29779816],       [ 41.85857391,  55.90237427],       [ 48.62714767,  59.8904686 ],       [ 38.88926315,  51.09312057],       [ 41.23527145,  53.63721466],       [ 37.99269867,  48.07762146],       [ 53.41252899,  67.87754822],       [ 35.90091324,  46.3120842 ],       [ 56.33018875,  68.46135712],       [ 45.9812088 ,  56.80054474],       [ 43.14907455,  55.37076569],       [ 45.16607285,  57.12033463],       [ 48.4498558 ,  59.60838318],       [ 46.21601105,  58.93933487],       [ 50.32700348,  61.45001984],       [ 45.34971619,  58.43922424],       [ 41.42316437,  52.51024628],       [ 46.32548523,  58.8642807 ],       [ 45.28689194,  57.1276741 ],       [ 44.37638474,  55.88539886],       [ 50.6099472 ,  64.10817719],       [ 52.45373154,  63.95806122],       [ 46.93712234,  61.30435181],       [ 42.07382965,  52.82132339],       [ 47.10939789,  60.1671257 ],       [ 44.25104523,  55.98035049],       [ 44.90299606,  55.54124069],       [ 34.31391907,  46.47461319],       [ 40.96345901,  50.72039032],       [ 46.01322556,  59.45368576],       [ 44.09472275,  55.33365631],       [ 49.30987549,  63.0350914 ]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.21122534e+03],       [  5.47000000e+02,   1.16078345e+03],       [  1.73200000e+03,   2.37381378e+02],       [  5.47700000e+03,   3.09125824e+01],       [  3.16220000e+04,   8.58595312e-01]]
SpectrumError = [[  1.73000000e+02,   3.05634961e+03,   3.36610107e+03],       [  5.47000000e+02,   1.13116052e+03,   1.19040637e+03],       [  1.73200000e+03,   2.30715424e+02,   2.44047333e+02],       [  5.47700000e+03,   2.89884491e+01,   3.28367157e+01],       [  3.16220000e+04,   5.14791429e-01,   1.23836088e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]