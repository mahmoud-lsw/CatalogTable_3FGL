Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.86895913,  1.30989599,  3.26264   ,  0.        ,  2.94819975,        2.32933998,  5.18194008,  2.15871692,  1.09803891,  0.        ,        1.16928267,  2.43136001,  0.35980088,  0.        ,  0.        ,        0.10312323,  0.50772184,  0.47345531,  0.        ,  0.        ,        0.        ,  0.        ,  0.        ,  1.29958022,  0.31895673,        0.        ,  0.75093746,  0.        ,  0.        ,  3.23259425,        1.27389109,  0.        ,  0.809358  ,  0.        ,  1.5584172 ,        0.        ,  1.6686821 ,  0.        ,  1.07803643,  0.6916905 ,        1.48547637,  1.08627355,  1.80328858,  0.01422275,  0.        ,        0.79896349,  0.48625144,  0.06279689]
FluxHistoryError = [[ 0.19544542,  1.82118726],       [ 0.40743512,  2.31102085],       [ 2.24610829,  4.40402126],       [ 0.        ,  1.77608526],       [ 1.89448977,  4.14872265],       [ 1.40625048,  3.40158987],       [ 3.85010028,  6.64832687],       [ 0.84281898,  3.68398476],       [ 0.        ,  3.42598343],       [ 0.        ,  2.1729629 ],       [ 0.46345454,  2.11813259],       [ 1.42877901,  3.6049459 ],       [ 0.        ,  1.85678142],       [ 0.        ,  1.82371879],       [ 0.        ,  1.77655756],       [ 0.        ,  2.37881498],       [ 0.        ,  2.86839288],       [ 0.        ,  2.70202696],       [ 0.        ,  1.94512057],       [ 0.        ,  2.71011281],       [ 0.        ,  1.37552631],       [ 0.        ,  2.13240719],       [ 0.        ,  1.88443482],       [ 0.45792961,  2.44020605],       [ 0.        ,  2.59303987],       [ 0.        ,  2.18447733],       [ 0.06047857,  1.71618509],       [ 0.        ,  2.14818144],       [ 0.        ,  1.42524505],       [ 1.94802976,  4.6875639 ],       [ 0.33521003,  2.49651718],       [ 0.        ,  2.65666604],       [ 0.        ,  4.32921755],       [ 0.        ,  1.5389297 ],       [ 0.4300797 ,  2.85032368],       [ 0.        ,  2.07307267],       [ 0.58729649,  3.03835583],       [ 0.        ,  1.9408915 ],       [ 0.11270815,  2.28188276],       [ 0.01399213,  1.68211818],       [ 0.52762854,  2.72245216],       [ 0.0768193 ,  2.30447578],       [ 0.42228353,  3.45053005],       [ 0.        ,  2.42289055],       [ 0.        ,  1.75087428],       [ 0.15992755,  1.68643141],       [ 0.        ,  2.90293416],       [ 0.        ,  2.73676592]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   6.42561111e+01],       [  5.47000000e+02,   1.98051758e+01],       [  1.73200000e+03,   3.35239959e+00],       [  5.47700000e+03,   4.96930569e-01],       [  3.16220000e+04,   1.02396563e-01]]
SpectrumError = [[  1.73000000e+02,   3.09833221e+01,   9.86229324e+01],       [  5.47000000e+02,   1.49459286e+01,   2.48173389e+01],       [  1.73200000e+03,   2.43071604e+00,   4.36618853e+00],       [  5.47700000e+03,   2.43946165e-01,   8.19716573e-01],       [  3.16220000e+04,   2.30358392e-02,   2.44747728e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]