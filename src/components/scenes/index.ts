import type { MedicalSceneType } from '../../assets/characters'
import type { AnimatedSceneProps } from './types'
import InfantBodyScene from './InfantBodyScene'
import DeficitCausesScene from './DeficitCausesScene'
import ComplicationsScene from './ComplicationsScene'
import InnateImmunityScene from './InnateImmunityScene'
import AdaptiveImmunityScene from './AdaptiveImmunityScene'
import SchoolRisksScene from './SchoolRisksScene'
import NeuralNetworkScene from './NeuralNetworkScene'
import CircadianScene from './CircadianScene'
import ProblemChartScene from './ProblemChartScene'
import RisksScaleScene from './RisksScaleScene'

type SceneComponent = (props: AnimatedSceneProps) => JSX.Element

function ImmuneShieldScene(props: AnimatedSceneProps) {
  return InnateImmunityScene({ ...props, variant: 'shield' })
}

function ImmuneLayersScene(props: AnimatedSceneProps) {
  return InnateImmunityScene({ ...props, variant: 'layers' })
}

export const SCENE_COMPONENTS: Partial<Record<MedicalSceneType, SceneComponent>> = {
  'infant-body': InfantBodyScene,
  'deficit-orbit': DeficitCausesScene,
  'complications-body': ComplicationsScene,
  'immune-shield': ImmuneShieldScene,
  'immune-layers': ImmuneLayersScene,
  'adaptive-cells': AdaptiveImmunityScene,
  'neural-head': NeuralNetworkScene,
  'sleep-rhythm': CircadianScene,
  'school-risks': SchoolRisksScene,
  'problem-chart': ProblemChartScene,
  'risks-scale': RisksScaleScene,
}

export {
  InfantBodyScene,
  DeficitCausesScene,
  ComplicationsScene,
  InnateImmunityScene,
  AdaptiveImmunityScene,
  SchoolRisksScene,
  NeuralNetworkScene,
  CircadianScene,
  ProblemChartScene,
  RisksScaleScene,
}

export type { AnimatedSceneProps }
