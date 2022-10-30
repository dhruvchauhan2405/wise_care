from flask import Flask, render_template , request
import diabetes
# from flask.wrappers import Request

app = Flask(__name__)

@app.route("/", methods=['GET', 'POST'])
def home():
    if request.method=="POST":
        Pregnancies = request.form['Pregnent']
        Glucose = request.form['glucose']
        BloodPressure = request.form['blood_pressure']
        SkinThickness = request.form['skin_thickness']
        Insulin = request.form['insulin']
        BMI = float(request.form['body_mass_index'])
        DiabetesPedigreeFunction = float(request.form['dpf'])
        Age = request.form['age']
        data = (Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, BMI, DiabetesPedigreeFunction, Age)
        result = diabetes.diabetes_prediction(data)
        return render_template("submit.html", res = result)
    else:
        return render_template("index.html")

@app.route("/submit", methods=['GET', 'POST'])
def submit():
    if request.method == "POST":
        return render_template('index.html')

if __name__ == "__main__":
    app.run()