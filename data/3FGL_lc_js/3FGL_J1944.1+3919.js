Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.        ,  0.55312592,  1.63389981,  0.        ,  0.        ,        1.58564484,  1.93502092,  0.16233248,  1.91792595,  1.63595748,        2.99274588,  0.        ,  1.75452578,  3.385432  ,  4.17808771,        1.51807332,  0.        ,  0.        ,  0.46418053,  0.        ,        0.        ,  0.        ,  0.        ,  2.07255268,  0.59474182,        0.8019889 ,  0.        ,  0.        ,  0.        ,  0.8714518 ,        0.        ,  0.2176811 ,  3.35433078,  0.        ,  0.36325017,        0.        ,  0.51817638,  0.52764875,  2.2709949 ,  0.        ,        1.85036623,  0.        ,  1.04199123,  1.22231972,  2.77609468,        1.24406779,  1.0352118 ,  0.94718897]
FluxHistoryError = [[ 0.        ,  2.21675563],       [ 0.        ,  2.66106492],       [ 0.47123992,  3.00223112],       [ 0.        ,  1.68117094],       [ 0.        ,  1.55875123],       [ 0.41400349,  2.93978596],       [ 0.77480984,  3.36118245],       [ 0.        ,  2.96558231],       [ 0.66143262,  3.26334286],       [ 0.70335031,  2.79136944],       [ 1.5992676 ,  4.4738903 ],       [ 0.        ,  2.24363804],       [ 0.7271136 ,  3.09712172],       [ 1.97922623,  4.89686203],       [ 2.73933029,  5.77522421],       [ 0.61227834,  2.65269279],       [ 0.        ,  2.19038343],       [ 0.        ,  1.66573036],       [ 0.        ,  3.75797564],       [ 0.        ,  2.41878271],       [ 0.        ,  2.61837816],       [ 0.        ,  2.72245622],       [ 0.        ,  2.50144911],       [ 0.9297539 ,  3.51590753],       [ 0.        ,  2.61342382],       [ 0.        ,  3.97536117],       [ 0.        ,  2.34311318],       [ 0.        ,  2.6859169 ],       [ 0.        ,  2.68062115],       [ 0.26411635,  1.80297458],       [ 0.        ,  2.15301847],       [ 0.        ,  2.25293939],       [ 1.90167654,  4.98198175],       [ 0.        ,  1.49119663],       [ 0.        ,  2.93237606],       [ 0.        ,  2.45021176],       [ 0.        ,  3.37347776],       [ 0.        ,  3.94839007],       [ 0.98887062,  3.75984335],       [ 0.        ,  2.09530568],       [ 0.64093482,  3.2962029 ],       [ 0.        ,  1.86743689],       [ 0.09020901,  2.27467728],       [ 0.49909544,  2.1775527 ],       [ 1.54968703,  4.19782305],       [ 0.39517707,  2.3804152 ],       [ 0.30191177,  2.16733885],       [ 0.        ,  3.88686693]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   5.25716476e+01],       [  5.47000000e+02,   1.61538582e+01],       [  1.73200000e+03,   4.76295280e+00],       [  5.47700000e+03,   1.11127949e+00],       [  3.16220000e+04,   1.95359781e-01]]
SpectrumError = [[  1.73000000e+02,   8.02585983e+00,   9.76010284e+01],       [  5.47000000e+02,   9.69710922e+00,   2.27902107e+01],       [  1.73200000e+03,   3.43962860e+00,   6.15491104e+00],       [  5.47700000e+03,   7.60161519e-01,   1.53324223e+00],       [  3.16220000e+04,   8.60177130e-02,   3.55172306e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]