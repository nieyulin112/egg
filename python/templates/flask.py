from flask import Flask, render_template
app = Flask(__name__)
@app.route('/echo/<thing>')
def echo(thing):
    return render_template('flask.html', thing = thing)

app.run(port = 8000, debug = True)
