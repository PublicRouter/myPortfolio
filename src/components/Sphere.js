import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import React, { useRef, useEffect, useState } from "react";
// import myVertex from '../shaders/vertex.glsl'
import uvMap from '../images/worldUvMap.jpg';


const Sphere = () => {
    const mount = useRef(null)
    // const [isAnimating, setAnimating] = useState(currentHash)
    const controls = useRef(null)
    //immeditely triggers []
    useEffect(() => {
        // mount.currentHash = window.location.hash
        let width = mount.current.clientWidth
        let height = mount.current.clientHeight
        // let width = window.innerWidth
        // let height = window.innerHeight
        let frameId

       
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000)
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const geometry = new THREE.SphereGeometry(1.1, 50, 50)
        const texture = new THREE.TextureLoader().load(uvMap)
        const material = new THREE.MeshBasicMaterial({ map: texture })
        //IMPLEMENT- CUSTOM SHADER MATERIAL
        // const material = new THREE.ShaderMaterial({
        //     vertexShader: myVertex,
        //     // fragmentShader: ,
        // })
        const sphere = new THREE.Mesh(geometry, material)

        //IMPLEMENT- ORBITAL CONTROLS IN CANVAS
        // const controls = new OrbitControls(camera, renderer.domElement)
        // camera.position.set( 0, 20, 100 );
        // controls.enableZoom = true;
        // controls.zoomSpeed = 1.2;
        // controls.update();
        if (mount.current.clientWidth < 400 ) {
            camera.position.z = 7
        } else {
            camera.position.z = 4
        }
       
        scene.add(sphere)
        renderer.setClearColor('#ffffff', '0')
        renderer.setSize(mount.current.clientWidth, mount.current.clientHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        console.log(renderer)
        //render scene and camera to canvas
        const renderScene = () => {
            renderer.render(scene, camera)          
        }

        const handleResize = () => {
            console.log("HI, im handleResize function")
            width = mount.current.clientWidth
            height = mount.current.clientHeight
            // width = window.innerWidth /1.75
            // height = window.innerHeight /1.75
            renderer.setSize(width, height)
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderScene()
        }
        //continuous render loop
        const animate = () => {
            sphere.rotation.x += 0.001
            sphere.rotation.y += 0.007
            renderScene()
            frameId = window.requestAnimationFrame(animate)

        }

        const start = () => {
            if (!frameId) {
                frameId = requestAnimationFrame(animate)
            }
        }

        const stop = () => {
            cancelAnimationFrame(frameId)
            frameId = null
        }

        mount.current.appendChild(renderer.domElement)
        window.addEventListener('resize', handleResize)
        start()
        controls.current = { start, stop }
        console.log(mount.current)

        return () => {
            stop()
            window.removeEventListener('resize', handleResize)
            if(mount.current) {
                mount.current.removeChild(renderer.domElement)
            }

            scene.remove(sphere)
            geometry.dispose()
            material.dispose()
        }
    }, [])
    //IMPLEMENTATION- FLAG TO START AND STOP SPIN ANIMATION ON CLICK
    //switch turning rotation animation on and off when isAnimating state changed
    // useEffect(() => {
    //     if (isAnimating) {
    //         controls.current.start()
    //     } else {
    //         controls.current.stop()
    //     }
    // }, [isAnimating])
    console.log("MYMOUNT", mount.current)
    // return <div className="sphere h-[80vh] w-[90vw] flex items-center justify-center" ref={mount} onClick={() => setAnimating(!isAnimating)} />
    return <div className="sphere h-[72vh] w-[90vw] flex items-center justify-center bg-transparent" ref={mount} />
}

export default Sphere;
