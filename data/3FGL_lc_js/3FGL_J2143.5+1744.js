Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 15.13402843,  17.49645042,   9.39166641,  10.68451691,         6.05460978,  17.79728508,  22.19723129,  21.87067986,        33.1023407 ,  20.88949394,   6.85328627,   8.33847427,         7.81383276,  11.50652218,  17.50281906,  21.72018433,        12.2764225 ,  22.99171448,  21.44262505,  21.56614113,        10.50428486,  11.68626881,   8.37561321,   7.51800537,         5.98506498,  18.43469429,  25.51857948,  17.3478775 ,        16.89520073,  23.28744888,  25.45070076,  19.55865669,         7.81855345,   5.1459322 ,  15.88465023,  10.53148937,        12.37619686,  10.47926807,   9.50274467,  17.35848808,         7.50531101,   1.97215486,  12.61619377,  16.79693985,         9.18935585,   6.95964956,   9.1357584 ,  10.33032227]
FluxHistoryError = [[ 13.1830883 ,  17.17054367],       [ 15.282341  ,  19.81353378],       [  7.68134403,  11.22042084],       [  8.9378624 ,  12.52106571],       [  4.48109388,   7.79434061],       [ 15.83676529,  19.83362961],       [ 19.82393265,  24.6632843 ],       [ 19.62202644,  24.20384598],       [ 30.31478882,  35.88989258],       [ 18.66966248,  23.20043945],       [  5.17129517,   8.63318634],       [  6.60527372,  10.15793324],       [  6.1278553 ,   9.59659672],       [  9.44789886,  13.68361092],       [ 15.09333229,  19.99425125],       [ 19.32125664,  24.23775673],       [ 10.18696308,  14.48543739],       [ 20.35996246,  25.71126366],       [ 18.93221664,  24.06103516],       [ 19.04966927,  24.17942429],       [  8.60671139,  12.51778221],       [  9.56440258,  13.91334629],       [  6.40513611,  10.48122025],       [  5.50418472,   9.70685291],       [  4.17256403,   7.96839046],       [ 15.81457043,  21.18022156],       [ 23.04681969,  28.0847168 ],       [ 15.15824127,  19.66717529],       [ 14.67038727,  19.2210865 ],       [ 20.71967888,  25.94722176],       [ 22.69212914,  28.31886864],       [ 17.33262062,  21.87150192],       [  5.84652328,   9.94488907],       [  3.45462799,   6.99743366],       [ 13.75571728,  18.14567947],       [  8.38514328,  12.81994438],       [ 10.25303268,  14.61337185],       [  8.18693256,  12.93353653],       [  7.55568123,  11.58119106],       [ 14.98343372,  19.84751701],       [  5.61533213,   9.5476799 ],       [  0.56921351,   3.55891228],       [ 10.17331505,  15.18153   ],       [ 14.53880596,  19.19566536],       [  7.27635765,  11.22839451],       [  5.19718504,   8.83431721],       [  7.19752026,  11.18640614],       [  8.19305897,  12.60356617]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.08262402e+03],       [  5.47000000e+02,   2.57133240e+02],       [  1.73200000e+03,   3.88356361e+01],       [  5.47700000e+03,   4.98852825e+00],       [  3.16220000e+04,   6.30488694e-01]]
SpectrumError = [[  1.73000000e+02,   1.03398987e+03,   1.13125818e+03],       [  5.47000000e+02,   2.48134552e+02,   2.66131927e+02],       [  1.73200000e+03,   3.65706215e+01,   4.11006508e+01],       [  5.47700000e+03,   4.32003498e+00,   5.71068811e+00],       [  3.16220000e+04,   4.24555779e-01,   8.88050318e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]