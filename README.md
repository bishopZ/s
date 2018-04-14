# S

A light JavaScript library.

## Installation

    $ yarn add s --dev

## Usage

Look at the **src** folder in the github repository for more information

### Import

    import S from 's'

### Return the body node of the document

    const body = S.Dom.body

### Add scroll event listener

    S.L(element, 'add', 'click', callback)

### Check if a variable is an object

    const isObj = S.Is.object(variable)

### Play animations with Merom

    const animation = new S.Merom({el: '#id', p: {x: [0, 600, 'px']}, d: 2000, e: 'Power4InOut'})
    animation.play()
    animation.play({p: {x: {newEnd: 50}}, reverse: true})

### Build sequences of Merom with TL

    const tl = new S.TL()
    tl.from({el: '#id0', p: {x: [0, 600, 'px'], rotate: [0, 360]}, d: 5000, e: 'linear'})
    tl.from({el: '#id1', p: {x: [0, 600, 'px'], rotate: [0, 360]}, d: 5000, e: 'linear', delay: 300, cb: myCallback})

    tl.play()

    tl.pause()

    tl.play({reverse: true})

## Author

Aristide Benoist

[www.aristidebenoist.com](https://www.aristidebenoist.com)

## Licence

The MIT License (MIT)

Copyright (c) 2018 Aristide Benoist

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
