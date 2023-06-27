from flask import Flask, render_template

app = Flask(__name__)

# Dummy data for demonstration purposes
accounts = [
    {
        "name": "Account 1",
        "total_views": 100000,
        "likes": 5000,
        "last_post": "Post 1"
    },
    {
        "name": "Account 2",
        "total_views": 200000,
        "likes": 10000,
        "last_post": "Post 2"
    },
    {
        "name": "Account 3",
        "total_views": 300000,
        "likes": 15000,
        "last_post": "Post 3"
    }
]

@app.route("/")
def dashboard():
    return render_template("dashboard.html", accounts=accounts)

@app.route("/accounts")
def account_list():
    return render_template("account_list.html", accounts=accounts)

if __name__ == "__main__":
    app.run()
