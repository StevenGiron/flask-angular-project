from flask import jsonify, request
from models.User import User
from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def getAll():
    users = User.query.all()
    usuarios=[]
    for user in users:
        usuario = {'id':user.id, 'usuario':user.usuario, 'contrasena':user.contrasena}
        usuarios.append(usuario)
    return jsonify(usuarios)

    
def create():
    try:
        if(validarExistenciaUsuario(request.json['usuario']) is True):
            return jsonify({'message' : "Ya existe un usuario con este nombre",'exito': False}), 400
        user = User(usuario=request.json['usuario'],contrasena=request.json['contrasena'])
        db.session.add(user)
        db.session.commit()
        return jsonify({'message' : "Usuario registrado",'exito': True})  

    except Exception as ex:
        return jsonify({'message' : str(ex),'exito': False}), 400


def validarExistenciaUsuario(username):
    missing = User.query.filter_by(usuario=username).first()
    if missing is None:
        return False
    else:
        return True




    
    