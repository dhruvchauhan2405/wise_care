import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn import svm
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression

def diabetes_prediction(input_data):
    df = pd.read_csv('diabetes.csv') 

    X = df.drop(columns = 'Outcome', axis=1) #independent variable 
    Y = df['Outcome'] #target variable

    X_train, X_test, Y_train, Y_test = train_test_split(X,Y, test_size = 0.2, stratify=Y, random_state=1)


    scaler = StandardScaler()

    scaler.fit(X_test)
    scaler.fit(X_train)

    standardized_train_data = scaler.transform(X_train)
    standardized_test_data = scaler.transform(X_test)

    X_train = standardized_train_data
    X_test = standardized_test_data

    model = LogisticRegression()
    #training the Logistic Regression model with training data
    model.fit(X_train, Y_train)
    # input_data = (5,166,72,19,175,25.8,0.587,51)
    input_data_as_numpy_array = np.asarray(input_data)
    input_data_reshaped = input_data_as_numpy_array.reshape(1,-1)
    std_data = scaler.transform(input_data_reshaped)
    prediction_l = model.predict(std_data)
    return prediction_l


