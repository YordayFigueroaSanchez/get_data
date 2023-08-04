from sjvisualizer import Canvas
from sjvisualizer import DataHandler
from sjvisualizer import PieRace,BarRace
import time
import json

def main(fps = 60, duration = 0.35):

    number_of_frames = duration*60*fps

    EXCEL_FILE = "data/df_eastern.xlsx"

    with open("colors.json") as f:
        colors = json.load(f)

    # load data from Excel file
    df = DataHandler.DataHandler(excel_file=EXCEL_FILE, number_of_frames=number_of_frames).df

    # create canvas object, we will use this to draw our elements to
    canvas = Canvas.canvas()

    # add bar chart
    # bar_chart = PieRace.pie_plot(canvas=canvas.canvas, df=df)
    bar_chart = BarRace.bar_race(df=df, canvas=canvas.canvas, colors=colors, number_of_bars=15)
    canvas.add_sub_plot(bar_chart)

    # add static text
    canvas.add_title("Nuclear Warheads by Country", color=(0,132,255))
    canvas.add_sub_title("From 1950-2022", color=(0,132,255))

    # add time indication
    canvas.add_time(df=df, time_indicator="year")

    # add logo
    # canvas.add_logo(logo="logo.png")

    canvas.play(fps=fps)

if __name__ == "__main__":
    main()