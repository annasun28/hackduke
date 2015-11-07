from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/game.html')
def game():
    return render_template('game.html')

@app.route('/learn.html')
def learn():
    return render_template('learn.html')

@app.route('/involve.html')
def involve():
    return render_template('involve.html')

if __name__ == '__main__':
    app.run()
