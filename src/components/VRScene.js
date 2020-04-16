import React from 'react';
class VRScene extends React.Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "/index.js";
    script.async = true;

    document.body.appendChild(script);
 
  }
  render () {
    return (
      <div>
      <h1>Gorillas</h1>

      <h2>The great apes from Central Africa</h2>
  
      <p>Gorillas are ground-dwelling, predominantly herbivorous apes that inhabit
  
      the forests of central Africa.</p>
  
  
  
      <p>The 360 video below shows gorillas in the Congo rainforest.</p>
  
  
  
      <div id="vrview"></div>
  
  
  
      <div id="controls">
  
        <div id="toggleplay" class="paused"></div>
  
        <div id="time">00:00 | 00:00</div>
  
        <input id="volumerange" type="range" min="0" max="100" value="100"/>
  
        <div id="togglemute"></div>
  
        <div id="togglefullscreen"></div>
  
      </div>
  
  
  
      <p>The eponymous genus Gorilla is divided into two species: the eastern
  
      gorillas and the western gorillas, and either four or five subspecies. They
  
      are the largest living primates by physical size.</p>
  
  
  
      <p>The DNA of gorillas is highly similar to that of humans, from 95–99%
  
      depending on what is counted, and they are the next closest living relatives
  
      to humans after the chimpanzees and bonobos.</p>
  
  
  
      <p>Gorillas' natural habitats cover tropical or subtropical forests in
  
      Africa.  Although their range covers a small percentage of Africa, gorillas
  
      cover a wide range of elevations. The mountain gorilla inhabits the
  
      Albertine Rift montane cloud forests of the Virunga Volcanoes, ranging in
  
      altitude from 2,200–4,300 metres (7,200–14,100 ft). Lowland gorillas live in
  
      dense forests and lowland swamps and marshes as low as sea level, with
  
      western lowland gorillas living in Central West African countries and
  
      eastern lowland gorillas living in the Democratic Republic of the Congo near
  
      its border with Rwanda.</p>
  
  
  
      <p>Source <a href="https://en.wikipedia.org/wiki/Gorilla">Wikipedia</a></p>
      </div>
    );
  }
}
 
export default VRScene;