import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


// HTML
const canvasContainer = document.querySelector('.canvas-container')

const textPlacePet = document.querySelector('.place-pet')
const uiContainer = document.querySelector('.ui-container')
const profilePage = document.querySelector('.profile-page')
const profileIcon = document.querySelector('.profile')

const feedButton = document.querySelector('.feed-button')
const sleepButton = document.querySelector('.sleep-button')
const playButton = document.querySelector('.play-button')
const shopButton = document.querySelector('.shop-button')




// PET state

const petState = {
    isInteractable: true
}

// Loaders
const loadingManager = new THREE.LoadingManager()
const loader = new GLTFLoader(loadingManager)


let pet = null;
let mixer = null;
let idleAnimation = null;
let eatingAnimation = null
let sleepStartAnimation = null
let sleepEndAnimation = null
let blinkingAnimation = null

loader.load(
    '/assets/pet.glb',
    (gltf) => {
        pet = gltf.scene
        pet.name = 'pet'
        pet.scale.set(0.3, 0.3, 0.3)
        mixer = new THREE.AnimationMixer(gltf.scene)
        idleAnimation = mixer.clipAction(gltf.animations[2])
        eatingAnimation = mixer.clipAction(gltf.animations[1])
        sleepStartAnimation = mixer.clipAction(gltf.animations[4])
        sleepEndAnimation = mixer.clipAction(gltf.animations[5])
        blinkingAnimation = mixer.clipAction(gltf.animations[3])

        blinkingAnimation.play()
        idleAnimation.play()
        console.log(gltf.animations)
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
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
        const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 20)

        const clock = new THREE.Clock()

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        canvasContainer.appendChild(renderer.domElement)
        renderer.domElement.style.zIndex = 10



        const light = new THREE.HemisphereLight(0XFFFFFF, 0xbbbbff, 1)
        scene.add(light)


        // Helping circle 
        const circleGeometry = new THREE.RingGeometry(0.15, 0.2, 32);
        circleGeometry.rotateX(-Math.PI / 2)
        const circleMaterial = new THREE.MeshBasicMaterial({ color: '#FFF2FD' })
        const circle = new THREE.Mesh(circleGeometry, circleMaterial)
        circle.matrixAutoUpdate = false;
        circle.visible = false;
        scene.add(circle)

        // Controllers
        const controller = renderer.xr.getController(0)
        scene.add(controller)


        //UTILS 

        // EVENTS
        controller.addEventListener('select', () => {
            console.log(camera.position)
            console.log(pet.quaternion)
            textPlacePet.style.display === 'block' ? textPlacePet.style.display = 'none' : null

            if (!scene.getObjectByName('pet')) {
                if (circle.visible === true) {
                    pet.scale.set(1, 1, 1)
                    pet.position.setFromMatrixPosition(circle.matrix)
                } else {
                    pet.position.applyMatrix4(controller.matrixWorld)
                }
                pet.quaternion.setFromRotationMatrix(controller.matrixWorld)
                scene.add(pet)

                uiContainer.style.display = 'block'

            } else {
                // pet.position.set(0,0,0)
                if (circle.visible === true && petState.isInteractable) {
                    pet.scale.set(1, 1, 1)
                    pet.position.setFromMatrixPosition(circle.matrix)
                } else {
                    // pet.position.applyMatrix4(controller.matrixWorld)
                }
                pet.quaternion.setFromRotationMatrix(controller.matrixWorld)
            }
        })

        mixer.addEventListener('finished', (e) => {
            console.log(e.action._clip.name)
            if (e.action._clip.name === 'EyeSleepingOpen') {
                blinkingAnimation.reset().play()
            } else if (e.action._clip.name === 'Eating') {
                petState.isInteractable = true
                idleAnimation.paused = false
            }
        })

        feedButton.addEventListener('click', async (e) => {
            e.preventDefault()
            if (petState.isInteractable) {
                petState.isInteractable = false
                eatingAnimation.loop = THREE.LoopOnce
                idleAnimation.paused = true
                eatingAnimation.play().reset()

            } else {
                console.log('pet is doing something else')
            }
        })

        sleepButton.addEventListener('click', async (e) => {
            e.preventDefault()
            if (petState.isInteractable) {
                petState.isInteractable = false
                sleepStartAnimation.clampWhenFinished = true
                sleepStartAnimation.loop = THREE.LoopOnce
                sleepEndAnimation.loop = THREE.LoopOnce
                sleepStartAnimation.play().reset()
                blinkingAnimation.stop()
                console.log(mixer)
                setTimeout(() => {
                    sleepStartAnimation.stop()
                    sleepEndAnimation.play().reset()
                    petState.isInteractable = true
                }, 5000)

            } else {
                console.log('pet is doing something else')
            }

        })

        playButton.addEventListener('click', (e) => {
            e.preventDefault()
            if (petState.isInteractable) {
                petState.isInteractable = false
                setTimeout(() => {
                    petState.isInteractable = true
                }, 500)


            } else {
                console.log('pet is doing something else')
            }
        })

        shopButton.addEventListener('click', (e) => {
            e.preventDefault()
            if (petState.isInteractable) {
                petState.isInteractable = false
                setTimeout(() => {
                    petState.isInteractable = true
                }, 500)


            } else {
                console.log('pet is doing something else')
            }
        })

        profileIcon.addEventListener('click', (e) => {
            e.preventDefault()
            if (petState.isInteractable) {
                petState.isInteractable = false
                profilePage.classList.toggle('show-profile')
                setTimeout(() => {
                    petState.isInteractable = true
                }, 500)


            } else {
                console.log('pet is doing something else')
            }
        })


        renderer.xr.addEventListener('sessionstart', async () => {
            const session = renderer.xr.getSession()
            const viewerReferenceSpace = await session.requestReferenceSpace('viewer')
            const hitTestSuorce = await session.requestHitTestSource({ space: viewerReferenceSpace })
            console.log(camera.position)
            console.log(pet.quaternion)
            renderer.setAnimationLoop((timeStamp, frame) => {
                if (!frame) return
                const hitTestResult = frame.getHitTestResults(hitTestSuorce)
                mixer.update(clock.getDelta())
                pet ? pet.lookAt(camera.position.x, camera.position.y, camera.position.z) : null

                if (hitTestResult.length > 0) {
                    const referenceSpace = renderer.xr.getReferenceSpace()
                    const hit = hitTestResult[0]
                    const hitPose = hit.getPose(referenceSpace)

                    circle.visible = true
                    circle.matrix.fromArray(hitPose.transform.matrix)
                } else {
                    circle.visible = false
                }

                renderer.render(scene, camera)
            })
        })

        renderer.xr.addEventListener('sessionend', async () => {

        })

        // Start and end AR
        let currentSection = null;


        const start = async () => {
            currentSection = await navigator.xr.requestSession("immersive-ar", { requiredFeatures: ['hit-test'], optionalFeatures: ['dom-overlay'], domOverlay: { root: document.body } })
            renderer.xr.enabled = true
            renderer.xr.setReferenceSpaceType('local')
            await renderer.xr.setSession(currentSection)

            textPlacePet.style.display = 'block'
            arButton.textContent = 'End'

            renderer.setAnimationLoop(() => [
                renderer.render(scene, camera),
                mixer.update(clock.getDelta()),
                pet ? pet.lookAt(camera.position.x, camera.position.y, camera.position.z) : null,
                console.log(camera.position),
                console.log(pet.quaternion)

            ])
        }

        const end = async () => {
            currentSection.end()
            renderer.clear()
            renderer.setAnimationLoop(null)

            arButton.style.display = 'none'
            uiContainer.style.display = 'none'
        }

        arButton.addEventListener('click', () => {
            if (currentSection) {
                end();
            } else {
                start()
                profilePage.classList.toggle('show-profile-display')
            }
        })
    }

    loadingManager.onLoad = () => {
        console.log('LOADED by loader')
        initialize()
    }

})

