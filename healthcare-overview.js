healthcare = db.incidents.aggregate([
	{ $match : { "victim.industry" : { $regex : "^62", $options : "i" } } },
	{ $match : { "attribute.confidentiality.data_disclosure" : { $exists : 1 } } },
	{ $group : { _id : "$attribute.confidentiality.data_disclosure" , n : { "$sum" : 1 } } },
	{ $project : { _id : 0 , disclosure : "$_id", n : 1 } }
])

// We've filtered by Healthcare industry, and where there is a value for attribute.confidentiality.data_disclosure.  Now we print what we found for each value as the start of this report.

print()
print()
print("**********  VCDB Healthcare Industry Overview  **********")
print()
print()
print("*****  Attribute Confidentiality Data Disclosure Values  *****")
print()
for (var i = 0; i < healthcare['result'].length; i++) {
	print(healthcare['result'][i]['disclosure'] + ": " + healthcare['result'][i]['n'])
}

print()
print("***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****")
print()

// Count the external actors

healthcare = db.incidents.aggregate([
        { $match : { "victim.industry" : { $regex : "^62", $options : "i" } } },
        { $match : { "actor.external" : { $exists : 1 } } },
	{ $group : { _id : null , "count" : { "$sum" : 1 } } }
])

print()
print()
print("*****  Actors  *****")
print()
print("External: " + healthcare['result'][0]['count'])

// Count the internal actors

healthcare = db.incidents.aggregate([
        { $match : { "victim.industry" : { $regex : "^62", $options : "i" } } },
        { $match : { "actor.internal" : { $exists : 1 } } },
        { $group : { _id : null , "count" : { "$sum" : 1 } } }
])

print("Internal: " + healthcare['result'][0]['count'])


// Count the partner actors

healthcare = db.incidents.aggregate([
        { $match : { "victim.industry" : { $regex : "^62", $options : "i" } } },
        { $match : { "actor.partner" : { $exists : 1 } } },
        { $group : { _id : null , "count" : { "$sum" : 1 } } }
])

print("Partner: " + healthcare['result'][0]['count'])


// Count the Unknown actors

healthcare = db.incidents.aggregate([
        { $match : { "victim.industry" : { $regex : "^62", $options : "i" } } },
        { $match : { "actor.unknown" : { $exists : 1 } } },
        { $group : { _id : null , "count" : { "$sum" : 1 } } }
])

print("Unknown: " + healthcare['result'][0]['count'])


print()
print("***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****")
print()


// Moving on to the Actions section now


// Count the Malware Actions

healthcare = db.incidents.aggregate([
        { $match : { "victim.industry" : { $regex : "^62", $options : "i" } } },
        { $match : { "action.malware" : { $exists : 1 } } },
        { $group : { _id : null , "count" : { "$sum" : 1 } } }
])



print()
print()
print("*****  Action Values  *****")
print()
print("Malware: " + healthcare['result'][0]['count'])


// Count the Hacking Actions

healthcare = db.incidents.aggregate([
        { $match : { "victim.industry" : { $regex : "^62", $options : "i" } } },
        { $match : { "action.hacking" : { $exists : 1 } } },
        { $group : { _id : null , "count" : { "$sum" : 1 } } }
])


print("Hacking: " + healthcare['result'][0]['count'])



// Count the Social Actions

healthcare = db.incidents.aggregate([
        { $match : { "victim.industry" : { $regex : "^62", $options : "i" } } },
        { $match : { "action.social" : { $exists : 1 } } },
        { $group : { _id : null , "count" : { "$sum" : 1 } } }
])


print("Social: " + healthcare['result'][0]['count'])



// Count the Misuse Actions

healthcare = db.incidents.aggregate([
        { $match : { "victim.industry" : { $regex : "^62", $options : "i" } } },
        { $match : { "action.misuse" : { $exists : 1 } } },
        { $group : { _id : null , "count" : { "$sum" : 1 } } }
])


print("Misuse: " + healthcare['result'][0]['count'])


// Count the Physical Actions

healthcare = db.incidents.aggregate([
        { $match : { "victim.industry" : { $regex : "^62", $options : "i" } } },
        { $match : { "action.physical" : { $exists : 1 } } },
        { $group : { _id : null , "count" : { "$sum" : 1 } } }
])



print("Physical: " + healthcare['result'][0]['count'])



// Count the Error Actions

healthcare = db.incidents.aggregate([
        { $match : { "victim.industry" : { $regex : "^62", $options : "i" } } },
        { $match : { "action.error" : { $exists : 1 } } },
        { $group : { _id : null , "count" : { "$sum" : 1 } } }
])



print("Error: " + healthcare['result'][0]['count'])


// Count the Environmental Actions

healthcare = db.incidents.aggregate([
        { $match : { "victim.industry" : { $regex : "^62", $options : "i" } } },
        { $match : { "action.environmental" : { $exists : 1 } } },
        { $group : { _id : null , "count" : { "$sum" : 1 } } }
])



print("Environmental: " + healthcare['result'][0]['count'])




print()
print("***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****")
print()


// Moving on to the Asset values

healthcare = db.incidents.aggregate([
        { $match : { "victim.industry" : { $regex : "^62", $options : "i" } } },
        { $match : { "asset.assets.variety" : { $exists : 1 } } },
        { $group : { _id : "$asset.assets.variety" , n : { "$sum" : 1 } } },
        { $project : { _id : 0 , disclosure : "$_id", n : 1 } }
])


print()
print()
print("*****  Asset Values  *****")
print()
//printjson(healthcare)
for (var i = 0; i < healthcare['result'].length; i++) {
        print(healthcare['result'][i]['disclosure'] + ": " + healthcare['result'][i]['n'])
}

print()
print("***** ***** ***** ***** ***** ***** ***** ***** ***** ***** *****")
print()

print()




