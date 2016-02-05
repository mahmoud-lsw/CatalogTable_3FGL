Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.24298501,  0.20865865,  0.75446057,  0.99787074,  1.43341064,        2.85858202,  1.74868906,  1.87921834,  0.17056777,  0.        ,        1.82745612,  1.56458509,  0.21119571,  0.        ,  1.24190331,        3.00703239,  1.57696843,  0.        ,  0.88429415,  0.        ,        2.42493558,  0.89833909,  2.08175373,  1.38785136,  0.        ,        0.67991793,  1.73306298,  0.        ,  0.        ,  0.        ,        0.44067782,  0.        ,  1.16775262,  0.88286328,  0.50078464,        1.44043076,  0.71841562,  0.535007  ,  3.33436346,  0.60500997,        0.        ,  2.83312297,  1.33308375,  0.        ,  4.37928057,        1.60535669,  0.        ,  0.08472585]
FluxHistoryError = [[ 1.03292012,  3.77702808],       [ 0.        ,  3.07352491],       [ 0.        ,  3.28175855],       [ 0.        ,  3.45919758],       [ 0.25226033,  2.91309547],       [ 1.54302204,  4.31966257],       [ 0.33992529,  3.34052849],       [ 0.26789284,  3.67278481],       [ 0.        ,  3.64368655],       [ 0.        ,  2.75999165],       [ 0.56555903,  3.233922  ],       [ 0.39153445,  2.96489763],       [ 0.        ,  3.18749189],       [ 0.        ,  4.05081701],       [ 0.        ,  5.15577388],       [ 1.53342628,  4.79788399],       [ 0.1584419 ,  3.30088353],       [ 0.        ,  2.7455883 ],       [ 0.        ,  3.69210017],       [ 0.        ,  3.63711834],       [ 1.09032607,  4.05149603],       [ 0.        ,  3.97502261],       [ 0.5208056 ,  3.81355381],       [ 0.24797547,  2.87198687],       [ 0.        ,  3.47283316],       [ 0.        ,  4.42120659],       [ 0.        ,  5.80160499],       [ 0.        ,  2.34935904],       [ 0.        ,  2.59115148],       [ 0.        ,  2.65272117],       [ 0.        ,  4.23214978],       [ 0.        ,  3.47826862],       [ 0.        ,  5.18483579],       [ 0.        ,  3.8337605 ],       [ 0.        ,  3.45447636],       [ 0.        ,  4.85934246],       [ 0.        ,  4.12867677],       [ 0.        ,  4.71118832],       [ 1.7006532 ,  5.24934006],       [ 0.        ,  3.77644104],       [ 0.        ,  3.82996225],       [ 0.8976624 ,  4.95408392],       [ 0.        ,  5.3630563 ],       [ 0.        ,  3.01441216],       [ 2.40232611,  6.50072002],       [ 0.        ,  5.06867027],       [ 0.        ,  2.8114717 ],       [ 0.        ,  3.56663465]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.87211456e+01],       [  5.47000000e+02,   1.71423626e+01],       [  1.73200000e+03,   9.91114676e-01],       [  5.47700000e+03,   2.76519805e-01],       [  3.16220000e+04,   1.99332818e-01]]
SpectrumError = [[  1.73000000e+02,   2.21772919e+01,   9.63979034e+01],       [  5.47000000e+02,   1.19831848e+01,   2.24168739e+01],       [  1.73200000e+03,   2.72983015e-01,   1.80905461e+00],       [  5.47700000e+03,   9.65608209e-02,   5.31984329e-01],       [  3.16220000e+04,   8.86971205e-02,   3.71062338e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]