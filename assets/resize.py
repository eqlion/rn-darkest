#!/usr/bin/env python3

from PIL import Image

import glob, os

def make_square(im, min_size=256, fill_color=(255, 255, 255, 0)):
    im.thumbnail((200,200))
    x, y = im.size
    size = max(min_size, x, y)
    new_im = Image.new('RGBA', (size, size), fill_color)
    new_im.paste(im, (int((size - x) / 2), int((size - y) / 2)))
    return new_im


for infile in glob.glob("icons/*.png"):
    fl, ext = os.path.splitext(infile)
    im = Image.open(infile)
    im = make_square(im)
    im.save(fl + ".thumbnail.png", "PNG")
