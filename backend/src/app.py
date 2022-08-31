from flask import Flask
from flask_cors import CORS
from models.User import db
from routes.user_bp import user_bp
from routes.noticia_bp import noticia_bp

app = Flask(__name__)
app.config.from_object('config')
cors = CORS(app, resources={r"*": {"origins": "*"}})
db.init_app(app)

app.register_blueprint(user_bp, url_prefix='/usuarios')
app.register_blueprint(noticia_bp, url_prefix='/noticias')

if __name__ == '__main__':
    app.debug = True
    app.run()