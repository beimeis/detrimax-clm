import * as THREE from 'three'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'

export function setupStudio(
  scene: THREE.Scene,
  renderer: THREE.WebGLRenderer,
  opts: { accent: number; lowPower?: boolean },
) {
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05

  if (!opts.lowPower) {
    const pmrem = new THREE.PMREMGenerator(renderer)
    pmrem.compileEquirectangularShader()
    scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
    pmrem.dispose()
  }

  scene.background = null

  const hemi = new THREE.HemisphereLight(0xf8fbff, 0xe3f2fd, 0.55)
  scene.add(hemi)

  const key = new THREE.DirectionalLight(0xfff8e1, 1.15)
  key.position.set(2.5, 5, 4)
  key.castShadow = !opts.lowPower
  key.shadow.mapSize.set(opts.lowPower ? 512 : 1024, opts.lowPower ? 512 : 1024)
  key.shadow.camera.near = 0.5
  key.shadow.camera.far = 20
  key.shadow.camera.left = -4
  key.shadow.camera.right = 4
  key.shadow.camera.top = 4
  key.shadow.camera.bottom = -4
  key.shadow.bias = -0.0004
  scene.add(key)

  const fill = new THREE.DirectionalLight(opts.accent, 0.22)
  fill.position.set(-3, 2, 3)
  scene.add(fill)

  const rim = new THREE.DirectionalLight(0xffb300, 0.18)
  rim.position.set(0, 1, -4)
  scene.add(rim)

  const ground = new THREE.Mesh(
    new THREE.CircleGeometry(3.5, 48),
    new THREE.MeshStandardMaterial({
      color: 0xf8fbff,
      roughness: 0.92,
      metalness: 0,
      transparent: true,
      opacity: 0.35,
    }),
  )
  ground.rotation.x = -Math.PI / 2
  ground.position.y = -1.15
  ground.receiveShadow = true
  scene.add(ground)

  return { key }
}

export function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3)
}
