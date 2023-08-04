import pandas as pd
import bar_chart_race as bcr
import json

# Cargar el archivo JSON
with open('df_eastern.json') as file:
    data = json.load(file)
# Obtener el diccionario de colores
filter_column_colors = data['colores']


df = pd.read_csv('./df_eastern.csv')
df = df.set_index('Date')


bcr.bar_chart_race(
    df=df, 
    # title='2020 MotoGP Championship Race', 
    orientation='h', 
    sort='desc', 
    n_bars=15, 
    steps_per_period=40, 
    period_length=1200,
    filename="df_eastern.mp4",
    filter_column_colors=filter_column_colors
)