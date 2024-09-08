from flask import Flask,render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("views/centeredTime.html")


@app.route("/albums/")
def albums_world():
    return render_template("views/tiles.html")


def listOn():
    print("")
    