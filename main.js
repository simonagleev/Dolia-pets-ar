import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

const loadingManager = new THREE.LoadingManager()
const loader = new GLTFLoader(loadingManager)


let pet = null;
let mixer = null;

loader.load(
  '/assets/pet.glb',
  (gltf) => {
    pet = gltf.scene
    gltf.scene.position.set(0, 0, 0)
    mixer = new THREE.AnimationMixer(gltf.scene)
    const jumpAnimation = mixer.clipAction(gltf.animations[0])
    jumpAnimation.play()
  }
)


document.addEventListener('DOMContentLoaded', () => {
  console.log('loaded')
  const initialize = async () => {
    // pet ? console.log(pet) : console.log('no pet')

    const arButton = document.querySelector('#ar-button')

    const isSupported = navigator.xr && await navigator.xr.isSessionSupported("immersive-ar")
    if (!isSupported) {
      arButton.textContent = "Ar is not supported"
      arButton.disabled = true
      return
    }

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera()
    const renderer = new THREE.WebGLRenderer({ alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    document.body.appendChild(renderer.domElement)

    // const geometry = new THREE.BoxGeometry(0.06, 0.06, 0.06)
    // const material = new THREE.MeshBasicMaterial({ color: 'orange' })
    // const mesh = new THREE.Mesh(geometry, material)
    // mesh.position.set(0, 0, -0.3)
    // scene.add(mesh)

    const light = new THREE.HemisphereLight(0XFFFFFF, 0xbbbbff, 1)
    scene.add(light)
    if(pet) {
      scene.add(pet)
      pet.lookAt(camera.position)
    }

    let currentSection = null;
    const start = async () => {
      currentSection = await navigator.xr.requestSession("immersive-ar", { optionalFeatures: ['dom-overlay'], domOverlay: { root: document.body } })
      renderer.xr.enabled = true
      renderer.xr.setReferenceSpaceType('local')
      await renderer.xr.setSession(currentSection)

      arButton.textContent = 'End'

      const clock = new THREE.Clock()

      renderer.setAnimationLoop(() => [
        renderer.render(scene, camera),
        mixer.update(clock.getDelta()),
        pet ? pet.lookAt(camera.position) : null
      ])
    }
    const end = async () => {
      currentSection.end()
      renderer.clear()
      renderer.setAnimationLoop(null)

      arButton.style.display = 'none'
    }

    arButton.addEventListener('click', () => {
      if (currentSection) {
        end();
      } else {
        start()
      }
    })
  }

  loadingManager.onLoad = () => {
    console.log('LOADED by loader')
    initialize()
  }

})

