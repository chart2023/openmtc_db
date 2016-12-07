db = db.getSiblingDB('m2m_nscl')
sh.enableSharding("m2m_nscl")
db.contentInstances.createIndex({ "_id": "hashed" })
db = db.getSiblingDB('admin')
db.runCommand({shardCollection: "m2m_nscl.contentInstances", key:{"_id": "hashed"},unique: false,numInitialChunks: 100})
db = db.getSiblingDB('m2m_nscl')
db.contentInstances.getShardDistribution()
sh.status()
