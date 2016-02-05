Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.83724022,  2.12752914,  1.81499386,  3.32616925,  0.29566979,        3.15533304,  4.33340073,  2.58463812,  3.90492654,  1.90092957,        3.94375443,  3.66715908,  5.29341125,  4.15466785,  4.9121418 ,        5.51929283,  2.03029418,  3.08566022,  4.15135574,  3.57867312,        3.48961973,  2.19839263,  1.23133028,  2.03565741,  0.94922763,        1.72718191,  1.59625256,  1.59520829,  1.58366215,  2.16471767,        3.67754292,  4.20977259,  1.71579015,  0.2439592 ,  0.        ,        2.18531036,  2.59219074,  2.80666351,  2.2776494 ,  1.58532155,        1.68893003,  2.05285454,  3.50993252,  1.95516419,  1.87749743,        2.42196321,  1.49900568,  2.25610542]
FluxHistoryError = [[ 1.90062284,  3.92126274],       [ 1.29731703,  3.11668277],       [ 1.11622775,  2.64129806],       [ 2.3502574 ,  4.42957878],       [ 0.        ,  1.99915946],       [ 2.16811562,  4.29109287],       [ 3.40212727,  5.3579793 ],       [ 1.61581147,  3.73666978],       [ 2.904814  ,  4.95973015],       [ 1.00658977,  2.95910883],       [ 2.8835659 ,  5.11324453],       [ 2.73529887,  4.70893049],       [ 4.11121941,  6.5771451 ],       [ 3.24829602,  5.15609455],       [ 3.75272179,  6.1997571 ],       [ 4.45421076,  6.69279671],       [ 1.31325328,  2.87744808],       [ 2.18986416,  4.11011648],       [ 3.28444695,  5.11516237],       [ 2.49419808,  4.81668663],       [ 2.61719656,  4.47637177],       [ 1.29564977,  3.25283194],       [ 0.6106419 ,  1.9940052 ],       [ 1.17985249,  3.03003645],       [ 0.38439959,  1.74154949],       [ 1.01066673,  2.59074521],       [ 0.85042739,  2.57199669],       [ 0.94586331,  2.34064317],       [ 0.94070649,  2.38765764],       [ 1.48700726,  2.95236731],       [ 2.79815006,  4.67509651],       [ 3.10213852,  5.46783638],       [ 1.03386664,  2.53346682],       [ 0.        ,  2.08377244],       [ 0.        ,  0.96872824],       [ 1.37122226,  3.16352987],       [ 1.85069561,  3.44636774],       [ 1.87671518,  3.8723588 ],       [ 1.37768269,  3.32545495],       [ 0.90955007,  2.40039778],       [ 0.90383536,  2.64704967],       [ 1.40414143,  2.79869795],       [ 2.44267488,  4.743433  ],       [ 1.27342761,  2.76755357],       [ 1.06093693,  2.84619427],       [ 1.5139966 ,  3.46462512],       [ 0.90947658,  2.21691227],       [ 1.29116642,  3.43587017]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   1.56889771e+02],       [  5.47000000e+02,   5.04721642e+01],       [  1.73200000e+03,   2.19586926e+01],       [  5.47700000e+03,   9.68163776e+00],       [  3.16220000e+04,   3.20256090e+00]]
SpectrumError = [[  1.73000000e+02,   1.01036652e+02,   2.13165894e+02],       [  5.47000000e+02,   4.37841949e+01,   5.73352280e+01],       [  1.73200000e+03,   2.00871677e+01,   2.38302174e+01],       [  5.47700000e+03,   8.76366806e+00,   1.05996075e+01],       [  3.16220000e+04,   2.72106385e+00,   3.73588848e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]