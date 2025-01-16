import os

# project folder path
folders = [
    "templates",
    "static",
    "static/css",
    "static/js"
]

# create folders
for folder in folders:
    os.makedirs(os.path.join(folder), exist_ok=True)

# create basic files
with open(os.path.join("app.py"), "w") as f:
    f.write("""from flask import Flask, render_template\n\napp = Flask(__name__)\n\n@app.route('/')\ndef home():\n    return render_template('index.html')\n\nif __name__ == '__main__':\n    app.run(debug=True)\n""")

with open(os.path.join("templates/index.html"), "w") as f:
    f.write("""<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Portfolio</title>\n</head>\n<body>\n    <h1>Welcome to My Portfolio</h1>\n</body>\n</html>\n""")
