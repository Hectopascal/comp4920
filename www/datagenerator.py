#!/usr/local/bin/python3

import random

course = [ "BINF2010","BINF3010","BINF3020","BINF6111","BINF6112","BINF9010","BINF9020","COMP1000","COMP1400","COMP1511","COMP1521","COMP1531","COMP1911","COMP1917","COMP1921","COMP1927","COMP2041","COMP2111","COMP2121","COMP2511","COMP2521","COMP2911","COMP3121","COMP3131","COMP3141","COMP3151","COMP3153","COMP3161","COMP3211","COMP3222","COMP3231","COMP3311","COMP3331","COMP3411","COMP3421","COMP3431","COMP3441","COMP3511","COMP3601","COMP3821","COMP3891","COMP3900","COMP3901","COMP3902","COMP4121","COMP4128","COMP4141","COMP4161","COMP4336","COMP4337","COMP4418","COMP4511","COMP4601","COMP4904","COMP4905","COMP4906","COMP4920","COMP4930","COMP4931","COMP4941","COMP4951","COMP4952","COMP4953","COMP6324","COMP6441","COMP6443","COMP6445","COMP6447","COMP6448","COMP6449","COMP6451","COMP4952","COMP4953","COMP6324","COMP6441","COMP6443","COMP6445","COMP6447","COMP6448","COMP6449","COMP6451","COMP6452","COMP6714","COMP6733","COMP6741","COMP6752","COMP6771","COMP6841","COMP6843","COMP6845","COMP8031","COMP8032","COMP8033","COMP8041","COMP8042","COMP8552","COMP9020","COMP9021","COMP9024","COMP9032","COMP9044","COMP9101","COMP9102","COMP9153","COMP9154","COMP9164","COMP9201","COMP9211","COMP9222","COMP9242","COMP9243","COMP9283","COMP9301","COMP9311","COMP9313","COMP9315","COMP9318","COMP9319","COMP9321","COMP9322","COMP9323","COMP9331","COMP9332","COMP9334","COMP9336","COMP9337","COMP9414","COMP9415","COMP9417","COMP9418","COMP9434","COMP9444","COMP9447","COMP9511","COMP9517","COMP9596","COMP9801","COMP9814","COMP9844","COMP9900","COMP9945","ENGG1811","GSOE9210","GSOE9220","SENG1031","SENG2011","SENG2021","SENG3011","SENG4904","SENG4905","SENG4906","SENG4907","SENG4910","SENG4920"];

users = ["anon", "linda", "yan", "tim", "kelvin", "student1", "student2", "student3", "student4"]
ratings = [0,1,2,3,4,5]

f= open("file.txt","w+")
for i in range(0,3000):
    f.write(random.choice(course) + "\t" + random.choice(users) + "\t" + str(random.choice(ratings)) + "\n")


f.close()