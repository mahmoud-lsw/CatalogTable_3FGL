Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.56433225,  1.47593987,  3.70009089,  1.20697403,  0.        ,        2.85612392,  2.48060393,  0.50624847,  0.28381199,  0.        ,        0.67745072,  0.        ,  1.3032999 ,  0.46797326,  4.65267706,        2.88922691,  1.52350163,  0.        ,  0.21566318,  2.02530527,        0.        ,  0.        ,  0.44583139,  1.29050517,  1.64833522,        1.75096691,  2.28122091,  0.        ,  0.31633064,  0.        ,        0.6174171 ,  0.        ,  2.91349602,  0.        ,  2.24829412,        0.        ,  2.32202649,  1.21802413,  3.70008206,  3.24603057,        1.29784715,  2.17204976,  1.24419725,  1.81708717,  0.        ,        1.626513  ,  0.        ,  0.        ]
FluxHistoryError = [[ 0.68273127,  4.80175877],       [ 0.        ,  5.44822347],       [ 1.5443089 ,  6.00225639],       [ 0.        ,  5.48592949],       [ 0.        ,  3.81391025],       [ 0.86930788,  4.89771175],       [ 0.68187797,  4.6643095 ],       [ 0.        ,  4.88420725],       [ 0.        ,  3.77263802],       [ 0.        ,  3.43068433],       [ 0.        ,  5.03471953],       [ 0.        ,  2.27037239],       [ 0.        ,  5.62715292],       [ 0.        ,  3.59983113],       [ 2.75398874,  6.83006573],       [ 1.33884239,  4.59701443],       [ 0.        ,  4.9909544 ],       [ 0.        ,  1.92792916],       [ 0.        ,  3.46064971],       [ 0.29058993,  3.95798731],       [ 0.        ,  2.21888947],       [ 0.        ,  2.52213192],       [ 0.        ,  3.08459458],       [ 0.        ,  4.79196215],       [ 0.34788716,  3.24716663],       [ 0.19135511,  3.52903581],       [ 0.45100594,  4.26668072],       [ 0.        ,  2.44054723],       [ 0.        ,  3.4819741 ],       [ 0.        ,  2.28329849],       [ 0.        ,  4.63527179],       [ 0.        ,  3.25268888],       [ 1.16989481,  4.91063786],       [ 0.        ,  2.54057574],       [ 0.93543339,  3.73805857],       [ 0.        ,  3.19771934],       [ 1.10416365,  3.79661393],       [ 0.        ,  5.4102267 ],       [ 2.02902079,  5.58580112],       [ 1.79544306,  4.94881392],       [ 0.        ,  4.95105612],       [ 0.51435888,  4.08362913],       [ 0.        ,  5.39307725],       [ 0.46319544,  3.39313102],       [ 0.        ,  3.29136014],       [ 0.17220938,  3.26783276],       [ 0.        ,  3.40592051],       [ 0.        ,  3.15095401]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   8.10905304e+01],       [  5.47000000e+02,   2.24842701e+01],       [  1.73200000e+03,   1.78721058e+00],       [  5.47700000e+03,   4.39643145e-01],       [  3.16220000e+04,   1.83069810e-01]]
SpectrumError = [[  1.73000000e+02,   3.56430435e+01,   1.27427460e+02],       [  5.47000000e+02,   1.59691620e+01,   2.91723766e+01],       [  1.73200000e+03,   6.97852850e-01,   2.96772242e+00],       [  5.47700000e+03,   1.55366510e-01,   7.84514666e-01],       [  3.16220000e+04,   8.01604614e-02,   3.39629114e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]