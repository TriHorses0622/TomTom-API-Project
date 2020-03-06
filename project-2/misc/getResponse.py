import requests

# Creat function to make api call
def make_request(URL):
    r = requests.get(URL)
    json_file = r.json()
    return json_file

def get():
# Set up points used to make api call
    pointLists =["40.853404,-73.961730","40.848910,-73.938512","40.846041,-73.930990","40.844855,-73.921855","40.845471,-73.928601","40.845189,-73.916432","40.845154,-73.910191","40.844443,-73.901052","40.843341,-73.892228","40.837506,-73.880632","40.836436,-73.873732","40.845251,-73.913250","40.838324,-73.882437"]

# Set up basic features of URL
    baseURL = "https://api.tomtom.com/traffic/services/4/flowSegmentData/absolute/10/json?key="
    key = "cWhH2kYLPJdGA3CAhSnTSaa3UG5Vn40N"

# Set up an empty list to hold response
    responses = []

    for point in pointLists :
        URL = baseURL + key + "&point=" + point
        json_file = make_request(URL)
        responses.append(json_file)

    return responses