#!/usr/bin/python
import os
import exceptions
import MySQLdb

# Connect to the local database and drop the current table
db = MySQLdb.connect(host='localhost', user='root', db='issues')
db.autocommit(True)
cursor = db.cursor()
cursor.execute("DROP TABLE IF EXISTS issues")

# Create the articles table
cursor.execute("""
	CREATE TABLE issues
	(
		path TEXT,
		text MEDIUMTEXT
	)
""")

for root, subFolders, files in os.walk("data/issues"):

	for filename in files:
		
		if filename.endswith('.js'):
		
			path = os.path.join(root, filename)
			print "Writing " + path
			with open(path, 'r' ) as f:
	
				text = f.read()
				cursor.execute(
					"INSERT INTO issues (path, text) VALUES (%(path)s, %(text)s)", 
					{ "path": path, "text": text }
				)
		
cursor.close()
db.commit()
db.close()