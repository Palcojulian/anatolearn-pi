import { type JSX } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";

const Pulmon = (props: JSX.IntrinsicElements["group"]) => {
  const { materials, nodes } = useGLTF("/models-3d/pulmon.glb") as any;

  return (
    <group {...props} dispose={null}>
      <group position={[0, -1, 0]} scale={[70, 10, 10]}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group
              name="7931b91a2b8b45fca4da16a2791ddda5fbx"
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.01}
            >
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Pulmonary">
                    <group name="Left_lung" />
                  </group>

                  {/* Heart_lung_group */}
                  <group name="Heart_lung_group" position={[0, -2.884, 1.378]}>
                    {/* Epiglotis */}
                    <mesh
                      geometry={
                        (nodes.Epiglosttis_Epiglosttis_mat_0 as Mesh).geometry
                      }
                      material={materials.Epiglosttis_mat}
                      castShadow
                      receiveShadow
                    />

                    {/* Larynx */}
                    <mesh
                      geometry={(nodes.Larynx_Larynx_mat_0 as Mesh).geometry}
                      material={materials.Larynx_mat}
                      castShadow
                      receiveShadow
                    />

                    {/* Vocal chords */}
                    <mesh
                      geometry={
                        (nodes.Vocal_chords_Vocal_chords_mat_0 as Mesh).geometry
                      }
                      material={materials.Vocal_chords_mat}
                      castShadow
                      receiveShadow
                    />

                    {/* Pulmonary arteries */}
                    <mesh
                      geometry={
                        (
                          nodes.Pulmonary_arteries_Pulmonary_arteries_mat_0 as Mesh
                        ).geometry
                      }
                      material={materials.Pulmonary_arteries_mat}
                      castShadow
                      receiveShadow
                    />

                    {/* Right lung */}
                    <mesh
                      geometry={(nodes["0"] as Mesh).geometry}
                      material={materials.Right_lung_mat}
                      castShadow
                      receiveShadow
                      morphTargetDictionary={
                        (nodes["0"] as Mesh).morphTargetDictionary
                      }
                      morphTargetInfluences={
                        (nodes["0"] as Mesh).morphTargetInfluences
                      }
                    />

                    {/* Arytenoid */}
                    <mesh
                      geometry={
                        (nodes.Arytenoid_Arytenoid_mat_0 as Mesh).geometry
                      }
                      material={materials.Arytenoid_mat}
                      castShadow
                      receiveShadow
                    />

                    {/* Corniculate */}
                    <mesh
                      geometry={
                        (nodes.Corniculate_Corniculate_mat_0 as Mesh).geometry
                      }
                      material={materials.Corniculate_mat}
                      castShadow
                      receiveShadow
                    />

                    {/* Trachea */}
                    <mesh
                      geometry={(nodes.Trachea_Trachea_mat_0 as Mesh).geometry}
                      material={materials.Trachea_mat}
                      castShadow
                      receiveShadow
                    />

                    {/* Pulmonary veins */}
                    <mesh
                      geometry={
                        (nodes.Pulmonary_veins_Pulmonary_veins_mat_0 as Mesh)
                          .geometry
                      }
                      material={materials.Pulmonary_veins_mat}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      geometry={
                        (nodes.Pulmonary_veins_Pulmonary_veins_mat_0_1 as Mesh)
                          .geometry
                      }
                      material={materials.Pulmonary_veins_mat}
                      castShadow
                      receiveShadow
                    />

                    {/* Heart Animated */}
                    <group
                      name="Heart_Animated_Master"
                      position={[0.446, 1.92, -1.481]}
                      scale={0.875}
                    >
                      {[1, 2, 3, 4, 5, 6].map((id) => (
                        <mesh
                          key={id}
                          geometry={(nodes[String(id)] as Mesh).geometry}
                          material={(materials as any)[getMaterialKey(id)]}
                          castShadow
                          receiveShadow
                          morphTargetDictionary={
                            (nodes[String(id)] as Mesh).morphTargetDictionary
                          }
                          morphTargetInfluences={
                            (nodes[String(id)] as Mesh).morphTargetInfluences
                          }
                        />
                      ))}
                    </group>

                    {/* Diaphragm */}
                    <mesh
                      geometry={(nodes["7"] as Mesh).geometry}
                      material={materials.Diaphragm_mat}
                      castShadow
                      receiveShadow
                      position={[0, -0.094, 0]}
                      morphTargetDictionary={
                        (nodes["7"] as Mesh).morphTargetDictionary
                      }
                      morphTargetInfluences={
                        (nodes["7"] as Mesh).morphTargetInfluences
                      }
                    />

                    {/* Left lung 2 */}
                    <mesh
                      geometry={(nodes["8"] as Mesh).geometry}
                      material={materials.Left_lung2_mat}
                      castShadow
                      receiveShadow
                      position={[2.889, 3.085, -1.355]}
                      morphTargetDictionary={
                        (nodes["8"] as Mesh).morphTargetDictionary
                      }
                      morphTargetInfluences={
                        (nodes["8"] as Mesh).morphTargetInfluences
                      }
                    />

                    {/* Otros órganos */}
                    <mesh
                      geometry={
                        (
                          nodes.Thyroid_cartilage_Thyroid_cartilage_mat_0 as Mesh
                        ).geometry
                      }
                      material={materials.Thyroid_cartilage_mat}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      geometry={
                        (
                          nodes.Thyrocricoid_ligament_Thyrocricoid_ligament_mat_0 as Mesh
                        ).geometry
                      }
                      material={materials.Thyrocricoid_ligament_mat}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      geometry={(nodes.Cricoid_Cricoid_mat_0 as Mesh).geometry}
                      material={materials.Cricoid_mat}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      geometry={
                        (
                          nodes.Thyrohyoid_membrane_Thyrohyoid_membrane_mat_0 as Mesh
                        ).geometry
                      }
                      material={materials.Thyrohyoid_membrane_mat}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      geometry={
                        (nodes.Hyoid_bone_Hyoid_bone_mat_0 as Mesh).geometry
                      }
                      material={materials.Hyoid_bone_mat}
                      castShadow
                      receiveShadow
                    />
                    <mesh
                      geometry={
                        (
                          nodes.Median_cricothyroid_ligament1_Median_cricothyroid_ligament1_mat_0 as Mesh
                        ).geometry
                      }
                      material={materials.Median_cricothyroid_ligament1_mat}
                      castShadow
                      receiveShadow
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

function getMaterialKey(id: number): string {
  switch (id) {
    case 1:
      return "Ventricle";
    case 2:
      return "left_atrium";
    case 3:
      return "right_atrium";
    case 4:
      return "aorta";
    case 5:
      return "coronary_artery";
    case 6:
      return "coronary_veins";
    default:
      return "";
  }
}

// Precarga del modelo
useGLTF.preload("/models-3d/pulmon.glb");

export default Pulmon;
