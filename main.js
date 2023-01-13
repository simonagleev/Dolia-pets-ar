import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


// HTML
const textPlacePet = document.querySelector('.place-pet')

// Loading
const loadingManager = new THREE.LoadingManager()
const loader = new GLTFLoader(loadingManager)


let pet = null;
let mixer = null;

loader.load(
    '/assets/pet.glb',
    (gltf) => {
        pet = gltf.scene
        pet.name = 'pet'
        pet.scale.set(0.3, 0.3, 0.3)
        mixer = new THREE.AnimationMixer(gltf.scene)
        const jumpAnimation = mixer.clipAction(gltf.animations[0])
        jumpAnimation.play()
    }
)


document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded')
    const initialize = async () => {

        const arButton = document.querySelector('#ar-button')

        const isSupported = navigator.xr && await navigator.xr.isSessionSupported("immersive-ar")
        if (!isSupported) {
            arButton.textContent = "Ar is not supported"
            arButton.disabled = true
            return
        }

        const scene = new THREE.Scene()
        const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true })
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20)

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        document.body.appendChild(renderer.domElement)

        const light = new THREE.HemisphereLight(0XFFFFFF, 0xbbbbff, 1)
        scene.add(light)

        if (pet) {
            // scene.add(pet)
            pet.lookAt(camera.position)
        }

        // Controllers
        const controller = renderer.xr.getController(0)
        scene.add(controller)
        

        controller.addEventListener('select', () => {
            textPlacePet.style.display === 'block' ? textPlacePet.style.display = 'none' : null

            if (!scene.getObjectByName('pet')) {
                pet.position.applyMatrix4(controller.matrixWorld)
                // pet.quaternion.setFromRotationMatrix(controller.matrixWorld)
                scene.add(pet)

            } else {
                pet.position.set(0,0,0)
                pet.position.applyMatrix4(controller.matrixWorld)
                // pet.quaternion.setFromRotationMatrix(controller.matrixWorld)

            }
        })

        // Start and end AR
        let currentSection = null;

        const start = async () => {
            currentSection = await navigator.xr.requestSession("immersive-ar", { optionalFeatures: ['dom-overlay'], domOverlay: { root: document.body } })
            renderer.xr.enabled = true
            renderer.xr.setReferenceSpaceType('local')
            await renderer.xr.setSession(currentSection)

            textPlacePet.style.display = 'block'
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

