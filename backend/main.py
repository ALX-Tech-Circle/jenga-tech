from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_cors import CORS  # Import CORS

db = SQLAlchemy()
migrate = Migrate()

def create_app():
    app = Flask(__name__)
    app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost/jenga-tech'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    
    db.init_app(app)
    migrate.init_app(app, db)
    
    CORS(app)  # Initialize CORS with the app object
    
    # Import and register blueprints here
    # from .views import main as main_blueprint
    # app.register_blueprint(main_blueprint)

    return app
if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)