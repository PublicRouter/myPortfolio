import * as THREE from 'three';
import React, { useRef, useEffect, useState } from "react";
// import { AlphaFormat } from 'three';

// let camera, scene, renderer ;
// let geometry, material, mesh ;
// let sphereDiv, light, helper;

// export function Sphere() {
//   sphereDiv = document.getElementById('root'); 
//   console.log(sphereDiv.childNodes[0].childNodes[1])
//   camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 50);
//   camera.position.z = 1;

//   scene = new THREE.Scene();

//   geometry = new THREE.SphereGeometry(.4, 32, 16);
//   material = new THREE.MeshNormalMaterial( { wireframe: true } );
//   mesh = new THREE.Mesh( geometry, material );


//   scene.add( mesh );



//   renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true});
//   renderer.setSize( 400, 400 );
//   renderer.setAnimationLoop( animation );
//   sphereDiv.childNodes[0].appendChild( renderer.domElement );
// }

// function animation( time ) {
//     mesh.rotation.x = time / 2000;
//     mesh.rotation.y = time / 1000;

//     renderer.render(scene, camera);
// }

const Vis = () => {
    const mount = useRef(null)
    const [isAnimating, setAnimating] = useState(true)
    const controls = useRef(null)

    useEffect(() => {
        let width = mount.current.clientWidth
        let height = mount.current.clientHeight
        let frameId

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        const geometry = new THREE.SphereGeometry(2, 32, 16)
        const material = new THREE.MeshNormalMaterial({ wireframe: true })
        const sphere = new THREE.Mesh(geometry, material)

        camera.position.z = 4
        scene.add(sphere)
        renderer.setClearColor('#FFFFFF')
        renderer.setSize(200, 200)

        const renderScene = () => {
            renderer.render(scene, camera)
        }

        const handleResize = () => {
            width = mount.current.clientWidth
            height = mount.current.clientHeight
            renderer.setSize(width, height)
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderScene()
        }

        const animate = () => {
            sphere.rotation.x += 0.002
            sphere.rotation.y += 0.002

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

        return () => {
            stop()
            window.removeEventListener('resize', handleResize)
            mount.current.removeChild(renderer.domElement)

            scene.remove(sphere)
            geometry.dispose()
            material.dispose()
        }
    }, [])

    useEffect(() => {
        if (isAnimating) {
            controls.current.start()
        } else {
            controls.current.stop()
        }
    }, [isAnimating])

    return <div className="vis h-[198px] w-[210px]" ref={mount} onClick={() => setAnimating(!isAnimating)} />
}

export default Vis;
