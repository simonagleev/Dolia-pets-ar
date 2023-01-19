import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'


// HTML
const darkScreen = document.querySelector('#dark-screen')

const petSlider = document.querySelector('#pet-slider')
const gamesSlider = document.querySelector('#games-slider')
const traitsSlider = document.querySelector('#traits-slider')
const traitsPage = document.querySelector(".traits-page")
const backArrow = document.querySelector('.back-arrow')

const traitsHeader = document.querySelector('.traits-header-text')
const leftArrow = document.querySelector('.arrow-left')
const rightArrow = document.querySelector('.arrow-right')
const traitsContentContainer = document.querySelector('.traits-content-container')



const textPlacePet = document.querySelector('.place-pet')
const uiContainer = document.querySelector('.ui-container')
const profilePage = document.querySelector('.profile-page')
const profileIcon = document.querySelector('.profile')

const feedButton = document.querySelector('.feed-button')
const sleepButton = document.querySelector('.sleep-button')
const playButton = document.querySelector('.play-button')
const shopButton = document.querySelector('.shop-button')




// MENU ACTIONS
// OPen menu
profileIcon.addEventListener('click', (e) => {
    e.preventDefault()
    if (petState.isInteractable) {
        petState.isInteractable = false
        profilePage.classList.toggle('show-profile')
        darkScreen.classList.toggle('dark-screen-show')

        traitsPage.classList.remove('show-traits-display')
        traitsPage.classList.remove('show-traits')
        setTimeout(() => {
            petState.isInteractable = true
        }, 500)
    } else {
        console.log('pet is doing something else')
    }
})

//Close menu when choose your pet
const petsCollection = petSlider.children
for (let child of petsCollection) {
    child.addEventListener('click', (e) => {
        e.preventDefault()
        petState.isInteractable = false

        // pet.getObjectByName('Mesh003_1').material.color.r = 0

        profilePage.classList.toggle('show-profile')
        darkScreen.classList.toggle('dark-screen-show')

        setTimeout(() => {
            petState.isInteractable = true
        }, 500)
    })
}

//Traits actions
let chosenTraitType = null;

switch (chosenTraitType) {
    case 'background':
        console.log('Background traits')
        break;
    case 'head':
        console.log('head traits')
        break;
    case 'accesories':
        console.log('accesories traits')
        break;
}

const traitsCollection = traitsSlider.children
for (let child of traitsCollection) {
    // if (child.offse)
    child.addEventListener('click', (e) => {
        e.preventDefault()
        petState.isInteractable = false

        traitsPage.classList.toggle('show-traits-display')
        traitsPage.classList.toggle('show-traits')

        if (child.id === 'traits-slide-1') {
            chosenTraitType = 'background'

        } else if (child.id === 'traits-slide-2') {
            chosenTraitType = 'head'

        } else if (child.id === 'traits-slide-3') {
            chosenTraitType = 'accesories'

        }

        setTimeout(() => {
            petState.isInteractable = true
        }, 500)
    })
}

//Change traits cintent
rightArrow.addEventListener('click', (e) => {
    e.preventDefault()
    petState.isInteractable = false

    traitsHeader.innerHTML = 'Body'
    traitsContentContainer.innerHTML = `
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/tie.svg" alt="tie" loading="lazy">
        <img class="traits-slider-image" src="/assets/sliders/body/chain.svg" alt="chain" loading="lazy">
    `

    setTimeout(() => {
        petState.isInteractable = true
    }, 500)
})

leftArrow.addEventListener('click', (e) => {
    e.preventDefault()
    petState.isInteractable = false

    traitsHeader.innerHTML = 'Head'
    traitsContentContainer.innerHTML = `
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-1.svg" alt="hat1" loading="lazy">
    <img class="traits-slider-image" src="/assets/sliders/head/hat-2.svg" alt="hat2" loading="lazy">
    `
    setTimeout(() => {
        petState.isInteractable = true
    }, 500)
})


//Close menu when choose a game
const gamesCollection = gamesSlider.children
for (let child of gamesCollection) {
    child.addEventListener('click', (e) => {
        e.preventDefault()
        petState.isInteractable = false
        profilePage.classList.toggle('show-profile')
        darkScreen.classList.toggle('dark-screen-show')
        setTimeout(() => {
            petState.isInteractable = true
        }, 500)
    })
}

//Close menu on back-arrow
backArrow.addEventListener('click', (e) => {
    e.preventDefault()
    petState.isInteractable = false

    traitsPage.classList.toggle('show-traits-display')
    traitsPage.classList.toggle('show-traits')

    setTimeout(() => {
        petState.isInteractable = true
    }, 500)
})




// PET state

const petState = {
    isInteractable: true
}

// Loaders
const loadingManager = new THREE.LoadingManager()
const loader = new GLTFLoader(loadingManager)
const textureLoader = new THREE.TextureLoader()

//  PET
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
    }
)




// BODY
document.addEventListener('DOMContentLoaded', () => {
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
        document.body.appendChild(renderer.domElement)
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

        /**
         * Particles
         */
        const particleTexture = textureLoader.load('assets/particles/food.png')
        const particlesGeometry = new THREE.BufferGeometry()
        const count = 20

        const colors = new Float32Array(count * 3)
        const positions = new Float32Array(count * 3)

        for (let i = 0; i < count * 3; i+=3) {
            positions[i] = pet.position.x + ((Math.random() - 0.5 ) / 15)
            colors[i] = Math.random()
        }
        for (let i = 1; i < count * 3; i+=3) {
            positions[i] = pet.position.y + 0.01
            colors[i] = Math.random()
        }
        for (let i = 2; i < count * 3; i+=3) {
            positions[i] = pet.position.z - 2
            colors[i] = Math.random()
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

        const particlesMaterial = new THREE.PointsMaterial()
        particlesMaterial.size = 0.02
        particlesMaterial.sizeAttenuation = true
        particlesMaterial.color = new THREE.Color('#ff88cc')
        particlesMaterial.transparent = true
        particlesMaterial.alphaMap = particleTexture
        // particlesMaterial.alphaTest = 0.01
        // particlesMaterial.depthTest = false
        particlesMaterial.depthWrite = false
        particlesMaterial.blending = THREE.AdditiveBlending
        particlesMaterial.vertexColors = true

        // Points
        const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particles)


        // Controllers
        const controller = renderer.xr.getController(0)
        scene.add(controller)


        //UTILS 

        // EVENTS
        controller.addEventListener('select', () => {

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



        renderer.xr.addEventListener('sessionstart', async () => {
            const session = renderer.xr.getSession()
            const viewerReferenceSpace = await session.requestReferenceSpace('viewer')
            const hitTestSuorce = await session.requestHitTestSource({ space: viewerReferenceSpace })

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


        // Update particles
        const updateParticles = (elapsedTime) => {
            for (let i = 0; i < count; i++) {
                let i3 = i * 3

                const x = particlesGeometry.attributes.position.array[i3]
                particlesGeometry.attributes.position.array[i3 + 1] = Math.sin(elapsedTime + x)
            }
            particlesGeometry.attributes.position.needsUpdate = true
        }


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
                updateParticles(clock.getElapsedTime())

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
        initialize()
    }

})

