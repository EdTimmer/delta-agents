import { useRef, useEffect } from 'react'
import { useFrame, extend, ReactThreeFiber } from '@react-three/fiber'
import { shaderMaterial } from '@react-three/drei'
import { Color } from 'three'
import { GUI } from 'lil-gui'
import waterFragmentShader from '../assets/shaders/waves/fragment.glsl?raw'
import waterVertexShader from '../assets/shaders/waves/vertex.glsl?raw'
import * as THREE from 'three'
import colors from '../styles/colors'

const lightColor = colors.yinmnBlue; // colors.onyx
const darkColor = colors.eerieBlack;

const WaterMaterial = shaderMaterial(
  {
    uTime: 0,
    uBigWavesElevation: 0.127,
    uBigWavesFrequency: new THREE.Vector2(1.2, 0.8),
    uBigWavesSpeed: 0.1,
    uSmallWavesElevation: 0.13,
    uSmallWavesFrequency: 0,
    uSmallWavesSpeed: 0.08,
    uSmallWavesIterations: 0,
    // use declare lightColor
    uSurfaceColor: new Color(lightColor),
    uDepthColor: new Color(darkColor),

    uColorOffset: 0.08,
    uColorMultiplier: 5,
  },
  waterVertexShader,
  waterFragmentShader
)

// Make shader material available in JSX
extend({ WaterMaterial });

/**
 * Global declaration to let TypeScript know about waterMaterial.
 * You can place this in the same file or a separate *.d.ts file.
 */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      waterMaterial: ReactThreeFiber.Object3DNode<THREE.ShaderMaterial, typeof WaterMaterial>;
    }
  }
}

const Water = () => {
  const meshRef = useRef<THREE.Mesh>(null!)
  const materialRef = useRef<THREE.ShaderMaterial>(null!)


  // Update the time in the shader on each frame
  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime()
    }
  })

  useEffect(() => {
    // Debug GUI setup
    const gui = new GUI({ 
      width: 460,
      title: '🌊Wave Controls🌊',
    })
    gui.domElement.classList.add('lil-gui');

    gui.domElement.style.position = 'absolute'; // Customize the position
    gui.domElement.style.right = '60px'; // Move this panel to the left side of the screen
    gui.domElement.style.top = '60px'; // Move it down slightly

    gui.close() // Close the GUI by default
    gui.hide(); // Hide the GUI by default

    const debugObject = {
      surfaceColor: lightColor,
      depthColor: darkColor,      
    }
    
    const colorsFolder = gui.addFolder('Colors')
    const bigWavesFolder = gui.addFolder('Big Waves')
    const smallWavesFolder = gui.addFolder('Small Waves')
    const materialFolder = gui.addFolder('Material')

    colorsFolder.addColor(debugObject, 'surfaceColor').onChange(() => {
      materialRef.current.uniforms.uSurfaceColor.value.set(debugObject.surfaceColor)
    })
    colorsFolder.addColor(debugObject, 'depthColor').onChange(() => {
      materialRef.current.uniforms.uDepthColor.value.set(debugObject.depthColor)
    })
    colorsFolder.add(materialRef.current, 'uColorOffset').min(0).max(0.1).step(0.001).name('colorOffset')
    colorsFolder.add(materialRef.current, 'uColorMultiplier').min(0).max(10).step(0.001).name('colorMultiplier')

    bigWavesFolder.add(materialRef.current, 'uBigWavesElevation').min(0).max(1).step(0.001).name('wavesElevation')
    bigWavesFolder.add(materialRef.current.uniforms.uBigWavesFrequency.value, 'x').min(0).max(10).step(0.001).name('wavesFrequencyX')
    bigWavesFolder.add(materialRef.current.uniforms.uBigWavesFrequency.value, 'y').min(0).max(10).step(0.001).name('wavesFrequencyY')
    bigWavesFolder.add(materialRef.current, 'uBigWavesSpeed').min(0).max(4).step(0.001).name('wavesSpeed')


    smallWavesFolder.add(materialRef.current, 'uSmallWavesElevation').min(0).max(1).step(0.001).name('smallWavesElevation')
    smallWavesFolder.add(materialRef.current, 'uSmallWavesFrequency').min(0).max(30).step(0.001).name('smallWavesFrequency')
    smallWavesFolder.add(materialRef.current, 'uSmallWavesSpeed').min(0).max(4).step(0.001).name('smallWavesSpeed')
    smallWavesFolder.add(materialRef.current, 'uSmallWavesIterations').min(0).max(5).step(1).name('smallWavesIterations')

    materialFolder.add(materialRef.current, 'wireframe').name('wireframe')
    

    return () => {
      gui.destroy()
    }
  }, [])

  return (
    <mesh ref={meshRef} rotation-x={Math.PI * 0.5} scale={[6, 6, 6]}>
      <planeGeometry args={[6, 1, 500, 84]} />
      <waterMaterial
        ref={materialRef}
        attach="material"
        wireframe={true}
        side={THREE.DoubleSide}
        // opacity={0.001}
      />
    </mesh>
  )
}

export default Water;