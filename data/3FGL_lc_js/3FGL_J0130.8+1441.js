Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 2.5461092 ,  0.        ,  1.14475191,  0.        ,  0.        ,        0.12133141,  0.        ,  3.13025188,  0.        ,  0.        ,        0.        ,  2.96487093,  0.        ,  0.69779664,  0.        ,        0.        ,  0.        ,  1.01134586,  0.        ,  4.64645338,        1.94071054,  0.        ,  0.        ,  0.91762871,  0.63870251,        0.        ,  0.        ,  0.        ,  0.        ,  1.45109093,        0.        ,  0.27156335,  4.39730787,  5.43282795,  0.65947908,        0.50689548,  0.        ,  0.1441721 ,  0.        ,  0.        ,        3.74782944,  2.74593568,  0.3141385 ,  1.03359067,  1.02646863,        1.26122701,  0.71894276,  2.86623359]
FluxHistoryError = [[ 1.04261744,  4.23010874],       [ 0.        ,  2.42624497],       [ 0.        ,  4.02678406],       [ 0.        ,  2.64616776],       [ 0.        ,  3.00927353],       [ 0.        ,  2.84976573],       [ 0.        ,  2.75085616],       [ 1.59111702,  4.95861626],       [ 0.        ,  3.35734582],       [ 0.        ,  3.26278067],       [ 0.        ,  2.97425914],       [ 1.6261276 ,  4.45607901],       [ 0.        ,  2.57358789],       [ 0.        ,  4.06664544],       [ 0.        ,  4.07799244],       [ 0.        ,  3.61861897],       [ 0.        ,  2.63378859],       [ 0.        ,  4.14399099],       [ 0.        ,  2.98476386],       [ 2.61921334,  6.88032484],       [ 0.41092181,  3.76714683],       [ 0.        ,  3.26631021],       [ 0.        ,  3.21779394],       [ 0.        ,  4.15682191],       [ 0.        ,  3.86373055],       [ 0.        ,  2.85369658],       [ 0.        ,  4.01967049],       [ 0.        ,  2.51369333],       [ 0.        ,  2.90534925],       [ 0.2869978 ,  2.80397844],       [ 0.        ,  3.50716186],       [ 0.        ,  4.92368442],       [ 2.37066865,  6.67557907],       [ 3.70911789,  7.31619596],       [ 0.        ,  3.23090261],       [ 0.        ,  3.13495034],       [ 0.        ,  2.73060417],       [ 0.        ,  3.57446948],       [ 0.        ,  2.87030816],       [ 0.        ,  3.5144887 ],       [ 1.67207503,  6.0438695 ],       [ 1.16585028,  4.64254808],       [ 0.        ,  3.36880264],       [ 0.        ,  4.41397965],       [ 0.        ,  4.67400753],       [ 0.        ,  5.11789906],       [ 0.        ,  3.7478677 ],       [ 1.28739643,  4.60582399]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.13007736e+01],       [  5.47000000e+02,   1.91647377e+01],       [  1.73200000e+03,   1.36328375e+00],       [  5.47700000e+03,   1.32306321e-02],       [  3.16220000e+04,   1.30648211e-01]]
SpectrumError = [[  1.73000000e+02,   3.10108395e+01,   9.20842896e+01],       [  5.47000000e+02,   1.40422564e+01,   2.44193077e+01],       [  1.73200000e+03,   5.88714123e-01,   2.20556664e+00],       [  5.47700000e+03,   0.00000000e+00,   5.71953367e-01],       [  3.16220000e+04,   2.71914974e-02,   2.95432270e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]