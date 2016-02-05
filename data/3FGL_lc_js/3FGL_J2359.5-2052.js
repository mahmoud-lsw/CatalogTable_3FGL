Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 0.31120762,  0.        ,  0.        ,  0.94950819,  0.22673072,        0.        ,  0.20756312,  0.        ,  0.46384963,  0.        ,        0.        ,  0.28739631,  0.94738686,  0.50499135,  0.05750441,        0.        ,  0.37412313,  0.13268115,  0.4967854 ,  0.06645692,        0.66591024,  0.31952584,  0.23907062,  0.61496907,  0.07860497,        0.        ,  1.09518373,  0.        ,  0.        ,  1.60789537,        0.30149111,  1.77461815,  0.42429295,  0.54465288,  0.        ,        0.46482486,  0.        ,  0.86788499,  1.06459916,  0.        ,        0.46704507,  0.        ,  0.57876933,  0.        ,  0.31135419,        0.38357845,  0.        ,  0.4487161 ]
FluxHistoryError = [[ 0.        ,  1.60257694],       [ 0.        ,  0.97637248],       [ 0.        ,  1.1976639 ],       [ 0.45452383,  1.59761262],       [ 0.        ,  1.85827948],       [ 0.        ,  1.36904883],       [ 0.        ,  1.77265377],       [ 0.        ,  0.99893457],       [ 0.05546436,  1.04171705],       [ 0.        ,  1.40987217],       [ 0.        ,  1.21272898],       [ 0.        ,  1.6037724 ],       [ 0.37459719,  1.68758941],       [ 0.00831026,  1.30585635],       [ 0.        ,  1.00581669],       [ 0.        ,  1.44213688],       [ 0.        ,  1.85888794],       [ 0.        ,  1.13604607],       [ 0.07317758,  1.17027056],       [ 0.        ,  1.54258097],       [ 0.        ,  2.87698317],       [ 0.08474243,  0.7351203 ],       [ 0.        ,  1.87226734],       [ 0.17920694,  1.22893214],       [ 0.        ,  1.24768129],       [ 0.        ,  1.12347245],       [ 0.44504374,  1.85670733],       [ 0.        ,  1.75080609],       [ 0.        ,  0.90932447],       [ 0.9767741 ,  2.44184494],       [ 0.        ,  1.42800471],       [ 1.02922642,  2.68439722],       [ 0.        ,  2.18070439],       [ 0.10414064,  1.11952519],       [ 0.        ,  1.96845615],       [ 0.1316587 ,  0.97529751],       [ 0.        ,  1.87002802],       [ 0.40704891,  1.4613421 ],       [ 0.4546175 ,  1.80244803],       [ 0.        ,  0.83273762],       [ 0.04196012,  1.05128598],       [ 0.        ,  2.25107694],       [ 0.14800507,  1.17130089],       [ 0.        ,  1.81902087],       [ 0.        ,  1.55879059],       [ 0.11145937,  0.84060162],       [ 0.        ,  1.52151716],       [ 0.14721927,  0.93334138]]
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   4.56860847e+01],       [  5.47000000e+02,   5.62724924e+00],       [  1.73200000e+03,   1.99354768e+00],       [  5.47700000e+03,   5.91599286e-01],       [  3.16220000e+04,   5.45934796e-01]]
SpectrumError = [[  1.73000000e+02,   2.32421741e+01,   6.83208542e+01],       [  5.47000000e+02,   2.34233713e+00,   9.14261818e+00],       [  1.73200000e+03,   1.31151152e+00,   2.76654625e+00],       [  5.47700000e+03,   3.47699344e-01,   8.97903562e-01],       [  3.16220000e+04,   3.48189354e-01,   7.96176314e-01]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]