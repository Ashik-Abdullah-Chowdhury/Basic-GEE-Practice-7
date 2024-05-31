# **Working with Feature Collections and Exports in GEE**

The GEE JavaScript API offers powerful tools for manipulating and exporting geospatial data. This article explores techniques for adding properties, exporting and importing features as Shapefiles and CSVs, creating feature collections with null geometries, and exporting classified images.
##  Adding Properties by Mapping to a Feature Collection:
Here is to add properties to a feature collection_
*   [GEE LINK](https://code.earthengine.google.com/5bf46b32ceac0f587d9d0f0eab98aabf)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-7/blob/main/addProp_to_FC.js)
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-7/blob/main/addProp.png)

## Mapping over a List and Creating Feature Collection with Null Geometry:
To map over a list and create a feature collection by passing null geometry to each element of that list_
*   [GEE LINK](https://code.earthengine.google.com/880f850aa86fc91ee065d3f540579de0)
*   [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-7/blob/main/List_to_FC.js)
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-7/blob/main/List_to_FC.png)

## Exporting feature collection/ vector Data as CSV:
To export the feature collection as CSV_
*  [GEE LINK](https://code.earthengine.google.com/769461662101ec1173bea03ddf4df12d) 
*  [CODE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-7/blob/main/FC_to_CSV.js) 
*  [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-7/blob/main/FC_to_CSV.png)  

## Exporting a Clipped Image from Google Earth Engine:
We used the ee.ImageCollection class to access the dataset, apply a clipping region using a geometry, and then exported the clipped image to Google Drive.
*   [IMAGE LINK](https://github.com/Ashik-Abdullah-Chowdhury/Basic-GEE-Practice-7/blob/main/Boalkhali%20LULC.png)
