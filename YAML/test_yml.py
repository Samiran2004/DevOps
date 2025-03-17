import yaml

#file_name = 'first.yml'
file_name = 'demo_docker-compose.yml'

with open(file_name, 'r') as file:
    try:
        print(yaml.safe_load(file))
    except yaml.YAMLError as error:
        print(error)