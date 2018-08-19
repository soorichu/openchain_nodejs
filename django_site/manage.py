#!/usr/bin/env python
import os
import sys
import numpy as np

def read_in():
    lines = sys.stdin.readlines()
    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0])

def main():
    #get our data as an array from read_in()
    lines = read_in()

    #create a numpy array
    np_lines = np.array(lines)

    #use numpys sum method to find sum of all elements in the array
    lines_sum = np.sum(np_lines)

    #return the sum to the output stream
    print(lines_sum)


if __name__ == '__main__':

 #   os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'django_site.settings')
 #   try:
 #       from django.core.management import execute_from_command_line
 #   except ImportError as exc:
 #       raise ImportError(
 #           "Couldn't import Django. Are you sure it's installed and "
 #           "available on your PYTHONPATH environment variable? Did you "
 #           "forget to activate a virtual environment?"
 #       ) from exc
 #   execute_from_command_line(sys.argv)

    main()
