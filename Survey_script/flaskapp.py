import pandas as pd
import sqlalchemy
import pymysql
import sys
pymysql.install_as_MySQLdb()

from flask import (
    Flask,
    render_template,
    jsonify,
    request)

from sqlalchemy import create_engine


    #Keep config file for our info. 
from config import remote_db_endpoint, remote_db_port
from config import remote_gwsis_dbname, remote_gwsis_dbuser, remote_gwsis_dbpwd

#Create Cloud DB Connection. 
engine = create_engine(f"mysql+pymysql://{remote_gwsis_dbuser}:{remote_gwsis_dbpwd}@{remote_db_endpoint}:{remote_db_port}/{remote_gwsis_dbname}")

# Create remote DB connection.
conn = engine.connect()   

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/db.sqlite"

db = SQLAlchemy(app)

@app.route('/resultData', methods = ['POST'])
def postJsonHandler():
    print (request.is_json)
    content = request.get_json()
    print (content)
    return 'JSON posted'
  
app.run(host='0.0.0.0', port= 5000)