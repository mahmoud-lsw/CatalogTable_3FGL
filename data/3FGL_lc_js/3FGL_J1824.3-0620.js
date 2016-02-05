Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 3.5383153 ,  3.47564173,  2.75082588,  3.06017399,  0.        ,        5.82686949,  3.60446072,  2.68423367,  4.45002127,  3.94833541,        3.27196646,  6.33256674,  6.96688223,  0.        ,  4.53314447,        4.4366765 ,  3.22648335,  1.8715198 ,  1.45353341,  1.84299886,        3.77467561,  2.42366529,  1.27678227,  9.27223015,  7.95933008,        2.15214968,  5.04994678,  2.54954076,  2.60369468,  7.27356815,        5.80893612,  0.        ,  4.19638872,  3.95482039,  0.50810266,        3.76961255,  5.67416191,  8.09023571,  7.90686893,  6.60991764,        2.97504234,  0.        ,  3.26453829,  5.6912241 ,  6.98713112,        5.10029936,  7.77711391,  0.        ]
FluxHistoryError = [[  1.30686784,   6.16871548],       [  1.01312351,   6.34585857],       [  1.02651489,   4.86406422],       [  1.00765109,   5.49163151],       [  0.        ,   4.37643003],       [  3.34519196,   8.66276646],       [  1.08978438,   6.41892433],       [  0.76665151,   5.26866341],       [  2.02282333,   7.25902271],       [  1.42607403,   6.77201796],       [  1.23321795,   5.76938152],       [  3.69054174,   9.25424385],       [  3.88858557,  10.2931118 ],       [  0.        ,   4.46634054],       [  1.91498995,   7.51388264],       [  1.41504335,   7.99141407],       [  1.18663239,   5.7925725 ],       [  0.        ,   8.84359765],       [  0.        ,   8.25134683],       [  0.        ,   7.84090316],       [  1.17755699,   7.13494778],       [  0.        ,   8.88141322],       [  0.        ,   7.40466714],       [  5.84065437,  12.99347496],       [  4.45476389,  11.85355949],       [  0.11447215,   4.8353529 ],       [  2.21384978,   8.31431293],       [  0.        ,   8.45707059],       [  0.29927564,   5.57883453],       [  4.49384403,  10.43875694],       [  3.07620549,   8.92237091],       [  0.        ,   6.04467154],       [  1.12481451,   7.58889246],       [  1.54717517,   6.8605938 ],       [  0.        ,   5.67086768],       [  1.34989476,   6.71874809],       [  1.96240234,   9.82424927],       [  5.04460716,  11.6053257 ],       [  4.31634712,  12.02312565],       [  3.50015068,  10.01910019],       [  0.83096027,   5.81560707],       [  0.        ,   5.86171484],       [  1.09793901,   5.80408955],       [  2.62367439,   9.2160387 ],       [  4.18404102,  10.03917408],       [  2.4725728 ,   8.36206818],       [  4.7651577 ,  11.19693851],       [  0.        ,   4.78509474]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.38677704e+02],       [  5.47000000e+02,   3.59178429e+01],       [  1.73200000e+03,   1.02224798e+01],       [  5.47700000e+03,   6.76837683e+00],       [  3.16220000e+04,   4.49389189e-01]]
SpectrumError = [[  1.73000000e+02,   3.36581970e+02,   5.51313660e+02],       [  5.47000000e+02,   1.89462109e+01,   5.31052094e+01],       [  1.73200000e+03,   7.41708374e+00,   1.31765823e+01],       [  5.47700000e+03,   5.76905203e+00,   7.83851290e+00],       [  3.16220000e+04,   1.79627746e-01,   7.73653746e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]