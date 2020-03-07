#Import modules.
import pandas as pd
import geopandas as gpd
import numpy as np
import matplotlib.pyplot as plt
from shapely import geometry
import seaborn as sns
%matplotlib inline

#The code below will check if pycpt is installed and will try to load a nice Colormap for Geophysics plots. If an error occurs, it will use the inverse of the matplotlib's Spectral Colormap.
try:
    import pycpt
    cmap = pycpt.load.cmap_from_cptcity_url('ukmo/wow/temp-c.cpt')
except:
    cmap = 'Spectral_r'


# Use seaborn-notebook style for matplotlib's plots.
plt.style.use('seaborn-notebook')

#Import pandas, recreate a column for gepometry and add it to GeoPandas with spatial information.
mag_data = pd.read_csv(result, index_col=0)
mag_data['geometry'] = [geometry.Point(x, y) for x, y in zip(mag_data['long_wgs84'], mag_data['lat_wgs84'])]
mag_data = gpd.GeoDataFrame(mag_data, geometry='geometry', crs="+init=epsg:4326")

mag_data.head()


a = 33
b = 200
if b > a:
print("b is greater than a") 
# you will get an error

elif a == b:
  print("a and b are equal")

  else:
  print("a is greater than b")
