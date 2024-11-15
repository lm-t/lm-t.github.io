precision mediump float;

uniform sampler2D uPreviousIteration;
uniform vec2 uTexelSize;

uniform vec4 uPattern;
varying vec2 vSamplingPosition; // in [0,1]^2

// Decodes a float value (16 bits in [0,1])
// from a 2D value (2x8bits in [0,1]x[0,1])
float decode16bit(vec2 v) {
    return dot(v, vec2(255.0 / 256.0, 1.0 / 256.0));
}

// Encodes a float value (16 bits in [0,1])
// into a 2D value (2x8bits in [0,1]x[0,1])
vec2 encode16bit(float f) {
    f = 255.99 * clamp(f, 0.0, 1.0);
    return vec2(floor(f) / 255.0, fract(f));
}

vec2 decode(vec4 encoded) {
    return vec2(decode16bit(encoded.rg), decode16bit(encoded.ba));
}

vec4 encode(vec2 decoded) {
    return vec4(encode16bit(decoded.x), encode16bit(decoded.y));
}

vec2 kernel(vec2 decodedCenter) {
    return
        decode(texture2D(uPreviousIteration, vSamplingPosition + vec2(-1, -1) * uTexelSize)) * 0.05 +
        decode(texture2D(uPreviousIteration, vSamplingPosition + vec2(+0, -1) * uTexelSize)) * 0.20 +
        decode(texture2D(uPreviousIteration, vSamplingPosition + vec2(+1, -1) * uTexelSize)) * 0.05 +

        decode(texture2D(uPreviousIteration, vSamplingPosition + vec2(-1, +0) * uTexelSize)) * 0.20 -
        decodedCenter +
        decode(texture2D(uPreviousIteration, vSamplingPosition + vec2(+1, +0) * uTexelSize)) * 0.20 +
    
        decode(texture2D(uPreviousIteration, vSamplingPosition + vec2(-1, +1) * uTexelSize)) * 0.05 +
        decode(texture2D(uPreviousIteration, vSamplingPosition + vec2(+0, +1) * uTexelSize)) * 0.20 +
        decode(texture2D(uPreviousIteration, vSamplingPosition + vec2(+1, +1) * uTexelSize)) * 0.05;
}

vec4 computeNewValue(const float feedA, const float killB, const float diffuseA, const float diffuseB) {
    vec2 values = decode(texture2D(uPreviousIteration, vSamplingPosition));
    vec2 laplace = kernel(values);


    float A = values.x;
    float B = values.y;
    float reaction = A * B * B;
    const float dt = 1.0;
    values = vec2(
        values.x + dt * (diffuseA * laplace.x - reaction + feedA * (1.0 - A)),
        values.y + dt * (diffuseB * laplace.y + reaction - (killB + feedA) * B)
    );

    return encode(values);
}

// tiny waves
//        aFeeding: 0.015,
//        aDiffuse: 0.210,
//        bKilling: 0.049,
//        bDiffuse: 0.105,
//        speed: 8,
//        zoom: 3,
//        initialState: EInitialState.DISC,
//        shading: EShading.COLORSCALE,

void main() {

    vec4 uRates = vec4(0.015,0.049,0.210,0.105);
    
    float distanceFromCenter = dot(vSamplingPosition - 0.5, vSamplingPosition - 0.5);
    const float blank = 0.0;
    float disc = step(distanceFromCenter, 0.001);
    float circle = step(0.007, distanceFromCenter) * step(distanceFromCenter, 0.01) + step(0.17, distanceFromCenter) * step(distanceFromCenter, 0.18);

    const float A = 1.0;
    float B = dot(uPattern, vec4(blank, disc, circle, 0));
    vec2 values = vec2(A, B);

    gl_FragColor = encode(values);
    // gl_FragColor = computeNewValue(uRates.x, uRates.y, uRates.z, uRates.w);
}