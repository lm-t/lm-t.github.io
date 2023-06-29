// Author:
// Title:

#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float plot(vec2 st, float pct){
  return  smoothstep( pct-0.02, pct, st.x) -
          smoothstep( pct, pct+0.02, st.x);
}

void main() {
    // gl_FragColor = vec4(abs(sin(u_time)),3.960,1.141,6.256);
    vec2 st = gl_FragCoord.xy/u_resolution;
    float x = pow(st.y,2.0);
    
    vec3 color = vec3(x);
    
    float pct = plot(st,x);
    color = (1.0-pct)*color+pct*vec3(0.0,1.0,0.0);

    gl_FragColor = vec4(color,1.0);
}