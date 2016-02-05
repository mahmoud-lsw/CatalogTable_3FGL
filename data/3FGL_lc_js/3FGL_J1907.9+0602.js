Time = [54712, 54742, 54772, 54801, 54831, 54861, 54891, 54920, 54950,       54980, 55009, 55039, 55069, 55099, 55128, 55158, 55188, 55218,       55247, 55277, 55307, 55336, 55366, 55396, 55426, 55455, 55485,       55515, 55545, 55574, 55604, 55634, 55663, 55693, 55723, 55753,       55782, 55812, 55842, 55872, 55901, 55931, 55961, 55990, 56020,       56050, 56080, 56109]
FluxHistory = [ 46.77681351,  53.21678162,  52.0001564 ,  49.786026  ,        46.82704163,  41.84700012,  50.12299728,  41.23184967,        47.94171524,  44.52586365,  46.8337326 ,  46.61542511,        44.47451782,  54.59776688,  41.30666351,  60.22521591,        69.5348053 ,  56.92930984,  47.37894058,  49.52368164,        36.73353577,  49.21598053,  44.87712097,  51.75357819,        51.31751251,  58.22369766,  50.79302216,  40.67969513,        50.29397202,  56.45935059,  54.99217606,  53.9009552 ,        50.81520844,  52.11375046,  55.61850739,  42.99159622,        49.88452148,  53.63381958,  52.97474289,  53.86951447,        46.60572433,  54.06612778,  52.92140961,  62.36058426,        50.68639755,  52.204319  ,  48.07782745,  49.06591034]
FluxHistoryError = [[ 42.25468063,  51.29894638],       [ 48.23838806,  58.19517517],       [ 47.80034637,  56.19996643],       [ 45.0681572 ,  54.50389481],       [ 42.43051147,  51.22357178],       [ 37.45822906,  46.34507751],       [ 45.35268402,  54.89331055],       [ 36.66437531,  45.93408966],       [ 43.18276978,  52.70066071],       [ 40.14333344,  48.90839386],       [ 42.06926727,  51.59819794],       [ 42.119133  ,  51.11171722],       [ 39.83342743,  49.23677444],       [ 49.43711472,  59.75841904],       [ 36.48311996,  46.31359863],       [ 54.68542862,  65.76499939],       [ 63.56477356,  75.50483704],       [ 51.1500473 ,  62.87877274],       [ 42.06961823,  52.85579681],       [ 44.20326233,  55.00374985],       [ 31.67286873,  41.98092651],       [ 44.26592636,  54.27418137],       [ 39.55001831,  50.44590759],       [ 46.39780807,  57.2608757 ],       [ 46.13365936,  56.61978149],       [ 52.86499786,  63.58239746],       [ 45.73075485,  55.85528946],       [ 35.90925598,  45.60791016],       [ 45.09403229,  55.62082291],       [ 50.78465271,  62.13404846],       [ 49.49049377,  60.49385834],       [ 48.77603531,  59.02587509],       [ 45.70323944,  56.03503418],       [ 46.86672974,  57.52485275],       [ 50.03141022,  61.20560455],       [ 38.01139069,  48.13654709],       [ 44.41434479,  55.5355072 ],       [ 47.82468033,  59.55371094],       [ 47.35850143,  58.63627243],       [ 48.55421066,  59.18481827],       [ 41.32426071,  52.06025696],       [ 48.54847336,  59.76638412],       [ 47.78436279,  58.05845642],       [ 56.91302872,  67.80813599],       [ 45.8127861 ,  55.560009  ],       [ 46.95319366,  57.5990448 ],       [ 42.92214584,  53.36858749],       [ 43.59848785,  54.7639389 ]], dtype=float32
Energy = [173, 547, 1732, 5477, 31622]
Spectrum = [[  1.73000000e+02,   3.08784058e+03],       [  5.47000000e+02,   1.22248047e+03],       [  1.73200000e+03,   3.11565735e+02],       [  5.47700000e+03,   6.08860435e+01],       [  3.16220000e+04,   3.07669663e+00]]
SpectrumError = [[  1.73000000e+02,   2.91215576e+03,   3.26352539e+03],       [  5.47000000e+02,   1.19072595e+03,   1.25423499e+03],       [  1.73200000e+03,   3.03576996e+02,   3.19554474e+02],       [  5.47700000e+03,   5.82315445e+01,   6.35405426e+01],       [  3.16220000e+04,   2.51688194e+00,   3.69701672e+00]]

// Time units in Modified Julian Date (MJD)
// FluxHistory units in 1e-8 x photons/cm/s
// FluxHistoryError units in 1e-8 x photons/cm/s. FluxHistoryError represents [ydatum + error, ydatum - error]
// Energy in units of MeV
// Spectrum in units of 1e-10 x photons/cm/s. Spectrum represents [energy, ydatum]
// SpectrumError in units of 1e-10 x photons/cm/s. SpectrumErrorError represents [energy, ydatum + error, ydatum - error]