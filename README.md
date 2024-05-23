# Tienda App

## Ejecutar Dango

```bash
cd backend
```

### Crear DB

```bash
docker-compose up db -d
```
Esto creara una DB con las creadenciales definidas en backend/.envs


### Crear las migraciones de la DB
```bash
cd src
python manager.py makemigrations
python manage.py migrate
```
Esto hara las migraciones correspondientes

### Iniciar Backend
```bash
python manage.py runserver
```
Esto ejecutara la api en localhost:8000 y la documentacion con OpenAPI esta en localhost:8000/docs

## Ejecutar App React

```bash
cd frontend
npm run start
```

Esto ejecutara la app en localhost:3000
