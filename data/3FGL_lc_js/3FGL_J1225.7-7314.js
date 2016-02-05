Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  1.09345412,  0.89142418,  0.        ,  4.32821798,        0.98734826,  1.53139722,  0.1877149 ,  2.91579199,  2.70296669,        1.85455048,  0.        ,  0.        ,  0.3016986 ,  0.34741762,        0.        ,  0.        ,  0.        ,  1.70304096,  0.        ,        1.04507244,  0.        ,  0.        ,  0.46044698,  0.        ,        1.74050748,  1.44933236,  0.        ,  2.42039227,  0.        ,        1.2816242 ,  0.        ,  1.18378878,  1.6322161 ,  0.85988736,        3.34646869,  0.12140925,  0.16444023,  0.        ,  1.10281336,        0.08434998,  0.99502182,  0.60414898,  0.        ,  2.19152761,        0.        ,  1.63894594,  0.48833081]
FluxHistoryError = [[ 0.        ,  2.61995149],       [ 0.31949323,  2.19762707],       [ 0.        ,  3.76523995],       [ 0.        ,  2.22822499],       [ 2.55183125,  6.29010582],       [ 0.        ,  3.9613952 ],       [ 0.07626486,  3.30481577],       [ 0.        ,  4.87861189],       [ 1.45127666,  4.72780991],       [ 0.87999046,  4.61087751],       [ 0.12248588,  3.8242023 ],       [ 0.        ,  1.66858089],       [ 0.        ,  1.76358533],       [ 0.        ,  2.55739155],       [ 0.        ,  3.37936524],       [ 0.        ,  1.98283768],       [ 0.        ,  2.45963097],       [ 0.        ,  3.22797012],       [ 0.70965344,  2.94437075],       [ 0.        ,  2.44659972],       [ 0.16768485,  2.19376993],       [ 0.        ,  2.67957449],       [ 0.        ,  2.22799969],       [ 0.        ,  2.58026734],       [ 0.        ,  2.20749807],       [ 0.27400672,  3.39612722],       [ 0.3837744 ,  2.85165358],       [ 0.        ,  2.79006696],       [ 0.9549489 ,  4.05108261],       [ 0.        ,  1.80392361],       [ 0.06558442,  2.73373723],       [ 0.        ,  3.03151679],       [ 0.11704195,  2.5498476 ],       [ 0.17961776,  3.27678728],       [ 0.20438915,  1.79834723],       [ 1.86845958,  4.97647429],       [ 0.        ,  3.0166498 ],       [ 0.        ,  2.53484137],       [ 0.        ,  2.69341445],       [ 0.        ,  3.75628269],       [ 0.        ,  3.02659189],       [ 0.08846217,  2.12137318],       [ 0.        ,  3.76104248],       [ 0.        ,  2.68649769],       [ 0.85096514,  3.74821663],       [ 0.        ,  2.60304785],       [ 0.39642632,  3.09417677],       [ 0.        ,  3.40598652]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.52526832e+00],       [  5.47000000e+02,   2.45435448e+01],       [  1.73200000e+03,   1.62790918e+00],       [  5.47700000e+03,   1.25684237e+00],       [  3.16220000e+04,   1.82401836e-01]]
SpectrumError = [[  1.73000000e+02,   0.00000000e+00,   8.96865385e+01],       [  5.47000000e+02,   1.76505661e+01,   3.16039162e+01],       [  1.73200000e+03,   4.52016234e-01,   2.90323639e+00],       [  5.47700000e+03,   8.63669276e-01,   1.70805597e+00],       [  3.16220000e+04,   7.72831738e-02,   3.39046597e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]