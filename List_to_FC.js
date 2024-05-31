// Map over a list and create a feature collection by passing null geometry to each element of that list

var list=ee.List([1,2,3,4,5,6]).map(function(el){
    return ee.Feature(null,{"value":el})
    })
    print(list)
    var fc=ee.FeatureCollection(list)
    print(fc)