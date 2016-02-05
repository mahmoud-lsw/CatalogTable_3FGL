Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.        ,  0.        ,  0.58105755,  0.        ,        0.4096655 ,  0.44340301,  0.        ,  0.78427285,  0.        ,        0.476834  ,  0.34000611,  0.        ,  0.2744216 ,  0.96828336,        0.65164685,  0.        ,  0.68017066,  0.07958671,  1.56784952,        0.89133441,  0.83435369,  0.28926355,  0.70142323,  0.25583392,        0.        ,  0.60060287,  0.68673474,  0.38679343,  0.        ,        0.        ,  0.05610365,  0.96986377,  0.        ,  0.87666482,        0.        ,  0.17981002,  0.        ,  0.        ,  0.11924327,        0.72589576,  0.        ,  0.06842161,  0.85802394,  0.        ,        1.65770864,  0.        ,  0.93889964]
FluxHistoryError = [[ 0.        ,  1.48522186],       [ 0.        ,  1.01299655],       [ 0.        ,  1.31991112],       [ 0.0028854 ,  1.30358946],       [ 0.        ,  1.26682937],       [ 0.09609351,  0.90361369],       [ 0.02855694,  1.04459715],       [ 0.        ,  1.12172532],       [ 0.19941479,  1.52983856],       [ 0.        ,  1.31621492],       [ 0.11558342,  0.9304983 ],       [ 0.02036059,  0.88663465],       [ 0.        ,  1.06558287],       [ 0.        ,  1.56993046],       [ 0.49812341,  1.54930937],       [ 0.21496892,  1.22148156],       [ 0.        ,  0.89435315],       [ 0.33306199,  1.13333511],       [ 0.        ,  1.09259602],       [ 0.99116325,  2.2336843 ],       [ 0.36780137,  1.54565966],       [ 0.3412964 ,  1.49242449],       [ 0.        ,  1.7842558 ],       [ 0.02558315,  1.46772742],       [ 0.        ,  1.6547851 ],       [ 0.        ,  0.92744756],       [ 0.22586125,  1.12061524],       [ 0.27674606,  1.24431944],       [ 0.12301916,  0.81506538],       [ 0.        ,  0.72309369],       [ 0.        ,  1.03325379],       [ 0.        ,  1.10005802],       [ 0.42900759,  1.67872143],       [ 0.        ,  0.64327395],       [ 0.37981549,  1.50961208],       [ 0.        ,  0.66207904],       [ 0.        ,  1.84688291],       [ 0.        ,  1.01183426],       [ 0.        ,  0.86330748],       [ 0.        ,  1.35504413],       [ 0.34441048,  1.24661493],       [ 0.        ,  1.21701384],       [ 0.        ,  0.83219934],       [ 0.42433205,  1.41767621],       [ 0.        ,  1.05932724],       [ 1.05077624,  2.37834287],       [ 0.        ,  1.0507164 ],       [ 0.46516591,  1.53286433]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.92425652e+01],       [  5.47000000e+02,   7.60824728e+00],       [  1.73200000e+03,   2.06274652e+00],       [  5.47700000e+03,   7.46056676e-01],       [  3.16220000e+04,   3.27511549e-01]]
SpectrumError = [[  1.73000000e+02,   1.69726467e+01,   6.20501976e+01],       [  5.47000000e+02,   4.84928179e+00,   1.05488281e+01],       [  1.73200000e+03,   1.45157170e+00,   2.74022508e+00],       [  5.47700000e+03,   5.12761831e-01,   1.02630389e+00],       [  3.16220000e+04,   1.99043617e-01,   4.94315863e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]