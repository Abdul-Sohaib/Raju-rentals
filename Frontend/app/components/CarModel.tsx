"use client";
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const CarModel = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  

  const getResponsiveScale = () => {
    const width = window.innerWidth;
  
    if (width <= 640){
      return 8;
    }
    else{
      return 6;   
    }
                         
  };

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(5, 2, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    renderer.setSize(container.clientWidth, container.clientHeight,false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    let carModel: THREE.Group | null = null;
    const loadModel = async () => {
      try {
        // Some bundlers (Vite/Next.js) require '.js' extension for dynamic import of three/examples modules
        const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js');
        
        const loader = new GLTFLoader();
        
        loader.load(
          '/model/RajuRentalcar.glb', // Put your .glb file in public folder and update this path
          (gltf: { scene: THREE.Group<THREE.Object3DEventMap> | null; }) => {
            carModel = gltf.scene;
            
            if (!carModel) return;
            
            // Auto-scale and center
            const box = new THREE.Box3().setFromObject(carModel);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());
            
            const maxSize = Math.max(size.x, size.y, size.z);
            const targetSize = getResponsiveScale();
            const scale = targetSize / maxSize;
            carModel.scale.setScalar(scale);
            
            carModel.position.x = -center.x * scale;
            carModel.position.y = -center.y * scale;
            carModel.position.z = -center.z * scale;

            scene.add(carModel);
          },
          undefined,
          (error) => {
            console.error('Error loading model:', error);
          }
        );
      } catch (error) {
        console.error('GLTFLoader failed:', error);
      }
    };

    loadModel();

    // Animation - smooth 360° rotation clockwise
    const animate = () => {
      requestAnimationFrame(animate);
      
      if (carModel) {
        carModel.rotation.y += 0.01; // Clockwise rotation
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default CarModel;