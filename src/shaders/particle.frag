// @author brunoimbrizi / http://brunoimbrizi.com

precision highp float;

uniform sampler2D uTexture;

varying vec2 vPUv;
varying vec2 vUv;

void main() {
	vec4 color = vec4(0.1, 0.1, 0.1, 0.1);
	vec2 uv = vUv;
	vec2 puv = vPUv;

	// pixel color
	vec4 colA = texture2D(uTexture, puv);

	// greyscale
	float blue = colA.r * 0.7 + colA.g * 0.7 + colA.b * 10.0;
	vec4 colC = vec4(colA.r * 0.80, colA.g * 0.70, colA.b * 10.0, 0.4);

	// circle
	float border = 0.8;
	float radius = 0.8;
	float dist = radius - distance(uv, vec2(0.8));
	float t = smoothstep(0.0, border, dist);

	// final color
	color = colC;
	color.a = t;

	gl_FragColor = color;
}