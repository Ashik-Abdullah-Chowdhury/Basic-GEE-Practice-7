// Select a feature collection of 5 waterbodies and add a property by using map() method

print(geometry,"FC with no added property")

var addprop=geometry.map(function(ft){
  return geometry.set("class","waterbody")
})
print(addprop,"FC with added property")