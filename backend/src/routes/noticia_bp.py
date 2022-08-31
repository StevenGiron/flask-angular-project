from controllers.noticiasController import getNews
from flask import Blueprint
from controllers.noticiasController import getNews

noticia_bp = Blueprint('noticia_bp', __name__)

noticia_bp.route('/', methods=['GET'])(getNews)