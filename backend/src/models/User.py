from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):

    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    usuario = db.Column(db.String(80), primary_key=True)
    contrasena = db.Column(db.String(80))

    def __init__(self,usuario,contrasena):
        self.validarLongitudUsuario(usuario, 3)
        self.validarLongitudContrase├▒a(contrasena, 5)
        self.usuario = usuario
        self.contrasena = contrasena

    @property
    def serialize(self):
        return {
            'usuario': self.usuario,
            'contrasena': self.contrasena
        }

    def validarLongitudUsuario(self,username, longitud):
        if len(username) <= longitud:
            raise Exception ("El nombre de usuario debe contener al menos 4 caracteres")

    def validarLongitudContrase├▒a(self,contrasena, longitud):
         if len(contrasena) < longitud:
            raise Exception ("la contrase├▒a debe teener al menos 5 caracteres")
            
        


