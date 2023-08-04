from sjvisualizer import Canvas
from sjvisualizer import DataHandler
from sjvisualizer import PieRace, BarRace
import time
import json
import imageio

def main(fps=60, duration=0.35):

    number_of_frames = duration * 60 * fps

    EXCEL_FILE = "data/df_eastern.xlsx"

    with open("colors.json") as f:
        colors = json.load(f)

    df = DataHandler.DataHandler(excel_file=EXCEL_FILE, number_of_frames=number_of_frames).df

    canvas = Canvas.canvas()
    bar_chart = BarRace.bar_race(df=df, canvas=canvas.canvas, colors=colors, number_of_bars=15)
    canvas.add_sub_plot(bar_chart)
    canvas.add_title("Nuclear Warheads by Country", color=(0, 132, 255))
    canvas.add_sub_title("From 1950-2022", color=(0, 132, 255))
    canvas.add_time(df=df, time_indicator="year")

    frames = []

    for aaa in range(number_of_frames):
        canvas.update()
        frames.append(canvas.canvas.copy())

    output_file = "animation.mp4"
    imageio.mimsave(output_file, frames, fps=fps)
    print(f"La animación se ha guardado en el archivo {output_file}.")

if __name__ == "__main__":
    main()
