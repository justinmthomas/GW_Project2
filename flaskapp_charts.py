from flask import (
    Flask,
    render_template,
    jsonify,
    request)

import sqlalchemy
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import create_engine
import pymysql
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session

import pandas as pd
from pandas.io.json import json_normalize
import numpy as np

import sys
import os
sys.path.append('../../../')

pymysql.install_as_MySQLdb()


#Keep config file for our info.
# remote_db_endpoint = os.environ.get('remote_db_endpoint')
# remote_db_port = os.environ.get('remote_db_port')
# remote_gwsis_dbname = os.environ.get('remote_gwsis_dbname')
# remote_gwsis_dbpwd = os.environ.get('remote_gwsis_dbpwd')
# remote_gwsis_dbuser = os.environ.get('remote_gwsis_dbuser')
# remote_gwsis_dbname_sr = os.environ.get('remote_gwsis_dbname_sr')

from config_new import remote_db_endpoint, remote_db_port
from config_new import remote_gwsis_dbname_sr, remote_gwsis_dbuser, remote_gwsis_dbpwd

#Create Cloud DB Connection.

# this should come from your config file

engine = create_engine(
    f"mysql+pymysql://{remote_gwsis_dbuser}:{remote_gwsis_dbpwd}@{remote_db_endpoint}:{remote_db_port}/{remote_gwsis_dbname_sr}")

# Create remote DB connection.
conn = engine.connect()

app = Flask(__name__)

#app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///db/db.sqlite"

db = SQLAlchemy(app)


@app.route("/")
def index():
    """Return the homepage."""
    return render_template("Home.html")

# @app.route("/surveyresults")
# def resultsAnalysis():
#     """Return the Results analysis page."""
#     return render_template("Results_Analysis.html")

@app.route("/datavisualization")
def resultsAnalysis():
    """Return the Results analysis page."""
    return render_template("What_Are_Data_Visualizations.html")

@app.route("/quizexplained")
def quizExplained():
    """Return the Results analysis page."""
    return render_template("Quiz_Explained.html")

@app.route("/visualquiz")
def visualQuiz():
    """Return the Results analysis page."""
    return render_template("Visual_Quiz.html")

# @app.before_first_request
# def setup():
#     # Recreate database each time for demo
#     db.drop_all()
#     db.create_all()

@app.route("/api/data/results", methods=["GET", "POST"])
def getSurveyResults():
    surveyResults = pd.read_sql(
        "SELECT value as QuestionNo, SUM(correct) AS NumCorrect, COUNT(*) AS NumAttempted, SUM(correct)/COUNT(*) AS PctCorrect FROM survey_results GROUP BY value", conn)

    return surveyResults.to_json(orient='records')

@app.route("/api/data/newresults", methods=["GET", "POST"])
def getNewSurveyResults():
    newResults = pd.read_sql(
        "SELECT COUNT(Distinct Survey_ID) AS numberOFattempts, COUNT(Value) AS questionsAnswered, (SUM(correct) / COUNT(*)) * 100 AS pctCorrect, SUM(correct) AS numCorrect, SUM(correct != 1) as numIncorrect FROM survey_results.survey_results", conn)
    return newResults.to_json(orient='records')


@app.route("/api/data/resultsavg", methods=["GET", "POST"])
def getAvgSurveyResults():
    avgResults = pd.read_sql(
        "select value as Question_Num, Data_Type, Chart_Type, sum(Correct) AS numCorrect, (sum(Correct) / (COUNT(Distinct Survey_ID))) * 100 As percent_correct from survey_results.survey_results group by value", conn)
    return avgResults.to_json(orient='records')

#@app.route("/surveyresults", methods=["GET", "POST"])
#def chartResults():
    #chartResults = pd.read_sql(

    #return render_template("html_surveyresults.html")

#@app.route("/names")
#def quizResults():
    #"""Return a list of sample names."""

    # Use Pandas to perform the sql query
    #stmt = db.session.query(Samples).statement
    #df = pd.read_sql_query(stmt, db.session.bind)

    # Return a list of the column names (sample names)
    #return jsonify(list(df.columns)[2:])

@app.route('/surveyresults', methods=['POST'])
def postJsonHandler():
    print(request.is_json)
    content = request.get_json()
    print(content)
    return 'JSON posted'

app.run(host='0.0.0.0', port=5000)


