import numpy as np
import matplotlib.pyplot as plt

x = np.linspace(-1, 2, 10)
y = np.exp(x)

plt.rcParams.update({'font.size': 11})

plt.figure()
plt.plot(x, y, c="black")

plt.yticks(y, ["$0$", "", "", "", "", "", "", "", "", "$\infty$"])
plt.xticks(x, ["$0$", "", "", "", "", "", "", "", "", "$2^{53}$"])

plt.tick_params(axis=u'both', which=u'both', length=0)

plt.ylabel('Difficulty to Crack')
plt.xlabel('Length of Input (characters)')

plt.show()