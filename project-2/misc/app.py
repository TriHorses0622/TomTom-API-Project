import requests
from flask import Flask, render_template, jsonify

# Create an instance of our Flask app.
app = Flask(__name__)

pointsArr = [[40.853404,-73.961730],[40.848910,-73.938512],[40.846041,-73.930990],[40.844855,-73.921855],[40.845471,-73.928601],[40.845189,-73.916432],[40.845154,-73.910191],[40.844443,-73.901052],[40.843341,-73.892228],[40.837506,-73.880632],[40.836436,-73.873732],[40.845251,-73.913250],[40.838324,-73.882437]]
pointsStr = ["40.853404,-73.961730","40.848910,-73.938512","40.846041,-73.930990","40.844855,-73.921855","40.845471,-73.928601","40.845189,-73.916432","40.845154,-73.910191","40.844443,-73.901052","40.843341,-73.892228","40.837506,-73.880632","40.836436,-73.873732","40.845251,-73.913250","40.838324,-73.882437"]

baseURL = "https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key="
key = "cWhH2kYLPJdGA3CAhSnTSaa3UG5Vn40N"

@app.route('/')
def main():
    return render_template('index.html')

import pdb
@app.route('/api')
def api():
    data = []
    for point in pointsStr:
        url = baseURL + key + "&point=" + point
        response = requests.get(url)
        data.append(response.json())
    return data


if __name__ == "__main__":
    app.run(debug=True)