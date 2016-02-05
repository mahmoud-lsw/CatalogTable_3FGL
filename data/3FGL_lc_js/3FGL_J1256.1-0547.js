Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [  37.22712708,   29.06364822,   30.47147179,   98.79697418,        123.80309296,   81.78907013,  131.72447205,   40.55106735,         27.48313141,   26.55760002,   38.02999878,   85.31920624,         83.74995422,   69.37810516,   57.41016388,   41.76109695,         35.94575119,   28.05811119,   26.53986359,   30.95684624,         17.60017014,   12.01034546,   12.70650768,   13.21350288,         16.55300903,   73.30426788,   39.26588058,   41.89646912,         53.16775131,   40.55316544,   33.57953262,   24.26682854,         54.17089081,   82.89057159,   70.52642059,   32.111763  ,         39.71458435,   32.18680573,   21.26316071,   22.72288322,         21.48516846,   27.50697899,   15.86994076,   14.70768166,         17.1198101 ,   18.25214386,   14.41617298,    7.49227619]
FluxHistoryError = [[  34.39814377,   40.05611038],       [  26.61425781,   31.51303864],       [  27.86779213,   33.07515335],       [  95.03059387,  102.56335449],       [ 120.22717285,  127.37901306],       [  78.40387726,   85.174263  ],       [ 127.99206543,  135.45687866],       [  37.50568771,   43.59644699],       [  25.16875839,   29.79750443],       [  24.11627388,   28.99892616],       [  35.37202454,   40.68797302],       [  82.04559326,   88.59281921],       [  80.00164795,   87.4982605 ],       [  65.87592316,   72.88028717],       [  53.19776535,   61.62256241],       [  38.38742065,   45.13477325],       [  32.71630096,   39.17520142],       [  24.9390831 ,   31.15730858],       [  23.76034546,   29.31938171],       [  27.69846535,   34.32290649],       [  15.36609268,   19.92677498],       [  10.00080204,   14.12545109],       [  10.65409946,   14.81819439],       [  11.20067406,   15.32480621],       [  14.27447319,   18.93712425],       [  69.10098267,   77.5075531 ],       [  35.67829514,   42.85346603],       [  38.96915054,   44.82378769],       [  49.36524963,   56.97025299],       [  37.75603104,   43.35029984],       [  30.55772018,   36.60134506],       [  21.49679947,   27.15362549],       [  50.43533707,   57.90644455],       [  78.41503143,   87.36611176],       [  66.86930084,   74.18354034],       [  29.05477142,   35.16875458],       [  36.75919342,   42.66997528],       [  29.1117382 ,   35.26187134],       [  18.54906464,   24.12902832],       [  20.42298126,   25.02278519],       [  18.95888329,   24.09496689],       [  25.23893356,   29.77502441],       [  13.56262112,   18.27881241],       [  12.42323112,   17.08967972],       [  14.71062088,   19.64060402],       [  15.68571377,   20.82015228],       [  12.34760761,   16.57579803],       [   5.33196449,    9.83348846]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.35780444e+03],       [  5.47000000e+02,   9.09813721e+02],       [  1.73200000e+03,   1.64888870e+02],       [  5.47700000e+03,   3.31589622e+01],       [  3.16220000e+04,   5.08047199e+00]]
SpectrumError = [[  1.73000000e+02,   3.30611816e+03,   3.40949072e+03],       [  5.47000000e+02,   8.95998474e+02,   9.23628967e+02],       [  1.73200000e+03,   1.60788742e+02,   1.68988998e+02],       [  5.47700000e+03,   3.14966888e+01,   3.48212357e+01],       [  3.16220000e+04,   4.45507812e+00,   5.75687313e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]