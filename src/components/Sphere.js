import * as THREE from 'three';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import React, { useRef, useEffect, useState } from "react";

// import myVertex from '../shaders/vertex.glsl'
import uvMap from '../images/worldUvMap.jpg';
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

const Sphere = () => {
    const mount = useRef(null)
    // const currentHash = window.location.hash
    // console.log(currentHash)
    // const [isAnimating, setAnimating] = useState(currentHash)
    // console.log("my hashy", isAnimating)
    const controls = useRef(null)
    console.log("fire firing of mount", mount)
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
        const geometry = new THREE.SphereGeometry(1.4, 50, 50)
        const texture = new THREE.TextureLoader().load(uvMap)
        const material = new THREE.MeshBasicMaterial({ map: texture })
        // const material = new THREE.ShaderMaterial({
        //     vertexShader: myVertex,
        //     // fragmentShader: ,
        // })
        const sphere = new THREE.Mesh(geometry, material)

        
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
        renderer.setClearColor('#FFFFFF')
        renderer.setSize(mount.current.clientWidth, mount.current.clientHeight)
        renderer.setPixelRatio(window.devicePixelRatio)

        const renderScene = () => {
            renderer.render(scene, camera)
            // const controls = new OrbitControls(camera, renderer.domElement)
            // camera.position.set( 0, 20, 1 );
            // controls.enableZoom = true;
            // controls.zoomSpeed = 1.2;
            

        
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

        const animate = () => {
            //window.location.hash == "Home") { stop() }
            sphere.rotation.x += 0.001
            sphere.rotation.y += 0.007
            console.log("animating, animating....")

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
            // console.log("hi mount,... ", mount)
        }

        mount.current.appendChild(renderer.domElement)
        // console.log("yeeeeeee", mount.current.childNodes.length > 1)
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
    //if isAnimating changes, effect is triggered
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
    return <div className="sphere h-[80vh] w-[90vw] flex items-center justify-center" ref={mount} />
}
console.log("this my sphere", )

export default Sphere;
