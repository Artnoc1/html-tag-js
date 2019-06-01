let body = html.get('#slider');
let slider1 = html.rangeSlider({
  min: 0,
  max: 100,
  step: 10,
  value: 46
});

let input1 = html.input({
  type: 'number',
  placeholder: 'change value'
});
input1.oninput = function () {
  if (input1.value) {
    slider1.setvalue(input1.value);
  }
}

body.appendChild(slider1);
body.appendChild(input1);

let slider2 = html.rangeSlider({
  min: 0,
  max: 100,
  step: 0.001,
  value: 46,
  size: 'small'
});

let input = html.input({
  type: 'number',
  placeholder: 'change value'
});
let button = html.button('inc');
button.onclick = function () {
  slider2.setvalue(slider2.value + 1);
}
input.oninput = function () {
  if (input.value) {
    slider2.setvalue(input.value);
  }
}

body.appendChild(slider2);
body.appendChild(input);
body.appendChild(button);

body = html.get('#toggler');
let toggler = html.toggler({
  size: 40,
  valType: 'on/off',
  value: true
});


toggler.onchange = function (value) {
  console.log(this.value);
}
body.appendChild(toggler);

toggler = html.toggler({
  size: 30,
  valType: 'on/off',
  value: true
});

body.appendChild(toggler);

toggler = html.toggler({
  size: 20,
  valType: 'on/off',
  value: true
});

body.appendChild(toggler);


let select = html.select({
  select: document.querySelector('select'),
  height: 30,
  spead: 2,
  maxheight: 350
});

if (select.customSelect) {
  let options = ['random word', 'moon', 'sun', 'planet', 'so many options', 'more options', 'just one more option', 'what is option', 'choose', 'all of them', 'none of them', 'option A', 'option B', 'option C'];

  for (let i = 0; i < options.length; ++i) {
    select.addOption(options[i], options[i]);
  }
}

select.onchange = function (val) {
  console.log(val);
}