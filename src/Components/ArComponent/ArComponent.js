import React from 'react'
import {Entity, Scene} from 'aframe-react';

export default class ARComponent extends React.Component {

  componentDidMount(){
  }

  render (){
    return(
      <div>
      <Scene>
        <a-scene embedded vr-mode-ui="enabled: false;" arjs="debugUIEnabled: false;">
            <a-assets>
            <a-asset-item id="exoFont" src="fonts/exoBlack.typeface.json"></a-asset-item>
            <img id="pixels" src="images/pixels.png" />
            </a-assets>
            <a-marker type="pattern" url="data/usbank.patt">
            <a-plane color="white" rotation="-90 0 0" position="0 -0.25 0" width="3" material="transparent: true; opacity: 0.90"></a-plane>
            <a-text value="Love you Chellakutty <3" font="fonts/Exo2Bold.fnt" color="red" rotation="-90 0 0" align="center" scale="2 2 2"></a-text>

            </a-marker>
            <a-marker type="pattern" url="data/hiro.patt">
            <Entity text-geometry="value: Hello, world!; font: #exoFont;"
                material="color: yellow; src: #pixels; repeat: 0.5 0.5;" 
                rotation="-90 0 0">
            </Entity>

            </a-marker>
            <Entity camera></Entity>
        </a-scene>
       </Scene>
      </div>
    )
  }

}