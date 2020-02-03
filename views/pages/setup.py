import sys

from cx_Freeze import setup, Executable



setup(  name = "pygraph",

        version = "1.0",

        description = "drawing math graph program",

        author = "soori",

        executables = [Executable("pygraph.py", base="Win32GUI")])        