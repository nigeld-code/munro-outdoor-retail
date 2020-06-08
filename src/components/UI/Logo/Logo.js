import React from 'react';

const Logo = props => {
  let textStyle = { fill: 'rgb(37,82,28)', fillRule: 'nonzero' };
  let lineStyle = {
    fill: 'none',
    stroke: 'rgb(183,194,79)',
    strokeWidth: '10px'
  };

  if (props.textColor) {
    textStyle = { ...textStyle, fill: props.textColor };
  }

  if (props.lineColor) {
    lineStyle = { ...lineStyle, stroke: props.lineColor };
  }

  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 411 154'
      style={{
        fillRule: 'evenodd',
        clipRule: 'evenodd',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
        strokeMiterlimit: '1.5'
      }}
      className={props.className}
    >
      <g transform='matrix(1,0,0,1,-188.719,-173.433)'>
        <g transform='matrix(1,0,0,1,3,-28)'>
          <path
            d='M190.719,313.591C565.729,375.31 591.519,338.785 591.519,338.785'
            style={lineStyle}
          />
        </g>
        <g transform='matrix(1,0,0,1,176.604,169.057)'>
          <g id='Artboard1'>
            <g transform='matrix(144,0,0,144,0.000754717,105.177)'>
              <path
                d='M0.111,0C0.104,0 0.099,-0.002 0.095,-0.007C0.09,-0.011 0.088,-0.016 0.088,-0.023L0.088,-0.676C0.088,-0.683 0.09,-0.689 0.094,-0.694C0.098,-0.698 0.104,-0.7 0.111,-0.7L0.158,-0.7C0.17,-0.7 0.178,-0.695 0.183,-0.685L0.396,-0.276L0.611,-0.685C0.616,-0.695 0.624,-0.7 0.635,-0.7L0.682,-0.7C0.689,-0.7 0.695,-0.698 0.699,-0.694C0.703,-0.689 0.705,-0.683 0.705,-0.676L0.705,-0.023C0.705,-0.016 0.703,-0.011 0.699,-0.007C0.694,-0.002 0.689,0 0.682,0L0.636,0C0.629,0 0.624,-0.002 0.62,-0.007C0.616,-0.011 0.614,-0.016 0.614,-0.023L0.614,-0.52L0.443,-0.189C0.436,-0.175 0.426,-0.168 0.411,-0.168L0.381,-0.168C0.367,-0.168 0.356,-0.175 0.349,-0.189L0.179,-0.52L0.179,-0.023C0.179,-0.016 0.177,-0.011 0.172,-0.007C0.168,-0.002 0.163,0 0.156,0L0.111,0Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(144,0,0,144,114.193,105.177)'>
              <path
                d='M0.269,0.01C0.206,0.01 0.157,-0.011 0.122,-0.051C0.087,-0.093 0.07,-0.147 0.07,-0.215L0.07,-0.497C0.07,-0.504 0.072,-0.509 0.077,-0.514C0.081,-0.518 0.086,-0.52 0.093,-0.52L0.139,-0.52C0.146,-0.52 0.151,-0.518 0.156,-0.514C0.16,-0.509 0.162,-0.504 0.162,-0.497L0.162,-0.22C0.162,-0.119 0.206,-0.068 0.294,-0.068C0.337,-0.068 0.371,-0.082 0.396,-0.109C0.421,-0.136 0.433,-0.173 0.433,-0.22L0.433,-0.497C0.433,-0.504 0.435,-0.509 0.44,-0.514C0.444,-0.518 0.449,-0.52 0.456,-0.52L0.502,-0.52C0.509,-0.52 0.514,-0.518 0.519,-0.514C0.523,-0.509 0.525,-0.504 0.525,-0.497L0.525,-0.023C0.525,-0.016 0.523,-0.011 0.519,-0.007C0.514,-0.002 0.509,0 0.502,0L0.459,0C0.452,0 0.447,-0.002 0.443,-0.007C0.438,-0.011 0.436,-0.016 0.436,-0.023L0.436,-0.068C0.417,-0.042 0.394,-0.023 0.368,-0.01C0.342,0.003 0.309,0.01 0.269,0.01Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(144,0,0,144,200.593,105.177)'>
              <path
                d='M0.098,0C0.091,0 0.086,-0.002 0.082,-0.007C0.077,-0.011 0.075,-0.016 0.075,-0.023L0.075,-0.497C0.075,-0.504 0.077,-0.509 0.082,-0.514C0.086,-0.518 0.091,-0.52 0.098,-0.52L0.141,-0.52C0.148,-0.52 0.154,-0.518 0.158,-0.514C0.162,-0.51 0.164,-0.504 0.164,-0.497L0.164,-0.453C0.184,-0.478 0.207,-0.497 0.234,-0.51C0.26,-0.523 0.293,-0.53 0.332,-0.53C0.396,-0.53 0.446,-0.509 0.481,-0.469C0.516,-0.428 0.534,-0.373 0.534,-0.306L0.534,-0.023C0.534,-0.016 0.532,-0.011 0.528,-0.007C0.523,-0.002 0.518,0 0.511,0L0.465,0C0.458,0 0.453,-0.002 0.449,-0.007C0.444,-0.011 0.442,-0.016 0.442,-0.023L0.442,-0.3C0.442,-0.348 0.43,-0.385 0.407,-0.412C0.384,-0.439 0.35,-0.452 0.307,-0.452C0.264,-0.452 0.23,-0.439 0.205,-0.411C0.18,-0.385 0.167,-0.347 0.167,-0.3L0.167,-0.023C0.167,-0.016 0.165,-0.011 0.161,-0.007C0.156,-0.002 0.151,0 0.144,0L0.098,0Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(144,0,0,144,287.569,105.177)'>
              <path
                d='M0.098,0C0.091,0 0.086,-0.002 0.082,-0.007C0.077,-0.011 0.075,-0.016 0.075,-0.023L0.075,-0.496C0.075,-0.503 0.077,-0.508 0.082,-0.513C0.086,-0.518 0.091,-0.52 0.098,-0.52L0.14,-0.52C0.147,-0.52 0.153,-0.518 0.158,-0.514C0.162,-0.509 0.164,-0.503 0.164,-0.496L0.164,-0.452C0.191,-0.497 0.238,-0.52 0.303,-0.52L0.342,-0.52C0.349,-0.52 0.355,-0.518 0.359,-0.514C0.363,-0.51 0.365,-0.504 0.365,-0.497L0.365,-0.46C0.365,-0.453 0.363,-0.448 0.359,-0.444C0.355,-0.439 0.349,-0.437 0.342,-0.437L0.285,-0.437C0.248,-0.437 0.22,-0.426 0.199,-0.405C0.178,-0.384 0.167,-0.355 0.167,-0.318L0.167,-0.023C0.167,-0.016 0.165,-0.011 0.16,-0.007C0.155,-0.002 0.15,0 0.143,0L0.098,0Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(144,0,0,144,340.273,105.177)'>
              <path
                d='M0.286,0.01C0.213,0.01 0.156,-0.011 0.117,-0.052C0.077,-0.093 0.056,-0.148 0.053,-0.217L0.052,-0.26L0.053,-0.303C0.056,-0.372 0.077,-0.427 0.117,-0.468C0.158,-0.509 0.214,-0.53 0.286,-0.53C0.358,-0.53 0.414,-0.509 0.455,-0.468C0.495,-0.427 0.516,-0.372 0.519,-0.303C0.52,-0.288 0.521,-0.274 0.521,-0.26C0.521,-0.246 0.52,-0.232 0.519,-0.217C0.516,-0.148 0.495,-0.093 0.456,-0.052C0.416,-0.011 0.359,0.01 0.286,0.01ZM0.286,-0.065C0.329,-0.065 0.363,-0.079 0.388,-0.106C0.412,-0.133 0.426,-0.171 0.428,-0.222C0.429,-0.229 0.429,-0.241 0.429,-0.26C0.429,-0.279 0.429,-0.291 0.428,-0.298C0.426,-0.349 0.412,-0.388 0.388,-0.414C0.363,-0.442 0.329,-0.455 0.286,-0.455C0.243,-0.455 0.21,-0.442 0.185,-0.414C0.16,-0.388 0.146,-0.349 0.144,-0.298L0.143,-0.26L0.144,-0.222C0.146,-0.171 0.16,-0.133 0.185,-0.106C0.21,-0.079 0.243,-0.065 0.286,-0.065Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(30,0,0,30,223.952,135.177)'>
              <path
                d='M0.338,0.01C0.251,0.01 0.184,-0.013 0.137,-0.059C0.09,-0.104 0.065,-0.173 0.062,-0.265C0.061,-0.285 0.061,-0.313 0.061,-0.35C0.061,-0.387 0.061,-0.415 0.062,-0.434C0.065,-0.525 0.091,-0.593 0.14,-0.64C0.189,-0.687 0.255,-0.71 0.338,-0.71C0.421,-0.71 0.487,-0.687 0.536,-0.64C0.585,-0.593 0.61,-0.525 0.613,-0.434C0.614,-0.395 0.615,-0.367 0.615,-0.35C0.615,-0.333 0.614,-0.305 0.613,-0.265C0.61,-0.173 0.586,-0.104 0.539,-0.059C0.492,-0.013 0.425,0.01 0.338,0.01ZM0.338,-0.073C0.391,-0.073 0.434,-0.089 0.466,-0.122C0.498,-0.154 0.515,-0.203 0.518,-0.27C0.519,-0.31 0.52,-0.337 0.52,-0.35C0.52,-0.365 0.519,-0.391 0.518,-0.43C0.515,-0.497 0.498,-0.546 0.466,-0.579C0.434,-0.612 0.391,-0.628 0.338,-0.628C0.285,-0.628 0.242,-0.612 0.21,-0.579C0.177,-0.546 0.16,-0.497 0.158,-0.43C0.157,-0.411 0.157,-0.384 0.157,-0.35C0.157,-0.317 0.157,-0.29 0.158,-0.27C0.16,-0.203 0.177,-0.154 0.209,-0.122C0.241,-0.089 0.284,-0.073 0.338,-0.073Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(30,0,0,30,244.202,135.177)'>
              <path
                d='M0.269,0.01C0.206,0.01 0.157,-0.011 0.122,-0.051C0.087,-0.093 0.07,-0.147 0.07,-0.215L0.07,-0.497C0.07,-0.504 0.072,-0.509 0.077,-0.514C0.081,-0.518 0.086,-0.52 0.093,-0.52L0.139,-0.52C0.146,-0.52 0.151,-0.518 0.156,-0.514C0.16,-0.509 0.162,-0.504 0.162,-0.497L0.162,-0.22C0.162,-0.119 0.206,-0.068 0.294,-0.068C0.337,-0.068 0.371,-0.082 0.396,-0.109C0.421,-0.136 0.433,-0.173 0.433,-0.22L0.433,-0.497C0.433,-0.504 0.435,-0.509 0.44,-0.514C0.444,-0.518 0.449,-0.52 0.456,-0.52L0.502,-0.52C0.509,-0.52 0.514,-0.518 0.519,-0.514C0.523,-0.509 0.525,-0.504 0.525,-0.497L0.525,-0.023C0.525,-0.016 0.523,-0.011 0.519,-0.007C0.514,-0.002 0.509,0 0.502,0L0.459,0C0.452,0 0.447,-0.002 0.443,-0.007C0.438,-0.011 0.436,-0.016 0.436,-0.023L0.436,-0.068C0.417,-0.042 0.394,-0.023 0.368,-0.01C0.342,0.003 0.309,0.01 0.269,0.01Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(30,0,0,30,262.202,135.177)'>
              <path
                d='M0.275,0C0.172,0 0.12,-0.058 0.12,-0.175L0.12,-0.443L0.041,-0.443C0.034,-0.443 0.029,-0.445 0.025,-0.449C0.021,-0.453 0.019,-0.458 0.019,-0.465L0.019,-0.497C0.019,-0.504 0.021,-0.509 0.025,-0.514C0.029,-0.518 0.034,-0.52 0.041,-0.52L0.12,-0.52L0.12,-0.687C0.12,-0.694 0.122,-0.699 0.126,-0.704C0.13,-0.708 0.135,-0.71 0.142,-0.71L0.186,-0.71C0.193,-0.71 0.198,-0.708 0.203,-0.704C0.207,-0.699 0.209,-0.694 0.209,-0.687L0.209,-0.52L0.333,-0.52C0.34,-0.52 0.345,-0.518 0.349,-0.514C0.354,-0.509 0.356,-0.504 0.356,-0.497L0.356,-0.465C0.356,-0.458 0.354,-0.453 0.349,-0.449C0.345,-0.445 0.34,-0.443 0.333,-0.443L0.209,-0.443L0.209,-0.182C0.209,-0.148 0.215,-0.122 0.226,-0.105C0.236,-0.088 0.255,-0.079 0.282,-0.079L0.343,-0.079C0.35,-0.079 0.355,-0.077 0.359,-0.073C0.363,-0.068 0.365,-0.063 0.365,-0.056L0.365,-0.023C0.365,-0.016 0.363,-0.011 0.359,-0.007C0.355,-0.002 0.35,0 0.343,0L0.275,0Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(30,0,0,30,273.842,135.177)'>
              <path
                d='M0.265,0.01C0.195,0.01 0.142,-0.013 0.108,-0.058C0.073,-0.103 0.054,-0.161 0.051,-0.23L0.05,-0.26L0.051,-0.29C0.054,-0.359 0.073,-0.416 0.108,-0.462C0.143,-0.507 0.196,-0.53 0.265,-0.53C0.334,-0.53 0.388,-0.505 0.427,-0.456L0.427,-0.687C0.427,-0.694 0.429,-0.699 0.434,-0.704C0.438,-0.708 0.443,-0.71 0.45,-0.71L0.495,-0.71C0.502,-0.71 0.507,-0.708 0.511,-0.704C0.516,-0.699 0.518,-0.694 0.518,-0.687L0.518,-0.023C0.518,-0.016 0.516,-0.011 0.511,-0.007C0.507,-0.002 0.502,0 0.495,0L0.452,0C0.445,0 0.44,-0.002 0.436,-0.007C0.432,-0.011 0.43,-0.016 0.43,-0.023L0.43,-0.066C0.392,-0.015 0.337,0.01 0.265,0.01ZM0.284,-0.068C0.331,-0.068 0.366,-0.084 0.389,-0.115C0.412,-0.146 0.425,-0.182 0.427,-0.225C0.428,-0.232 0.428,-0.245 0.428,-0.263C0.428,-0.282 0.428,-0.295 0.427,-0.302C0.426,-0.343 0.413,-0.378 0.389,-0.407C0.364,-0.437 0.329,-0.452 0.284,-0.452C0.236,-0.452 0.201,-0.437 0.179,-0.407C0.157,-0.377 0.145,-0.338 0.143,-0.289L0.142,-0.26C0.142,-0.132 0.189,-0.068 0.284,-0.068Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(30,0,0,30,291.662,135.177)'>
              <path
                d='M0.286,0.01C0.213,0.01 0.156,-0.011 0.117,-0.052C0.077,-0.093 0.056,-0.148 0.053,-0.217L0.052,-0.26L0.053,-0.303C0.056,-0.372 0.077,-0.427 0.117,-0.468C0.158,-0.509 0.214,-0.53 0.286,-0.53C0.358,-0.53 0.414,-0.509 0.455,-0.468C0.495,-0.427 0.516,-0.372 0.519,-0.303C0.52,-0.288 0.521,-0.274 0.521,-0.26C0.521,-0.246 0.52,-0.232 0.519,-0.217C0.516,-0.148 0.495,-0.093 0.456,-0.052C0.416,-0.011 0.359,0.01 0.286,0.01ZM0.286,-0.065C0.329,-0.065 0.363,-0.079 0.388,-0.106C0.412,-0.133 0.426,-0.171 0.428,-0.222C0.429,-0.229 0.429,-0.241 0.429,-0.26C0.429,-0.279 0.429,-0.291 0.428,-0.298C0.426,-0.349 0.412,-0.388 0.388,-0.414C0.363,-0.442 0.329,-0.455 0.286,-0.455C0.243,-0.455 0.21,-0.442 0.185,-0.414C0.16,-0.388 0.146,-0.349 0.144,-0.298L0.143,-0.26L0.144,-0.222C0.146,-0.171 0.16,-0.133 0.185,-0.106C0.21,-0.079 0.243,-0.065 0.286,-0.065Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(30,0,0,30,308.822,135.177)'>
              <path
                d='M0.286,0.01C0.213,0.01 0.156,-0.011 0.117,-0.052C0.077,-0.093 0.056,-0.148 0.053,-0.217L0.052,-0.26L0.053,-0.303C0.056,-0.372 0.077,-0.427 0.117,-0.468C0.158,-0.509 0.214,-0.53 0.286,-0.53C0.358,-0.53 0.414,-0.509 0.455,-0.468C0.495,-0.427 0.516,-0.372 0.519,-0.303C0.52,-0.288 0.521,-0.274 0.521,-0.26C0.521,-0.246 0.52,-0.232 0.519,-0.217C0.516,-0.148 0.495,-0.093 0.456,-0.052C0.416,-0.011 0.359,0.01 0.286,0.01ZM0.286,-0.065C0.329,-0.065 0.363,-0.079 0.388,-0.106C0.412,-0.133 0.426,-0.171 0.428,-0.222C0.429,-0.229 0.429,-0.241 0.429,-0.26C0.429,-0.279 0.429,-0.291 0.428,-0.298C0.426,-0.349 0.412,-0.388 0.388,-0.414C0.363,-0.442 0.329,-0.455 0.286,-0.455C0.243,-0.455 0.21,-0.442 0.185,-0.414C0.16,-0.388 0.146,-0.349 0.144,-0.298L0.143,-0.26L0.144,-0.222C0.146,-0.171 0.16,-0.133 0.185,-0.106C0.21,-0.079 0.243,-0.065 0.286,-0.065Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(30,0,0,30,325.982,135.177)'>
              <path
                d='M0.098,0C0.091,0 0.086,-0.002 0.082,-0.007C0.077,-0.011 0.075,-0.016 0.075,-0.023L0.075,-0.496C0.075,-0.503 0.077,-0.508 0.082,-0.513C0.086,-0.518 0.091,-0.52 0.098,-0.52L0.14,-0.52C0.147,-0.52 0.153,-0.518 0.158,-0.514C0.162,-0.509 0.164,-0.503 0.164,-0.496L0.164,-0.452C0.191,-0.497 0.238,-0.52 0.303,-0.52L0.342,-0.52C0.349,-0.52 0.355,-0.518 0.359,-0.514C0.363,-0.51 0.365,-0.504 0.365,-0.497L0.365,-0.46C0.365,-0.453 0.363,-0.448 0.359,-0.444C0.355,-0.439 0.349,-0.437 0.342,-0.437L0.285,-0.437C0.248,-0.437 0.22,-0.426 0.199,-0.405C0.178,-0.384 0.167,-0.355 0.167,-0.318L0.167,-0.023C0.167,-0.016 0.165,-0.011 0.16,-0.007C0.155,-0.002 0.15,0 0.143,0L0.098,0Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(30,0,0,30,343.952,135.177)'>
              <path
                d='M0.11,0C0.103,0 0.098,-0.002 0.094,-0.007C0.09,-0.011 0.088,-0.016 0.088,-0.023L0.088,-0.676C0.088,-0.683 0.09,-0.689 0.094,-0.694C0.098,-0.698 0.103,-0.7 0.11,-0.7L0.354,-0.7C0.43,-0.7 0.49,-0.682 0.533,-0.647C0.576,-0.611 0.597,-0.559 0.597,-0.491C0.597,-0.44 0.584,-0.399 0.559,-0.366C0.534,-0.333 0.498,-0.311 0.453,-0.298L0.607,-0.031C0.609,-0.027 0.61,-0.023 0.61,-0.02C0.61,-0.015 0.608,-0.01 0.604,-0.006C0.6,-0.002 0.595,0 0.59,0L0.546,0C0.536,0 0.528,-0.002 0.523,-0.007C0.517,-0.012 0.512,-0.018 0.507,-0.027L0.36,-0.283L0.182,-0.283L0.182,-0.023C0.182,-0.016 0.18,-0.011 0.175,-0.007C0.17,-0.002 0.165,0 0.158,0L0.11,0ZM0.35,-0.365C0.451,-0.365 0.501,-0.407 0.501,-0.492C0.501,-0.577 0.451,-0.619 0.35,-0.619L0.182,-0.619L0.182,-0.365L0.35,-0.365Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(30,0,0,30,363.392,135.177)'>
              <path
                d='M0.281,0.01C0.213,0.01 0.159,-0.011 0.118,-0.054C0.077,-0.096 0.055,-0.154 0.051,-0.227L0.05,-0.261L0.051,-0.294C0.055,-0.366 0.077,-0.423 0.118,-0.466C0.159,-0.509 0.213,-0.53 0.281,-0.53C0.354,-0.53 0.411,-0.507 0.452,-0.46C0.492,-0.413 0.512,-0.35 0.512,-0.27L0.512,-0.252C0.512,-0.245 0.51,-0.24 0.505,-0.235C0.501,-0.231 0.496,-0.229 0.489,-0.229L0.142,-0.229L0.142,-0.22C0.144,-0.177 0.157,-0.14 0.182,-0.109C0.207,-0.078 0.239,-0.063 0.28,-0.063C0.311,-0.063 0.337,-0.069 0.357,-0.082C0.376,-0.094 0.391,-0.107 0.401,-0.12C0.407,-0.128 0.412,-0.133 0.415,-0.135C0.418,-0.136 0.424,-0.137 0.432,-0.137L0.476,-0.137C0.482,-0.137 0.487,-0.135 0.492,-0.132C0.496,-0.129 0.498,-0.124 0.498,-0.119C0.498,-0.104 0.489,-0.087 0.471,-0.066C0.453,-0.045 0.428,-0.028 0.395,-0.013C0.362,0.002 0.324,0.01 0.281,0.01ZM0.421,-0.297L0.421,-0.3C0.421,-0.347 0.408,-0.385 0.383,-0.414C0.358,-0.443 0.324,-0.458 0.281,-0.458C0.238,-0.458 0.204,-0.443 0.179,-0.414C0.154,-0.385 0.142,-0.347 0.142,-0.3L0.142,-0.297L0.421,-0.297Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(30,0,0,30,380.072,135.177)'>
              <path
                d='M0.275,0C0.172,0 0.12,-0.058 0.12,-0.175L0.12,-0.443L0.041,-0.443C0.034,-0.443 0.029,-0.445 0.025,-0.449C0.021,-0.453 0.019,-0.458 0.019,-0.465L0.019,-0.497C0.019,-0.504 0.021,-0.509 0.025,-0.514C0.029,-0.518 0.034,-0.52 0.041,-0.52L0.12,-0.52L0.12,-0.687C0.12,-0.694 0.122,-0.699 0.126,-0.704C0.13,-0.708 0.135,-0.71 0.142,-0.71L0.186,-0.71C0.193,-0.71 0.198,-0.708 0.203,-0.704C0.207,-0.699 0.209,-0.694 0.209,-0.687L0.209,-0.52L0.333,-0.52C0.34,-0.52 0.345,-0.518 0.349,-0.514C0.354,-0.509 0.356,-0.504 0.356,-0.497L0.356,-0.465C0.356,-0.458 0.354,-0.453 0.349,-0.449C0.345,-0.445 0.34,-0.443 0.333,-0.443L0.209,-0.443L0.209,-0.182C0.209,-0.148 0.215,-0.122 0.226,-0.105C0.236,-0.088 0.255,-0.079 0.282,-0.079L0.343,-0.079C0.35,-0.079 0.355,-0.077 0.359,-0.073C0.363,-0.068 0.365,-0.063 0.365,-0.056L0.365,-0.023C0.365,-0.016 0.363,-0.011 0.359,-0.007C0.355,-0.002 0.35,0 0.343,0L0.275,0Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(30,0,0,30,391.712,135.177)'>
              <path
                d='M0.219,0.01C0.186,0.01 0.156,0.003 0.129,-0.01C0.101,-0.023 0.079,-0.042 0.063,-0.065C0.046,-0.087 0.038,-0.113 0.038,-0.141C0.038,-0.185 0.056,-0.221 0.092,-0.249C0.128,-0.277 0.177,-0.296 0.239,-0.305L0.389,-0.326L0.389,-0.355C0.389,-0.424 0.349,-0.458 0.27,-0.458C0.239,-0.458 0.215,-0.452 0.196,-0.44C0.177,-0.427 0.164,-0.413 0.155,-0.396C0.152,-0.389 0.15,-0.385 0.147,-0.383C0.143,-0.38 0.139,-0.379 0.134,-0.379L0.095,-0.379C0.089,-0.379 0.084,-0.381 0.08,-0.386C0.075,-0.39 0.073,-0.395 0.073,-0.401C0.073,-0.416 0.08,-0.434 0.095,-0.455C0.109,-0.475 0.131,-0.493 0.161,-0.507C0.191,-0.523 0.228,-0.53 0.271,-0.53C0.346,-0.53 0.399,-0.513 0.432,-0.478C0.464,-0.443 0.48,-0.4 0.48,-0.348L0.48,-0.023C0.48,-0.016 0.478,-0.011 0.473,-0.007C0.469,-0.002 0.464,0 0.457,0L0.413,0C0.406,0 0.401,-0.002 0.397,-0.007C0.393,-0.011 0.391,-0.016 0.391,-0.023L0.391,-0.067C0.376,-0.045 0.355,-0.027 0.327,-0.012C0.299,0.003 0.263,0.01 0.219,0.01ZM0.239,-0.063C0.283,-0.063 0.319,-0.077 0.347,-0.106C0.375,-0.135 0.389,-0.176 0.389,-0.231L0.389,-0.259L0.272,-0.242C0.224,-0.235 0.188,-0.224 0.163,-0.208C0.138,-0.192 0.126,-0.172 0.126,-0.148C0.126,-0.121 0.137,-0.1 0.16,-0.085C0.182,-0.07 0.208,-0.063 0.239,-0.063Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(30,0,0,30,408.212,135.177)'>
              <path
                d='M0.09,-0.618C0.083,-0.618 0.078,-0.62 0.074,-0.625C0.069,-0.629 0.067,-0.634 0.067,-0.641L0.067,-0.693C0.067,-0.7 0.069,-0.705 0.074,-0.71C0.078,-0.715 0.083,-0.717 0.09,-0.717L0.149,-0.717C0.156,-0.717 0.161,-0.715 0.166,-0.71C0.171,-0.705 0.173,-0.7 0.173,-0.693L0.173,-0.641C0.173,-0.634 0.171,-0.629 0.166,-0.625C0.161,-0.62 0.156,-0.618 0.149,-0.618L0.09,-0.618ZM0.098,0C0.091,0 0.086,-0.002 0.082,-0.007C0.077,-0.011 0.075,-0.016 0.075,-0.023L0.075,-0.497C0.075,-0.504 0.077,-0.509 0.082,-0.514C0.086,-0.518 0.091,-0.52 0.098,-0.52L0.142,-0.52C0.149,-0.52 0.154,-0.518 0.159,-0.514C0.163,-0.509 0.165,-0.504 0.165,-0.497L0.165,-0.023C0.165,-0.016 0.163,-0.011 0.159,-0.007C0.154,-0.002 0.149,0 0.142,0L0.098,0Z'
                style={textStyle}
              />
            </g>
            <g transform='matrix(30,0,0,30,415.412,135.177)'>
              <path
                d='M0.099,0C0.092,0 0.087,-0.002 0.083,-0.007C0.078,-0.011 0.076,-0.016 0.076,-0.023L0.076,-0.687C0.076,-0.694 0.078,-0.7 0.083,-0.704C0.087,-0.708 0.092,-0.71 0.099,-0.71L0.143,-0.71C0.15,-0.71 0.155,-0.708 0.16,-0.704C0.164,-0.699 0.166,-0.694 0.166,-0.687L0.166,-0.023C0.166,-0.016 0.164,-0.011 0.16,-0.007C0.155,-0.002 0.15,0 0.143,0L0.099,0Z'
                style={textStyle}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default React.memo(Logo);
