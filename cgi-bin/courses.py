#!/usr/bin/python

from __future__ import print_function
import random,json
import psycopg2
from flask import Flask, render_template, request, redirect, Response
import sys
app = Flask(__name__)
#sys.stderr = sys.stdout

@app.route('/courses')
def json_courses():
   conn = psycopg2.connect(host = "cs4920.ckc9ybbol3wz.ap-southeast-2.rds.amazonaws.com", 
                           database = "cs4920", 
                           user = "kelvin", 
                           password = "kelvin")
   
   cur = conn.cursor()
   cur.execute("SELECT * FROM courses;")
   
   records = cur.fetchall()
   return json.dumps(records)

@app.route('/submit', methods=['GET','POST'] )
def submit_form():
   # print(request.form.get('review',None))

    #print(request.form.get('rating',None))
    #print(request.args)
    #print("blearhg",file=sys.stderr)
    #print(request.headers,file=sys.stderr)
    offering = 5
    review = 'i hate this course so much'
    rating = 5
    user = 3
    """ insert a new review """
    sql = """INSERT INTO reviews(id,offering,rating,feedback)
             VALUES(%s,%s,%s,%s) RETURNING feedback;"""
    conn = None
    vendor_id = None
    try:
        # read database configuration
        # connect to the PostgreSQL database
        conn = psycopg2.connect(host = "cs4920.ckc9ybbol3wz.ap-southeast-2.rds.amazonaws.com", 
                           database = "cs4920", 
                           user = "yan", 
                           password = "yan")
        # create a new cursor
        cur = conn.cursor()
        # execute the INSERT statement
        cur.execute(sql, (user,offering,rating,review))
        # get the generated id back
        vendor_id = cur.fetchone()[0]
        # commit the changes to the database
        conn.commit()
        #cur.execute("SELECT * from reviews")
        #records = cur.fetchall()
        # close communication with the database
        cur.close()
        #if conn is not None:
        #    conn.close()
        #return json.dumps(records)
    except (Exception, psycopg2.DatabaseError) as error:
        print(error,file=sys.stderr)
    finally:
        if conn is not None:
            conn.close()
    return json.dumps({"name":"thing"} )

if __name__ == '__main__':
   app.run()
