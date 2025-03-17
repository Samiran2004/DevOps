import yaml

with open('first.yml', 'r') as file:
    try:
        print(yaml.safe_load(file))
    except yaml.YAMLError as error:
        print(error)