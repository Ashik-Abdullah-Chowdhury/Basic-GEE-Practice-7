var upzla=table.filter(ee.Filter.eq("ADM3_EN","Boalkhali"))
print(upzla)
Export.table.toDrive({
    collection:upzla,
    description:"BOALKHALI_selected_CSV",
    folder:"class-14",
    fileFormat:"CSV",
    selectors:["ADM0_EN","ADM1_EN","ADM2_EN","ADM3_EN"]
})




// FC of list to CSV
var list=ee.List([1,2,3,4,5,6]).map(function(el){
  return ee.Feature(null,{"value":el})
  })
  print(list)
  var fc=ee.FeatureCollection(list)
  print(fc)
  
var FC_with_addprop=fc.map(function(ft){
  return ft.set("class","integer")
})
print(FC_with_addprop)
  
   Export.table.toDrive({
    collection:FC_with_addprop,
    description:"FeatureCollectionOfList_to_CSV",
    folder:"class-14",
    fileFormat:"CSV"
  })