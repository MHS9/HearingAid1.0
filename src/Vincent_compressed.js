/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/vincent_compressed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={nodes.master} />
      <primitive object={nodes.look_mstr} />
      <primitive object={nodes.hat_free} />
      <primitive object={nodes.eyeglasses_free} />
      <primitive object={nodes.accessory_mstr} />
      <skinnedMesh
        geometry={nodes['GEO-vincent_hair'].geometry}
        material={nodes['GEO-vincent_hair'].material}
        skeleton={nodes['GEO-vincent_hair'].skeleton}
      />
      <skinnedMesh
        geometry={nodes['GEO-vincent_body_1'].geometry}
        material={materials.vincent_shirt}
        skeleton={nodes['GEO-vincent_body_1'].skeleton}
      />
      <skinnedMesh
        geometry={nodes['GEO-vincent_body_2'].geometry}
        material={materials.vincent_pants}
        skeleton={nodes['GEO-vincent_body_2'].skeleton}
      />
      <skinnedMesh
        geometry={nodes['GEO-vincent_body_3'].geometry}
        material={nodes['GEO-vincent_body_3'].material}
        skeleton={nodes['GEO-vincent_body_3'].skeleton}
      />
      <skinnedMesh
        geometry={nodes['GEO-vincent_body_4'].geometry}
        material={materials.vincent_belt_buckle}
        skeleton={nodes['GEO-vincent_body_4'].skeleton}
      />
      <skinnedMesh
        geometry={nodes['GEO-vincent_body_5'].geometry}
        material={nodes['GEO-vincent_body_5'].material}
        skeleton={nodes['GEO-vincent_body_5'].skeleton}
      />
      <skinnedMesh
        geometry={nodes['GEO-vincent_body_6'].geometry}
        material={materials.vincent_socks}
        skeleton={nodes['GEO-vincent_body_6'].skeleton}
      />
      <skinnedMesh
        geometry={nodes['GEO-vincent_body_7'].geometry}
        material={materials.vincent_shoes}
        skeleton={nodes['GEO-vincent_body_7'].skeleton}
      />
      <skinnedMesh
        geometry={nodes['GEO-vincent_body_8'].geometry}
        material={materials.vincent_shoes_bright}
        skeleton={nodes['GEO-vincent_body_8'].skeleton}
      />
      <group rotation={[1.57, 0, 0]}>
        <mesh
          geometry={nodes['GEO-vincent_button_01_1'].geometry}
          material={nodes['GEO-vincent_button_01_1'].material}
        />
        <mesh
          geometry={nodes['GEO-vincent_button_01_2'].geometry}
          material={nodes['GEO-vincent_button_01_2'].material}
        />
      </group>
      <group position={[-0.03, -0.01, 0]} rotation={[1.57, 0.07, -0.02]}>
        <mesh
          geometry={nodes['GEO-vincent_button_04_1'].geometry}
          material={nodes['GEO-vincent_button_04_1'].material}
        />
        <mesh
          geometry={nodes['GEO-vincent_button_04_2'].geometry}
          material={nodes['GEO-vincent_button_04_2'].material}
        />
      </group>
      <group rotation={[1.57, 0, 0]}>
        <mesh
          name="GEO-vincent_button_02_1"
          geometry={nodes['GEO-vincent_button_02_1'].geometry}
          material={nodes['GEO-vincent_button_02_1'].material}
          morphTargetDictionary={nodes['GEO-vincent_button_02_1'].morphTargetDictionary}
          morphTargetInfluences={nodes['GEO-vincent_button_02_1'].morphTargetInfluences}
        />
        <mesh
          name="GEO-vincent_button_02_2"
          geometry={nodes['GEO-vincent_button_02_2'].geometry}
          material={nodes['GEO-vincent_button_02_2'].material}
          morphTargetDictionary={nodes['GEO-vincent_button_02_2'].morphTargetDictionary}
          morphTargetInfluences={nodes['GEO-vincent_button_02_2'].morphTargetInfluences}
        />
      </group>
      <group position={[-0.01, 0.01, 0]} rotation={[1.59, 0.02, -0.01]}>
        <mesh
          name="GEO-vincent_button_03_1"
          geometry={nodes['GEO-vincent_button_03_1'].geometry}
          material={nodes['GEO-vincent_button_03_1'].material}
          morphTargetDictionary={nodes['GEO-vincent_button_03_1'].morphTargetDictionary}
          morphTargetInfluences={nodes['GEO-vincent_button_03_1'].morphTargetInfluences}
        />
        <mesh
          name="GEO-vincent_button_03_2"
          geometry={nodes['GEO-vincent_button_03_2'].geometry}
          material={nodes['GEO-vincent_button_03_2'].material}
          morphTargetDictionary={nodes['GEO-vincent_button_03_2'].morphTargetDictionary}
          morphTargetInfluences={nodes['GEO-vincent_button_03_2'].morphTargetInfluences}
        />
      </group>
      <skinnedMesh
        geometry={nodes['GEO-vincent_eyeglasses_1'].geometry}
        material={materials.vincent_glasses}
        skeleton={nodes['GEO-vincent_eyeglasses_1'].skeleton}
      />
      <skinnedMesh
        geometry={nodes['GEO-vincent_eyeglasses_2'].geometry}
        material={materials.vincent_glasses_glass}
        skeleton={nodes['GEO-vincent_eyeglasses_2'].skeleton}
      />
      <skinnedMesh
        name="GEO-vincent_teeth"
        geometry={nodes['GEO-vincent_teeth'].geometry}
        material={nodes['GEO-vincent_teeth'].material}
        skeleton={nodes['GEO-vincent_teeth'].skeleton}
        morphTargetDictionary={nodes['GEO-vincent_teeth'].morphTargetDictionary}
        morphTargetInfluences={nodes['GEO-vincent_teeth'].morphTargetInfluences}
      />
      <skinnedMesh
        name="GEO-vincent_teeth_1"
        geometry={nodes['GEO-vincent_teeth_1'].geometry}
        material={nodes['GEO-vincent_teeth_1'].material}
        skeleton={nodes['GEO-vincent_teeth_1'].skeleton}
        morphTargetDictionary={nodes['GEO-vincent_teeth_1'].morphTargetDictionary}
        morphTargetInfluences={nodes['GEO-vincent_teeth_1'].morphTargetInfluences}
      />
      <skinnedMesh
        name="GEO-vincent_teeth_2"
        geometry={nodes['GEO-vincent_teeth_2'].geometry}
        material={materials.vincent_teeth}
        skeleton={nodes['GEO-vincent_teeth_2'].skeleton}
        morphTargetDictionary={nodes['GEO-vincent_teeth_2'].morphTargetDictionary}
        morphTargetInfluences={nodes['GEO-vincent_teeth_2'].morphTargetInfluences}
      />
      <skinnedMesh
        name="GEO-vincent_eyeball_R"
        geometry={nodes['GEO-vincent_eyeball_R'].geometry}
        material={materials.vincent_eyeball}
        skeleton={nodes['GEO-vincent_eyeball_R'].skeleton}
        morphTargetDictionary={nodes['GEO-vincent_eyeball_R'].morphTargetDictionary}
        morphTargetInfluences={nodes['GEO-vincent_eyeball_R'].morphTargetInfluences}>
        <skinnedMesh
          name="GEO-vincent_eyeball_cornea_R_1"
          geometry={nodes['GEO-vincent_eyeball_cornea_R_1'].geometry}
          material={nodes['GEO-vincent_eyeball_cornea_R_1'].material}
          skeleton={nodes['GEO-vincent_eyeball_cornea_R_1'].skeleton}
          morphTargetDictionary={nodes['GEO-vincent_eyeball_cornea_R_1'].morphTargetDictionary}
          morphTargetInfluences={nodes['GEO-vincent_eyeball_cornea_R_1'].morphTargetInfluences}
        />
        <skinnedMesh
          name="GEO-vincent_eyeball_cornea_R_2"
          geometry={nodes['GEO-vincent_eyeball_cornea_R_2'].geometry}
          material={nodes['GEO-vincent_eyeball_cornea_R_2'].material}
          skeleton={nodes['GEO-vincent_eyeball_cornea_R_2'].skeleton}
          morphTargetDictionary={nodes['GEO-vincent_eyeball_cornea_R_2'].morphTargetDictionary}
          morphTargetInfluences={nodes['GEO-vincent_eyeball_cornea_R_2'].morphTargetInfluences}
        />
        <skinnedMesh
          name="GEO-vincent_eyeball_cornea_R_3"
          geometry={nodes['GEO-vincent_eyeball_cornea_R_3'].geometry}
          material={nodes['GEO-vincent_eyeball_cornea_R_3'].material}
          skeleton={nodes['GEO-vincent_eyeball_cornea_R_3'].skeleton}
          morphTargetDictionary={nodes['GEO-vincent_eyeball_cornea_R_3'].morphTargetDictionary}
          morphTargetInfluences={nodes['GEO-vincent_eyeball_cornea_R_3'].morphTargetInfluences}
        />
      </skinnedMesh>
      <skinnedMesh
        name="GEO-vincent_eyeball_cornea_L_1"
        geometry={nodes['GEO-vincent_eyeball_cornea_L_1'].geometry}
        material={nodes['GEO-vincent_eyeball_cornea_L_1'].material}
        skeleton={nodes['GEO-vincent_eyeball_cornea_L_1'].skeleton}
        morphTargetDictionary={nodes['GEO-vincent_eyeball_cornea_L_1'].morphTargetDictionary}
        morphTargetInfluences={nodes['GEO-vincent_eyeball_cornea_L_1'].morphTargetInfluences}
      />
      <skinnedMesh
        name="GEO-vincent_eyeball_cornea_L_2"
        geometry={nodes['GEO-vincent_eyeball_cornea_L_2'].geometry}
        material={nodes['GEO-vincent_eyeball_cornea_L_2'].material}
        skeleton={nodes['GEO-vincent_eyeball_cornea_L_2'].skeleton}
        morphTargetDictionary={nodes['GEO-vincent_eyeball_cornea_L_2'].morphTargetDictionary}
        morphTargetInfluences={nodes['GEO-vincent_eyeball_cornea_L_2'].morphTargetInfluences}
      />
      <skinnedMesh
        name="GEO-vincent_eyeball_cornea_L_3"
        geometry={nodes['GEO-vincent_eyeball_cornea_L_3'].geometry}
        material={nodes['GEO-vincent_eyeball_cornea_L_3'].material}
        skeleton={nodes['GEO-vincent_eyeball_cornea_L_3'].skeleton}
        morphTargetDictionary={nodes['GEO-vincent_eyeball_cornea_L_3'].morphTargetDictionary}
        morphTargetInfluences={nodes['GEO-vincent_eyeball_cornea_L_3'].morphTargetInfluences}
      />
    </group>
  )
}

useGLTF.preload('/vincent_compressed.glb')
