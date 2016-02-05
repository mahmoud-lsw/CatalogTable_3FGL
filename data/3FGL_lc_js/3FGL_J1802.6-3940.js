Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 28.13022423,  26.75788307,  15.45532608,  24.30143929,         7.50757122,   6.41678381,  10.56133842,   9.50272465,         9.65450859,  21.40990829,  29.18325233,  23.37832069,        53.84854889,  49.93319702,  35.93281174,  35.53489685,        39.12018585,  48.24279785,  39.73038864,  32.67641068,        12.36397648,   5.44303942,  13.89908028,   6.59951305,         8.59159851,   7.84291458,   4.99160099,   1.96015847,         3.77298689,   1.66610205,   1.97467983,   3.91977406,         4.7245121 ,   3.17863202,   4.00576448,   5.54689503,         4.80229712,   7.49292135,   5.7166543 ,   5.43350172,         7.89500713,  11.42656136,   8.94369316,   5.32291889,         6.10570145,   2.83355737,   6.22632837,   3.21159172]
FluxHistoryError = [[ 25.4183197 ,  30.84212875],       [ 24.02247429,  29.59547043],       [ 13.32623577,  17.64715767],       [ 21.71173096,  26.94876289],       [  5.66654396,   9.47163773],       [  4.5234971 ,   8.44909763],       [  8.62243557,  12.62421227],       [  7.47316694,  11.65568829],       [  7.5495224 ,  11.88319397],       [ 19.09710693,  23.80863953],       [ 26.2570343 ,  32.18735886],       [ 21.00901985,  25.83610153],       [ 50.44687271,  57.25022507],       [ 46.65810013,  53.20829391],       [ 33.31134796,  38.55427551],       [ 32.35425568,  38.71553802],       [ 36.36626816,  41.87410355],       [ 44.39232635,  52.09326935],       [ 37.00114059,  42.45963669],       [ 29.81334305,  35.5394783 ],       [ 10.19068909,  14.68323708],       [  3.92582178,   7.1113143 ],       [ 11.58699322,  16.3533783 ],       [  4.88500738,   8.35478687],       [  6.602355  ,  10.73312187],       [  6.10574722,   9.70518303],       [  3.15173578,   6.99275208],       [  0.70829213,   3.40547228],       [  2.38794088,   5.29589558],       [  0.43597817,   3.15679288],       [  0.78893244,   3.36129761],       [  2.09088111,   6.04032755],       [  3.14191151,   6.47506905],       [  1.75377858,   4.80633116],       [  2.66692448,   5.49568081],       [  3.89810634,   7.37012005],       [  2.96781683,   6.81896925],       [  5.66145229,   9.46231079],       [  3.58187652,   8.04431152],       [  3.93660116,   7.05195761],       [  5.93235064,  10.01925278],       [  9.42231178,  13.5478487 ],       [  7.19638729,  10.79292011],       [  3.3777492 ,   7.46945763],       [  4.34941006,   8.01411438],       [  1.11835814,   4.80844116],       [  4.6941905 ,   7.86829281],       [  1.4647826 ,   5.25266266]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.15702222e+03],       [  5.47000000e+02,   3.90240723e+02],       [  1.73200000e+03,   7.71867828e+01],       [  5.47700000e+03,   1.73217087e+01],       [  3.16220000e+04,   2.25492334e+00]]
SpectrumError = [[  1.73000000e+02,   1.08571130e+03,   1.22833313e+03],       [  5.47000000e+02,   3.77499634e+02,   4.02981812e+02],       [  1.73200000e+03,   7.38993301e+01,   8.04742355e+01],       [  5.47700000e+03,   1.60347805e+01,   1.86086369e+01],       [  3.16220000e+04,   1.84159017e+00,   2.72795677e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]