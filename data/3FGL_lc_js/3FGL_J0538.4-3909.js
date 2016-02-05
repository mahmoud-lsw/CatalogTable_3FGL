Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 1.86381102,  0.57609057,  0.85993463,  0.        ,  0.95316201,        1.45981872,  1.59372103,  0.        ,  0.53416044,  1.21291208,        1.58542991,  1.58656609,  0.91591811,  0.6774559 ,  0.58134061,        0.        ,  0.59535837,  0.73125499,  0.26653019,  0.12206537,        0.33307153,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.87534159,  0.1996914 ,  0.41147256,        0.        ,  0.        ,  0.        ,  0.        ,  0.        ,        0.        ,  0.        ,  0.48443148,  1.0642364 ,  0.        ,        0.09061913,  0.        ,  0.        ,  0.09072651,  0.        ,        0.        ,  0.18757127,  0.59209621]
FluxHistoryError = [[ 1.01668429,  2.92876339],       [ 0.06250447,  1.19620991],       [ 0.22420985,  1.84571087],       [ 0.        ,  1.18344581],       [ 0.37459332,  1.77283645],       [ 0.73036975,  2.36681128],       [ 0.89388466,  2.4316678 ],       [ 0.        ,  1.39980185],       [ 0.12734649,  1.08221304],       [ 0.43751872,  2.18400335],       [ 0.82440805,  2.49798703],       [ 0.76430523,  2.48365784],       [ 0.18383157,  1.70421278],       [ 0.24836755,  1.26146221],       [ 0.        ,  2.48615509],       [ 0.        ,  0.9695909 ],       [ 0.05440092,  1.44140935],       [ 0.14957261,  1.45909941],       [ 0.        ,  2.21162179],       [ 0.        ,  1.75788862],       [ 0.07705972,  0.7951256 ],       [ 0.        ,  1.15397465],       [ 0.        ,  0.77951759],       [ 0.        ,  1.43286085],       [ 0.        ,  0.90237284],       [ 0.        ,  1.67937386],       [ 0.        ,  1.25321424],       [ 0.2707355 ,  1.63671815],       [ 0.        ,  1.98262189],       [ 0.10900161,  0.91819978],       [ 0.        ,  1.01761389],       [ 0.        ,  1.11929965],       [ 0.        ,  2.25184822],       [ 0.        ,  1.17916191],       [ 0.        ,  1.24878871],       [ 0.        ,  1.09178674],       [ 0.        ,  0.87951303],       [ 0.02620864,  1.24928796],       [ 0.49096572,  1.81985736],       [ 0.        ,  2.1715548 ],       [ 0.        ,  1.22357909],       [ 0.        ,  1.38880646],       [ 0.        ,  1.47433794],       [ 0.        ,  1.73822166],       [ 0.        ,  1.67250609],       [ 0.        ,  1.00113881],       [ 0.        ,  1.98146437],       [ 0.08682728,  1.25983858]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.92405167e+01],       [  5.47000000e+02,   4.78926134e+00],       [  1.73200000e+03,   2.39008617e+00],       [  5.47700000e+03,   7.35464036e-01],       [  3.16220000e+04,   2.74701416e-01]]
SpectrumError = [[  1.73000000e+02,   1.80705643e+00,   7.74698639e+01],       [  5.47000000e+02,   6.64608002e-01,   9.06847477e+00],       [  1.73200000e+03,   1.59776783e+00,   3.26755714e+00],       [  5.47700000e+03,   4.66844231e-01,   1.06733644e+00],       [  3.16220000e+04,   1.51360691e-01,   4.54212368e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]