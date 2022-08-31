from flask import Blueprint
from controllers.UserController import getAll, create

user_bp = Blueprint('user_bp', __name__)

user_bp.route('/', methods=['GET'])(getAll)
user_bp.route('/create', methods=['POST'])(create)

