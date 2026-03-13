import React, { useState, useRef, useEffect } from 'react';
import * as THREE from 'three';

const HomeRepairSelector = ({ 
  resendApiKey = "re_NPwFDVSV_6NZ8VATUXFJ6EieDaEyi8wJa", 
  recipientEmail = "edmena24@gmail.com" 
}) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const housePartsRef = useRef({});
  const [selectedPart, setSelectedPart] = useState(null);
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [hoveredPart, setHoveredPart] = useState(null);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '', address: '' });
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const previousMouseRef = useRef({ x: 0, y: 0 });
  const cameraAngleRef = useRef(0);

  const houseParts = {
    roof: { name: 'Roof', color: 0x8b4513, position: [0, 4, 0] },
    walls: { name: 'Exterior Walls', color: 0xdeb887, position: [0, 2, 0] },
    windows: { name: 'Windows', color: 0x87ceeb, position: [0, 2, 0] },
    doors: { name: 'Doors', color: 0x654321, position: [0, 1, 0] },
    foundation: { name: 'Foundation', color: 0x696969, position: [0, 0.2, 0] },
    chimney: { name: 'Chimney', color: 0xa0522d, position: [2, 5, 0] },
    garage: { name: 'Garage', color: 0xc0c0c0, position: [-3, 1.5, 0] },
    yard: { name: 'Yard/Landscaping', color: 0x228b22, position: [0, 0, 6] },
    pool: { name: 'Pool', color: 0x1e90ff, position: [5, 0, 4] },
    driveway: { name: 'Driveway', color: 0x808080, position: [-3, 0.1, 4] },
    deck: { name: 'Deck/Patio', color: 0xd2691e, position: [3, 0.3, -2] },
    fence: { name: 'Fence', color: 0x8b7355, position: [0, 1, -6] }
  };

  const repairQuestions = {
    roof: [
      {
        question: 'What type of roof issue?',
        options: ['Leaking', 'Missing Shingles', 'Storm Damage', 'Sagging', 'General Wear']
      },
      {
        question: 'What is the severity?',
        options: ['Minor - Small area', 'Moderate - Multiple areas', 'Severe - Extensive damage', 'Emergency - Active leak']
      },
      {
        question: 'When did you first notice the issue?',
        options: ['Within the last week', 'Within the last month', 'Within the last 6 months', 'Over 6 months ago']
      }
    ],
    walls: [
      {
        question: 'What type of wall issue?',
        options: ['Cracks', 'Paint/Siding Damage', 'Water Damage', 'Structural Issue', 'Insulation Problem']
      },
      {
        question: 'Which exterior side?',
        options: ['Front', 'Back', 'Left Side', 'Right Side', 'Multiple Sides']
      },
      {
        question: 'What is the affected area size?',
        options: ['Small (< 10 sq ft)', 'Medium (10-50 sq ft)', 'Large (> 50 sq ft)', 'Entire wall']
      }
    ],
    windows: [
      {
        question: 'What type of window issue?',
        options: ['Broken Glass', 'Foggy/Condensation', 'Won\'t Open/Close', 'Drafty', 'Frame Damage']
      },
      {
        question: 'How many windows affected?',
        options: ['1 window', '2-3 windows', '4-6 windows', 'More than 6 windows']
      },
      {
        question: 'Window type?',
        options: ['Single-hung', 'Double-hung', 'Sliding', 'Casement', 'Not sure']
      }
    ],
    doors: [
      {
        question: 'What type of door issue?',
        options: ['Won\'t Lock', 'Sticking/Hard to Open', 'Damaged Frame', 'Broken Hardware', 'Weatherstripping Needed']
      },
      {
        question: 'Which door?',
        options: ['Front Door', 'Back Door', 'Side Door', 'Garage Door', 'Multiple Doors']
      },
      {
        question: 'Door material?',
        options: ['Wood', 'Steel', 'Fiberglass', 'Aluminum', 'Not sure']
      }
    ],
    foundation: [
      {
        question: 'What type of foundation issue?',
        options: ['Cracks', 'Water Seepage', 'Settling', 'Crumbling', 'Bowing Walls']
      },
      {
        question: 'Where is the issue located?',
        options: ['Basement', 'Crawl Space', 'Slab', 'Exterior Foundation', 'Not sure']
      },
      {
        question: 'Severity level?',
        options: ['Minor cosmetic cracks', 'Moderate - some concern', 'Severe - structural concern', 'Emergency situation']
      }
    ],
    chimney: [
      {
        question: 'What type of chimney issue?',
        options: ['Cracks in Masonry', 'Damaged Cap', 'Leaning', 'Flashing Issues', 'Creosote Buildup']
      },
      {
        question: 'Have you noticed any leaks?',
        options: ['Yes, during rain', 'Yes, but not sure when', 'No leaks', 'Not applicable']
      },
      {
        question: 'When was the last inspection?',
        options: ['Within the last year', '1-3 years ago', 'More than 3 years ago', 'Never inspected']
      }
    ],
    garage: [
      {
        question: 'What type of garage issue?',
        options: ['Door Won\'t Open/Close', 'Opener Malfunction', 'Structural Damage', 'Water Intrusion', 'Other']
      },
      {
        question: 'Is this urgent?',
        options: ['Yes - Cannot use garage', 'Moderate - Inconvenient but usable', 'No - Can wait', 'Not sure']
      },
      {
        question: 'Garage door type?',
        options: ['Roll-up Sectional', 'Tilt-up', 'Slide to Side', 'Not applicable', 'Not sure']
      }
    ],
    yard: [
      {
        question: 'What type of yard issue?',
        options: ['Drainage Problem', 'Dead/Diseased Plants', 'Erosion', 'Sprinkler System', 'Hardscaping Damage']
      },
      {
        question: 'What area of the yard?',
        options: ['Front Yard', 'Back Yard', 'Side Yard', 'Multiple Areas', 'Entire Property']
      },
      {
        question: 'Estimated affected area?',
        options: ['Small area (< 100 sq ft)', 'Medium area (100-500 sq ft)', 'Large area (> 500 sq ft)', 'Not sure']
      }
    ],
    pool: [
      {
        question: 'What type of pool issue?',
        options: ['Leak', 'Equipment Failure', 'Cracked Surface', 'Water Chemistry', 'Deck Damage']
      },
      {
        question: 'Pool type?',
        options: ['In-ground - Concrete', 'In-ground - Vinyl', 'In-ground - Fiberglass', 'Above-ground', 'Spa/Hot Tub']
      },
      {
        question: 'Is the pool currently usable?',
        options: ['Yes, fully functional', 'Partially - with limitations', 'No - not usable', 'Not sure']
      }
    ],
    driveway: [
      {
        question: 'What type of driveway issue?',
        options: ['Cracks', 'Potholes', 'Settling/Sinking', 'Staining', 'Needs Resurfacing']
      },
      {
        question: 'Driveway material?',
        options: ['Asphalt', 'Concrete', 'Pavers', 'Gravel', 'Not sure']
      },
      {
        question: 'How extensive is the damage?',
        options: ['Minor - Few spots', 'Moderate - Multiple areas', 'Extensive - Whole driveway', 'Complete replacement needed']
      }
    ],
    deck: [
      {
        question: 'What type of deck/patio issue?',
        options: ['Rotting Wood', 'Loose Boards', 'Railing Issues', 'Staining/Sealing Needed', 'Structural Concerns']
      },
      {
        question: 'Deck material?',
        options: ['Wood', 'Composite', 'Concrete Patio', 'Pavers', 'Not sure']
      },
      {
        question: 'Safety concern level?',
        options: ['Safe to use', 'Minor concerns', 'Should not be used', 'Emergency - dangerous']
      }
    ],
    fence: [
      {
        question: 'What type of fence issue?',
        options: ['Damaged/Broken Sections', 'Leaning Posts', 'Gate Problems', 'Rot/Deterioration', 'Needs Painting/Staining']
      },
      {
        question: 'Fence material?',
        options: ['Wood', 'Vinyl', 'Chain Link', 'Wrought Iron', 'Not sure']
      },
      {
        question: 'How much of the fence is affected?',
        options: ['One section', 'Multiple sections', 'Most of fence', 'Entire fence replacement']
      }
    ]
  };

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x87ceeb);
    scene.fog = new THREE.Fog(0x87ceeb, 20, 50);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      60,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(12, 8, 18);
    camera.lookAt(0, 2, 0);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.left = -20;
    directionalLight.shadow.camera.right = 20;
    directionalLight.shadow.camera.top = 20;
    directionalLight.shadow.camera.bottom = -20;
    scene.add(directionalLight);

    const createBrickTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      
      ctx.fillStyle = '#c19a6b';
      ctx.fillRect(0, 0, 512, 512);
      
      ctx.strokeStyle = '#8b7355';
      ctx.lineWidth = 3;
      
      for (let y = 0; y < 512; y += 64) {
        for (let x = 0; x < 512; x += 128) {
          const offset = (y / 64) % 2 === 0 ? 0 : 64;
          ctx.strokeRect(x + offset, y, 128, 64);
        }
      }
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      return texture;
    };

    const createShingleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      
      ctx.fillStyle = '#3d2817';
      ctx.fillRect(0, 0, 512, 512);
      
      for (let y = 0; y < 512; y += 32) {
        for (let x = 0; x < 512; x += 64) {
          const offset = (y / 32) % 2 === 0 ? 0 : 32;
          ctx.fillStyle = y % 64 === 0 ? '#2d1810' : '#4d3020';
          ctx.fillRect(x + offset, y, 64, 32);
        }
      }
      
      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      return texture;
    };

    const brickTexture = createBrickTexture();
    const shingleTexture = createShingleTexture();

    // Ground
    const groundGeometry = new THREE.CircleGeometry(30, 64);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x2d5016,
      roughness: 0.9
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Main house walls with texture
    const wallsGeometry = new THREE.BoxGeometry(8, 5, 6);
    const wallsMaterial = new THREE.MeshStandardMaterial({ 
      map: brickTexture,
      roughness: 0.8
    });
    const walls = new THREE.Mesh(wallsGeometry, wallsMaterial);
    walls.position.set(0, 2.5, 0);
    walls.castShadow = true;
    walls.receiveShadow = true;
    walls.userData = { type: 'walls', name: houseParts.walls.name };
    scene.add(walls);
    housePartsRef.current.walls = walls;

    // Roof with improved geometry and texture
    const roofShape = new THREE.Shape();
    roofShape.moveTo(-5, 0);
    roofShape.lineTo(5, 0);
    roofShape.lineTo(0, 3);
    roofShape.lineTo(-5, 0);
    
    const roofGeometry = new THREE.ExtrudeGeometry(roofShape, {
      depth: 6.5,
      bevelEnabled: false
    });
    const roofMaterial = new THREE.MeshStandardMaterial({ 
      map: shingleTexture,
      roughness: 0.9
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.set(0, 5, -3.25);
    roof.castShadow = true;
    roof.userData = { type: 'roof', name: houseParts.roof.name };
    scene.add(roof);
    housePartsRef.current.roof = roof;

    // Chimney with brick texture
    const chimneyGeometry = new THREE.BoxGeometry(1, 4, 1);
    const chimneyMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x8b3a3a,
      roughness: 0.8
    });
    const chimney = new THREE.Mesh(chimneyGeometry, chimneyMaterial);
    chimney.position.set(2.5, 7, 0);
    chimney.castShadow = true;
    chimney.userData = { type: 'chimney', name: houseParts.chimney.name };
    scene.add(chimney);
    housePartsRef.current.chimney = chimney;

    // Chimney cap
    const capGeometry = new THREE.BoxGeometry(1.4, 0.3, 1.4);
    const capMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const cap = new THREE.Mesh(capGeometry, capMaterial);
    cap.position.set(2.5, 9.15, 0);
    cap.castShadow = true;
    scene.add(cap);

    // Windows with frames (front)
    const windowPositions = [
      [-2.5, 3, 3.1], [2.5, 3, 3.1],
      [-2.5, 3, -3.1], [2.5, 3, -3.1]
    ];
    
    windowPositions.forEach(pos => {
      const frameGeometry = new THREE.BoxGeometry(1.4, 1.6, 0.2);
      const frameMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const frame = new THREE.Mesh(frameGeometry, frameMaterial);
      frame.position.set(...pos);
      frame.castShadow = true;
      scene.add(frame);

      const glassGeometry = new THREE.BoxGeometry(1.2, 1.4, 0.1);
      const glassMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x87ceeb,
        transparent: true,
        opacity: 0.6,
        metalness: 0.5,
        roughness: 0.1
      });
      const glass = new THREE.Mesh(glassGeometry, glassMaterial);
      glass.position.set(...pos);
      glass.userData = { type: 'windows', name: houseParts.windows.name };
      scene.add(glass);
      if (!housePartsRef.current.windows) housePartsRef.current.windows = [];
      housePartsRef.current.windows.push(glass);
    });

    // Front door with detail
    const doorFrameGeometry = new THREE.BoxGeometry(1.3, 2.3, 0.25);
    const doorFrameMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
    const doorFrame = new THREE.Mesh(doorFrameGeometry, doorFrameMaterial);
    doorFrame.position.set(0, 1.15, 3.1);
    doorFrame.castShadow = true;
    scene.add(doorFrame);

    const doorGeometry = new THREE.BoxGeometry(1.1, 2.1, 0.15);
    const doorMaterial = new THREE.MeshStandardMaterial({ color: 0x654321 });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, 1.15, 3.15);
    door.castShadow = true;
    door.userData = { type: 'doors', name: houseParts.doors.name };
    scene.add(door);
    housePartsRef.current.doors = door;

    // Door knob
    const knobGeometry = new THREE.SphereGeometry(0.08, 16, 16);
    const knobMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xffd700,
      metalness: 0.8,
      roughness: 0.2
    });
    const knob = new THREE.Mesh(knobGeometry, knobMaterial);
    knob.position.set(0.4, 1.15, 3.25);
    scene.add(knob);

    // Foundation
    const foundationGeometry = new THREE.BoxGeometry(8.5, 0.6, 6.5);
    const foundationMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x555555,
      roughness: 0.9
    });
    const foundation = new THREE.Mesh(foundationGeometry, foundationMaterial);
    foundation.position.set(0, 0.3, 0);
    foundation.castShadow = true;
    foundation.receiveShadow = true;
    foundation.userData = { type: 'foundation', name: houseParts.foundation.name };
    scene.add(foundation);
    housePartsRef.current.foundation = foundation;

    // Garage
    const garageGeometry = new THREE.BoxGeometry(5, 3.5, 5);
    const garageMaterial = new THREE.MeshStandardMaterial({ 
      map: brickTexture,
      roughness: 0.8
    });
    const garage = new THREE.Mesh(garageGeometry, garageMaterial);
    garage.position.set(-6.5, 1.75, 0);
    garage.castShadow = true;
    garage.receiveShadow = true;
    garage.userData = { type: 'garage', name: houseParts.garage.name };
    scene.add(garage);
    housePartsRef.current.garage = garage;

    // Garage door
    const garageDoorGeometry = new THREE.BoxGeometry(3.5, 2.5, 0.2);
    const garageDoorMaterial = new THREE.MeshStandardMaterial({ color: 0xcccccc });
    const garageDoor = new THREE.Mesh(garageDoorGeometry, garageDoorMaterial);
    garageDoor.position.set(-6.5, 1.25, 2.6);
    garageDoor.castShadow = true;
    scene.add(garageDoor);

    // Garage roof
    const garageRoofGeometry = new THREE.BoxGeometry(5.5, 0.4, 5.5);
    const garageRoofMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x3d2817,
      roughness: 0.9
    });
    const garageRoof = new THREE.Mesh(garageRoofGeometry, garageRoofMaterial);
    garageRoof.position.set(-6.5, 3.65, 0);
    garageRoof.castShadow = true;
    scene.add(garageRoof);

    // Yard (grass area)
    const yardGeometry = new THREE.CircleGeometry(12, 64);
    const yardMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x3a7d2e,
      roughness: 0.95
    });
    const yard = new THREE.Mesh(yardGeometry, yardMaterial);
    yard.rotation.x = -Math.PI / 2;
    yard.position.set(0, 0.02, 8);
    yard.receiveShadow = true;
    yard.userData = { type: 'yard', name: houseParts.yard.name };
    scene.add(yard);
    housePartsRef.current.yard = yard;

    // Pool
    const poolGeometry = new THREE.BoxGeometry(4, 0.4, 6);
    const poolMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x1e90ff,
      transparent: true,
      opacity: 0.7,
      metalness: 0.3,
      roughness: 0.1
    });
    const pool = new THREE.Mesh(poolGeometry, poolMaterial);
    pool.position.set(7, 0.2, 5);
    pool.receiveShadow = true;
    pool.userData = { type: 'pool', name: houseParts.pool.name };
    scene.add(pool);
    housePartsRef.current.pool = pool;

    // Pool deck
    const poolDeckGeometry = new THREE.BoxGeometry(6, 0.15, 8);
    const poolDeckMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xd2b48c,
      roughness: 0.8
    });
    const poolDeck = new THREE.Mesh(poolDeckGeometry, poolDeckMaterial);
    poolDeck.position.set(7, 0.075, 5);
    poolDeck.receiveShadow = true;
    scene.add(poolDeck);

    // Driveway
    const drivewayGeometry = new THREE.BoxGeometry(4, 0.15, 8);
    const drivewayMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x696969,
      roughness: 0.85
    });
    const driveway = new THREE.Mesh(drivewayGeometry, drivewayMaterial);
    driveway.position.set(-6.5, 0.075, 6);
    driveway.receiveShadow = true;
    driveway.userData = { type: 'driveway', name: houseParts.driveway.name };
    scene.add(driveway);
    housePartsRef.current.driveway = driveway;

    // Deck/Patio
    const deckGeometry = new THREE.BoxGeometry(6, 0.3, 4);
    const deckMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x8b4513,
      roughness: 0.8
    });
    const deck = new THREE.Mesh(deckGeometry, deckMaterial);
    deck.position.set(4, 0.15, -5);
    deck.castShadow = true;
    deck.receiveShadow = true;
    deck.userData = { type: 'deck', name: houseParts.deck.name };
    scene.add(deck);
    housePartsRef.current.deck = deck;

    // Deck railing
    for (let i = -2.5; i <= 2.5; i += 1) {
      const postGeometry = new THREE.CylinderGeometry(0.08, 0.08, 1, 8);
      const postMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
      const post = new THREE.Mesh(postGeometry, postMaterial);
      post.position.set(i * 1.1 + 4, 0.65, -3.2);
      post.castShadow = true;
      scene.add(post);
    }

    // Fence
    for (let i = -10; i <= 10; i += 2) {
      const fencePostGeometry = new THREE.BoxGeometry(0.2, 1.5, 0.2);
      const fencePostMaterial = new THREE.MeshStandardMaterial({ color: 0x8b7355 });
      const fencePost = new THREE.Mesh(fencePostGeometry, fencePostMaterial);
      fencePost.position.set(i, 0.75, -8);
      fencePost.castShadow = true;
      scene.add(fencePost);

      if (i < 10) {
        const fencePanelGeometry = new THREE.BoxGeometry(1.8, 1.2, 0.1);
        const fencePanelMaterial = new THREE.MeshStandardMaterial({ color: 0xa0826d });
        const fencePanel = new THREE.Mesh(fencePanelGeometry, fencePanelMaterial);
        fencePanel.position.set(i + 1, 0.75, -8);
        fencePanel.castShadow = true;
        if (i === -10) {
          fencePanel.userData = { type: 'fence', name: houseParts.fence.name };
          housePartsRef.current.fence = fencePanel;
        }
        scene.add(fencePanel);
      }
    }

    // Add some landscaping details
    const addTree = (x, z) => {
      const trunkGeometry = new THREE.CylinderGeometry(0.3, 0.4, 2, 8);
      const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x4a3728 });
      const trunk = new THREE.Mesh(trunkGeometry, trunkMaterial);
      trunk.position.set(x, 1, z);
      trunk.castShadow = true;
      scene.add(trunk);

      const foliageGeometry = new THREE.SphereGeometry(1.5, 16, 16);
      const foliageMaterial = new THREE.MeshStandardMaterial({ color: 0x2d5016 });
      const foliage = new THREE.Mesh(foliageGeometry, foliageMaterial);
      foliage.position.set(x, 3, z);
      foliage.castShadow = true;
      scene.add(foliage);
    };

    addTree(-10, 10);
    addTree(10, 10);
    addTree(-12, -3);

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  const handleMouseMove = (event) => {
    if (!mountRef.current || !cameraRef.current) return;

    const rect = mountRef.current.getBoundingClientRect();
    mouseRef.current = {
      x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((event.clientY - rect.top) / rect.height) * 2 + 1
    };

    if (isDraggingRef.current) {
      const deltaX = event.clientX - previousMouseRef.current.x;
      cameraAngleRef.current += deltaX * 0.01;

      const radius = 20;
      const height = 8;
      cameraRef.current.position.x = Math.sin(cameraAngleRef.current) * radius;
      cameraRef.current.position.z = Math.cos(cameraAngleRef.current) * radius;
      cameraRef.current.position.y = height;
      cameraRef.current.lookAt(0, 2, 0);

      previousMouseRef.current = { x: event.clientX, y: event.clientY };
      return;
    }

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouseRef.current, cameraRef.current);

    const allObjects = [];
    Object.values(housePartsRef.current).forEach(part => {
      if (Array.isArray(part)) {
        allObjects.push(...part);
      } else {
        allObjects.push(part);
      }
    });

    const intersects = raycaster.intersectObjects(allObjects);

    if (intersects.length > 0) {
      const intersected = intersects[0].object;
      setHoveredPart(intersected.userData.type);
      mountRef.current.style.cursor = 'pointer';
    } else {
      setHoveredPart(null);
      mountRef.current.style.cursor = isDraggingRef.current ? 'grabbing' : 'grab';
    }
  };

  const handleMouseDown = (event) => {
    isDraggingRef.current = true;
    previousMouseRef.current = { x: event.clientX, y: event.clientY };
    if (mountRef.current) {
      mountRef.current.style.cursor = 'grabbing';
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    if (mountRef.current) {
      mountRef.current.style.cursor = hoveredPart ? 'pointer' : 'grab';
    }
  };

  const handleClick = (event) => {
    if (!mountRef.current || !cameraRef.current) return;

    const rect = mountRef.current.getBoundingClientRect();
    const mouse = {
      x: ((event.clientX - rect.left) / rect.width) * 2 - 1,
      y: -((event.clientY - rect.top) / rect.height) * 2 + 1
    };

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, cameraRef.current);

    const allObjects = [];
    Object.values(housePartsRef.current).forEach(part => {
      if (Array.isArray(part)) {
        allObjects.push(...part);
      } else {
        allObjects.push(part);
      }
    });

    const intersects = raycaster.intersectObjects(allObjects);

    if (intersects.length > 0) {
      const clickedPart = intersects[0].object.userData.type;
      setSelectedPart(clickedPart);
      setFormStep(0);
      setFormData({ housePart: clickedPart, partName: houseParts[clickedPart].name });
    }
  };

  const handleAnswerSelect = (answer) => {
    const currentQuestion = repairQuestions[selectedPart][formStep];
    const updatedFormData = {
      ...formData,
      [currentQuestion.question]: answer
    };
    setFormData(updatedFormData);

    if (formStep < repairQuestions[selectedPart].length - 1) {
      setFormStep(formStep + 1);
    } else {
      setShowContactForm(true);
    }
  };

  const handleBack = () => {
    if (formStep > 0) {
      setFormStep(formStep - 1);
    } else {
      setSelectedPart(null);
      setFormStep(0);
      setFormData({});
    }
  };

  const handleClose = () => {
    setSelectedPart(null);
    setFormStep(0);
    setFormData({});
    setShowContactForm(false);
    setContactInfo({ name: '', email: '', phone: '', address: '' });
    setSubmitStatus(null);
  };

  const handleContactChange = (field, value) => {
    setContactInfo(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!contactInfo.name || !contactInfo.email) {
      alert('Please fill in your name and email address.');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Prepare email content
    const repairDetailsText = Object.entries(formData)
      .filter(([key]) => key !== 'housePart' && key !== 'partName')
      .map(([question, answer]) => `${question}: ${answer}`)
      .join('\n');

    const emailBody = `
NEW HOME REPAIR REQUEST
========================

Contact Information:
--------------------
Name: ${contactInfo.name}
Email: ${contactInfo.email}
Phone: ${contactInfo.phone || 'Not provided'}
Address: ${contactInfo.address || 'Not provided'}

Repair Details:
--------------
Area: ${formData.partName}

${repairDetailsText}

Submitted: ${new Date().toLocaleString()}
    `.trim();

    try {
      // Using FormSubmit - completely free, no registration needed
      const formData = new FormData();
      formData.append('_subject', `New Repair Request: ${formData.partName} - ${contactInfo.name}`);
      formData.append('_cc', contactInfo.email);
      formData.append('_template', 'box');
      formData.append('_captcha', 'false');
      formData.append('Name', contactInfo.name);
      formData.append('Email', contactInfo.email);
      formData.append('Phone', contactInfo.phone || 'Not provided');
      formData.append('Address', contactInfo.address || 'Not provided');
      formData.append('Repair Area', formData.partName);
      formData.append('Details', repairDetailsText);
      formData.append('Timestamp', new Date().toLocaleString());

      const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (result.success === 'true' || response.ok) {
        console.log('✅ Email sent successfully!');
        setSubmitStatus('success');
        setTimeout(() => {
          handleClose();
        }, 3000);
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('Error details:', error);
      setSubmitStatus('error');
      
      // Log the data for manual follow-up
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log('📧 REPAIR REQUEST DATA');
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      console.log(emailBody);
      console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
      
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      position: 'relative'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 50%, #0f0f23 100%)',
        padding: '2rem',
        borderRadius: '12px 12px 0 0',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(0, 242, 254, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>
        <h1 style={{ 
          margin: '0 0 0.5rem 0', 
          fontSize: '2rem', 
          fontWeight: '700',
          position: 'relative',
          background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #9333ea 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Home Repair Request
        </h1>
        <p style={{ margin: 0, opacity: 0.9, fontSize: '1rem', position: 'relative' }}>
          Click on any part of the house to request a repair. Drag to rotate the view 360°.
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '0 0 12px 12px',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
      }}>
        <div
          ref={mountRef}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onClick={handleClick}
          style={{
            width: '100%',
            height: '600px',
            cursor: 'grab',
            position: 'relative',
            background: 'linear-gradient(to bottom, #87ceeb 0%, #e0f6ff 100%)'
          }}
        />

        {hoveredPart && !selectedPart && (
          <div style={{
            position: 'absolute',
            top: '140px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'rgba(15, 15, 35, 0.95)',
            backdropFilter: 'blur(10px)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '12px',
            pointerEvents: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            zIndex: 10,
            border: '1px solid rgba(0, 242, 254, 0.3)',
            boxShadow: '0 8px 32px rgba(0, 242, 254, 0.2)'
          }}>
            Click to repair: {houseParts[hoveredPart]?.name}
          </div>
        )}

        {selectedPart && !showContactForm && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.4), 0 0 1px rgba(0, 242, 254, 0.5)',
            width: '90%',
            maxWidth: '500px',
            maxHeight: '80%',
            overflow: 'auto',
            zIndex: 100,
            border: '1px solid rgba(0, 242, 254, 0.2)'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)',
              padding: '1.5rem',
              color: 'white',
              borderRadius: '20px 20px 0 0',
              position: 'sticky',
              top: 0,
              zIndex: 1,
              borderBottom: '1px solid rgba(0, 242, 254, 0.3)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ 
                  margin: 0, 
                  fontSize: '1.5rem',
                  background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {houseParts[selectedPart].name} Repair
                </h2>
                <button
                  onClick={handleClose}
                  style={{
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid rgba(0, 242, 254, 0.3)',
                    color: '#00f2fe',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s',
                    fontWeight: '300'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0, 242, 254, 0.2)';
                    e.target.style.transform = 'rotate(90deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(0, 242, 254, 0.1)';
                    e.target.style.transform = 'rotate(0deg)';
                  }}
                >
                  ×
                </button>
              </div>
              <div style={{ 
                marginTop: '1rem', 
                background: 'rgba(0, 242, 254, 0.1)', 
                borderRadius: '12px', 
                padding: '0.75rem 1rem',
                fontSize: '0.875rem',
                border: '1px solid rgba(0, 242, 254, 0.2)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <span>Progress</span>
                <span style={{ 
                  color: '#00f2fe',
                  fontWeight: '600',
                  fontSize: '1rem'
                }}>
                  {formStep + 1} / {repairQuestions[selectedPart].length}
                </span>
              </div>
            </div>

            <div style={{ padding: '2rem' }}>
              <h3 style={{ 
                marginTop: 0, 
                marginBottom: '1.5rem', 
                fontSize: '1.25rem',
                color: '#0f0f23',
                fontWeight: '600'
              }}>
                {repairQuestions[selectedPart][formStep].question}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {repairQuestions[selectedPart][formStep].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    style={{
                      background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 255, 0.9) 100%)',
                      border: '2px solid rgba(0, 242, 254, 0.2)',
                      borderRadius: '12px',
                      padding: '1.25rem',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      color: '#0f0f23',
                      fontWeight: '500',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = '#00f2fe';
                      e.target.style.background = 'linear-gradient(135deg, rgba(0, 242, 254, 0.1) 0%, rgba(75, 172, 254, 0.1) 100%)';
                      e.target.style.transform = 'translateX(8px)';
                      e.target.style.boxShadow = '0 8px 24px rgba(0, 242, 254, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = 'rgba(0, 242, 254, 0.2)';
                      e.target.style.background = 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 240, 255, 0.9) 100%)';
                      e.target.style.transform = 'translateX(0)';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <span style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #00f2fe, #4facfe)',
                      opacity: 0,
                      transition: 'opacity 0.3s'
                    }}></span>
                    <span style={{ paddingLeft: '1rem' }}>{option}</span>
                  </button>
                ))}
              </div>

              <button
                onClick={handleBack}
                style={{
                  marginTop: '1.5rem',
                  background: 'rgba(15, 15, 35, 0.05)',
                  border: '2px solid rgba(15, 15, 35, 0.1)',
                  borderRadius: '12px',
                  padding: '0.875rem 1.5rem',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  width: '100%',
                  color: '#0f0f23',
                  transition: 'all 0.3s',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'rgba(15, 15, 35, 0.08)';
                  e.target.style.borderColor = 'rgba(15, 15, 35, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(15, 15, 35, 0.05)';
                  e.target.style.borderColor = 'rgba(15, 15, 35, 0.1)';
                }}
              >
                ← Back
              </button>
            </div>
          </div>
        )}

        {showContactForm && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(255, 255, 255, 0.98)',
            backdropFilter: 'blur(20px)',
            borderRadius: '20px',
            boxShadow: '0 25px 70px rgba(0, 0, 0, 0.4), 0 0 1px rgba(0, 242, 254, 0.5)',
            width: '90%',
            maxWidth: '500px',
            maxHeight: '80%',
            overflow: 'auto',
            zIndex: 100,
            border: '1px solid rgba(0, 242, 254, 0.2)'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a3e 100%)',
              padding: '1.5rem',
              color: 'white',
              borderRadius: '20px 20px 0 0',
              borderBottom: '1px solid rgba(0, 242, 254, 0.3)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2 style={{ 
                  margin: 0, 
                  fontSize: '1.5rem',
                  background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Contact Information
                </h2>
                <button
                  onClick={handleClose}
                  style={{
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid rgba(0, 242, 254, 0.3)',
                    color: '#00f2fe',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s',
                    fontWeight: '300'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'rgba(0, 242, 254, 0.2)';
                    e.target.style.transform = 'rotate(90deg)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'rgba(0, 242, 254, 0.1)';
                    e.target.style.transform = 'rotate(0deg)';
                  }}
                >
                  ×
                </button>
              </div>
            </div>

            <div style={{ padding: '2rem' }}>
              {submitStatus === 'success' && (
                <div style={{
                  background: 'linear-gradient(135deg, rgba(0, 242, 254, 0.1) 0%, rgba(75, 172, 254, 0.1) 100%)',
                  border: '1px solid rgba(0, 242, 254, 0.3)',
                  borderRadius: '12px',
                  padding: '1rem',
                  marginBottom: '1rem',
                  color: '#0f0f23',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>✓</span>
                  <span>Request submitted successfully! We'll contact you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div style={{
                  background: 'linear-gradient(135deg, rgba(255, 77, 77, 0.1) 0%, rgba(255, 107, 107, 0.1) 100%)',
                  border: '1px solid rgba(255, 77, 77, 0.3)',
                  borderRadius: '12px',
                  padding: '1rem',
                  marginBottom: '1rem',
                  color: '#721c24',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
                }}>
                  <span style={{ fontSize: '1.5rem' }}>✗</span>
                  <span>Error sending request. Please try again or contact us directly.</span>
                </div>
              )}

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '600', 
                  color: '#0f0f23',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  value={contactInfo.name}
                  onChange={(e) => handleContactChange('name', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '2px solid rgba(0, 242, 254, 0.2)',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s',
                    background: 'rgba(255, 255, 255, 0.8)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00f2fe';
                    e.target.style.background = 'white';
                    e.target.style.boxShadow = '0 0 0 4px rgba(0, 242, 254, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 242, 254, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Your full name"
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '600', 
                  color: '#0f0f23',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => handleContactChange('email', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '2px solid rgba(0, 242, 254, 0.2)',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s',
                    background: 'rgba(255, 255, 255, 0.8)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00f2fe';
                    e.target.style.background = 'white';
                    e.target.style.boxShadow = '0 0 0 4px rgba(0, 242, 254, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 242, 254, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="your.email@example.com"
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '600', 
                  color: '#0f0f23',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Phone
                </label>
                <input
                  type="tel"
                  value={contactInfo.phone}
                  onChange={(e) => handleContactChange('phone', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '2px solid rgba(0, 242, 254, 0.2)',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    transition: 'all 0.3s',
                    background: 'rgba(255, 255, 255, 0.8)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00f2fe';
                    e.target.style.background = 'white';
                    e.target.style.boxShadow = '0 0 0 4px rgba(0, 242, 254, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 242, 254, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '0.5rem', 
                  fontWeight: '600', 
                  color: '#0f0f23',
                  fontSize: '0.875rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}>
                  Property Address
                </label>
                <textarea
                  value={contactInfo.address}
                  onChange={(e) => handleContactChange('address', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    border: '2px solid rgba(0, 242, 254, 0.2)',
                    borderRadius: '12px',
                    fontSize: '1rem',
                    boxSizing: 'border-box',
                    minHeight: '80px',
                    fontFamily: 'inherit',
                    resize: 'vertical',
                    transition: 'all 0.3s',
                    background: 'rgba(255, 255, 255, 0.8)'
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = '#00f2fe';
                    e.target.style.background = 'white';
                    e.target.style.boxShadow = '0 0 0 4px rgba(0, 242, 254, 0.1)';
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = 'rgba(0, 242, 254, 0.2)';
                    e.target.style.background = 'rgba(255, 255, 255, 0.8)';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="123 Main St, City, State ZIP"
                />
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: isSubmitting 
                    ? 'linear-gradient(135deg, #ccc 0%, #999 100%)' 
                    : 'linear-gradient(135deg, #00f2fe 0%, #4facfe 50%, #9333ea 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  padding: '1.125rem',
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: 'white',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  marginBottom: '0.75rem',
                  boxShadow: isSubmitting ? 'none' : '0 8px 24px rgba(0, 242, 254, 0.3)',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 12px 32px rgba(0, 242, 254, 0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = isSubmitting ? 'none' : '0 8px 24px rgba(0, 242, 254, 0.3)';
                }}
              >
                {isSubmitting ? 'Sending...' : 'Submit Repair Request'}
              </button>

              <button
                onClick={() => setShowContactForm(false)}
                disabled={isSubmitting}
                style={{
                  width: '100%',
                  background: 'rgba(15, 15, 35, 0.05)',
                  border: '2px solid rgba(15, 15, 35, 0.1)',
                  borderRadius: '12px',
                  padding: '0.875rem',
                  fontSize: '1rem',
                  color: '#0f0f23',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  transition: 'all 0.3s',
                  fontWeight: '500'
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.background = 'rgba(15, 15, 35, 0.08)';
                    e.target.style.borderColor = 'rgba(15, 15, 35, 0.2)';
                  }
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'rgba(15, 15, 35, 0.05)';
                  e.target.style.borderColor = 'rgba(15, 15, 35, 0.1)';
                }}
              >
                ← Back to Questions
              </button>
            </div>
          </div>
        )}
      </div>

      <div style={{
        marginTop: '1.5rem',
        padding: '1.5rem',
        background: '#f8f9fa',
        borderRadius: '8px',
        fontSize: '0.875rem',
        color: '#666'
      }}>
        <strong>Instructions:</strong> Click on any part of the 3D house model to start a repair request. 
        You can drag to rotate the view 360° to access all areas including the yard, pool, driveway, deck, and fence. 
        Answer the questions to specify your repair needs, then provide your contact information to submit the request.
      </div>
    </div>
  );
};

export default HomeRepairSelector